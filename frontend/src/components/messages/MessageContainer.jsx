import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="py-5 pr-5 flex">
      <div className="h-full p-2 flex flex-col rounded-2xl overflow-hidden bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg md:min-w-[450px]">
        <MessageHeader />
        <Messages />
        <div className="mt-auto">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
