import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c460452ff60718d3ff49aae70a3ec19c';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const fetchSearchMovies = async searchQuery => {
  const { data } = await axios.get(
    `/search/movie?query=${searchQuery}&api_key=${API_KEY}`
  );
  return data;
};
