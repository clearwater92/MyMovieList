import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchMovie } from '../../actions/index';
import Modal from '../Modal';
import history from '../../history';



const MovieDetail = (props) => {
  return <Modal movie={props.movie} onDismiss={() => history.push('/')} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps)(MovieDetail);
