import { LIKE_MOVIE } from '../actions/types';

export const likeReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_MOVIE:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
