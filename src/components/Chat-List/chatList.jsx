import ChatListHeader from "./ChatListHeader";
import ChatBody from "./pages/Chats/ChatBody";
import { chats } from "../../data/chats";
import Calls from "./pages/Calls/CallsPage";
import Status from "./pages/Status/StatusPage";
import Archived from "./pages/Archived/ArchivedPage";
import Starred from "./pages/Starred/StarredPage";

export default function ChatList({active, onSelectChat}) {
  return (
    <div className="w-85 h-screen flex flex-col border-r border-[#dadada]">

        {/* Header Switch */}
      {active === "messages" && <ChatListHeader title = "Chats" />}
      {active === "call" && <ChatListHeader title = "Calls" />}
      {active === "status" && <ChatListHeader title = "Updates" />}
      {active === "archived" && <ChatListHeader title = "Archived" />}
      {active === "starred" && <ChatListHeader title = "Starred" />}

      {/* Body Switch */}
      {active === "messages" && <ChatBody chats={chats} onSelectChat={onSelectChat} /> }
      {active === "call" && <Calls /> }
      {active === "status" && <Status /> }
      {active === "archived" && <Archived />}
      {active === "starred" && <Starred />}

    </div>
  );
}
