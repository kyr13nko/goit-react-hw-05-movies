import { useLocation } from 'react-router-dom';
import { getImage } from 'services/getImage';
import { Item, List, MovieLink, Wrapper } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  console.log('movies', movies);

  return (
    <List>
      {movies.map(({ id, name, title, poster_path, backdrop_path }) => (
        <Item key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <Wrapper>
              <img
                src={getImage(poster_path ?? backdrop_path)}
                alt={name ?? title}
              />
              <p>{name ?? title}</p>
            </Wrapper>
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default MoviesList;
