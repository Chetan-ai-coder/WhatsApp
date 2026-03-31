"use client";

import Image from "next/image";

interface SidebarProps {
  active: string;
  onChange: (id: string) => void;
}

export default function Sidebar({ active, onChange }: SidebarProps) {
  const utilities = [
    { id: "messages", icon: "/icons/message.svg" },
    { id: "call", icon: "/icons/call.svg" },
    { id: "status", icon: "/icons/status.svg" },
  ];

  const operations = [
    { id: "archived", icon: "/icons/archived.svg" },
    { id: "starred", icon: "/icons/star.svg" },
  ];

  const utilityBase =
    "w-12 h-12 md:w-11 md:h-11 lg:w-12 lg:h-12 flex justify-center items-center rounded-[5px] cursor-pointer transition-colors hover:bg-[#dadada] active:bg-[#c1c1c1]";

  const renderIcon = (item: { id: string; icon: string }) => (
    <div
      key={item.id}
      onClick={() => onChange(item.id)}
      className={`${utilityBase} ${
        active === item.id ? "bg-[#dadada]" : "bg-transparent"
      }`}
      title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
    >
      <Image 
        src={item.icon} 
        alt={item.id} 
        width={24} 
        height={24}
        className="w-5 h-5 md:w-6 md:h-6"
      />
    </div>
  );

  return (
    <div className="w-17 md:w-16 lg:w-17 h-full bg-[#f2f2f2] flex flex-col justify-between items-center py-4 md:py-5 px-2 border-r border-[#d7d7d7] overflow-hidden flex-shrink-0">
      <div className="flex flex-col gap-2 w-full items-center">
        {utilities.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7] my-1" />
        {operations.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7] my-1" />
        {renderIcon({ id: "meta", icon: "/icons/metaai-color.svg" })}
      </div>

      {renderIcon({ id: "settings", icon: "/icons/setting.svg" })}
    </div>
  );
}
