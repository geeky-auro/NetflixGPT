import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const data = await api.json();

    console.log(data);
  };
  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
