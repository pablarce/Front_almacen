import { Dumbbell } from "lucide-react"

interface ProductProps {
    idProductPulsed: string
    className?: string
}

const Product = (props: ProductProps) => {
    return (
        <div className={`${props.className} overflow-clip p-6`}>
            <p className="text-4xl">FOOTBALL</p>
            <div className="flex h-96 items-center justify-center">
                <Dumbbell className="mr-auto w-60 h-60" />
            </div>
            <p className="">Id del producto: {props.idProductPulsed}</p>
        </div>
    )
}

export default Product
