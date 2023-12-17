import { useQuery, useQueryClient } from "react-query";

type Product = {
    id: string
    product_name : string
    stock: number
    price: number
    type: string
    description: string
}

interface ProductData {
  data: Product[] | undefined;
  error: Error | null;
  isLoading: boolean;
  loadData: () => void;
}

const ProductDataFetcher = (): ProductData => {
    const queryClient = useQueryClient();
    const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://localhost:44332/api/Products");
    const data = await response.json();
    return data;
  };

  // Utilizar useQuery con la interfaz de datos de contacto
  const { data, error, isLoading } = useQuery<Product[], Error>(
    "products",
    fetchProducts,
    {
      enabled: false, // Inicialmente deshabilitado
    }
  );

  const loadData = () => {
    if (!isLoading) {
      queryClient.refetchQueries("products");
    }
  };

  // Exportar una instancia de la interfaz y la función para cargar datos
  return { data, error, isLoading, loadData };
};

export default ProductDataFetcher;
