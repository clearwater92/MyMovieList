import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { searchTmdb } from '../actions';
import { connect } from 'react-redux';

const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onFormSubmit = (e) => {
    props.searchTmdb(searchTerm);
    e.preventDefault();
  };

  return (
    <header>
      <div className="header">
        <div className="nav">
          <Link to={`/`}>Home</Link>
          <Link to={`/wishList`}>Wish List</Link>
        </div>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

// const mapStateToProps = () => {

// }

export default connect(null, { searchTmdb })(NavBar);
