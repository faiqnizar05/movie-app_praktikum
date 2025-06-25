import { useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import { Box, Button as ChakraButton } from "@chakra-ui/react";
import MoviesContext from "../components/context/MoviesContext";

function Home() {
  const { movies, setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await axios.get(URL);

      if (movies.length === 0) {
        setMovies(response.data.results);
      }
    }

    fetchMovies();
  }, [movies, setMovies]);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />

        <Box my={4}>
          <ChakraButton size="sm" colorScheme="blue" mr={2}>
            SM
          </ChakraButton>
          <ChakraButton size="md" colorScheme="green" mr={2}>
            MD
          </ChakraButton>
          <ChakraButton size="lg" colorScheme="teal">
            LG
          </ChakraButton>
        </Box>

        <Movies />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
