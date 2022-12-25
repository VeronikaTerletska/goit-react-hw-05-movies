import PropTypes from 'prop-types';

export function CastCard({ oneCast: { name, character, profile_path } }) {
  return (
    <li>
      <img
        width={100}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : 'https://dummyimage.com/100x150/000000/a2a3ab'
        }
        alt=""
      />
      <p>{name}</p>
      <p>{`Character: ${character}`}</p>
    </li>
  );
}

CastCard.propTypes = {
  oneCast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
