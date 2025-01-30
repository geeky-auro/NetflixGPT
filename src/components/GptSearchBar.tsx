import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { fetchGptResponse } from "../hooks/useFetchGptResponse";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langg: string = useSelector((store: any) => store.config?.lang);
  const gptSearchRef: any = useRef(null);
  const dispatch = useDispatch();
  const fetchMovieFromQuery = async (movie: string) => {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      API_OPTIONS
    );
    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }
    return await result.json();
  };

  const onGPTSearchClick = (e) => {
    gptSearchRef.current = e.target.value;
    const fetchData = async () => {
      const res = await fetchGptResponse(gptSearchRef.current);
      // ["The Matrix"," Inception"," Interstellar"," The Dark Knight"," Avatar"]
      const movies = res.split(",");
      const promiseArray = movies.map((movie: string) =>
        fetchMovieFromQuery(movie)
      );
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addMovieResults({
          gptMovieResults: movies,
          tmdbSearchResults: tmdbResults,
        })
      );
    };
    fetchData();
  };

  return (
    <div className="pt-[10%] flex justify-center z-10 ">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langg].placeHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={onGPTSearchClick}
        >
          {lang[langg].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
