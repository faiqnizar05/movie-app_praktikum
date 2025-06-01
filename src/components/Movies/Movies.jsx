// src/components/Movies/Movies.jsx
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import data from "../../utils/constants/data";
import Movie from "../Movie/Movie";

function Movies() {
  return (
    <Flex wrap="wrap" gap="6" justify="center" p="6" bg="gray.50">
      {data
        .filter((movie) => movie && movie.poster)
        .map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
    </Flex>
  );
}

export default Movies;
