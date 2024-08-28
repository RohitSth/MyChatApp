import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const MessageHeader = ({ selectedConversation, authUser }) => {
  return (
    <div className="bg-white/20 pl-2 pr-1 py-1 mb-2 rounded-full flex justify-between items-center">
      <div>
        <span className="flex items-center text-white gap-x-2 font-semibold text-sm">
          <IoChatbubbleEllipsesOutline size="16" />{" "}
          {selectedConversation.fullName}
        </span>
      </div>
      <div className="avatar">
        <div className="ring-white/40 w-7 rounded-full ring-1">
          <img src={authUser.profilePic} />
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
