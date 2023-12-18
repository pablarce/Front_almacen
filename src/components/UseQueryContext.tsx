import { useQuery, useQueryClient } from "react-query";

type Product = {
  id: number;
  product_name: string;
  stock: number;
  price: number;
  type: string;
  description: string;
};

type ProductNoID = {
  product_name: string;
  stock: number;
  price: number;
  type: string;
  description: string;
};

interface ProductData {
  data: Product[] | undefined;
  error: Error | null;
  isLoading: boolean;
  loadData: () => void;
  addProduct: (newProduct: ProductNoID) => Promise<void>;
  updateProduct: (id: number, updatedProduct: Product) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

const ProductDataFetcher = (): ProductData => {
  const queryClient = useQueryClient();

  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://localhost:44332/api/Products");
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery<Product[], Error>("products", fetchProducts, {
    enabled: false,
  });

  const loadData = () => {
    if (!isLoading) {
      queryClient.refetchQueries("products");
    }
  };

  const addProduct = async (newProduct: ProductNoID): Promise<void> => {
    await fetch("https://localhost:44332/api/Products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    queryClient.refetchQueries("products");
  };

  const updateProduct = async (id: number, updatedProduct: Product): Promise<void> => {
    await fetch(`https://localhost:44332/api/Products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    queryClient.refetchQueries("products");
  };

  const deleteProduct = async (id: number): Promise<void> => {
    await fetch(`https://localhost:44332/api/Products/${id}`, {
      method: "DELETE",
    });
    queryClient.refetchQueries("products");
  };

  return { data, error, isLoading, loadData, addProduct, updateProduct, deleteProduct };
};

export default ProductDataFetcher;
