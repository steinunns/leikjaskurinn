import { ProductModel } from "../../../lib/types";

// Define the expected properties for the ProductDetails component
interface Props {
  product: ProductModel;
}

// ProductDetails displays detailed information about a product,
// including a larger image, description, and pricing.
export default function ProductDetails({ product }: Props) {
  return (
    <div className="product-details">
      {/* Render a larger product image */}
      <img
        src={`https://leikjaskurinn-api.vercel.app/${product.image}`}
        alt={product.name}
        style={{ maxWidth: "400px" }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Display product price */}
      <p>{(product.priceISK / 100).toFixed(2)} USD</p>
    </div>
  );
}
