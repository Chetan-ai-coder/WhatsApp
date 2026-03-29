"use client";

import { useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatArea, { Message } from "./ChatArea";
import { Chat } from "@/data/chats";

interface ChatWindowProps {
  chat: Chat | null;
}

export default function ChatWindow({ chat }: ChatWindowProps) {
  const [messagesByChat, setMessagesByChat] = useState<Record<number, Message[]>>({});
  const [drafts, setDrafts] = useState<Record<number, string>>({});

  // On Default Chat Window
  if (!chat) {
    return (
      <div className="h-full flex-1 flex items-center justify-center bg-[#f5f1ec]">
        <p className="text-[#5f6161]">Select a chat</p>
      </div>
    );
  }

  function addMessage(newMessage: Message) {
    const chatId = chat!.id;

    setMessagesByChat((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage],
    }));

    const id = newMessage.id;

    setTimeout(() => {
      setMessagesByChat((prev) => ({
        ...prev,
        [chatId]: prev[chatId].map((msg) =>
          msg.id === id ? { ...msg, status: "sent" } : msg
        ),
      }));
    }, 1000);

    setTimeout(() => {
      setMessagesByChat((prev) => ({
        ...prev,
        [chatId]: prev[chatId].map((msg) =>
          msg.id === id ? { ...msg, status: "seen" } : msg
        ),
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
          setDrafts((prev) => ({
            ...prev,
            [chat.id]: text,
          }))
        }
      />
    </div>
  );
}
