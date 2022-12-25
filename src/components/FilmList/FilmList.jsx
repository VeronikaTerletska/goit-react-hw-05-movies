import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function FilmList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
