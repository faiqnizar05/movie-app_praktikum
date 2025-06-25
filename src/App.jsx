import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import CreateMovie from "./pages/Create";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Popular from "./pages/Popular";
import DetailMovie from "./pages/Detail";
import Counter from "./components/Counter";
import Heading from "./components/UI/Typography/Heading";
import Paragraph from "./components/UI/Typography/Paragraph";
import { Box, Heading as ChakraHeading } from "@chakra-ui/react";
import MoviesContext from "./components/context/MoviesContext";

function App() {
  const [movies, setMovies] = useState([]);
  const contextValue = { movies, setMovies };

  return (
    <Box padding="6">
      <ChakraHeading size="xl" mb={4}>
        Movie App
      </ChakraHeading>
      <Heading level={1} />
      <Paragraph />
      <MoviesContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/populars" element={<Popular />} />
          <Route path="/movie/top" element={<TopRated />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
        </Routes>
      </MoviesContext.Provider>
    </Box>
  );
}

export default App;
