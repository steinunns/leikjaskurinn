"use client";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../lib/api"; // Import API function to fetch all products
import ProductCard from "../app/components/ProductCard"; // Component to display individual product summary
import { ProductModel } from "../../lib/types"; // TypeScript type for a product

// Home component fetches and displays a list of products
export default function Home() {
  // State to hold the list of products
  const [products, setProducts] = useState<ProductModel[]>([]);

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    async function getProducts() {
      const data = await fetchAllProducts();
      setProducts(data); // Save fetched products in state
    }
    getProducts();
  }, []);

  return (
    <div>
      {/* Display the product cards in a flex container */}
      <div className="Container" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // Render a ProductCard for each product
        ))}
      </div>
    </div>
  );
}
