import { zodResolver } from "@hookform/resolvers/zod"
import { BadgePlus, PenIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import ProductDataFetcher from "./UseQueryContext"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useToast } from "./ui/use-toast"

type ProductToCreate = {
    product_name: string
    stock: number
    price: number
    type: string
    description: string
}

const FormSchema = z.object({
    product_name: z.string(),
    type: z.string(),
    stock: z.string(),
    price: z.string(),
    description: z.string(),
})

interface CreateProductProps {
    className?: string
    variant: string
    dataFont?: string
}

const CreateProduct = (props: CreateProductProps) => {
    const { toast } = useToast()
    const { addProduct } = ProductDataFetcher()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            product_name: "",
            type: "",
            stock: "0",
            price: "0",
            description: "",
        },
    })


    const handleCreateProduct = () => {
        form.handleSubmit((data) => {
            const newProduct: ProductToCreate = {
                product_name: data.product_name,
                type: data.type,
                stock: parseInt(data.stock, 10),
                price: parseFloat(data.price),
                description: data.description,
            }

            addProduct(newProduct)
            toast({
                title: "Has creado el producto " + data.product_name,
                description: "Friday, February 10, 2023 at 5:57 PM",
            });

            form.reset()
        })()
    }

    return (
        <Dialog onOpenChange={() => form.reset()}>
            <DialogTrigger disabled={false} className={`${props.className}`}>
                {props.variant === "edit" ? (
                    <div className="w-10 flex overflow-hidden m-0 items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-50 rounded-xl p-2">
                        <PenIcon />
                    </div>
                ) : props.variant === "create" ? (
                    <div className="hover:cursor-pointer hover:bg-gray-200 p-2 rounded-xl">
                        <BadgePlus />
                    </div>
                ) : null}
            </DialogTrigger>
            <DialogContent className="bg-white p-8 rounded-lg">
                <DialogHeader>
                    <div className="flex justify-center gap-2 items-center">
                        <div className="w-6 border border-black"></div>
                        <DialogTitle className="text-xl">Crear un producto</DialogTitle>
                        <div className="w-60 border border-black"></div>
                    </div>
                    <DialogDescription className="py-2">
                        Crea aqui un producto nuevo para tu almacen.
                    </DialogDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleCreateProduct)} className="">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="product_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Producto</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Nombre del producto" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tipo</FormLabel>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="Seleccionar" />
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-white">
                                                            <SelectItem value="sport">Deportes</SelectItem>
                                                            <SelectItem value="furniture">Muebles</SelectItem>
                                                            <SelectItem value="books">Libros</SelectItem>
                                                                                                                                                                                  <SelectItem value="electronic">Electronica</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="pt-2"></div>

                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="stock"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Stock</FormLabel>
                                                <FormControl>
                                                    <Input type="number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="price"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Price</FormLabel>
                                                <FormControl>
                                                    <Input type="number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="">
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col pt-4">
                                            <FormLabel>Descripcion</FormLabel>
                                            <FormControl>
                                                <textarea
                                                    {...field}
                                                    className="px-4 py-2 border border-black"
                                                    placeholder="Descripción del producto ..."
                                                ></textarea>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="pt-4"></div>
                            <Button
                                className=" hover:bg-gray-50 w-fit p-2 text-md hover:cursor-pointer rounded-xl border border-black"
                                type="submit"
                            >
                                Crear Producto
                            </Button>
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CreateProduct
