import { BiSend } from "react-icons/bi";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      toast.error("Message can't be empty");
      return;
    }
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="mt-2" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full input input-sm text-white bg-white/20 border border-white/20 placeholder:text-gray-200 focus:border-white/30 rounded-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 flex end-0 items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner text-white"></div>
          ) : (
            <BiSend className="text-white" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
