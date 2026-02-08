import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatList from "../components/Chat-List/chatList"


export default function Chats() {
    const [activeSection, setActiveSection] = useState("messages");
    return (
        <>
            {/* Chats Page Start */}
            <div className="w-screen h-screen flex justify-start items-center">
                <Sidebar
                    active={activeSection}
                    onChange={setActiveSection}
                />

              <ChatList active={activeSection} />

            </div>
            {/* Chats Page End*/}
        </>
    );
};