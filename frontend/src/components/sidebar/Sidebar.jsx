import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="p-5 flex">
      <div className="h-full p-2 flex flex-col rounded-lg overflow-hidden bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg">
        <SearchInput />
        <div className="divider px-2"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
