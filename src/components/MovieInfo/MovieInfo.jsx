import { StyledLink, WrapperLink } from './MovieInfo.styled';

const MovieInfo = () => {
  return (
    <WrapperLink>
      <h3>Additional information:</h3>
      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
    </WrapperLink>
  );
};

export default MovieInfo;
