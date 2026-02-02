import Whatsapp from "../assets/icons/Whatsapp Logo Full.svg";
import Window from "../assets/icons/Whatsapp Window.svg";
import Download from "../assets/icons/Download logo.svg";

export default function Login() {
    return (


        // Login Page Start
        <div className="w-screen h-screen bg-[#FCF5EB] flex flex-col justify-start items-center">

            {/* Header Start */}
            <header className="w-full px-10 py-2">
                <div className="logo flex items-center  gap-1.5 text-[22px] font-bold text-[#25D366]">
                    <img src={Whatsapp} alt="logo" className="w-8 h-8" />
                    WhatsApp
                </div>
            </header>
            {/* Header End */}


            {/* Main Section Start */}

           
            <div className="w-5xl mt-12 bg-red-300 flex flex-col justify-center items-center text-center gap-5">

                 {/* Window Section */}
                <div className="w-4xl bg-[#FFFFFF] border-solid border-1 border-[black] rounded-[20px] px-10 py-6 flex justify-between items-center">

                    <div className="">
                        <img src={Window} alt="Whatsapp Window Logo" className="w-17 h-17" />
                    </div>

                    <div className="flex flex-col justify-center items-start text-start  w-[65%]">
                        <h2>Download WhatsApp for Windows</h2>
                        <p>Make calls, share your screen and get a faster experience when you  <br /> download the Windows app.</p>
                    </div>

                    <div className="">
                        <button className="bg-[#25D366] rounded-[999px] border border-black flex justify-center items-center gap-3 px-8 py-3">Download
                            <img src={Download} alt="Whatsapp Window Logo" className="w-3 h-3" />
                        </button>
                    </div>
                </div>

                {/* Login Steps Section */}
                <div className="w-4xl bg-[#FFFFFF] border-solid border-1 border-[black] rounded-[20px] px-10 py-6 flex justify-between items-center">

                    <div className="">
                        <h1>Steps to log in</h1>

                        <div className="">
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-start text-start  w-[65%]">
                        <h2>Download WhatsApp for Windows</h2>
                        <p>Make calls, share your screen and get a faster experience when you  <br /> download the Windows app.</p>
                    </div>

                </div>

            </div>

            {/* Login Steps Section */}
        

            {/* Main Section End */}

        </div>
        // Login Page End

    );
};
