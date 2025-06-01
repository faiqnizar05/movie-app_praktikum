import { useEffect, useState } from "react";

// disini kita tidak menggunakan lagi yang namanya Hero.module.css karena saya udah menggunakan Refactor styled components
import styled from "styled-components";

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
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

function Hero() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
      const data = await response.json();
      setMovie(data);
    }
    fetchMovie();
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <Title>{movie.Title}</Title>
          <Genre>{movie.Genre}</Genre>
          <Description>{movie.Plot}</Description>
          <Button>Watch</Button>
        </HeroLeft>
        <HeroRight>
          <Image src={movie.Poster} alt={movie.Title || "Poster"} />
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;
