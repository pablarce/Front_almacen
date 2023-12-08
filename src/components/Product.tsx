interface ProductProps{
    className? : string
}

const Product = (props: ProductProps) => {
    return(
        <div className={`${props.className}`}>
            <p className="text-2xl">Producto</p>
        </div>
    )
}

export default Product