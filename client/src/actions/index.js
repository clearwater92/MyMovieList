import fetchMovieData from '../apis/fetchMovieData';
import wishList from '../apis/wishList';
import {
  FETCH_MOVIE_DATA,
  FETCH_MOVIE,
  LIKE_MOVIE,
  FETCH_WISH_LIST,
  CANCEL_MOVIE,
  SEARCH_MOVIE_DATA,
} from './types';
import history from '../history';
import axios from 'axios';
import { SEARCH_API } from '../apis/searchMovieData';

export const fetchTmdb = () => async (dispatch) => {
  const response = await fetchMovieData.get();
  dispatch({ type: FETCH_MOVIE_DATA, payload: response.data.results });
};

export const searchTmdb = (searchTerm) => async (dispatch) => {
  const response = await axios.get(SEARCH_API + searchTerm);
  console.log('dispatch', dispatch);
  // fetch(SEARCH_API + searchTerm).then((res) => res.json()).then((data) => {
  //   console.log(data.results);
  // })
  dispatch({ type: SEARCH_MOVIE_DATA, payload: response.data.results });
};

export const fetchWishList = () => {
  return async (dispatch) => {
    const response = await wishList.get('/movies');
    dispatch({ type: FETCH_WISH_LIST, payload: response.data });
    //history.push('/');
  };
};

export const fetchMovie = (id) => async dispatch => {
  const response = await fetchMovieData.get(`/movies/${id}`);
  console.log('fetchMovie');
  dispatch({ type: FETCH_MOVIE, payload: response.data });
}

export const likeMovie = (movie) => {
  return async (dispatch) => {
    const response = await wishList.post('/movies', { ...movie });
    dispatch({ type: LIKE_MOVIE, payload: response.data });
    //history.push('/');
  };
};

export const cancelMovie = (id) => {
  return async (dispatch) => {
    await wishList.delete(`/movies/${id}`);
    dispatch({ type: CANCEL_MOVIE, payload: id });
  };
};
