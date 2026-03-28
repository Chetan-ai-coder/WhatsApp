import Elon from "../../../../assets/images/Elon.png";
import Incoming from "../../../../assets/icons/Incoming.svg";
import VoiceCallHover from "../../../../assets/icons/Incoming Hover.svg";
import VideoCallHover from "../../../../assets/icons/VideoCall.svg";
import InfoHover from "../../../../assets/icons/Info.svg";

export default function CallsPreview() {
    return (

            <div className="w-full flex justify-between items-center hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px] cursor-pointer group">
                {/* Left */}
                <div className="flex items-center gap-2.5">
                    <img
                        src={Elon}
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    />

                    <div>
                        <h1 className="text-[15px] font-semibold">Elon</h1>
                        <div className=" flex justify-start items-center gap-[2px]">
                            <img src={Incoming} alt="Incoming" className="inline w-3 h-3 mr-1" />
                            <p className="text-[14px] text-[#5f6161] max-w-[180px]">Incoming</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-end gap-1 group-hover:hidden">
                    <span className="text-[14px] text-[#5f6161]">12:23 PM</span>
                </div>

                {/* Hover Icons */}
                <div className="hidden group-hover:flex gap-2">

                    <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md">
                        <img src={VoiceCallHover} alt="Voice Call" className="w-5 h-5" />
                    </div>

                    <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md">
                  <img src={VideoCallHover} alt="Video Call" className="w-5 h-5" />
                    </div>

                    <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md">
                        <img src={InfoHover} alt="Call Info" className="w-5 h-5" />
                    </div>
                </div>
            </div>
    );
};