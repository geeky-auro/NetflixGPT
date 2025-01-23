import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store: any) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies?.results}
        />
        <MovieList
          title={"Trending"}
          movies={movies?.nowPlayingMovies?.results}
        />
        <MovieList title={"Popular"} movies={movies?.popularMovies?.results} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.nowPlayingMovies?.results}
        />
        <MovieList
          title={"Horror"}
          movies={movies?.nowPlayingMovies?.results}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
