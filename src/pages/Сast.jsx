import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'FechApi/FechApiFilms';
import { CastCard } from 'components/CastCard/CastCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast?.map((oneCast, id) => (
            <CastCard key={id} oneCast={oneCast} />
          ))}
        </ul>
      ) : (
        <p>No cast</p>
      )}
    </>
  );
};
export default Cast;
