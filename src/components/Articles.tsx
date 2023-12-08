import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import data from "../assets/data.json"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"

interface ArticleProps {
    className?: string
}

type Product = {
    id: string
    product: string
    stock: number
    price: number
}

const columns: ColumnDef<Product>[] = [
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
        header: "Stock",
        cell: ({ row }) => {
            const stock = parseFloat(row.getValue("stock"))

            return <p className="items-center">{stock} uds</p>
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
]

const Articles = (props: ArticleProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className={`${props.className}`}>
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
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Articles
