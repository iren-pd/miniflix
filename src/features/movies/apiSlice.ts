import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from './types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi', // Имя для slice в Redux
  tagTypes: ['Movie'], // Kакие теги доступны
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://freetestapi.com/api/v1',
    mode: 'no-cors',

  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => '/movies', // Эндпоинт для получения списка фильмов
      transformResponse: (response: Movie[]) => {
        console.log('response', response);
        return response;
      },
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: 'Movie', id })) // Если данные есть, создаём теги для каждого фильма
          : [{ type: 'Movie', id: 'LIST' }], // Если данных нет, используем общий тег
    }),
    getMovieById: builder.query({
      query: (id) => `/movies/${id}`, // Эндпоинт для получения деталей фильма
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
