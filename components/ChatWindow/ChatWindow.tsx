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
      <div className="h-full w-full flex items-center justify-center bg-[#f5f1ec] p-4">
        <div className="text-center">
          <p className="text-[#5f6161] text-base md:text-lg">Select a chat to start messaging</p>
        </div>
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
    <div className="h-full w-full flex flex-col overflow-hidden">
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
