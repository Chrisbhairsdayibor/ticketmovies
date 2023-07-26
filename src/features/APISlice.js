import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `movies`,
    }),

    getMoviesByID: builder.query({
      query: (id) => `movies/${id}`,
    }),

    createMovies: builder.mutation({
      query: (product) => ({
        url: 'movies',
        method: 'POST',
        body: product,
      }),
    }),

    updateMovies: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `movies/${id}`,
        method: 'PUT',
        body: updates,
      }),
    }),

    deleteMovies: builder.mutation({
      query: (id) => ({
        url: `movies/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesQuery,
  useGetMoviesByIDQuery,
  useCreateMoviesMutation,
  useUpdateMoviesMutation,
  useDeleteMoviesMutation,
} = moviesApi

