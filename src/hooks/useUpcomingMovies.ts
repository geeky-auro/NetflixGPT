import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector(
    (store: any) => store?.movies?.upcomingMovies
  );
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
    !upcomingMovies && getUpcomingPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
