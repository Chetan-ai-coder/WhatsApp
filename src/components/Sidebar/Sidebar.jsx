import { MessageCircle, Phone, AlertCircle, Archive, Star, Settings, Zap } from 'lucide-react'

export default function Sidebar({ active, onChange }) {

  const utilities = [
    { id: "messages", icon: MessageCircle, label: "Messages" },
    { id: "call", icon: Phone, label: "Calls" },
    { id: "status", icon: AlertCircle, label: "Status" },
  ];

  const operations = [
    { id: "archived", icon: Archive, label: "Archived" },
    { id: "starred", icon: Star, label: "Starred" },
  ];

  const utilityBase = "w-12 h-12 flex justify-center items-center rounded-[5px]";

  const renderIcon = (item) => {
    const IconComponent = item.icon;
    return (
      <div
        key={item.id}
        onClick={() => onChange(item.id)}
        className={`${utilityBase} hover:bg-[#dadada] cursor-pointer transition-colors ${
          active === item.id ? "bg-[#dadada]" : ""
        }`}
        title={item.label}
      >
        <IconComponent size={24} className="text-gray-700" />
      </div>
    );
  };

  return (
    <div className="w-17 h-full bg-[#f2f2f2] flex flex-col justify-between items-center py-5 px-2.5 border-r border-[#d7d7d7] overflow-hidden">

      <div className="flex flex-col gap-2 w-full items-center">
        {utilities.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7]" />
        {operations.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7]" />
        {renderIcon({ id: "meta", icon: Zap, label: "Meta AI" })}
      </div>

      {renderIcon({ id: "settings", icon: Settings, label: "Settings" })}
    </div>
  );
}
