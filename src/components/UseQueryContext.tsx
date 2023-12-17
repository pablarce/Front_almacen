import { useQuery } from "react-query"

type Product = {
    id: number
    product: string
    type: string
    stock: number
    price: number
    description: string
}
interface ProductData {
    data: Product[] | undefined
    error: Error | null
    isLoading: boolean
}

const ProductDataFetcher = (): ProductData => {
    const fetchProducts = async (): Promise<Product[]> => {
        const response = await fetch("https://localhost:44332/api/Products")
        const data = await response.json()
        return data
    }

    // Utilizar useQuery con la interfaz de datos de contacto
    const { data, error, isLoading } = useQuery<Product[], Error>("products", fetchProducts)

    // Exportar una instancia de la interfaz
    return { data, error, isLoading }
}

export default ProductDataFetcher
