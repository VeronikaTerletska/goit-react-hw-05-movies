import { GlobalStyle } from './GlobalStyle';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
const HomePage = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails'));
const ErrorUrl = lazy(() => import('../pages/ErrorUrl'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<ErrorUrl />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
