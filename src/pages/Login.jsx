import Whatsapp from "../assets/icons/Whatsapp Logo Full.svg";
import Window from "../assets/icons/Whatsapp Window.svg";
import QR from "../assets/images/Qr Code.png";
import WhatsappLogo from "../assets/images/logos_whatsapp.png";
import { ChevronRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Download } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import { Cog } from 'lucide-react';

export default function Login() {
    return (


        // Login Page Start
        <div className="w-screen h-screen bg-[#FCF5EB] flex flex-col justify-start items-center">

            {/* Header Start */}
            <header className="w-full px-10 py-2">
                <div className="logo flex items-center  gap-1.5 text-[22px] font-bold text-[#25D366]">
                    <img src={Whatsapp} alt="logo" className="w-8 h-8" />
                    WhatsApp
                </div>
            </header>
            {/* Header End */}


            {/* Main Section Start */}


            <div className="w-5xl mt-5 flex flex-col justify-center items-center text-center gap-5">

                {/* Window Section Start */}
                <div className="w-4xl bg-[#FFFFFF] border-solid border-1 border-[black] rounded-[20px] px-10 py-6 flex justify-between items-center">

                    <div className="">
                        <img src={Window} alt="Whatsapp Window Logo" className="w-17 h-17" />
                    </div>

                    <div className="flex flex-col justify-center items-start text-start  w-[65%]">
                        <h2>Download WhatsApp for Windows</h2>
                        <p>Make calls, share your screen and get a faster experience when you  <br /> download the Windows app.</p>
                    </div>

                    <div className="">
                        <button className="bg-[#25D366] rounded-[999px] border border-black flex justify-center items-center gap-3 px-8 py-3">Download
                            <Download size={14} />
                        </button>
                    </div>
                </div>
                {/* Window Section End */}

                {/* Login Steps Section Start */}
                <div className="w-4xl bg-[#FFFFFF] border-solid border-1 border-[black] rounded-[20px] px-15 py-15 flex justify-between items-start">

                    <div className="flex flex-col justify-center items-start text-start w-[60%] gap-7">
                        <h1 className="text-[32px] text-bold ">Steps to log in</h1>

                        <div className="">
                            <ol className="flex flex-col justify-between items-start gap-4 text-[18px] relative line-height-[24px]">
                                <li className="flex justify-start items-center gap-3 z-4">
                                    <div className="border-solid border-1 border-[black] rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                                        1
                                    </div>

                                    <div className="flex justify-center items-center gap-1">
                                        Open WhatsApp<img className="bg-[#69e382] w-6 h-6 p-1 rounded-[5px]" src={WhatsappLogo} alt="" /> on your phone
                                    </div>
                                    
                                </li>

                                <li className="flex justify-start items-center gap-3 z-4">
                                    <div className="border-solid border-1 border-[black] rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                                        2
                                    </div>

                                    <div className="flex justify-start items-center gap-[3px]">
                                        On Android tap Menu
                                        <EllipsisVertical className="bg-[#f7f8fa] border-1 border-[#959393] rounded-[7px] w-5 h-6 pt-[3px] pb-[3px]" />
                                        . On Iphone tap Settings
                                        <Cog className="bg-[#f7f8fa] border-1 border-[#959393] rounded-[7px] w-6 h-6 p-[2px] " />
                                    </div>


                                </li>
                                <li className="flex justify-start items-center gap-3 z-4">
                                    <div className="border-solid border-1 border-[black] rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                                        3
                                    </div>

                                    Tap Linked devices, then Link device
                                </li>
                                <li className="flex justify-start items-center gap-3 z-4">
                                    <div className="border-solid border-1 border-[black] rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                                        4
                                    </div>

                                    Scan the QR code to confirm
                                </li>
                                <div className="absolute mt-1 mb-0 h-[calc(100%-24px)] w-[1px] bg-black ms-[12.5px] z-1 "></div>
                            </ol>


                        </div>

                        <div className="flex justify-start items-center text-start w-full gap-3">

                            <input type="checkbox" name="logged" id="logged" className="w-4 h-4 ml-[4px]" />

                            <label htmlFor="logged">Stay logged in this browser</label>
                        </div>

                    </div>

                    <div className="flex flex-col justify-between items-center text-start w-[40%] h-full">
                        <img className="w-60 h-60" src={QR} alt="QR Code" />

                        <div className="mt-10 flex justify-center items-center text-center w-full">
                            <a href="#" className="underline underline-offset-5 decoration-[#65d072] font-semibold">Log in with phone number  </a>
                            <ChevronRight size={20} />
                        </div>
                    </div>

                </div>
                {/* Login Steps Section End */}

            </div>

            {/* Login Steps Section Start */}
            <div className="w-4xl flex flex-col justify-center items-center text-center gap-4 mt-7">
                <h1 className="font-[500] text-[18px] flex justify-center items-center gap-1" >Don't have a WhatsApp account?  <a href="#" className="underline underline-offset-5 decoration-[#65d072] font-semibold">Get started</a> <ArrowUpRight size={20} /> </h1>

                <p className="text-[#64625e] text-[17px] flex justify-center items-center text-center gap-1"> <LockKeyhole size={18} /> Your personal messages are end-to-end encrypted</p>

                <p className="text-[#64625e] text-[12px]">Terms & Privacy Policy</p>
            </div>
            {/* Login Steps Section End */}


            {/* Main Section End */}

        </div>
        // Login Page End

    );
};
