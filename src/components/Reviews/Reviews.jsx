import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/moviesAPI';
import { Item, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async movieId => {
      try {
        const { results } = await fetchMovieReviews(movieId);

        setReviews(results);
      } catch (error) {
        toast.error('Something went wrong. Please try again later.');
        console.log(error.message);
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);
  return (
    <div>
      {reviews.length !== 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <Item key={id}>
                <h4>User "{author}" said:</h4>
                <p>{content}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
