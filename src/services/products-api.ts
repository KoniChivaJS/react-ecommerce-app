import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../@types";
/**
 * API for products
 *
 * Example how to use:
 * const { data: products, isLoading, error } = useGetProductsQuery();
 *
 * const { data: product, isLoading, error } = useGetProductByIdQuery();
 */
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
