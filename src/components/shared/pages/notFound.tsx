// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6">Page not found 😢</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        To home
      </Link>
    </div>
  );
};

export default NotFound;
