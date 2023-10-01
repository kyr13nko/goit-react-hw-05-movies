import { CardContainer, CardWrapper } from './MovieCard.styled';
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
  const getGenres = genres?.map(({ name }) => name).join(' | ');

  return (
    movieDetails && (
      <CardContainer>
        <img src={getImage(poster_path || backdrop_path)} alt={name || title} />
        <CardWrapper>
          <h2>
            {name || title} {year && `(${year})`}
          </h2>
          {vote_average >= 0 && (
            <p>
              <b>User score:</b> {userScore}%
            </p>
          )}
          {overview && (
            <p>
              <b>Overview:</b> {overview}
            </p>
          )}
          {genres && (
            <p>
              <b>Genres:</b> {getGenres}
            </p>
          )}
        </CardWrapper>
      </CardContainer>
    )
  );
};

export default MovieCard;
