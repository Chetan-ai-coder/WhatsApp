import { useState } from "react";
import ChatCategories from "./ChatCategories";
import ChatPreviewItem from "./ChatPreviewItem";

export default function ChatBody({ chats }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredChats = chats.filter(chat => {
    if (activeFilter === "Unread") return chat.unreadCount > 0;
    if (activeFilter === "Favourites") return chat.isFavourite;
    if (activeFilter === "Groups") return chat.isGroup;
    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 px-3">

      <ChatCategories
        active={activeFilter}
        onChange={setActiveFilter}
      />

      <div className="w-full flex flex-col">
        {filteredChats.map(chat => (
          <ChatPreviewItem key={chat.id} message={chat} />
        ))}
      </div>

    </div>
  );
}
