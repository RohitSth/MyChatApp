import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { IoChatbubbles } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const Home = () => {
  const [activeTab, setActiveTab] = useState("sidebar");

  return (
    <>
      <div className="flex md:flex-row flex-col size-[80%] rounded-3xl overflow-auto  md:overflow-hidden bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div
          className={`md:block md:w-[30%] h-full ${
            activeTab === "sidebar" ? "block" : "hidden"
          }`}
        >
          <Sidebar />
        </div>
        <div
          className={`md:block md:w-[70%] h-full ${
            activeTab === "messages" ? "block" : "hidden"
          }`}
        >
          <MessageContainer />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="md:hidden flex justify-around fixed rounded-full bottom-[3%] bg-white/30 backdrop-filter backdrop-blur-sm transition-all ease-in-out duration-200 font-semibold">
        <button
          className={`py-2 pl-4 pr-2 transition-all ease-in-out duration-200 ${
            activeTab === "sidebar" ? "text-blue-500" : "text-white"
          }`}
          onClick={() => setActiveTab("sidebar")}
        >
          <FaUserFriends size="20" />
        </button>
        <button
          className={`py-2 pr-4 pl-2 transition-all ease-in-out duration-200 ${
            activeTab === "messages" ? "text-blue-500" : "text-white"
          }`}
          onClick={() => setActiveTab("messages")}
        >
          <IoChatbubbles size="20" />
        </button>
      </div>
    </>
  );
};

export default Home;
