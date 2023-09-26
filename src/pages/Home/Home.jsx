import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'services/moviesAPI';
import { toast } from 'react-toastify';
import { FallingLines } from 'react-loader-spinner';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

export const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTrendingMovies();
        setTrending(results);
      } catch (error) {
        toast.error('Something went wrong. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      <MoviesList trendingMovies={trending} />
    </>
  );
};
