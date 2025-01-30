import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  const showGptSearchStatus = useSelector(
    (store: any) => store.gpt?.showGptSearch
  );

  return (
    <div>
      <Header />
      {showGptSearchStatus ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
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
