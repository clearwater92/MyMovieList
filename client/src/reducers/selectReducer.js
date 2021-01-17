import { LIKE_MOVIE } from '../actions/types';

export const selectReducer = (state = {}, action) => {
  switch (action.payload) {
    case LIKE_MOVIE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
