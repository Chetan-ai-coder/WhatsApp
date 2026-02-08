export default function ChatPreviewItem({ message }) {
  return (
    <div className="w-full flex justify-between items-center hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px] cursor-pointer">

      {/* Left */}
      <div className="flex items-center gap-2.5">
        <img
          src={message.avatar}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h1 className="text-[15px] font-semibold">{message.name}</h1>
          <p className="text-[12px] text-[#5f6161] truncate max-w-[180px]">
            {message.lastMessage}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-1">
        <span className="text-[14px] text-[#5f6161]">{message.time}</span>

        {message.unreadCount > 0 && (
          <span className="text-white bg-[#22a156] w-5 h-5 flex justify-center items-center rounded-full text-[12px]">
            {message.unreadCount}
          </span>
        )}
      </div>

    </div>
  );
}
