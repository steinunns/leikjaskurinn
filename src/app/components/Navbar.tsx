import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // The nav element now only has vertical padding
    <nav style={{ backgroundColor: "#333", padding: "10px 0" }}>
      {/* Container that occupies 80% of the viewport and is pushed 10% from the left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          marginLeft: "10%", // This leaves 10% space on the left
          marginRight: "10%", // And similarly on the right for centering
        }}
      >
        {/* Logo and site title */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src="/images/logo.png" // Make sure logo.png is in public/images/
            alt="Leikjaskúrinn Logo"
            width={60}
            height={60}
          />
          <span
            style={{
              color: "#fff",
              marginLeft: "30%",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Leikjaskúrinn
          </span>
        </Link>
        {/* Navigation links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: 20,
          }}
        >
          <li>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
