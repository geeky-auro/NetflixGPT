import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store: any) => store.gpt);
  if (!movieNames) {
    return null; // Return early if movieNames are not available yet.
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          movieNames.map((gptMovie: string, index) => (
            <MovieList
              key={index}
              title={gptMovie}
              movies={movieResults[index]?.results}
            />
          ))
        }
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
