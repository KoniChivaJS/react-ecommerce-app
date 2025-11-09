import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../@types";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
