import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

export default function ChatWindow() {
    return(
        <>
        <div className="w-85 h-screen flex flex-col border-solid border-r-1 border-[#dadada]">
            <ChatHeader />
            <Messages />
        </div>
        </>
    );
};
