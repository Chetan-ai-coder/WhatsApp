import { useState } from "react";
import MessageInput from "./MessageInput";

export default function Messages() {

    const [active, setActive] = useState("All");

    const btnBase = "font-semibold px-[14] py-2 px-3 rounded-full cursor-default";
    

    return (
        <>

            <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 px-3">

                {/* Message Category Section Start */}
                <div className="w-full flex justify-around items-center text-[14px]">
                    {["All", "Unread", "Favourites", "Groups"].map((item) => (
                        <div
                            key={item}
                            onClick={() => setActive(item)}
                            className={`${btnBase} ${
                                active === item
                                    ? "bg-[#d4fdcd] text-[#185636]"
                                    : "bg-[#f2f2f2] text-[#5f6161]"
                        }`}
                        >{item}</div>
                    ))}

                </div>
                {/* Message Category Section End */}

                {/* Messages Section Start */}
                <div className="w-full flex flex-col justify-start items-start">
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                    <MessageInput />
                </div>
                {/* Messages Section End*/}

            </div>
        </>
    );
};