import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import * as API from 'FechApi/FechApiFilms';

import {
  Container,
  Button,
  List,
  Item,
  LinkWrapper,
} from '../components/MovieDetails/MovieDetails.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [buttonLocation, setButtonLocation] = useState(null);
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.getOneMovie(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    if (location?.state?.from) {
      setButtonLocation(location.state.from);
    }
  }, [location?.state?.from]);

  return (
    movie && (
      <>
        <Button
          type="button"
          onClick={() => {
            navigate(buttonLocation || '/');
          }}
        >
          Go back
        </Button>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
          <List>
            <Item>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <p>
                <b>User score: </b>
                {`${(movie.vote_average * 10).toFixed(1)}%`}
              </p>
            </Item>
            <Item>
              <p>
                <b>Overview:</b> {movie.overview}
              </p>
            </Item>
            <Item>
              <p>
                <b>Genres:</b> {movie.genres.map(genre => genre.name).join(' ')}
              </p>
            </Item>
          </List>
        </Container>
        <LinkWrapper>
          <h3>Additional information</h3>
          <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
            Reviews
          </Link>
        </LinkWrapper>
        <Suspense fallback={<p>Loading...</p>}></Suspense>
      </>
    )
  );
};

export default MovieDetailsPage;
