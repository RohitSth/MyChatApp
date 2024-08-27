import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search..."
        className="w-full input input-sm bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30 rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle btn-xs bg-black text-white hover:bg-white hover:text-black"
      >
        <IoSearchSharp className="w-4 h-4 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
