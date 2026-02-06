import Message from "../../assets/icons/Message.svg";
import Call from "../../assets/icons/Call.svg";
import Status from "../../assets/icons/Status.svg";
import Archived from "../../assets/icons/Archived.svg";
import Star from "../../assets/icons/Star.svg";
import Meta from "../../assets/icons/metaai-color.svg";
import Setting from "../../assets/icons/Setting.svg";

export default function Sidebar() {
    return (
        <>
            {/* Sidebar Start */}
            <div className="w-17 h-full bg-[#f2f2f2] flex flex-col justify-between items-center py-5 px-2.5 border-solid border-r-1 border-[#d7d7d7] ">

                <div className="w-full flex flex-col justify-start items-center gap-2">

                    {/* Utilities Icon Section Start */}
                    <div className="w-full flex flex-col justify-start items-center">

                        <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px] ">
                            <img src={Message} alt="Message" className="w-6 h-6" />
                        </div>

                        <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px]">
                            <img src={Call} alt="Call" className="w-6 h-6" />
                        </div>

                        <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px] ">
                            <img src={Status} alt="Status" className="w-6 h-6" />
                        </div>

                    </div>

                    {/* Utilities Icon Section End */}

                    <hr className="w-full h-[1px] border-[#d7d7d7] " />

                    {/* Operational Icons Section Start */}
                    <div className="w-full flex flex-col justify-start items-center">

                        <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px] ">
                            <img src={Archived} alt="Archives" className="w-6 h-6" />
                        </div>

                        <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px] ">
                            <img src={Star} alt="Star" className="w-6 h-6" />
                        </div>
                    </div>
                    {/* Operational Icons Section End */}

                    <hr className="w-full h-[1px] border-[#d7d7d7] " />

                    {/* Meta AI Icon Section Start */}
                    <div className="w-full flex flex-col justify-start items-center">
                        <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px] ">
                            <img src={Meta} alt="Star" className="w-5 h-5" />
                        </div>
                    </div>
                    {/* Meta AI Icon Section End */}
                </div>

                {/* Redirectional Icons Section Start */}
                <div className="w-full flex flex-col justify-start items-center">
                    <div className="w-12 h-12 flex justify-center items-center hover:bg-[#dadada] rounded-[5px] ">
                        <img src={Setting} alt="Setting" className="w-6 h-6" />
                    </div>
                </div>
                {/* Redirectional Icons Section End */}

            </div>
            {/* Sidebar End */}
        </>
    );
};