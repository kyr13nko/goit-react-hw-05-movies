import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/moviesAPI';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBackPath = useRef(location.state?.from ?? '/movies');

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

  return (
    <>
      <Link to={goBackPath.current}>Go back</Link>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MovieCard movieDetails={movieDetails} />
          <MovieInfo />
        </>
      )}
      <Outlet />
    </>
  );
};
