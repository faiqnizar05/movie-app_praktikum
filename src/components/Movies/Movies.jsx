import React, { useContext } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Movie from "../Movie/Movie";
import MoviesContext from "../context/MoviesContext";

function Movies({ title = "Latest Movies" }) {
  const { movies } = useContext(MoviesContext);

  const saring = movies.filter((m) => m);

  return (
    <Box as="section" py={10} bg="gray.50">
      {title && (
        <Heading
          as="h2"
          size="lg"
          mb={6}
          textAlign="center"
          borderBottom="4px solid"
          borderColor="blue.400"
          display="inline-block"
          pb={1}
        >
          {title}
        </Heading>
      )}

      <Flex wrap="wrap" gap={6} justify="center" px={6}>
        {saring.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </Flex>
    </Box>
  );
}

export default Movies;
