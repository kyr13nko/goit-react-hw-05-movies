import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, name, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{name ?? title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
