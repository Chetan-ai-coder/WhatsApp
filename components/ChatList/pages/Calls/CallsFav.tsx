import Image from "next/image";

export default function CallsFav() {
  return (
    <div className="w-full flex flex-col my-5">
      <h1 className="text-[15px] font-semibold">Favourites</h1>
      <div className="w-full flex justify-between items-center hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px] cursor-pointer">
        {/* Left */}
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 bg-black/5 rounded-full flex justify-center items-center">
            <Image src="/icons/plus.svg" alt="Add" width={24} height={24} />
          </div>

          <div>
            <p className="text-[14px] text-[#24D366] font-semibold truncate max-w-[180px]">
              Add favourite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
