import { useRef } from "react";
import { Search } from "lucide-react"

const SearchBlogInput = ({ setSearchTerm }) => {
  const searchRef = useRef();

  return (
    <div className="text-black border-2 border-base-color p-1 px-6 flex-center-y min-w-[300px] md:min-w-[450px] lg:min-w-[550px] h-[50px] my-3 ">
      <input
        type="text"
        ref={searchRef}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for blogs ..."
        className="flex-1 outline-none h-full text-lg font-semibold"
      />
      <Search
        onClick={() => setSearchTerm(searchRef.current.value)}
        className="text-base-color hover:scale-105 transition-all cursor-pointer"
      />
    </div>
  );
};

export default SearchBlogInput;
