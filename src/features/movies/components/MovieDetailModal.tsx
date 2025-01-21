import { useGetMovieByIdQuery } from '../apiSlice';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  movieId: number | null;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, movieId }) => {
  if (!isOpen) return null;

  const { data: movie, isLoading, error } = useGetMovieByIdQuery(movieId);
  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-md shadow-lg max-w-xs w-full">
        {isLoading ? (
          <p>Загрузка...</p>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <button onClick={onClose} className="text-red-500 font-bold">
                X
              </button>
            </div>
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full mt-2 mb-4"
            />
            <p>Год: {movie.year}</p>
            <p>Описание: {movie.plot}</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Закрыть
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
