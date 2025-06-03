import React from "react";
import { Flex } from "@chakra-ui/react";
import Movie from "../Movie/Movie";

function Movies({ movies = [] }) {
  return (
    <Flex wrap="wrap" gap="6" justify="center" p="6" bg="gray.50">
      {movies
        .filter((movie) => movie && movie.poster_path)
        .map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
    </Flex>
  );
}

export default Movies;
