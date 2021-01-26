import axios from 'axios';

export const API_KEY = '6f76d547fab518423df7a041212b23b1';
export const BASE_TMDB = 'https://api.themoviedb.org/3/';
export const SEARCH_API = `${BASE_TMDB}search/movie?&api_key=${API_KEY}&query=`;

//export default axios.get(API).then(response => console.log(response));