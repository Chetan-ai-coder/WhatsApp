import Elon from "../../../../assets/images/Elon.png";
export default function ChannelsPreview({message,date,btn,items= "start"}) {
    const itemsClass = items === "start" ? "items-start" : "items-center";
    return(
        <>
         <div className={`w-ful flex justify-between ${itemsClass} hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px] cursor-pointer`}>
                {/* Left */}
                <div className="flex items-center gap-2.5">
                    <img
                        src={Elon}
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    />

                    <div className="flex flex-col justify-start items-start">
                        <h1 className="text-[15px] font-semibold">Elon</h1>
                        <div className=" flex justify-start items-center gap-[2px]">
                            <p className="text-[14px] text-[#5f6161] max-w-[180px] whitespace-nowrap">{message}</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="flex gap-1 whitespace-nowrap">
                    <span className="text-[14px] text-[#5f6161]">{date}</span>
                </div>

                <div className="flex gap-1 whitespace-nowrap">
                    <button className="">{btn}</button>
                </div>

            </div>
        </>
    )
};