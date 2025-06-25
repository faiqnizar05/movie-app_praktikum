import { useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from "../components/UI/Typography/Heading";
import Paragraph from "../components/UI/Typography/Paragraph";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";
import MoviesContext from "../components/context/MoviesContext"; 

function Popular() {
  const { movies, setMovies } = useContext(MoviesContext); 

  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await axios(ENDPOINTS.POPULAR);
      setMovies(response.data.results);
    }

    fetchPopularMovies();
  }, [setMovies]);

  return (
    <>
      <Navbar />
      <Heading level={2}>Popular Movies</Heading>
      <Paragraph>Daftar film populer yang banyak ditonton.</Paragraph>
      <Movies title="Popular Movies" /> 
      <Footer />
    </>
  );
}

export default Popular;
