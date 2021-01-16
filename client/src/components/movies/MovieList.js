import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../../apis/fetchMovieData';
import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MovieLike from './MovieLike';

const Movie = ({ info }) => {
  return (
    <Card key={info.id}>
      <Card.Img
        alt={info.original_title}
        src={`${IMAGE_BASE_URL}w1280${info.backdrop_path}`}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Link to={`/movies/like/${info.id}`}>
          <BsHeartFill />
        </Link>
        {/* <Card.Text>{movie.overview}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

const MovieList = ({ movies }) => {
  //const [like, setLike] = useState({});
  return (
    <Container>
      <div className="row row-cols-3">
        {movies.map((movie) => {
          return <Movie info={movie} key={movie.id} />;
        })}
      </div>
    </Container>
  );
};

export default MovieList;
