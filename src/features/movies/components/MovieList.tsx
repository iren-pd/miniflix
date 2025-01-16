import React from 'react';
import MovieCard from './MovieCard';
import { useGetMoviesQuery } from '../apiSlice';

// const mockMovies = [
//   {
//     id: 1,
//     title: 'Inception',
//     year: 2010,
//     poster: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     title: 'The Dark Knight',
//     year: 2008,
//     poster: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     title: 'Interstellar',
//     year: 2014,
//     poster: 'https://via.placeholder.com/150',
//   },
// ];

const MovieList: React.FC = () => {
  const { data: movies = [], isLoading, error } = useGetMoviesQuery();
  // console.log('movies', movies);

  if (error) {
    console.error('Ошибка запроса:', error);
    // Дополнительно можно вывести error.message или error.status
  }

  return (
    <div>
      <h2>Список фильмов</h2>
      {isLoading && <p>Загрузка</p>}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
