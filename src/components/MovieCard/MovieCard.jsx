import { CardContainer, Image } from './MovieCard.styled';
import { getImage } from 'services/getImage';

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

  const year = release_date?.toString().slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const getGenres = genres?.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return (
    <>
      {movieDetails && (
        <CardContainer>
          <Image
            src={getImage(poster_path || backdrop_path)}
            alt={name || title}
          />
          <div>
            <h2>
              {name || title} {year && `(${year})`}
            </h2>
            {vote_average >= 0 && <p>User score: {userScore}%</p>}
            {overview && (
              <>
                <h3>Overview</h3>
                <p>{overview}</p>
              </>
            )}
            {genres && (
              <>
                <h3>Genres</h3>
                <ul>{getGenres}</ul>
              </>
            )}
          </div>
        </CardContainer>
      )}
    </>
  );
};

export default MovieCard;
