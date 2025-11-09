import React from "react";
import { Product } from "../../@types";

interface Props {
  className?: string;
  handleNext: () => void;
  handlePrevious: () => void;
  offset: number;
  limit: number;
  products: Product[];
}
export const Pagination: React.FC<Props> = ({
  className,
  handleNext,
  handlePrevious,
  offset,
  limit,
  products,
}) => {
  return (
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
        disabled={!products || products.length < limit}
        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};
