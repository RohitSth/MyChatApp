import { BiSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className="mt-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full input input-sm text-white bg-white/20 border border-white/20 placeholder:text-gray-200 focus:border-white/30 rounded-full"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 items-center pe-3"
        >
          <BiSend className="text-white" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
