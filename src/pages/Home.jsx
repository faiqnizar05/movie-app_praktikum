import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import Counter from "../components/Counter";
import AddMovie from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";



function Home() {

    const [movies, setMovies] = useState(data);
    return(
        <div>
            <Navbar />
            <main>
                <Hero />
                <Movies movies={movies} setMovies={setMovies} />
                <AddMovie movies={movies} setMovies={setMovies} />
                {/* <Counter /> */}
            </main>
            <Footer />
        </div>
    );
}

export default Home;