const MessageHeader = () => {
  return (
    <div className="bg-white/20 pl-2 pr-1 py-1 mb-2 rounded-xl flex justify-between items-center">
      <div>
        <span className="text-gray-900">Chatting with Ram Kumar</span>
      </div>
      <div className="avatar">
        <div className="ring-white/40 w-7 rounded-lg ring-1">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
