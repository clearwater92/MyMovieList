import { combineReducers } from 'redux';
import { tmdbReducer } from './tmdbReducer';
import { wishListReducer } from './wishListReducer';
import {selectReducer} from './selectReducer';

export default combineReducers({
  movies: tmdbReducer,
  wishList: wishListReducer,
  selectedMovie: selectReducer
});
