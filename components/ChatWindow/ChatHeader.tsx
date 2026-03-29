import Image from "next/image";
import { Chat } from "@/data/chats";

interface ChatHeaderProps {
  chat: Chat | null;
}

export default function ChatHeader({ chat }: ChatHeaderProps) {
  if (!chat) return null;

  return (
    <div className="w-full h-17 flex justify-between items-center px-3">
      {/* Title */}
      <div className="flex items-center gap-3">
        <Image
          src={chat.avatar}
          alt={chat.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />

        <h2 className="text-[15px] font-medium">{chat.name}</h2>
      </div>

      {/* Contact Details */}
      <div className="flex justify-center items-center gap-2">
        <div className="w-10 h-9 hover:bg-[#f6f5f4] flex justify-center items-center rounded-[6px] cursor-pointer">
          <Image src="/icons/vidcall.svg" alt="Video Call" width={24} height={24} />
        </div>
        <div className="w-9 h-9 hover:bg-[#f6f5f5] flex justify-center items-center rounded-[6px] cursor-pointer">
          <Image src="/icons/call.svg" alt="Voice Call" width={24} height={24} />
        </div>
        <div className="w-9 h-9 hover:bg-[#f6f5f5] flex justify-center items-center rounded-[6px] cursor-pointer">
          <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
