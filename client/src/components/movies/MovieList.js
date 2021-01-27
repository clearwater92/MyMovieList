import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IMAGE_BASE_URL } from '../../apis/fetchMovieData';
import { GrCircleInformation } from 'react-icons/gr';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const notPreparedImg =
  'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=369&q=80';

const Movie = ({ info }) => {
  return (
    <div className="movie" key={info.id}>
      <img
        alt={info.original_title}
        src={
          info.backdrop_path
            ? `${IMAGE_BASE_URL}w1280${info.backdrop_path}`
            : notPreparedImg
        }
      ></img>
      <div className="movie-info">
        <h3>{info.title}</h3>
        <div>
          <Link to={`/movies/detail/${info.id}`}>
            <GrCircleInformation />
          </Link>
          <Link to={`/movies/${info.id}`}>
            <BsHeartFill />
          </Link>
        </div>

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
