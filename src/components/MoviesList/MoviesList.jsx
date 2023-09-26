const MoviesList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(({ id, name, title }) => (
        <li key={id}>{name ?? title}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
