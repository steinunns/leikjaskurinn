// Import global styles from the same directory
import "./globals.css";

// Import shared components for navigation and footer from the components folder
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

// Import ReactNode for proper type annotations
import { ReactNode } from "react";

// Export metadata; Next.js will use this to generate the <head> content
export const metadata = {
  title: "Leikjaskúrinn",
  // You can also add description, keywords, etc.
};

// RootLayout component serves as the global layout wrapper for all pages
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* This wrapper applies the flex styles defined in your globals.css */}
        <div className="wrapper">
          <Navbar />
          {/* The main content area grows to fill the space */}
          <main className="mainContent">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
