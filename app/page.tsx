import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowUpRight,
  LockKeyhole,
  Download,
  EllipsisVertical,
  Cog,
} from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-screen min-h-screen bg-[#FCF5EB] flex flex-col justify-start items-center overflow-auto p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="w-full max-w-5xl px-4 md:px-6 lg:px-8 py-2 md:py-4">
        <div className="logo flex items-center gap-1 md:gap-1.5 text-lg md:text-xl lg:text-[22px] font-bold text-[#25D366]">
          <Image
            src="/icons/whatsapp-logo-full.svg"
            alt="logo"
            width={32}
            height={32}
            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          />
          <span className="truncate">WhatsApp</span>
        </div>
      </header>

      {/* Main Section */}
      <div className="w-full max-w-5xl mt-3 md:mt-5 flex flex-col justify-center items-center text-center gap-4 md:gap-5">
        {/* Window Section */}
        <div className="w-full bg-white border border-black rounded-lg md:rounded-[20px] px-4 md:px-6 lg:px-10 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/icons/whatsapp-window.svg"
              alt="Whatsapp Window Logo"
              width={68}
              height={68}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-17 lg:h-17"
            />
          </div>

          <div className="flex flex-col justify-center items-start md:items-start text-start flex-1">
            <h2 className="font-semibold text-sm md:text-base lg:text-lg">Download WhatsApp for Windows</h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </p>
          </div>

          <button className="bg-[#25D366] rounded-full border border-black flex justify-center items-center gap-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 hover:bg-[#1da851] transition-colors font-medium text-sm md:text-base flex-shrink-0 touch-highlight">
            <span>Download</span>
            <Download size={14} />
          </button>
        </div>

        {/* Login Steps Section */}
        <div className="w-full bg-white border border-black rounded-lg md:rounded-[20px] px-4 md:px-6 lg:px-8 py-6 md:py-10 lg:py-15 flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8">
          <div className="flex flex-col justify-center items-start text-start w-full lg:flex-1 gap-4 md:gap-6 lg:gap-7">
            <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold">Steps to log in</h1>

            <ol className="flex flex-col justify-start items-start gap-3 md:gap-4 text-sm md:text-base lg:text-[18px] relative">
              <li className="flex justify-start items-start gap-2 md:gap-3 z-[4]">
                <div className="border border-black rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center bg-white text-xs md:text-sm flex-shrink-0 mt-0.5">
                  1
                </div>
                <div className="flex justify-start items-center gap-1 flex-wrap flex-1">
                  Open WhatsApp
                  <Image
                    className="bg-[#69e382] w-5 h-5 md:w-6 md:h-6 p-0.5 rounded-[5px]"
                    src="/images/logos_whatsapp.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                  on your phone
                </div>
              </li>

              <li className="flex justify-start items-start gap-2 md:gap-3 z-[4]">
                <div className="border border-black rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center bg-white text-xs md:text-sm flex-shrink-0 mt-0.5">
                  2
                </div>
                <div className="flex justify-start items-center gap-1 flex-wrap flex-1">
                  On Android tap Menu
                  <EllipsisVertical className="bg-[#f7f8fa] border border-[#959393] rounded-[7px] w-4 h-5 md:w-5 md:h-6 pt-[2px] pb-[2px] flex-shrink-0" />
                  . On iPhone tap Settings
                  <Cog className="bg-[#f7f8fa] border border-[#959393] rounded-[7px] w-5 h-5 md:w-6 md:h-6 p-[2px] flex-shrink-0" />
                </div>
              </li>

              <li className="flex justify-start items-start gap-2 md:gap-3 z-[4]">
                <div className="border border-black rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center bg-white text-xs md:text-sm flex-shrink-0 mt-0.5">
                  3
                </div>
                <span className="flex-1">Tap Linked devices, then Link device</span>
              </li>

              <li className="flex justify-start items-start gap-2 md:gap-3 z-[4]">
                <div className="border border-black rounded-full w-5 h-5 md:w-6 md:h-6 flex justify-center items-center bg-white text-xs md:text-sm flex-shrink-0 mt-0.5">
                  4
                </div>
                <span className="flex-1">Scan the QR code to confirm</span>
              </li>

              <div className="absolute mt-1 mb-0 h-[calc(100%-20px)] w-[1px] bg-black ml-[10px] md:ml-[12px] z-[1]"></div>
            </ol>

            <div className="flex justify-start items-center text-start w-full gap-2">
              <input
                type="checkbox"
                name="logged"
                id="logged"
                className="w-4 h-4 flex-shrink-0"
              />
              <label htmlFor="logged" className="text-sm md:text-base cursor-pointer">Stay logged in this browser</label>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center w-full lg:w-auto gap-4">
            <div className="flex justify-center">
              <Image
                className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60"
                src="/images/qr-code.png"
                alt="QR Code"
                width={240}
                height={240}
              />
            </div>

            <div className="flex justify-center items-center text-center w-full gap-1">
              <Link
                href="/chats"
                className="underline underline-offset-4 decoration-[#65d072] font-semibold text-sm md:text-base hover:text-[#25D366] transition-colors"
              >
                Log in with phone number
              </Link>
              <ChevronRight size={16} className="md:w-5 md:h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-5xl flex flex-col justify-center items-center text-center gap-3 md:gap-4 mt-4 md:mt-7 pb-4 md:pb-8">
        <h1 className="font-medium text-sm md:text-base lg:text-[18px] flex justify-center items-center gap-1 flex-wrap">
          <span>{"Don't have a WhatsApp account?"}</span>
          <a
            href="#"
            className="underline underline-offset-4 decoration-[#65d072] font-semibold hover:text-[#25D366] transition-colors"
          >
            Get started
          </a>
          <ArrowUpRight size={16} className="md:w-5 md:h-5" />
        </h1>

        <p className="text-[#64625e] text-xs md:text-sm lg:text-[17px] flex justify-center items-center text-center gap-1 flex-wrap">
          <LockKeyhole size={16} className="md:w-[18px] md:h-[18px] flex-shrink-0" />
          <span>Your personal messages are end-to-end encrypted</span>
        </p>

        <p className="text-[#64625e] text-xs md:text-sm cursor-pointer hover:underline">Terms & Privacy Policy</p>
      </div>
    </div>
  );
}
