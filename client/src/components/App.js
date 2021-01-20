import React from 'react';
import { Route, Router } from 'react-router-dom';
import MovieListContainer from './movies/MovieListContainer';
import MovieLike from './movies/MovieLike';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={MovieListContainer} />
				<Route path="/movies/:id" exact component={MovieLike} />
      </div>
    </Router>
  );
};

export default App;
