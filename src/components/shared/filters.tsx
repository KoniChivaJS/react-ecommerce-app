import React from "react";
import { useSearchParams } from "react-router";
import { useGetCategoriesQuery } from "../../services/categories-api";
import { useGetProductsQuery } from "../../services/products-api";
import { Category } from "../../@types";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [title, setTitle] = React.useState(searchParams.get("title") || "");
  const [minPrice, setMinPrice] = React.useState(
    searchParams.get("price_min") || ""
  );
  const [maxPrice, setMaxPrice] = React.useState(
    searchParams.get("price_max") || ""
  );
  const [categoryId, setCategoryId] = React.useState(
    searchParams.get("categoryId") || ""
  );
  const [offset, setOffset] = React.useState(
    Number(searchParams.get("offset")) || 0
  );
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

  React.useEffect(() => {
    const params: Record<string, string> = {};
    if (title) params.title = title;
    if (minPrice) params.price_min = minPrice;
    if (maxPrice) params.price_max = maxPrice;
    if (categoryId) params.categoryId = categoryId;
    if (offset) params.offset = offset.toString();
    setSearchParams(params);
  }, [title, minPrice, maxPrice, categoryId, offset, setSearchParams]);

  return (
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
  );
};
