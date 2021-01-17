import _ from 'lodash';
import { FETCH_WISH_LIST } from '../actions/types';

export const wishListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WISH_LIST:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
