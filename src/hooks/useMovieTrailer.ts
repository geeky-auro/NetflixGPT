import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId: string) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store: any) => store.movies.movieTrailer);
  // fetch trailer video
  const fetchTrailerVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailerFilter = data?.results?.filter(
      (video: any) => video.type === "Trailer"
    );
    const trailer = trailerFilter?.length > 0 ? trailerFilter[0] : null;
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && fetchTrailerVideo();
  }, []);
};

export default useMovieTrailer;
