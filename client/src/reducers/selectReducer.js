import _ from 'lodash';
import { LIKE_MOVIE, CANCEL_MOVIE } from '../actions/types';

export const selectReducer = (state = {}, action) => {
  switch (action.payload) {
    case LIKE_MOVIE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case CANCEL_MOVIE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
