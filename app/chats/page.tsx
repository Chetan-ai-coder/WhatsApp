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
    <div className="w-screen h-screen flex justify-start items-center overflow-hidden">
      <Sidebar active={activeSection} onChange={setActiveSection} />

      <ChatList active={activeSection} onSelectChat={setSelectedChat} />

      <ChatWindow chat={selectedChat} />
    </div>
  );
}
