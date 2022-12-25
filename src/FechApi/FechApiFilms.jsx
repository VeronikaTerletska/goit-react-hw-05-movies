import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=39081659ccbd37aa67b527f3397a07ba';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day${API_KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getOneMovie = async value => {
  const response = await axios.get(`/movie/${value}${API_KEY}&language=en-US`);
  return response.data;
};

export const getCast = async value => {
  const response = await axios.get(
    `/movie/${value}/credits${API_KEY}&language=en-US`
  );
  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getReviews = async value => {
  const response = await axios.get(
    `/movie/${value}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};

export const getMovies = async value => {
  const response = await axios.get(
    `/search/movie${API_KEY}&query=${value}&page=1`
  );
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};
