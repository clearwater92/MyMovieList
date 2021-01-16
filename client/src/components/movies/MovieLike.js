import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTmdb, likeMovie } from '../../actions';

const MovieLike = (props) => {
	props.fetchTmdb();
	const selected = _.pick(props.movie, 'title', 'release_date');
	console.log(selected)
	props.likeMovie(selected);
  return (
		<>
		</>
	);
};

/*
title, vote_average, release_date
*/

const mapStateToProps = (state, ownProps) => {
  return {movie: state.movies[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchTmdb, likeMovie})(MovieLike);
