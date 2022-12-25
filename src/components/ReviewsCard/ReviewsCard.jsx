import PropTypes from 'prop-types';

export function ReviewCard({ review: { author, content } }) {
  return (
    <li>
      <h3>{`Author: ${author}`}</h3>
      <p>{content}</p>
    </li>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
