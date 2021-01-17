import fetchMovieData from '../apis/fetchMovieData';
import wishList from '../apis/wishList';
import { FETCH_MOVIE_DATA, LIKE_MOVIE, FETCH_WISH_LIST } from './types';
import history from '../history';

export const fetchTmdb = () => async (dispatch) => {
  const response = await fetchMovieData.get();
  dispatch({ type: FETCH_MOVIE_DATA, payload: response.data.results });
};

export const fetchWishList = () => {
  return async (dispatch) => {
    const response = await wishList.get('/movies');
    dispatch({ type: FETCH_WISH_LIST, payload: response.data });
    history.push('/');
  };
};

export const likeMovie = (movie) => {
  return async (dispatch) => {
    console.log('movie',movie);
    const response = await wishList.post('/movies', { ...movie });
    dispatch({ type: LIKE_MOVIE, payload: response.data });
    console.log('movie',movie);
    history.push('/');
  };
};
