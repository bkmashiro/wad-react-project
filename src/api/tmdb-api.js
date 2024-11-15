import axios from "axios";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

http.interceptors.response.use((response) => {
  return response.data;
});

export const getMovies = () => {
  return http.get(`/discover/movie`, {
    params: {
      language: "en-US",
      include_adult: false,
      include_video: false,
      page: 1,
    },
  });
};

export const getMovie = ({ queryKey: [, idPart] }) => {
  const { id } = idPart;
  return http.get(`/movie/${id}`);
};

export const getUpcomingMovies = ({ page = 1 }) => {
  return http.get(`/movie/upcoming`, {
    params: {
      language: "en-US",
      page: page,
    },
  });
}

export const getGenres = () => {
  return http.get(`/genre/movie/list`, {
    params: {
      language: "en-US",
    },
  });
};

export const getMovieImages = ({ queryKey: [, idPart] }) => {
  const { id } = idPart;
  return http.get(`/movie/${id}/images`);
};

export const getMovieReviews = ({ queryKey: [, idPart] }) => {
  const { id } = idPart;
  return http.get(`/movie/${id}/reviews`);
};

export const getMovieNowPlaying = async () => {
  return await http.get(`/movie/now_playing`);
};

export const getSimilarMovies = async (movieId) => {
  return await http.get(`/movie/${movieId}/similar`);
}