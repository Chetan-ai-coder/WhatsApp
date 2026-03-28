import Message from "../../assets/icons/Message.svg";
import Call from "../../assets/icons/Call.svg";
import Status from "../../assets/icons/Status.svg";
import Archived from "../../assets/icons/Archived.svg";
import Star from "../../assets/icons/Star.svg";
import Meta from "../../assets/icons/metaai-color.svg";
import Setting from "../../assets/icons/Setting.svg";

export default function Sidebar({ active, onChange }) {

  const utilities = [
    { id: "messages", icon: Message },
    { id: "call", icon: Call },
    { id: "status", icon: Status },
  ];

  const operations = [
    { id: "archived", icon: Archived },
    { id: "starred", icon: Star },
  ];

  const utilityBase = "w-12 h-12 flex justify-center items-center rounded-[5px]";

  const renderIcon = (item) => (
    <div
      key={item.id}
      onClick={() => onChange(item.id)}
      className={`${utilityBase} hover:bg-[#dadada] ${
        active === item.id ? "bg-[#dadada]" : ""
      }`}
    >
      <img src={item.icon} className="w-6 h-6" />
    </div>
  );

  return (
    <div className="w-17 h-full bg-[#f2f2f2] flex flex-col justify-between items-center py-5 px-2.5 border-r border-[#d7d7d7] overflow-hidden">

      <div className="flex flex-col gap-2 w-full items-center">
        {utilities.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7]" />
        {operations.map(renderIcon)}
        <hr className="w-full border-[#d7d7d7]" />
        {renderIcon({ id: "meta", icon: Meta })}
      </div>

      {renderIcon({ id: "settings", icon: Setting })}
    </div>
  );
}
