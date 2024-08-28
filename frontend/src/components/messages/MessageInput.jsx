import { useState, useEffect, useCallback, useRef } from "react";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";
import toast from "react-hot-toast";

const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😊",
  "😉",
  "😋",
  "😎",
  "😍",
  "🥰",
  "😘",
  "🤩",
  "🥳",
  "🤗",
  "😇",
  "😈",
  "🤡",
  "🤪",
  "😜",
  "🤨",
  "🧐",
  "🙄",
  "😩",
  "😔",
  "😠",
  "😡",
  "🥶",
  "🥵",
  "😥",
  "😨",
  "😱",
  "🤯",
  "😩",
  "😫",
  "🥱",
  "😴",
  "😭",
];

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [showEmojiCard, setShowEmojiCard] = useState(false);
  const cardRef = useRef(null);
  const { loading, sendMessage } = useSendMessage();

  const changeEmoji = useCallback(() => {
    let newEmoji;
    do {
      newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    } while (newEmoji === currentEmoji);
    setCurrentEmoji(newEmoji);
  }, [currentEmoji]);

  useEffect(() => {
    const interval = setInterval(changeEmoji, 5000);
    return () => clearInterval(interval);
  }, [changeEmoji]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowEmojiCard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      toast.error("Message can't be empty");
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
    setShowEmojiCard(false);
  };

  return (
    <form className="mt-2 relative" onSubmit={handleSubmit}>
      <div className="relative w-full flex items-center">
        <div className="absolute right-8">
          <button
            type="button"
            className={`text-lg transition-all  duration-0 ease-in-out hover:scale-105 `}
            onMouseEnter={() => {
              changeEmoji();
            }}
            onClick={() => {
              setShowEmojiCard(!showEmojiCard);
            }}
          >
            <span className="transition-all duration-0 ease-in-out ">
              {currentEmoji}
            </span>
          </button>

          {showEmojiCard && (
            <div
              ref={cardRef}
              className="absolute z-30 right-0 bottom-8 backdrop-filter backdrop-blur-[50px] mb-2 w-64 rounded-xl bg-white p-2"
            >
              <div className="grid grid-cols-5 gap-2">
                {emojis.map((emoji, index) => (
                  <button
                    key={index}
                    type="button"
                    className="rounded-lg bg-gray-600/30 p-1 text-xl transition-all duration-75 hover:scale-110 hover:bg-gray-400/50"
                    onClick={() => handleEmojiClick(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Type a message"
          className="w-full input input-sm text-white bg-white/20 border border-white/20 placeholder:text-gray-200 focus:border-white/30 rounded-full pl-3"
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
