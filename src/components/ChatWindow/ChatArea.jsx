import { useEffect, useRef } from "react";
import { Clock, CheckCircle, CheckCircle2 } from 'lucide-react';
import Wallpaper from "../../assets/images/FriendsWallpaper.jpg";

export default function ChatArea({ messages }) {

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="w-full h-full flex flex-col justify-end items-end px-3 gap-2 overflow-y-auto bg-[#f5f1ec] relative ">

            {/* Wallpaper */}
            <img
                src={Wallpaper}
                alt="wallpaper"
                className="absolute inset-0 w-full h-full object-cover z-1"
            />

            {messages.map((msg) => (
                <div
                    key={msg.id}
                    className="bg-[#e0fcd7] px-3 py-2 max-w-[65%] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-sm flex flex-col z-2"
                >

                    <p className="text-[14px] break-words">
                        {msg.text}
                    </p>

                    <span className="text-[11px] text-gray-500 flex items-center gap-1 self-end mt-1">

                        {msg.time}

                        {msg.status === "sending" && <Clock size={14} className="text-gray-400" />}
                        {msg.status === "sent" && <CheckCircle size={14} className="text-gray-500" />}
                        {msg.status === "read" && <CheckCircle2 size={14} className="text-blue-500" />}

                    </span>

                </div>
            ))}

            <div ref={bottomRef}></div>


        </div>
    );
}
