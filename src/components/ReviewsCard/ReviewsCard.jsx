import PropTypes from 'prop-types';

export function ReviewCard({ review: { id, author, content } }) {
  return (
    <li key={id}>
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
