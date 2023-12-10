import { Dumbbell } from "lucide-react"

interface ProductProps {
    idProductPulsed: string
    className?: string
}

const Product = (props: ProductProps) => {
    return (
        <div className={`${props.className}`}>
            <p className="text-2xl">FOOTBALL</p>
            <div className="flex items-center justify-center">
                <Dumbbell className="mr-auto w-60 h-60" />
            </div>
            <p className="mt-auto">{props.idProductPulsed}</p>
        </div>
    )
}

export default Product
