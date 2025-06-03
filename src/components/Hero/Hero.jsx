import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios"; 

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;

const Title = styled.h2`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const Genre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const Description = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
`;

const Image = styled.img`
  max-width: 30%;
  height: auto;
  border-radius: 25px;
`;

function Hero() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function fetchTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <Title>{movie.title}</Title>
          <Genre>{movie.genres ? movie.genres.map((g) => g.name).join(', ') : ''}</Genre>
          <Description>{movie.overview}</Description>
          <Button
              as="a"
              href={`https://www.youtube.com/watch?v=${movie?.videos?.results?.[0]?.key}&autoplay=1`}
              target="_blank"
              rel="noopener noreferrer">Watch
          </Button>
        </HeroLeft>
        <HeroRight>
          <Image
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''}
            alt={movie.title || "poster"}
          />
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;
