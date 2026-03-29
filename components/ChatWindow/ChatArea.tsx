"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Chat } from "@/data/chats";

export interface Message {
  id: number;
  text: string;
  time: string;
  status: "sending" | "sent" | "seen";
}

interface ChatAreaProps {
  chat: Chat;
  messages: Message[];
}

export default function ChatArea({ messages }: ChatAreaProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col justify-end items-end px-3 gap-2 overflow-y-auto bg-[#f5f1ec] relative">
      {/* Wallpaper */}
      <Image
        src="/images/FriendsWallpaper.jpg"
        alt="wallpaper"
        fill
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      />

      {messages.map((msg) => (
        <div
          key={msg.id}
          className="bg-[#e0fcd7] px-3 py-2 max-w-[65%] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-sm flex flex-col z-[2]"
        >
          <p className="text-[14px] break-words">{msg.text}</p>

          <span className="text-[11px] text-gray-500 flex items-center gap-1 self-end mt-1">
            {msg.time}

            <Image
              src={
                msg.status === "sending"
                  ? "/icons/mes-sending.svg"
                  : msg.status === "sent"
                  ? "/icons/mes-sended.svg"
                  : "/icons/mes-read.svg"
              }
              alt="status"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </span>
        </div>
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}
