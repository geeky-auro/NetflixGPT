import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  // fetch trailer video
  const fetchTrailerVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailer = data?.results?.filter(
      (video, index) => video.type === "Trailer"
    );
    console.log(trailer[0]);
  };

  useEffect(() => {
    fetchTrailerVideo();
  }, []);
  return (
    <div>
      <iframe
        width="1520"
        height="607"
        src="https://www.youtube.com/embed/LH1J1EbqCaI?autoplay=1&loop=1&controls=0"
        title="Sonic Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
