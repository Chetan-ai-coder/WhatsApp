import { Phone, Video, Search } from 'lucide-react'

export default function ChatHeader({ chat }) {

  if (!chat) return null;

  return (
    <div className="w-full h-17 flex justify-between items-center px-3">

      {/* Title */}
      <div className="flex items-center gap-3">

        <img
          src={chat.avatar}
          className="w-10 h-10 rounded-full"
        />

        <h2 className="text-[15px] font-medium">
          {chat.name}
        </h2>

      </div>

      {/* Contact Details */}
      <div className="flex justify-center items-center gap-2">
        <div className="w-10 h-9 hover:bg-[#f6f5f4] flex justify-center items-center rounded-[6px]"><Video size={20} className="text-gray-700" /></div>
        <div className="w-9 h-9 hover:bg-[#f6f5f5] flex justify-center items-center rounded-[6px]"><Phone size={20} className="text-gray-700" /></div>
        <div className="w-9 h-9 hover:bg-[#f6f5f5] flex justify-center items-center rounded-[6px]"><Search size={20} className="text-gray-700" /></div>
      </div>

    </div>
  );
}
