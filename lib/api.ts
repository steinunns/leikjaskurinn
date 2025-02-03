import { ProductModel, ContactFormModel, OrderFormModel } from "./types";

// Base URL for the API endpoints
const API_BASE_URL = "https://leikjaskurinn-api.vercel.app";

/**
 * Fetch all products from the API.
 * @returns A promise that resolves with an array of ProductModel objects.
 */
export async function fetchAllProducts(): Promise<ProductModel[]> {
  const response = await fetch(`${API_BASE_URL}/products`);
  const json = await response.json();
  return json;
}

/**
 * Fetch a single product by its ID.
 * @param id - The unique identifier for the product.
 * @returns A promise that resolves with a ProductModel object or null if not found.
 */
export async function fetchProductById(
  id: string
): Promise<ProductModel | null> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) return null;
  const json = await response.json();
  return json;
}

/**
 * Send contact form data to the API.
 * @param form - An object containing the contact form data.
 * @returns A promise that resolves to a boolean indicating whether the message was sent successfully.
 */
export async function sendContactFormData(
  form: ContactFormModel
): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return response.ok;
}

/**
 * Complete an order by sending order data to the API.
 * @param order - An object containing the order details.
 * @returns A promise that resolves to a boolean indicating whether the order was completed successfully.
 */
export async function completeOrder(order: OrderFormModel): Promise<boolean> {
  const response = await fetch(`${API_BASE_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return response.ok;
}
