import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchSearchMovies } from 'services/moviesAPI';

export const Movies = () => {
  const [searchParam, setSearchParam] = useSearchParams();
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

  const handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.target.elements.search.value.trim();

    if (searchValue === '') {
      toast.warn('Please try to type something');
      return;
    }

    const validSearchParam = searchValue !== '' ? { query: searchValue } : '';

    setSearchParam(validSearchParam);
  };

  return (
    <>
      <h2>Choose the movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          defaultValue={query}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <Loader />}
      <MoviesList movies={searchMovies} />
    </>
  );
};
