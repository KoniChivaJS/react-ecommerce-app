// src/components/shared/Footer.tsx
import React from "react";
import { Link } from "react-router";
import { Container } from "./container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <Container>
        {" "}
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/oishidemon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              Oleh Orobets
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/KoniChivaJS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              Eduard Kuruliak
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              343-5
            </a>
          </p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/cart" className="hover:text-white transition">
              Cart
            </Link>
            <a
              href="https://github.com/KoniChivaJS/react-ecommerce-app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
