import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
        MainContainer
          - VideoBackground 
          - VideoTitle
        SecondaryContainer
          - MovieList *n
            - cards * n
      */}
    </div>
  );
};

export default Browse;
