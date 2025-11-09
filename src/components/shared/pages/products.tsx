import React, { useState } from "react";
import { useGetProductsQuery } from "../../../services/products-api";
import { Category, Product } from "../../../@types";
import { Loader } from "../common/loader";
import { Error } from "../common/error";
import { ProductItem } from "../product-item";
import toast from "react-hot-toast";
import { Filters } from "../filters";
import { useProductsFilters } from "../../../hooks/use-products-filters";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  const {
    title,
    minPrice,
    maxPrice,
    categoryId,
    setTitle,
    setMinPrice,
    setMaxPrice,
    setCategoryId,
    handleNext,
    handlePrevious,
    offset,
    limit,
    products,
    categories,
    isLoading,
    error,
  } = useProductsFilters();

  if (isLoading) return <Loader className="mt-10" />;
  if (error) {
    toast.error("Failed to load products");
    return <Error text="Failed to load products" />;
  }

  return (
    <div className={`p-6 ${className || ""}`}>
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2 w-52"
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border rounded px-3 py-2 w-32"
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded px-3 py-2 w-32"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border rounded px-3 py-2 w-48"
        >
          <option value="">All categories</option>
          {categories?.map((cat: Category) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={offset === 0}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-600">Page {offset / limit + 1}</span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};
