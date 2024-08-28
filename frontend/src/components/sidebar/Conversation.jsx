import useConversation from "./../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-white/20 rounded-md px-2 py-1 cursor-pointer ${
          isSelected ? "bg-blue-500/50" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative avatar online">
          <div className="w-10 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex">
            <p className="font-semibold text-base text-gray-200">
              {conversation.fullName}
            </p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
