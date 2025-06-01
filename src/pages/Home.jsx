import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";
import Button from "../components/UI/Button"; // lokal
import Heading from '../components/UI/Typography/Heading'; // lokal
import Paragraph from '../components/UI/Typography/Paragraph';

import {
  Box,
  Heading as ChakraHeading,
  Button as ChakraButton,
} from '@chakra-ui/react';

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />

        {/* Komponen lokal */}
        <Heading />
        <Paragraph />

        {/* Tombol dari Chakra UI */}
        <Box my={4}>
          <ChakraButton size="sm" colorScheme="blue" mr={2}>SM</ChakraButton>
          <ChakraButton size="md" colorScheme="green" mr={2}>MD</ChakraButton>
          <ChakraButton size="lg" colorScheme="teal">LG</ChakraButton>
        </Box>

        <Movies movies={movies} setMovies={setMovies} />
        <AddMovie movies={movies} setMovies={setMovies} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
