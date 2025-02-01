import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store: any) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-12 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMovies?.results}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies?.topRatedMovies?.results}
        />
        <MovieList title={"Popular"} movies={movies?.popularMovies?.results} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.upcomingMovies?.results}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
