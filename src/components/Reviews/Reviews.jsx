import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/moviesAPI';

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
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
