"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Message } from "./ChatArea";

interface MessageInputProps {
  addMessage: (message: Message) => void;
  drafts: string;
  setDrafts: (text: string) => void;
}

export default function MessageInput({
  addMessage,
  drafts,
  setDrafts,
}: MessageInputProps) {
  const message = drafts;

  // Making Text Area Stable
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [message]);

  // Auto Focus on the input
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [addMessage]);

  // Sending Data to the Chat Area
  function handleSend() {
    if (message.trim() === "") return;

    const now = new Date();

    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      time: time,
      status: "sending",
    };

    addMessage(newMessage);
    setDrafts("");
  }

  // Change on Input
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDrafts(e.target.value);
  }

  // Send data on enter
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="w-full bg-[#f5f1ec] px-2 md:px-3 py-2 flex items-end gap-1 md:gap-2 flex-shrink-0">
      {/* Add File Button */}
      <div className="flex justify-center items-center hover:bg-[#dcdcdc] w-8 h-8 md:w-9 md:h-9 rounded-full cursor-pointer transition-colors flex-shrink-0">
        <Image 
          src="/icons/icoplus.svg" 
          alt="Add File" 
          width={24} 
          height={24}
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </div>

      {/* Message Input Area */}
      <div className="flex justify-center items-center flex-1 relative w-full">
        <textarea
          ref={textareaRef}
          className="border border-[#cccccc] rounded-2xl pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-opacity-50 w-full resize-none overflow-y-hidden max-h-[120px] min-h-[36px] text-sm md:text-base"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Message"
          rows={1}
        />
        <Image
          src="/icons/icoemoji.svg"
          alt="Emoji"
          width={24}
          height={24}
          className="absolute right-2 bottom-2 cursor-pointer w-5 h-5 md:w-6 md:h-6 hover:opacity-70 transition-opacity"
        />
      </div>

      {/* Action Button Mic & Send */}
      <div
        onClick={handleSend}
        className="flex justify-center items-center hover:bg-[#dcdcdc] w-8 h-8 md:w-9 md:h-9 rounded-full cursor-pointer transition-colors flex-shrink-0"
      >
        <Image
          src={message.trim() === "" ? "/icons/icomic.svg" : "/icons/cta-icon.svg"}
          alt="Action Icon"
          width={24}
          height={24}
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </div>
    </div>
  );
}
