import Elon from "../../assets/images/Elon.png"

export default function MessageInput() {
    return (
        <>
            <div className="w-full flex justify-between items-center hover:bg-[#f5f4f3] py-2.5 px-2.5 rounded-[7px]">

                <div className="flex justify-start items-center gap-2.5">
                    <div className="">
                        <img src={Elon} alt="Profile Image" />
                    </div>

                    <div className="">
                        <h1 className=" text-[15px] font-semibold">Elon Musk 🧑‍💻</h1>
                        <p className=" text-[12px] text-[#5f6161]">Tnx Chetan</p>
                    </div>
                </div>



                <div className="flex flex-col justify-center items-end gap-1">
                    <div className="text-[14px] text-[#5f6161]">5:05 PM</div>
                    <div className=" text-white bg-[#22a156] w-5 h-5 flex justify-center items-center rounded-full text-[12px]">2</div>
                </div>


            </div>
        </>
    );
};