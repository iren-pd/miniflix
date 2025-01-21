import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../features/movies/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedMovieId } from '../features/movies/moviesSlice';

const MoviePage: React.FC = () => {
  const dispatch = useDispatch();
  const movieId = useSelector((state) => state.movies.selectedMovieId);
  const { data: movie, isLoading, error } = useGetMovieByIdQuery(movieId);

  const handleClose = () => {
    dispatch(clearSelectedMovieId());
  };

  if (!movie) {
    return <p>Фильм не найден!</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} style={{ width: '300px' }} />
      <p>Год: {movie.year}</p>
      <p>{movie.plot}</p>

      <Link to="/" className="back-button" onClick={handleClose}>
        Назад к списку
      </Link>
    </div>
  );
};

export default MoviePage;
