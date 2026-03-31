"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import ChatList from "@/components/ChatList/ChatList";
import ChatWindow from "@/components/ChatWindow/ChatWindow";
import { Chat } from "@/data/chats";

export default function ChatsPage() {
  const [activeSection, setActiveSection] = useState("messages");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className="w-screen h-screen flex justify-start items-center overflow-hidden bg-white">
      {/* Sidebar - Hidden on very small tablets, visible on tablets and desktop */}
      <div className="hidden lg:flex h-full">
        <Sidebar active={activeSection} onChange={setActiveSection} />
      </div>

      {/* Chat List - Responsive width */}
      <div className="hidden md:flex h-full flex-shrink-0 lg:w-auto">
        <ChatList active={activeSection} onSelectChat={setSelectedChat} />
      </div>

      {/* Chat Window - Takes remaining space, full width on tablet landscape */}
      <div className="flex-1 h-full flex items-center justify-center overflow-hidden">
        <ChatWindow chat={selectedChat} />
      </div>
    </div>
  );
}
