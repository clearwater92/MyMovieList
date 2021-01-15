import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import { IMAGE_BASE_URL } from '../../apis/fetchMovieData';
import { BsHeartFill } from 'react-icons/bs';

const Movie = ({ info }) => {
	const like = () => {
		console.log(info);
	}

  return (
    <Card key={info.id}>
      <Card.Img
        alt={info.original_title}
        src={`${IMAGE_BASE_URL}w1280${info.backdrop_path}`}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <BsHeartFill onClick={like} />
        {/* <Card.Text>{movie.overview}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

const MovieList = ({ movies }) => {
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
