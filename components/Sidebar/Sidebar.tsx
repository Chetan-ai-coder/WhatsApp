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
    "w-12 h-12 flex justify-center items-center rounded-[5px] cursor-pointer";

  const renderIcon = (item: { id: string; icon: string }) => (
    <div
      key={item.id}
      onClick={() => onChange(item.id)}
      className={`${utilityBase} hover:bg-[#dadada] ${
        active === item.id ? "bg-[#dadada]" : ""
      }`}
    >
      <Image src={item.icon} alt={item.id} width={24} height={24} />
    </div>
  );

  return (
    <div className="w-17 h-full bg-[#f2f2f2] flex flex-col justify-between items-center py-5 px-2.5 border-r border-[#d7d7d7] overflow-hidden">
      <div className="flex flex-col gap-2 w-full items-center">
        {utilities.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7]" />
        {operations.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7]" />
        {renderIcon({ id: "meta", icon: "/icons/metaai-color.svg" })}
      </div>

      {renderIcon({ id: "settings", icon: "/icons/setting.svg" })}
    </div>
  );
}
