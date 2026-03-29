import Image from "next/image";

interface ChannelsPreviewProps {
  message: string;
  date?: string;
  btn?: string;
  items?: "start" | "center";
}

export default function ChannelsPreview({
  message,
  date,
  btn,
  items = "start",
}: ChannelsPreviewProps) {
  const itemsClass = items === "start" ? "items-start" : "items-center";
  
  return (
    <div
      className={`w-full flex justify-between ${itemsClass} hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px] cursor-pointer`}
    >
      {/* Left */}
      <div className="flex items-center gap-2.5">
        <Image
          src="/images/Elon.png"
          alt="Profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex flex-col justify-start items-start">
          <h1 className="text-[15px] font-semibold">Elon</h1>
          <div className="flex justify-start items-center gap-[2px]">
            <p className="text-[14px] text-[#5f6161] max-w-[180px] whitespace-nowrap">
              {message}
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      {date && (
        <div className="flex gap-1 whitespace-nowrap">
          <span className="text-[14px] text-[#5f6161]">{date}</span>
        </div>
      )}

      {btn && (
        <div className="flex gap-1 whitespace-nowrap">
          <button className="text-[#25D366] font-medium">{btn}</button>
        </div>
      )}
    </div>
  );
}
