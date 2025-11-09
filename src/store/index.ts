import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../store/slices/favoritesSlice";
import cartReducer from "../store/slices/cartSlice";
import { categoriesApi } from "../services/categories-api";
import { productsApi } from "../services/products-api";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,

    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
