import React from 'react';

type MovieCardProps = {
  id: number;
  title: string;
  year: number;
  poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, poster }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '8px',
        textAlign: 'center',
        width: '150px',
      }}
    >
      <img src={poster} alt={title} style={{ width: '100%' }} />
      <h3 style={{ fontSize: '16px', margin: '8px 0' }}>{title}</h3>
      <p>{year}</p>
    </div>
  );
};

export default MovieCard;
