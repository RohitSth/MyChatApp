const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-white bg-opacity-30 backdrop-blur-sm"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-32 rounded-md bg-white bg-opacity-30 backdrop-blur-sm"></div>
          <div className="skeleton h-4 w-24 rounded-md bg-white bg-opacity-30 backdrop-blur-sm"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end mt-3">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-28 rounded-md bg-white bg-opacity-30 backdrop-blur-sm"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-white bg-opacity-30 backdrop-blur-sm"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
