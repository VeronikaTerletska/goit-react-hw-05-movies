import { useState, useEffect, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import * as API from 'FechApi/FechApiFilms';

import {
  Container,
  Button,
  List,
  Item,
  LinkWrapper,
} from '../components/MovieDetails/MovieDetails.styled';

const Cast = lazy(() => import('./Сast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [buttonLocation, setButtonLocation] = useState(null);
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.getOneMovie(movieId).then(r => setMovie(r));
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
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </LinkWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default MovieDetailsPage;
