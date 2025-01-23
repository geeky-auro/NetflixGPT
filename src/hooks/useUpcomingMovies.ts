import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingPlayingMovies = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const data = await api.json();
    dispatch(addUpcomingMovies(data));
  };
  useEffect(() => {
    getUpcomingPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
