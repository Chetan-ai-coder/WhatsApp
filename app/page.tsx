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
    <div className="w-screen h-screen bg-[#FCF5EB] flex flex-col justify-start items-center overflow-auto">
      {/* Header */}
      <header className="w-full px-10 py-2">
        <div className="logo flex items-center gap-1.5 text-[22px] font-bold text-[#25D366]">
          <Image
            src="/icons/whatsapp-logo-full.svg"
            alt="logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          WhatsApp
        </div>
      </header>

      {/* Main Section */}
      <div className="w-full max-w-5xl mt-5 flex flex-col justify-center items-center text-center gap-5 px-4">
        {/* Window Section */}
        <div className="w-full max-w-4xl bg-white border border-black rounded-[20px] px-10 py-6 flex flex-wrap justify-between items-center gap-4">
          <div>
            <Image
              src="/icons/whatsapp-window.svg"
              alt="Whatsapp Window Logo"
              width={68}
              height={68}
              className="w-17 h-17"
            />
          </div>

          <div className="flex flex-col justify-center items-start text-start flex-1 min-w-[200px]">
            <h2 className="font-semibold">Download WhatsApp for Windows</h2>
            <p className="text-sm text-gray-600">
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </p>
          </div>

          <div>
            <button className="bg-[#25D366] rounded-full border border-black flex justify-center items-center gap-3 px-8 py-3 hover:bg-[#1da851] transition-colors">
              Download
              <Download size={14} />
            </button>
          </div>
        </div>

        {/* Login Steps Section */}
        <div className="w-full max-w-4xl bg-white border border-black rounded-[20px] px-8 md:px-15 py-10 md:py-15 flex flex-wrap justify-between items-start gap-8">
          <div className="flex flex-col justify-center items-start text-start flex-1 min-w-[300px] gap-7">
            <h1 className="text-[32px] font-bold">Steps to log in</h1>

            <ol className="flex flex-col justify-between items-start gap-4 text-[18px] relative">
              <li className="flex justify-start items-center gap-3 z-[4]">
                <div className="border border-black rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                  1
                </div>
                <div className="flex justify-center items-center gap-1">
                  Open WhatsApp
                  <Image
                    className="bg-[#69e382] w-6 h-6 p-1 rounded-[5px]"
                    src="/images/logos_whatsapp.png"
                    alt=""
                    width={24}
                    height={24}
                  />
                  on your phone
                </div>
              </li>

              <li className="flex justify-start items-center gap-3 z-[4]">
                <div className="border border-black rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                  2
                </div>
                <div className="flex justify-start items-center gap-[3px] flex-wrap">
                  On Android tap Menu
                  <EllipsisVertical className="bg-[#f7f8fa] border border-[#959393] rounded-[7px] w-5 h-6 pt-[3px] pb-[3px]" />
                  . On iPhone tap Settings
                  <Cog className="bg-[#f7f8fa] border border-[#959393] rounded-[7px] w-6 h-6 p-[2px]" />
                </div>
              </li>

              <li className="flex justify-start items-center gap-3 z-[4]">
                <div className="border border-black rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                  3
                </div>
                Tap Linked devices, then Link device
              </li>

              <li className="flex justify-start items-center gap-3 z-[4]">
                <div className="border border-black rounded-full w-6 h-6 flex justify-center items-center bg-white text-[14px]">
                  4
                </div>
                Scan the QR code to confirm
              </li>

              <div className="absolute mt-1 mb-0 h-[calc(100%-24px)] w-[1px] bg-black ml-[12.5px] z-[1]"></div>
            </ol>

            <div className="flex justify-start items-center text-start w-full gap-3">
              <input
                type="checkbox"
                name="logged"
                id="logged"
                className="w-4 h-4 ml-[4px]"
              />
              <label htmlFor="logged">Stay logged in this browser</label>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center text-start min-w-[200px]">
            <Image
              className="w-60 h-60"
              src="/images/qr-code.png"
              alt="QR Code"
              width={240}
              height={240}
            />

            <div className="mt-10 flex justify-center items-center text-center w-full">
              <Link
                href="/chats"
                className="underline underline-offset-4 decoration-[#65d072] font-semibold hover:text-[#25D366] transition-colors"
              >
                Log in with phone number
              </Link>
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-4xl flex flex-col justify-center items-center text-center gap-4 mt-7 pb-8 px-4">
        <h1 className="font-[500] text-[18px] flex justify-center items-center gap-1 flex-wrap">
          {"Don't have a WhatsApp account?"}
          <a
            href="#"
            className="underline underline-offset-4 decoration-[#65d072] font-semibold"
          >
            Get started
          </a>
          <ArrowUpRight size={20} />
        </h1>

        <p className="text-[#64625e] text-[17px] flex justify-center items-center text-center gap-1">
          <LockKeyhole size={18} />
          Your personal messages are end-to-end encrypted
        </p>

        <p className="text-[#64625e] text-[12px]">Terms & Privacy Policy</p>
      </div>
    </div>
  );
}
