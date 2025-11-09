import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductQuery } from "../@types";
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
    getProducts: builder.query<Product[], ProductQuery>({
      query: ({
        offset = 0,
        limit = 12,
        title,
        price_min,
        price_max,
        categoryId,
      }) => {
        const params = new URLSearchParams();
        params.append("offset", offset.toString());
        params.append("limit", limit.toString());
        if (title) params.append("title", title);
        if (price_min) params.append("price_min", price_min.toString());
        if (price_max) params.append("price_max", price_max.toString());
        if (categoryId) params.append("categoryId", categoryId.toString());
        return `/products?${params.toString()}`;
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
