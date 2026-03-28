import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatArea from "./ChatArea";
import { useState } from "react";

export default function ChatWindow({ chat }) {

    // On Default Chat Window
    if (!chat) {
        return (
            <div className="h-full flex-1 flex items-center justify-center">
                Select a chat
            </div>
        );
    }

    const [messagesByChat, setMessagesByChat] = useState({});

    const [drafts, setDrafts] = useState({});

    function addMessage(newMessage) {
        const chatId = chat.id;

        setMessagesByChat(prev => ({
            ...prev,
            [chatId]: [...(prev[chatId] || []), newMessage]
        }));

        const id = newMessage.id;

        setTimeout(() => {
            setMessagesByChat(prev => ({
                ...prev,
                [chatId]: prev[chatId].map(msg =>
                    msg.id === id ? { ...msg, status: "sent" } : msg
                )
            }));
        }, 1000);

        setTimeout(() => {
            setMessagesByChat(prev => ({
                ...prev,
                [chatId]: prev[chatId].map(msg =>
                    msg.id === id ? { ...msg, status: "seen" } : msg
                )
            }));
        }, 3000);
    }

     const messages = messagesByChat[chat.id] || [];

    return (
        <div className="h-full flex-1 flex flex-col">

            <ChatHeader chat={chat} />

            <ChatArea chat={chat} messages={messages} />

            <MessageInput 
            addMessage={addMessage}
            drafts={drafts[chat.id] || ""}
            setDrafts={(text) =>
                setDrafts(prev => ({
                    ...prev,
                    [chat.id]: text
                }))
            }
            />

        </div>
    );
}