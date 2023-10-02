import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesAPI';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParam] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParam.get('query') || '';

  useEffect(() => {
    const getSearchMovies = async searchQuery => {
      try {
        setIsLoading(true);
        const { results } = await fetchSearchMovies(searchQuery);

        if (results.length === 0) {
          toast.warning(`There is no movie with "${searchQuery}" title`);
          return;
        }

        setSearchMovies(results);
      } catch (error) {
        toast.error('Something went wrong. Please try again later.');
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    query && getSearchMovies(query);
  }, [query]);

  return (
    <>
      <h2>Choose the movie</h2>
      <SearchForm />
      {isLoading ? <Loader /> : <MoviesList movies={searchMovies} />}
    </>
  );
};

export default Movies;
