import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const MessageHeader = () => {
  return (
    <div className="bg-white/20 pl-2 pr-1 py-1 mb-2 rounded-full flex justify-between items-center">
      <div>
        <span className="text-gray-900 flex items-center text-white gap-x-2 font-semibold text-sm">
          <IoChatbubbleEllipsesOutline size="16" /> Ram Kumar
        </span>
      </div>
      <div className="avatar">
        <div className="ring-white/40 w-7 rounded-full ring-1">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
