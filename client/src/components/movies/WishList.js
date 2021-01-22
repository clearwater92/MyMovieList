import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWishList } from '../../actions';
import { IMAGE_BASE_URL } from '../../apis/fetchMovieData';

const WishList = (props) => {
  useEffect(() => {
    props.fetchWishList();
  }, []);

  return (
    <div className="movie-container">
      {_.size(props.wishList) > 0 &&
        _.map(props.wishList, (movie) => (
          <div key={movie.id} className="movie">
            <img
              alt={movie.original_title}
              src={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
            />
            <div className="wished-movie">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList,
  };
};

export default connect(mapStateToProps, { fetchWishList })(WishList);
