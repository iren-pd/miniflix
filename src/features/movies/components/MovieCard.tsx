import React from 'react';

type MovieCardProps = {
  id: number;
  title: string;
  year: number;
  poster: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ title, year, poster }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '8px',
        textAlign: 'center',
        maxWidth: '150px',
        cursor: 'pointer',
      }}
    >
      <img src={poster} alt={title} style={{ width: '100%' }} />
      <h3 style={{ fontSize: '16px', margin: '8px 0' }}>{title}</h3>
      <p style={{ fontSize: '14px', margin: '4px 0' }}>{year}</p>
    </div>
  );
};

export default MovieCard;
