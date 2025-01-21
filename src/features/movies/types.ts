export type Movie = {
  id: number;
  title: string;
  year: number;
  poster: string;
  plot?: string;
};

export type MoviesState = {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  selectedMovieId: number | null;
};