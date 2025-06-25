
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams  } from "react-router-dom";
import axios  from "axios";
import { Button } from "@chakra-ui/react";






function DetailMovie (){
    const {id} = useParams();

    const [movie, setMovie] = useState("");

    useEffect(() => {
      async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }

    getDetailMovie();
    } ,[]);

    return(
        <>
        
        <div>
             <Navbar />
             
            < img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
          
        </div>
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <Button >Watch</Button>
        </div>
           <Footer />
        {/* <h2> Detail Movie ID : {params.id}</h2> */}
        </>
    )
}


export default DetailMovie;