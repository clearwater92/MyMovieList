import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWishList } from '../../actions';

const WishList = (props) => {
  useEffect(() => {
    props.fetchWishList();
  }, []);

  return (
    <div>
      {_.size(props.wishList) > 0 &&
        _.map(props.wishList, (movie) => (
          <div key={movie.id}>{movie.title}</div>
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
