import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from './types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi', // Имя для slice в Redux
  tagTypes: ['Movie'], // Kакие теги доступны
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.freetestapi.com/api/v1',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => '/movies', // Эндпоинт для получения списка фильмов
      transformResponse: (response: Movie[]) => {
        console.log('response', response);
        return response;
      },
    }),
    getMovieById: builder.query({
      query: (id) => `/movies/${id}`, // Эндпоинт для получения деталей фильма
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
