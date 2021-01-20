import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchTmdb, fetchWishList } from '../../actions';
import MovieList from './MovieList';

const MovieListContainer = (props) => {
  
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook 입니다
  useEffect(() => {
    props.fetchTmdb();
    props.fetchWishList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

export default connect(mapStateToProps, { fetchTmdb, fetchWishList })(MovieListContainer);
