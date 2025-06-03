import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Heading from '../components/UI/Typography/Heading';
import Paragraph from '../components/UI/Typography/Paragraph';
import Movies from '../components/Movies/Movies';

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      const response = await axios.get(URL); 
      setMovies(response.data.results);
      // console.log(response.data.results);
    }

    fetchPopularMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Heading level={2}>Popular Movies</Heading>
      <Paragraph>
        Daftar film populer yang banyak ditonton.
      </Paragraph>
      <Movies movies={movies} />
      <Footer />
    </>
  );
}

export default Popular;
