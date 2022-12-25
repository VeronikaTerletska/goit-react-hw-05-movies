import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'FechApi/FechApiFilms';
import { ReviewCard } from 'components/ReviewsCard/ReviewsCard';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews?.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </ul>
      {reviews?.length === 0 && (
        <p>We don`t have any reviews for this movies</p>
      )}
    </>
  );
};

export default Reviews;
