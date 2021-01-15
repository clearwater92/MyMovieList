import fetchMovieData from '../apis/fetchMovieData';
import wishList from '../apis/wishList';
import { FETCH_MOVIE_DATA } from './types';

export const fetchTmdb = () => async (dispatch) => {
  const response = await fetchMovieData.get();
  dispatch({ type: FETCH_MOVIE_DATA, payload: response.data.results });
};

const likeMovie = (movie) => {
  return async (dispatch) => {
		const response = await wishList.post(`/movies/${movie.id}`, movie)
    dispatch({ type: 'LIKE_MOVIE', payload: movie });
  };
};
