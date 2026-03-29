"use client";

interface ChatCategoriesProps {
  active: string;
  onChange: (category: string) => void;
}

export default function ChatCategories({ active, onChange }: ChatCategoriesProps) {
  const btnBase =
    "font-semibold px-3 py-2 rounded-full cursor-pointer text-[14px]";

  return (
    <div className="w-full flex justify-around items-center">
      {["All", "Unread", "Favourites", "Groups"].map((item) => (
        <div
          key={item}
          onClick={() => onChange(item)}
          className={`${btnBase} ${
            active === item
              ? "bg-[#d4fdcd] text-[#185636]"
              : "bg-[#f2f2f2] text-[#5f6161]"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
