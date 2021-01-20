import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IMAGE_BASE_URL } from '../../apis/fetchMovieData';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Movie = ({ info }) => {
  return (
    <div className="movie" key={info.id}>
      <img
        alt={info.original_title}
        src={`${IMAGE_BASE_URL}w1280${info.backdrop_path}`}
      ></img>
      <div className="movie-info">
        <h3>{info.title}</h3>
        <Link to={`/movies/${info.id}`}>
          <BsHeartFill />
        </Link>
        {/* <Card.Text>{movie.overview}</Card.Text> */}
      </div>
    </div>
  );
};

const MovieList = ({ movies }) => {
  //const [like, setLike] = useState({});
  return (
    <div>
      <div className="movie-container">
        {movies.map((movie) => {
          return <Movie info={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
