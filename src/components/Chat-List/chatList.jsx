import ChatListHeader from "./ChatListHeader";
import ChatBody from "./pages/Chats/ChatBody";
import { chats } from "../../data/chats";
import Calls from "./pages/calls/callsPage";
import Status from "./pages/Status/StatusPage";

export default function ChatList({active}) {
  return (
    <div className="w-85 h-screen flex flex-col border-r border-[#dadada]">

        {/* Header Switch */}
      {active === "messages" && <ChatListHeader title = "Chats" />}
      {active === "call" && <ChatListHeader title = "Calls" />}
      {active === "status" && <ChatListHeader title = "Updates" />}

      {/* Body Switch */}
      {active === "messages" && <ChatBody chats={chats} /> }
      {active === "call" && <Calls /> }
      {active === "status" && <Status /> }

    </div>
  );
}
