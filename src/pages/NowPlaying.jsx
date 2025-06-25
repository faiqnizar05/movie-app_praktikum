import { useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from "../components/UI/Typography/Heading";
import Paragraph from "../components/UI/Typography/Paragraph";
import Movies from "../components/Movies/Movies";
import MoviesContext from "../components/context/MoviesContext"; 

function NowPlaying() {
  const { movies, setMovies } = useContext(MoviesContext); 

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await axios.get(URL);
      setMovies(response.data.results); 
    }

    fetchNowPlayingMovies();
  }, [setMovies]);

  return (
    <>
      <Navbar />
      <Heading level={2}>Now Playing</Heading>
      <Paragraph>
        Daftar film yang sedang tayang di bioskop saat ini.
      </Paragraph>
      <Movies title="Now Playing" /> 
      <Footer />
    </>
  );
}

export default NowPlaying;
