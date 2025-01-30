import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langg: string = useSelector((store: any) => store.config?.lang);
  return (
    <div className="pt-[10%] flex justify-center z-10 ">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langg].placeHolder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langg].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
