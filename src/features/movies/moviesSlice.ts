import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from './types';

// Что лежит в коробке изначально
const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

// Коробка
const moviesSlice = createSlice({
  // Название коробки
  name: 'movies',
  initialState,
  // Что можно делать с коробкой (инструкции)
  reducers: {
    // Добавить фильм
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },

    // Удалить фильм
    removeMovie(state, action: PayloadAction<number>) {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },

    // Статус загрузки
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    // Записать ошибку
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setMovies, removeMovie, setLoading, setError } =
  moviesSlice.actions;
export default moviesSlice.reducer;
