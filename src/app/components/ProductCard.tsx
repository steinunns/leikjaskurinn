import Link from "next/link";
import { ProductModel } from "../../../lib/types";

// Define the expected properties for the ProductCard component
interface Props {
  product: ProductModel;
}

// ProductCard displays a summary view of a product including its image, name, and price.
// Clicking the card navigates to the detailed product page.
export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <div>
          {/* Image container ensures all images are equal in size */}
          <div className="image-container">
            <img
              src={`https://leikjaskurinn-api.vercel.app/${product.image}`}
              alt={product.name}
            />
          </div>
          {/* Content container for product name and price */}
          <div className="content">
            <div className="product-name">
              <h3>{product.name}</h3>
            </div>
            <p>{(product.priceISK / 100).toFixed(2)} USD</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
