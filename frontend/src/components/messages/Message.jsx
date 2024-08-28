import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "./../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-200";

  const formatedTime = extractTime(message.createdAt);

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="ProfilePic" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleColor} text-black text-sm p-2`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs">
          <time className="text-xs text-white/80">{formatedTime}</time>
        </div>
      </div>
    </>
  );
};

export default Message;
