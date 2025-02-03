"use client";
import { useState } from "react";
import { sendContactFormData } from "../../../lib/api";
import styles from "./Contact.module.css"; // Import the CSS module

// Contact page that includes a form for users to send messages
export default function Contact() {
  // Local state for form fields and submission status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission by sending data to the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const success = await sendContactFormData({ name, email, message });
    // Update the status message based on the API response
    setStatus(success ? "Message sent!" : "Failed to send message.");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name (optional):</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
      {/* Display submission status */}
      {status && <p className={styles.statusMessage}>{status}</p>}
    </div>
  );
}
