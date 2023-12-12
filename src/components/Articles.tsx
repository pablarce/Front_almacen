import { useState } from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import logo from "../assets/logo.svg"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Input } from "../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import CreateProduct from "./CreateProduct"
import DeleteProductAlert from "./DeleteProductAlert"

type Product = {
    id: string
    product: string
    stock: number
    price: number
    type: string
    description: string
}

interface ArticleProps {
    idProductPulsed: string
    setIdProductPulsed: React.Dispatch<React.SetStateAction<string>>
    data: Product[]
    className?: string
}

const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "product",
        header: "Product",
    },
    {
        accessorKey: "stock",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center gap-2 hover:cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <p className="text-lg">Stock</p>
                    <ArrowUpDown className="h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => {
            const stock = parseFloat(row.getValue("stock"))

            return <p>{stock} uds</p>
        },
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-ES", {
                style: "currency",
                currency: "EUR",
            }).format(amount)

            return <p>{formatted}</p>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="relative bg-white" align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

const Articles = (props: ArticleProps) => {
    const data = props.data
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            rowSelection,
        },
    })

    return (
        <div className={`${props.className}`}>
            <div className="flex items-center gap-8 py-4">
                <Input
                    placeholder="Filter products..."
                    value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("product")?.setFilterValue(event.target.value)}
                    className="max-w-sm rounded-xl border border-gray-400"
                />
                <CreateProduct variant="create" />
                <DeleteProductAlert />
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className={`${
                                    props.idProductPulsed === row.original.id
                                        ? "bg-slate-300 hover:bg-slate-300"
                                        : "hover:bg-slate-200"
                                }`}
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                                onClick={() => {
                                    props.setIdProductPulsed(row.original.id)
                                }}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 ">
                                <div className="flex flex-col justify-center items-center text-center">
                                    <img src={logo} className="w-32" alt="hola" />
                                    <p>No hay nada por aqui.</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Articles
