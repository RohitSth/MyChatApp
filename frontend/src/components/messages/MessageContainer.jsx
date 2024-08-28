import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { authUser } = useAuthContext();

  useEffect(() => {
    // Cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="py-5 md:pt-5 md:pb-5 px-5 md:pl-0 md:pr-5 flex w-full  h-full">
      <div className="size-full p-2 flex flex-col rounded-2xl overflow-hidden bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg">
        {!selectedConversation ? (
          <NoChatSelected authUser={authUser} />
        ) : (
          <>
            <MessageHeader
              selectedConversation={selectedConversation}
              authUser={authUser}
            />
            <Messages authUser={authUser} />
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

const NoChatSelected = ({ authUser }) => {
  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="avatar absolute top-1 right-1 items-center">
        <div className="ring-white/40 w-8 rounded-full ring-1">
          <img src={authUser.profilePic} />
        </div>
      </div>
      <div className="px-6 py-8 text-center text-white font-medium flex flex-col items-center gap-4">
        <p className="text-xl md:text-2xl">Welcome, {authUser.fullName}</p>
        <p className="text-sm md:text-lg text-white">
          Select a chat to start a conversation
        </p>
        <TbMessageChatbotFilled className="text-4xl md:text-6xl text-white mt-4" />
      </div>
    </div>
  );
};
