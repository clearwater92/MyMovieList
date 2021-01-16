import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { likeReducer } from './likeReducer';

export default combineReducers({
  movies: fetchReducer,
  wishList: likeReducer,
});
