import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="p-3 flex">
      <div className="h-full p-2 flex flex-col ">
        <SearchInput />
        <div className="rounded-xl my-4 h-full overflow-hidden bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg">
          <Conversations />
        </div>
        <div className="rounded-full p-2 flex items-center bg-transparent backdrop-filter backdrop-blur-lg">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
