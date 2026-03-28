import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatList from "../components/Chat-List/chatList";
import ChatWindow from "../components/ChatWindow/ChatWindow"


export default function Chats() {
    const [activeSection, setActiveSection] = useState("messages");
    const [selectedChat, setSelectedChat] = useState(null);
   
    return (
        <>
            {/* Chats Page Start */}
            <div className="w-screen h-screen flex justify-start items-center overflow-hidden">
                <Sidebar
                    active={activeSection}
                    onChange={setActiveSection}
                />

                <ChatList active={activeSection} 
                onSelectChat={setSelectedChat}
                />

                <ChatWindow 
                chat={selectedChat}
                />

            </div>
            {/* Chats Page End*/}
        </>
    );
};