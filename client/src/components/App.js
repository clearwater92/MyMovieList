import React, { useState } from 'react';
import { Route, Router } from 'react-router-dom';
import MovieListContainer from './movies/MovieListContainer';
import MovieLike from './movies/MovieLike';
import history from '../history';
import WishList from './movies/WishList';
import NavBar from './NavBar';

const App = () => {

  return (
    <Router history={history}>
      <NavBar />
      <div>
        <Route path="/" exact component={MovieListContainer} />
        <Route path="/movies/:id" exact component={MovieLike} />
        <Route path="/wishList" exact component={WishList} />
      </div>
    </Router>
  );
};

export default App;
