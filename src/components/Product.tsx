import { Dumbbell, BookCopy, Armchair, FileQuestion} from "lucide-react"

import logo from "../assets/logo.svg"
import CreateProduct from "./CreateProduct"

interface ProductProps {
    idProductPulsed: string | undefined
    productName: string | undefined
    productStyle: string | undefined
    productPrice: number | undefined
    productStock: number | undefined
    productDescription?: string | undefined
    className?: string
    style?: any
}

const getProductStyleIcon = (productStyle: string | undefined) => {
    switch (productStyle) {
        case "sport":
            return <Dumbbell className="w-60 h-52" />
        case "furniture":
            return <Armchair className="w-60 h-52" />
        case "book":
            return <BookCopy className="w-60 h-52" />
        default:
            return <FileQuestion className="w-60 h-52" />
    }
}

const Product = (props: ProductProps) => {
    return (
        <div className={`${props.className} overflow-clip p-6`} style={props.style}>
            {props.idProductPulsed != undefined ? (
                <>
                    <div className="flex items-center">
                        <p className="text-4xl">{props.productName}</p>
                        <CreateProduct className="ml-auto" variant="edit" />
                    </div>
                    <div className="flex h-96 items-center">
                        {getProductStyleIcon(props.productStyle)}
                        <div className="self-start pt-20 pl-10">
                            <div className="flex justify-center gap-2 items-center">
                                <div className="w-6 border border-black"></div>
                                <p className="text-2xl">Stock</p>
                                <div className="w-60 border border-black"></div>
                            </div>
                            <p className="py-8">Actualmente hay {props.productStock} uds.</p>
                            <div className="flex justify-center gap-2 items-center">
                                <div className="w-6 border border-black"></div>
                                <p className="text-2xl">Price</p>
                                <div className="w-60 border border-black"></div>
                            </div>
                            <p className="py-8">Precio actual: €{props.productPrice}.</p>
                        </div>
                        <div className="self-start pt-20 pl-10 flex flex-col gap-2 ">
                            <p className="text-2xl">Descripcion del producto: </p>
                            <p className="w-[27rem]">
                                {props.productDescription}
                            </p>
                        </div>
                    </div>
                    <p className="">Id del producto: {props.idProductPulsed}</p>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center text-center">
                    <img src={logo} className="w-56" alt="logo" />
                    <p className="text-xl">Pulsa algun producto para visualizarlo.</p>
                </div>
            )}
        </div>
    )
}

export default Product
