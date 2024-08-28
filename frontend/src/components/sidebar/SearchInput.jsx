import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "./../../zustand/useConversation";
import useGetConversations from "./../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search query must be at least 3 characters long");
      return;
    }
    const conversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("The user you are looking for does not exist");
  };

  return (
    <form className="flex items-center gap-1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="w-full input input-sm bg-white/20 border border-transparent placeholder:text-gray-200 focus:border-white/30 rounded-full text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
