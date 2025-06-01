// src/components/Movie/Movie.jsx
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function Movie({ movie }) {
  return (
    <Box
      width="200px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      <Image src={movie.poster} alt={movie.title} />

      <Box p="4">
        <Text fontWeight="bold">{movie.title}</Text>
        <Text fontSize="sm" color="gray.600">
          {movie.year}
        </Text>
      </Box>
    </Box>
  );
}

export default Movie;
