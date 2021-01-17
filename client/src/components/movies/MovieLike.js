import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTmdb, likeMovie, fetchWishList } from '../../actions';

const MovieLike = (props) => {
  useEffect(() => {
    props.fetchTmdb();
    props.fetchWishList();
    console.log('props.wishList',props.wishList)
    const result = _.find(props.wishList, (o) => o.id === props.movie.id);
    console.log('result',result);
    if(!result) {
      console.log('if phase')
      props.likeMovie(_.pick(props.movie, 'title', 'release_date'))
    }
    // for(let movie of props.wishList) {
    //   if (movie.id === props.movie.id) {
    //     console.log('duplicated');

    //   }
    // }

    //if(!props.wishList)
    //for(props.movie.id in props.wishList.id)
    // console.log('props.selectedMovie', props.selectedMovie);
    // const selected = _.pick(props.movie, 'id', 'title', 'release_date');

    // props.likeMovie(selected);
  },[]);
  return <></>;
};

/*
title, vote_average, release_date
*/

const mapStateToProps = (state, ownProps) => {
  return {
    wishList: Object.values(state.wishList),
    movie: state.movies[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchTmdb,
  likeMovie,
  fetchWishList,
})(MovieLike);
