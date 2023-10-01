import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getImage } from 'services/getImage';
import { fetchMovieCast } from 'services/moviesAPI';
import { Image } from './Cast.styled';

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
      <ul>
        {cast.map(({ id, character, original_name, profile_path }) => {
          return (
            <li key={id}>
              <Image src={getImage(profile_path)} alt={original_name} />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
