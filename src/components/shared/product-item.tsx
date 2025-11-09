import React from "react";
import { Product } from "../../@types";
import { HeartPlus, ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.favorites);
  const cart = useAppSelector((state) => state.cart);

  const isFavorite = favorites.some((item) => item.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(
        addFavorite({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images?.[0] || "",
        })
      );
    }
  };

  const handleCartClick = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images?.[0] || "",
          quantity: 1,
        })
      );
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

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
        <div className="flex flex-col">
          <span className="text-lg font-bold">${product.price}</span>
          <span className="text-sm text-gray-400">{product.category.name}</span>
        </div>
        <div className="flex gap-4">
          <HeartPlus
            className={`cursor-pointer hover:scale-125 transition-all ease-in-out ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
            onClick={handleFavoriteClick}
          />
          <ShoppingCart
            className={`cursor-pointer hover:scale-125 transition-all ease-in-out ${
              isInCart ? "text-green-500" : "text-gray-700"
            }`}
            onClick={handleCartClick}
          />
        </div>
      </div>
    </div>
  );
};
