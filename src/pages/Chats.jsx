import Sidebar from "../components/Sidebar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatBox from "../components/ChatWindow/ChatBox";

export default function Chats() {
    return(
        <>
        {/* Chats Page Start */}
        <div className="w-screen h-screen flex justify-start items-center">
            <Sidebar />
            <ChatWindow />
            <ChatBox />
        </div>
        {/* Chats Page End*/}
        </>
    );
};