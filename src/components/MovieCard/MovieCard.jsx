const MovieCard = ({ movieDetails }) => {
  const {
    // poster_path,
    title,
    // vote_average,
    // overview,
    // genres,
    name,
  } = movieDetails;

  return (
    <>
      <h1>{name || title}</h1>
    </>
  );
};

export default MovieCard;
