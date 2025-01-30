import Background from "./Background";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <Background />
      </div>
      <div className="relative z-35">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
