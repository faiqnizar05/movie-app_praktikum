import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMovie = styled.div`
  width: 200px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0.5rem 0 0 0;
  }

  p {
    color: #718096;
    margin: 0.25rem 0 0 0;
  }
`;

function Movie({ movie }) {
  const tmdbImage = movie.poster_path.startsWith("http")
    ? movie.poster_path
    : `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "Unknown";

  return (
    <StyledMovie>
      <img src={tmdbImage} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;
