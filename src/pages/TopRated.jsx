import { useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from "../components/UI/Typography/Heading";
import Paragraph from "../components/UI/Typography/Paragraph";
import Movies from "../components/Movies/Movies";
import MoviesContext from "../components/context/MoviesContext";

function TopRated() {
  const { movies, setMovies } = useContext(MoviesContext);
  useEffect(() => {
    async function fetchTopRatedMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await axios.get(URL);
      setMovies(response.data.results); 
    }

    fetchTopRatedMovies();
  }, [setMovies]);

  return (
    <>
      <Navbar />
      <Heading level={2}>Top Rated Movies</Heading>
      <Paragraph>
        Daftar film dengan rating tertinggi menurut TMDb.
      </Paragraph>
      <Movies title="Top Rated" /> 
      <Footer />
    </>
  );
}

export default TopRated;
