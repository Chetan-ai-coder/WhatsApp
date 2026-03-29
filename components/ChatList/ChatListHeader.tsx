import Image from "next/image";

interface ChatListHeaderProps {
  title: string;
}

export default function ChatListHeader({ title }: ChatListHeaderProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2 py-2.5 px-3">
      {/* Header Title */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[18px] font-semibold text-[#272727]">{title}</h1>
        <div className="w-10 h-10 flex justify-center items-center hover:bg-[#f2f2f2] rounded-[5px] cursor-pointer">
          <Image src="/icons/compose.svg" alt="Compose" width={24} height={24} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full flex justify-start items-center relative">
        <Image
          src="/icons/search.svg"
          alt="Search"
          width={14}
          height={14}
          className="absolute ml-2"
        />
        <input
          type="text"
          id="searchbar"
          className="border border-[#e6e6e6] w-full rounded-[5px] px-7 py-1 text-[14px]"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
