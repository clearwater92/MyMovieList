import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MovieListContainer from './movies/MovieListContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={MovieListContainer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
