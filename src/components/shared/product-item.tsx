import React from "react";
import { Product } from "../../@types";
import { HeartPlus, ShoppingCart } from "lucide-react";

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4 bg-white">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="h-48 w-full object-cover rounded-md"
      />
      <h3 className="mt-3 font-semibold text-lg line-clamp-1">
        {product.title}
      </h3>
      <p className="text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex flex-col ">
          <span className="text-lg font-bold">${product.price}</span>
          <span className="text-sm text-gray-400">{product.category.name}</span>
        </div>
        <div className="flex gap-4">
          <HeartPlus className="cursor-pointer hover:scale-125 transition-all ease-in-out text-red-500" />
          <ShoppingCart className="cursor-pointer hover:scale-125 transition-all ease-in-out" />
        </div>
      </div>
    </div>
  );
};
