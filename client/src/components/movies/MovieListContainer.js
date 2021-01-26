import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTmdb, fetchWishList } from '../../actions';
import MovieList from './MovieList';

const MovieListContainer = (props) => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook 입니다

  useEffect(() => {
    props.fetchTmdb();
    props.fetchWishList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!props.movies) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <MovieList
          movies={
            _.size(props.searchedList) > 0 ? props.searchedList : props.movies
          }
        />
      </>
    );
  }
};
//export default MovieListContainer;
const mapStateToProps = (state) => {
  return {
    movies: Object.values(state.movies),
  };
};

export default connect(mapStateToProps, { fetchTmdb, fetchWishList })(
  MovieListContainer,
);
