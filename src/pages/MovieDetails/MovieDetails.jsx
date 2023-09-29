import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/moviesAPI';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        toast.error('Something went wrong. Please try again later.');
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);

  const handleClickBackBtn = () => {
    navigate(location.state);
  };

  return (
    <>
      <button type="button" onClick={handleClickBackBtn}>
        Go back
      </button>
      {isLoading ? <Loader /> : <MovieCard movieDetails={movieDetails} />}
    </>
  );
};
