import { CardContainer, Image } from './MovieCard.styled';
import noPoster from '../../images/no-cover.png';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movieDetails }) => {
  const {
    poster_path,
    backdrop_path,
    title,
    name,
    // vote_average,
    // release_date,
    overview,
    genres,
  } = movieDetails;

  const poster =
    poster_path || backdrop_path
      ? IMG_PATH + (poster_path ?? backdrop_path)
      : noPoster;

  console.log('movieDetails', movieDetails);

  return (
    <>
      <button type="button">Go back</button>
      <CardContainer>
        <Image src={poster} alt={name || title} />
        <div>
          <h1>{name || title}</h1>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres?.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </CardContainer>
    </>
  );
};

export default MovieCard;
