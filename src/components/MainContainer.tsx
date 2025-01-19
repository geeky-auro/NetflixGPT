import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);

  // Early Return
  if (!movies) return;

  const mainMovie = movies.results[0];
  const { original_title, overview, id } = mainMovie;
  console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
