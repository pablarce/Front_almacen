interface ArticleProps{
    className? : string
}

const Articles = (props: ArticleProps) => {
    return(
        <div className={`${props.className}`}>
            <p className="text-2xl">Articulos</p>
        </div>
    )
}

export default Articles