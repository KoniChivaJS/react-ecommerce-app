import React, { useState } from "react";
import { useGetProductsQuery } from "../../../services/products-api";
import { Category, Product } from "../../../@types";
import { Loader } from "../common/loader";
import { Error } from "../common/error";
import { ProductItem } from "../product-item";
import toast from "react-hot-toast";
import { Filters } from "../filters";
import { useProductsFilters } from "../../../hooks/use-products-filters";
import { Pagination } from "../pagination";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  const {
    handleNext,
    handlePrevious,
    offset,
    limit,
    products,
    isLoading,
    error,
    title,
    minPrice,
    maxPrice,
    categoryId,
    setTitle,
    setMinPrice,
    setMaxPrice,
    setCategoryId,
    categories,
  } = useProductsFilters();

  if (isLoading) return <Loader className="mt-10" />;
  if (error || !products) {
    toast.error("Failed to load products");
    return <Error text="Failed to load products" />;
  }

  return (
    <div className={`p-6 ${className || ""}`}>
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

      <Filters
        title={title}
        minPrice={minPrice}
        maxPrice={maxPrice}
        categoryId={categoryId}
        setTitle={setTitle}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setCategoryId={setCategoryId}
        categories={categories}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        className="mt-8"
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        offset={offset}
        limit={limit}
        products={products}
      />
    </div>
  );
};
