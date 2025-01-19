import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store: any) => store.movies?.movieTrailer);
  const dispatch = useDispatch();

  // fetch trailer video
  const fetchTrailerVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailerFilter = data?.results?.filter(
      (video, index) => video.type === "Trailer"
    );
    const trailer = trailerFilter?.length > 0 ? trailerFilter[0] : null;
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    fetchTrailerVideo();
  }, []);
  return (
    <div>
      <iframe
        width="1520"
        height="607"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&loop=1&controls=0`}
        title="Sonic Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
