export default function StatusCard({ name, img, stat, openVideo }) {
    return (
        <div
        onClick={() => openVideo(stat)}
        className="flex flex-col justify-between items-start min-w-28 h-50 rounded-[15px] px-2 py-2 relative">

            {/* Background Video */}
            <video
                autoplay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]"
            >
                <source src={stat} type="video/mp4" />
            </video>

            {/* Circle Image */}
            <div className="w-12 h-12 flex justify-center items-center rounded-full border-2 border-green-400 z-10">
                <img
                    src={img}
                    alt={name}
                    className="w-10 h-10 object-contain"
                />
            </div>

            {/* Name */}
            <p className="text-xs mt-1 text-start truncate w-16 z-10">
                {name}
            </p>
        </div>
    );
};