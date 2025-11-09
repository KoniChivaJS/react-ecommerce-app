import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useGetCategoriesQuery } from "../services/categories-api";
import { useGetProductsQuery } from "../services/products-api";
import { useDebounce } from "react-use";

export const useProductsFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("price_min") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("price_max") || "");
  const [categoryId, setCategoryId] = useState(
    searchParams.get("categoryId") || ""
  );
  const [offset, setOffset] = useState(Number(searchParams.get("offset")) || 0);
  const limit = 12;

  const { data: categories } = useGetCategoriesQuery();
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({
    offset,
    limit,
    title: title || undefined,
    price_min: minPrice ? Number(minPrice) : undefined,
    price_max: maxPrice ? Number(maxPrice) : undefined,
    categoryId: categoryId ? Number(categoryId) : undefined,
  });

  useDebounce(
    () => {
      const params: Record<string, string> = {};
      if (title) params.title = title;
      if (minPrice) params.price_min = minPrice;
      if (maxPrice) params.price_max = maxPrice;
      if (categoryId) params.categoryId = categoryId;
      if (offset) params.offset = offset.toString();
      setSearchParams(params);
    },
    300,
    [title, minPrice, maxPrice, categoryId, offset, setSearchParams]
  );

  const handleNext = () => {
    setOffset((prev) => prev + limit);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    setOffset((prev) => Math.max(0, prev - limit));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    title,
    minPrice,
    maxPrice,
    categoryId,
    offset,
    limit,

    setTitle,
    setMinPrice,
    setMaxPrice,
    setCategoryId,
    handleNext,
    handlePrevious,

    products,
    categories,
    isLoading,
    error,
  };
};
