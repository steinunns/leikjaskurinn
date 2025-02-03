/**
 * Type definition for a product.
 */
export interface ProductModel {
  id: string;
  name: string;
  image: string;
  priceISK: number;
  description: string;
}

/**
 * Type definition for contact form data.
 */
export interface ContactFormModel {
  name?: string;
  email: string;
  message: string;
}

/**
 * Type definition for order form data.
 */
export interface OrderFormModel {
  name: string;
  email: string;
  address: string;
  products: {
    id: string;
    quantity: number;
  }[];
}
