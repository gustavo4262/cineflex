import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies";
    const request = axios.get(url);

    request.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="home">
      <h1>Selecione o filme</h1>
      <div className="movies">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id}></Movie>
        ))}
      </div>
    </div>
  );
}
