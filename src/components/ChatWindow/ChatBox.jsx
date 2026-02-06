import BGLogo from "../../assets/icons/BGLogo.svg";

export default function ChatBox() {
    return(
        <>
        <div className="flex-1 h-full bg-[#e9e9e9] flex flex-col justify-center items-center gap-5">

            <img src={BGLogo} alt="WhatsApp Logo" />

            <h1 className="text-[#5f6161] text-[25px] font-[500]" >WhatsApp for Mac</h1>
        </div>
        </>
    );
};