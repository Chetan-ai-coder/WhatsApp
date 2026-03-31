import Image from "next/image";
import { Chat } from "@/data/chats";

interface ChatHeaderProps {
  chat: Chat | null;
}

export default function ChatHeader({ chat }: ChatHeaderProps) {
  if (!chat) return null;

  return (
    <div className="w-full h-17 flex justify-between items-center px-3 md:px-4 lg:px-6 py-2 border-b border-[#e6e6e6] bg-white flex-shrink-0">
      {/* Title Section */}
      <div className="flex items-center gap-2 md:gap-3 min-w-0">
        <Image
          src={chat.avatar}
          alt={chat.name}
          width={40}
          height={40}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
        />

        <div className="min-w-0">
          <h2 className="text-sm md:text-base lg:text-[15px] font-medium truncate">
            {chat.name}
          </h2>
          <p className="text-xs md:text-sm text-[#5f6161] truncate hidden md:block">
            Online
          </p>
        </div>
      </div>

      {/* Contact Actions - Responsive icon sizes */}
      <div className="flex justify-center items-center gap-1 md:gap-2 flex-shrink-0">
        {/* Video Call Button */}
        <div className="w-8 h-8 md:w-10 md:h-9 hover:bg-[#f6f5f4] flex justify-center items-center rounded-[6px] cursor-pointer transition-colors">
          <Image 
            src="/icons/vidcall.svg" 
            alt="Video Call" 
            width={24} 
            height={24}
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </div>

        {/* Voice Call Button */}
        <div className="w-8 h-8 md:w-9 md:h-9 hover:bg-[#f6f5f5] flex justify-center items-center rounded-[6px] cursor-pointer transition-colors">
          <Image 
            src="/icons/call.svg" 
            alt="Voice Call" 
            width={24} 
            height={24}
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </div>

        {/* Search Button */}
        <div className="w-8 h-8 md:w-9 md:h-9 hover:bg-[#f6f5f5] flex justify-center items-center rounded-[6px] cursor-pointer transition-colors">
          <Image 
            src="/icons/search.svg" 
            alt="Search" 
            width={20} 
            height={20}
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </div>
      </div>
    </div>
  );
}
