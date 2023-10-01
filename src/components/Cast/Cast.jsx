import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getImage } from 'services/getImage';
import { fetchMovieCast } from 'services/moviesAPI';
import { Item, List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async movieId => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        toast.error('Something went wrong. Please try again later.');
        console.log(error.message);
      }
    };

    getMovieCast(movieId);
  }, [movieId]);

  return (
    <div>
      {cast.length !== 0 ? (
        <List>
          {cast.map(({ id, character, original_name, profile_path }) => {
            return (
              <Item key={id}>
                <img src={getImage(profile_path)} alt={original_name} />
                <b>{original_name}</b>
                {character && <p>Character: {character}</p>}
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We do not have any cast info for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
