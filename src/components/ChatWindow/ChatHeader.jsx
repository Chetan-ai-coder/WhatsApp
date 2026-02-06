import Compose from "../../assets/icons/Compose.svg";
import Search from "../../assets/icons/Search.svg";

export default function ChatHeader() {
    return (
        <>
            {/* Chat Header Start */}
            <div className="w-full flex flex-col justify-start items-start gap-2 py-2.5 px-3">

                {/* Header Title Section Start */}
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-[18px] font-semibold text-[#272727] ">Chats</h1>
                    <div className="w-10 h-10 flex justify-center items-center hover:bg-[#f2f2f2] rounded-[5px] ">
                        <img src={Compose} alt="Compose" className="w-6 h-6" />
                    </div>
                </div>
                {/* Header Title Section Start */}

                {/* Search Bar Start */}
                <div className="w-full flex justify-start items-center relative">
                    <img src={Search} alt="Search" className="w-[14px] h-[14px] absolute ml-2" />
                    <input type="text" className="border-solid border-1 border-[#e6e6e6] w-full rounded-[5px] px-7 py-1 text-[14px]" placeholder="Search" />
                </div>
                {/* Search Bar End */}
            </div>
            {/* Chat Header End */}
        </>
    );
};