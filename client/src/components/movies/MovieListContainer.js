import React from 'react';
import { connect } from 'react-redux';
import { fetchTmdb } from '../../actions';
import MovieList from './MovieList';

const MovieListContainer = (props) => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook 입니다
  props.fetchTmdb();
  if (!props.movies) {
    return <h1>Loading</h1>;
  } else {
    return <MovieList movies={props.movies} />;
  }
};
//export default MovieListContainer;
const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies),
  };
};

export default connect(mapStateToProps, { fetchTmdb })(MovieListContainer);
