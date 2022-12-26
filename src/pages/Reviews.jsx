import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'FechApi/FechApiFilms';
import { ReviewCard } from 'components/ReviewsCard/ReviewsCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    API.getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews?.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movies</p>
      )}
    </>
  );
};

export default Reviews;
