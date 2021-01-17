import _ from 'lodash';
import { FETCH_MOVIE_DATA } from '../actions/types';

export const tmdbReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DATA:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
