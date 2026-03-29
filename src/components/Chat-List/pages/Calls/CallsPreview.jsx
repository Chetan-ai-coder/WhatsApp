import Elon from "../../../../assets/images/Elon.png";
import { Phone, Video, Info, ArrowDownLeft } from 'lucide-react';

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
                        <div className="flex justify-start items-center gap-1">
                            <ArrowDownLeft size={14} className="text-green-500" />
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

                    <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md cursor-pointer">
                        <Phone size={18} className="text-green-500" />
                    </div>

                    <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md cursor-pointer">
                        <Video size={18} className="text-green-500" />
                    </div>

                    <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md cursor-pointer">
                        <Info size={18} className="text-gray-700" />
                    </div>
                </div>
            </div>
    );
};
