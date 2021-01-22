import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  fetchTmdb,
  likeMovie,
  fetchWishList,
  cancelMovie,
} from '../../actions';

const MovieLike = (props) => {
  const idList = [];
  for (let wish of props.wishList) {
    idList.push(wish.id);
  }

  useEffect(() => {
    if (!idList.filter((id) => id === props.movie.id)?.length) {
      props.likeMovie(
        _.pick(
          props.movie,
          'id',
          'title',
          'overview',
          'original_title',
          'vote_average',
          'release_date',
          'backdrop_path',
        ),
      );
    } else {
      props.cancelMovie(props.movie.id);
    }
  }, []);

  return <></>;
};

/*
title, vote_average, release_date
*/

const mapStateToProps = (state, ownProps) => {
  return {
    wishList: Object.values(state.wishList),
    movie: state.movies[ownProps.match.params.id],
    movies: Object.values(state.movies),
  };
};

export default connect(mapStateToProps, {
  fetchTmdb,
  likeMovie,
  fetchWishList,
  cancelMovie,
})(MovieLike);
