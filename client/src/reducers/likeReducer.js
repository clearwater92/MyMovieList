import { LIKE_MOVIE } from '../actions/types';

export const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_MOVIE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
