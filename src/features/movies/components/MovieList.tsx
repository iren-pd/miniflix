import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useGetMoviesQuery } from '../apiSlice';
import { Link } from 'react-router-dom';
import { setSelectedMovieId } from '../moviesSlice';
import { useDispatch } from 'react-redux';

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
  const { data: movies = [], isLoading } = useGetMoviesQuery();
  const dispatch = useDispatch();

  const handleSelectMovie = (id: number) => {
    dispatch(setSelectedMovieId(id));
  };

  return (
    <div>
      <h2>Список фильмов</h2>
      {isLoading && <p>Загрузка</p>}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            onClick={() => handleSelectMovie(movie.id)}
          >
            <MovieCard
              id={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
