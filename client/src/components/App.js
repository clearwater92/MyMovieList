import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MovieListContainer from './movies/MovieListContainer';
import MovieLike from './movies/MovieLike';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={MovieListContainer} />
				<Route path="/movies/like/:id" exact component={MovieLike} />
      </div>
    </BrowserRouter>
  );
};

export default App;
