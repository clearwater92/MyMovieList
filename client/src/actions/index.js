import fetchMovieData from '../apis/fetchMovieData';
import wishList from '../apis/wishList';
import { FETCH_MOVIE_DATA, LIKE_MOVIE } from './types';

export const fetchTmdb = () => async (dispatch) => {
  const response = await fetchMovieData.get();
  dispatch({ type: FETCH_MOVIE_DATA, payload: response.data.results });
};

export const likeMovie = (movie) => {
  return async (dispatch) => {
		console.log('movie',movie);
    const response = await wishList.post('/movies', {...movie});
    console.log('likeMovie res', response.data);
    dispatch({ type: LIKE_MOVIE, payload: response.data });
  };
};
