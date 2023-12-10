import { Dumbbell } from "lucide-react"

interface ProductProps {
    idProductPulsed: string
    className?: string
}

const Product = (props: ProductProps) => {
    return (
        <div className={`${props.className} overflow-clip p-6`}>
            <p className="text-4xl">FOOTBALL</p>
            <div className="flex h-96 items-center">
                <Dumbbell className="w-60 h-60" />
                <div className="self-start pt-20 pl-10">
                    <div className="flex justify-center gap-2 items-center">
                        <div className="w-6 border border-black"></div>
                        <p className="text-2xl">Stock</p>
                        <div className="w-60 border border-black"></div>
                    </div>
                    <p className="py-8">Actualmente hay 46 uds.</p>
                    <div className="flex justify-center gap-2 items-center">
                        <div className="w-6 border border-black"></div>
                        <p className="text-2xl">Price</p>
                        <div className="w-60 border border-black"></div>
                    </div>
                    <p className="py-8">Precio actual: €45.00.</p>
                </div>
                <div className="self-start pt-20 pl-10 flex flex-col gap-2 ">
                    <p className="text-2xl">Descripcion del producto: </p>
                    <p className="w-[27rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente nostrum minus
                        corrupti magnam tempora commodi consequuntur non repellendus voluptates inventore, rerum,
                        eaque deleniti fuga atque labore molestias exercitationem praesentium!
                    </p>
                </div>
            </div>
            <p className="">Id del producto: {props.idProductPulsed}</p>
        </div>
    )
}

export default Product
