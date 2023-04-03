import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodoById: builder.query({
      query: (name) => `todos/${name}`,
    }),
    getTodos: builder.query({
      query: () => `todos`,
    }),
  }),
});

export const { useGetTodoByIdQuery, useGetTodosQuery } = todoApi;
