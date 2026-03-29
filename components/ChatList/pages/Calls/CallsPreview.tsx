import Image from "next/image";

export default function CallsPreview() {
  return (
    <div className="w-full flex justify-between items-center hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px] cursor-pointer group">
      {/* Left */}
      <div className="flex items-center gap-2.5">
        <Image
          src="/images/Elon.png"
          alt="Profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h1 className="text-[15px] font-semibold">Elon</h1>
          <div className="flex justify-start items-center gap-[2px]">
            <Image
              src="/icons/incoming.svg"
              alt="Incoming"
              width={12}
              height={12}
              className="inline w-3 h-3 mr-1"
            />
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
          <Image
            src="/icons/incoming-hover.svg"
            alt="Voice Call"
            width={20}
            height={20}
          />
        </div>

        <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md">
          <Image
            src="/icons/videocall.svg"
            alt="Video Call"
            width={20}
            height={20}
          />
        </div>

        <div className="px-2 py-1 hover:bg-white border border-transparent hover:border-black/10 rounded-[5px] hover:shadow-md">
          <Image src="/icons/info.svg" alt="Call Info" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
