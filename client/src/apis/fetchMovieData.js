import axios from 'axios';

export const API_KEY = '6f76d547fab518423df7a041212b23b1';
export const BASE_TMDB = 'https://api.themoviedb.org/3/';
export const URL = `${BASE_TMDB}movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=KR`;
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export default axios.create({
  baseURL: URL,
});
