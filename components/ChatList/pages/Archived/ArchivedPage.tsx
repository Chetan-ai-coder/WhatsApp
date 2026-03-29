import { chats } from "@/data/chats";
import ChatPreviewItem from "../../ChatPreviewItem";

export default function ArchivedPage() {
  const archivedChats = chats.filter((chat) => chat.isArchived);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 px-3">
      {archivedChats.map((chat) => (
        <ChatPreviewItem key={chat.id} message={chat} />
      ))}
    </div>
  );
}
