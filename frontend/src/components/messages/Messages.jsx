import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMsgRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto text-white custom-scrollbar">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message.id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(5)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading && messages.length === 0 && (
        <>
          <div className="flex flex-col items-center justify-center h-full text-white">
            <div className="text-lg font-semibold mb-2">No messages yet</div>
            <div className="text-base">
              Send a message to start the conversation.
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
