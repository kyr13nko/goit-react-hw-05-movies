import { CardContainer, Image } from './MovieCard.styled';
import noPoster from '../../images/no-cover.png';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movieDetails }) => {
  const {
    poster_path,
    backdrop_path,
    title,
    name,
    vote_average,
    release_date,
    overview,
    genres,
  } = movieDetails;

  const poster =
    poster_path || backdrop_path
      ? IMG_PATH + (poster_path ?? backdrop_path)
      : noPoster;

  const year = release_date?.toString().slice(0, 4);

  return (
    <>
      {movieDetails && (
        <CardContainer>
          <Image src={poster} alt={name || title} />
          <div>
            <h1>
              {name || title} {year && `(${year})`}
            </h1>
            {vote_average && (
              <p>User score: {Math.round(vote_average * 10)}%</p>
            )}
            {overview && (
              <>
                <h3>Overview</h3>
                <p>{overview}</p>
              </>
            )}
            {genres && (
              <>
                <h3>Genres</h3>
                <ul>
                  {genres?.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
              </>
            )}
          </div>
        </CardContainer>
      )}
    </>
  );
};

export default MovieCard;
