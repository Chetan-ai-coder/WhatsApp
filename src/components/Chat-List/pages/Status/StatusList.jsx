"use client"
import { Camera, PenTool } from 'lucide-react';
import StatusCard from "./StatusCard";
import { statusData } from "../../../../data/statusData";
import Elon from "../../../../assets/images/Elon.png";
import ChannelsPreview from "./ChannelsPreview";
import { useState } from "react";

export default function StatusList() {

    const [videoSrc, setVideoSrc] = useState(null);

    return (
        <>
            <div className="flex flex-col">

                {/* Status Section  */}
                <div className="my-5 px-3 flex justify-between items-center">
                    <h1 className="text-[15px] font-semibold">Status</h1>

                    <div className="flex justify-center items-center gap-5">

                        <div className="flex justify-center items-center p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                            <Camera size={20} className="text-gray-700" />
                        </div>

                        <div className="flex justify-center items-center p-1 hover:bg-gray-100 rounded-full cursor-pointer">
                            <PenTool size={20} className="text-gray-700" />
                        </div>
                    </div>
                </div>

                {/* Status Card */}
                <div className="w-full overflow-x-auto scrollbar-hide pl-3 scroll-pl-3">
                    <div className="mb-5 flex justify-between gap-3">
                        {statusData.map((status) => (
                            <StatusCard
                                key={status.id}
                                name={status.name}
                                img={status.img}
                                stat={status.stat}
                                openVideo={setVideoSrc}
                            />
                        ))}
                    </div>
                </div>

                {/* Video Modal */}
                {videoSrc && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

                        <div className="relative w-[500px] max-w-[90%] rounded-xl overflow-hidden">

                            <button
                                onClick={() => setVideoSrc(null)}
                                className="absolute top-2 right-3 text-white text-xl z-10"
                            >
                                ✕
                            </button>

                            <video
                                controls
                                autoPlay
                                className="w-full h-full"
                            >
                                <source src={videoSrc} type="video/mp4" />
                            </video>

                        </div>

                    </div>
                )}

                {/* Following Channels Section */}
                <div className="mt-5 mb-2 px-3 flex justify-between items-center">
                    <h1 className="text-[15px] font-semibold">Channels</h1>

                    <div className="flex justif-center items-center gap-5">

                        <div className="flex justify-center items-center px-3 py-[2px] text-[15px] bg-[#000000]/4 rounded-full">
                            Explore
                        </div>

                    </div>
                </div>

                <div className="px-3">
                    <ChannelsPreview
                    message={`The channel "Elon" was created`}
                    date = "03/08/26" 
                    />
                </div>

                {/* Explore Channels Section */}
                 <div className="mt-5 mb-2 px-3 flex justify-between items-center">
                    <h1 className="text-[15px] font-semibold">Find channels to follow</h1>
                </div>

                <div className="px-3">
                    <ChannelsPreview
                    message={`231M followers`}
                    items="center" 
                    btn="Follow"
                    />
                    <ChannelsPreview
                    message={`231M followers`}
                    items="center" 
                    btn="Follow"
                    />
                    <ChannelsPreview
                    message={`231M followers`}
                    items="center" 
                    btn="Follow"
                    />
                    <ChannelsPreview
                    message={`231M followers`}
                    items="center" 
                    btn="Follow"
                    />
                </div>

            </div>





        </>
    );
}
