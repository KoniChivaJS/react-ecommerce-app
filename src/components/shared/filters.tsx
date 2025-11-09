import React from "react";
import { Category } from "../../@types";
import { useProductsFilters } from "../../hooks/use-products-filters";

interface Props {
  className?: string;
  title: string;
  minPrice: string;
  maxPrice: string;
  categoryId: string;
  setTitle: (title: string) => void;
  setMinPrice: (minPrice: string) => void;
  setMaxPrice: (maxPrice: string) => void;
  setCategoryId: (categoryId: string) => void;
  categories: Category[] | undefined;
}

export const Filters: React.FC<Props> = ({
  className,
  title,
  minPrice,
  maxPrice,
  categoryId,
  setTitle,
  setMinPrice,
  setMaxPrice,
  setCategoryId,
  categories,
}) => {
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
