import { useRef, useEffect } from "react";
import Plus from "../../assets/icons/icoplus.svg";
import Mic from "../../assets/icons/icomic.svg";
import Emoji from "../../assets/icons/icoemoji.svg";
import CTA from "../../assets/icons/Cta icon.svg";


export default function MessageInput({ addMessage, drafts, setDrafts }) {

    const message = drafts;

    // Making Text Area Stable
    const textareaRef = useRef(null);
    useEffect(() => {
        const el = textareaRef.current;
        if (!el) return;

        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    }, [message]);

    // Auto Focus on the input 
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [addMessage]);

    // Sending Data to the Chat Area
    function handleSend() {
        if (message.trim() === "") return;

        const now = new Date();

        const time = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

        const newMessage = {
            id: Date.now(),
            text: message,
            time: time,
            status: "sending"
        }

        addMessage(newMessage);
        setDrafts("");
    }

    // Change on Input 
    function handleChange(e) {
        setDrafts(e.target.value);
    }

    // Send data on enter
    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    }

    return (
        <>
            <div className="w-full bg-[#f5f1ec] px-3 py-2 flex items-end gap-2">

                {/* Add File Button */}
                <div className="flex justify-center items-center hover:bg-[#dcdcdc] w-9 h-9 rounded-[999px]">
                    <img src={Plus} alt="Add File" />
                </div>

                {/* Message Input Area */}
                <div className="flex justify-center items-center flex-1 relative w-full">
                    <textarea
                        ref={textareaRef}
                        className="border border-[#cccccc] rounded-2xl pl-3 pr-8 py-2 focus:outline-none w-full resize-none overflow-y-hidden max-h-[120px] min-h-[36px]"
                        value={message}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        rows={1}
                    />
                    <img src={Emoji} alt="" className="absolute right-2 bottom-2" />
                </div>

                {/* Action Button Mic & Send */}
                <div
                    onClick={handleSend}
                    className="flex justify-center items-center hover:bg-[#dcdcdc] w-9 h-9 rounded-[999px]">
                    <img
                        src={message.trim() === "" ? Mic : CTA}
                        alt="Action Icon"
                    />
                </div>

            </div>
        </>
    )
}