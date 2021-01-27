import _ from 'lodash';
import {
  FETCH_MOVIE_DATA,
  FETCH_MOVIE,
  SEARCH_MOVIE_DATA,
} from '../actions/types';

export const tmdbReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DATA:
    case SEARCH_MOVIE_DATA:
      return {
        ..._.mapKeys(action.payload, 'id'),
      };
    case FETCH_MOVIE:
      return {
        ...state, [action.payload.id]: action.payload
      };

    default:
      return state;
  }
};
