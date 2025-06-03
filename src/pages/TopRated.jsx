import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Heading from '../components/UI/Typography/Heading';
import Paragraph from '../components/UI/Typography/Paragraph';
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies";

// Tugas 5 pada pertemuan 12 ini melanjutkan intruksi dari praktikum yaitu popular namun untuk tugas 5 ini hanya menambahkan dibagian NoPlaying dan TopRated menggunakan API dari TMDB, pada TMDB ini sudah menyediakan data api dan kita hanya mengambil lalu mengimplamentasikan ke project praktikum.
// ●Create NowPlaying page and fetch data from now playing api.
// ●Create TopRated page and fetch data from top rated api.

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await axios.get(URL);
      setMovies(response.data.results);
      // console.log(response.data.results);
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Heading level={2}>Top Rated Movies</Heading>
      <Paragraph>
        Daftar film dengan rating tertinggi menurut TMDb.
      </Paragraph>
      <Movies movies={movies} />
      <Footer />
    </>
  );
}

export default TopRated;
