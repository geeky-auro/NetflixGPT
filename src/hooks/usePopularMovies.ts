import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const popularMovies = useSelector(
    (store: any) => store.movies.addPopularMovies
  );
  const dispatch = useDispatch();
  const getPopularPlayingMovies = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const data = await api.json();
    dispatch(addPopularMovies(data));
  };
  useEffect(() => {
    !popularMovies && getPopularPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
