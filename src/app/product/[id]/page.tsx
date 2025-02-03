"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Hook to access URL parameters for dynamic routing
import { fetchProductById } from "../../../../lib/api"; // API function to fetch a single product by id
import ProductDetails from "../../components/ProductDetails"; // Component to render detailed product info
import { ProductModel } from "../../../../lib/types"; // TypeScript type for a product

// Component that displays details of a specific product based on the dynamic [id] route parameter
export default function ProductPage() {
  // Retrieve the product id from the URL
  const { id } = useParams() as { id: string };
  const [product, setProduct] = useState<ProductModel | null>(null);

  // Fetch product details when the id parameter is available
  useEffect(() => {
    if (id) {
      async function getProduct() {
        const data = await fetchProductById(id);
        setProduct(data); // Store fetched product data in state
      }
      getProduct();
    }
  }, [id]);

  // Display a loading message until product data is fetched
  if (!product) return <p>Loading...</p>;

  // Render the product details component with the fetched product data
  return <ProductDetails product={product} />;
}
