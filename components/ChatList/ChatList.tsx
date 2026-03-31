"use client";

import ChatListHeader from "./ChatListHeader";
import ChatBody from "./ChatBody";
import { chats, Chat } from "@/data/chats";
import CallsPage from "./pages/Calls/CallsPage";
import StatusPage from "./pages/Status/StatusPage";
import ArchivedPage from "./pages/Archived/ArchivedPage";
import StarredPage from "./pages/Starred/StarredPage";

interface ChatListProps {
  active: string;
  onSelectChat: (chat: Chat) => void;
}

export default function ChatList({ active, onSelectChat }: ChatListProps) {
  return (
    <div className="w-85 h-screen flex flex-col border-r border-[#dadada] 
                    lg:w-80 xl:w-85 
                    max-h-screen overflow-hidden">
      {/* Header Switch */}
      {active === "messages" && <ChatListHeader title="Chats" />}
      {active === "call" && <ChatListHeader title="Calls" />}
      {active === "status" && <ChatListHeader title="Updates" />}
      {active === "archived" && <ChatListHeader title="Archived" />}
      {active === "starred" && <ChatListHeader title="Starred" />}

      {/* Body Switch */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {active === "messages" && (
          <ChatBody chats={chats} onSelectChat={onSelectChat} />
        )}
        {active === "call" && <CallsPage />}
        {active === "status" && <StatusPage />}
        {active === "archived" && <ArchivedPage />}
        {active === "starred" && <StarredPage />}
      </div>
    </div>
  );
}
