import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { AiOutlineMessage } from "react-icons/ai";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="py-5 pr-5 flex">
      <div className="h-full p-2 flex flex-col rounded-2xl overflow-hidden bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg md:min-w-[450px]">
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <MessageHeader />
            <Messages />
            <div className="mt-auto">
              <MessageInput />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="avatar absolute top-1 right-1 items-center">
        <div className="ring-white/40 w-8 rounded-full ring-1">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="px-6 py-8 text-center text-white font-medium flex flex-col items-center gap-4">
        <p className="text-xl md:text-2xl">Welcome, John Doe</p>
        <p className="text-sm md:text-lg text-white">
          Select a chat to start a conversation
        </p>
        <AiOutlineMessage className="text-4xl md:text-6xl text-blue-500 mt-4" />
      </div>
    </div>
  );
};
