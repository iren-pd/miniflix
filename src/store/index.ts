import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import { moviesApi } from '../features/movies/apiSlice';

// Создание стора
export const store = configureStore({
  // Какие части коробки будет хранить стор и какие редьюсеры отвечают за их обновление
  reducer: {
    movies: moviesReducer, // Локальное стостояние
    [moviesApi.reducerPath]: moviesApi.reducer, // Из запроса
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* 
Отправитель — это dispatch.
Почтовая комната — это middleware.
Получатель — это reducer, который обновляет состояние.
*/
