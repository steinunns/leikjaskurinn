"use client";
import { useState } from "react";
import { completeOrder } from "../../../lib/api"; // API function to complete the order
import { OrderFormModel } from "../../../lib/types"; // Type definition for the order form data
import styles from "./Checkout.module.css"; // Import the CSS module for styling

export default function Checkout() {
  // Initialize the order state; replace products with actual cart data as needed
  const [order, setOrder] = useState<OrderFormModel>({
    name: "",
    email: "",
    address: "",
    products: [],
  });
  const [status, setStatus] = useState("");

  // Handle form submission and call the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const success = await completeOrder(order);
    setStatus(success ? "Order completed!" : "Order failed.");
  };

  return (
    // The fullScreenContainer class centers the form on the page
    <div className={styles.fullScreenContainer}>
      {/* Main form container with padding and background styling */}
      <div className={styles.container}>
        <h1 className={styles.heading}>Checkout</h1>
        <form onSubmit={handleSubmit}>
          {/* Form Group for Name */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Name:</label>
            <input
              type="text"
              value={order.name}
              onChange={(e) => setOrder({ ...order, name: e.target.value })}
              required
              className={styles.input}
            />
          </div>
          {/* Form Group for Email */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              value={order.email}
              onChange={(e) => setOrder({ ...order, email: e.target.value })}
              required
              className={styles.input}
            />
          </div>
          {/* Form Group for Address */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Address:</label>
            <input
              type="text"
              value={order.address}
              onChange={(e) => setOrder({ ...order, address: e.target.value })}
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Complete Order
          </button>
        </form>
        {/* Display submission status */}
        {status && <p className={styles.statusMessage}>{status}</p>}
      </div>
    </div>
  );
}
