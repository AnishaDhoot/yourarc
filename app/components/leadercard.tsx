import Image, { StaticImageData } from "next/image";

type TouristCardProps = {
    image: StaticImageData; // Allow both static images & URLs
    name: string;
    details: string;
};

export default function TouristCard({ image, name, details }: TouristCardProps) {
    return (    
        <div className="bg-[#CDE8E5] w-[300px] h-[450px] flex flex-col items-center hover:scale-105 hover:ease-in-out p-4 rounded-lg shadow-md">
            <div className="relative w-full h-[60%] border-2 border-black">
                {typeof image === "string" ? (
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-t-lg" />
                ) : (
                    <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-t-lg" />
                )}
            </div>
            <h1 className="font-[Inknut Antiqua] font-semibold text-xl text-center mt-2">{name}</h1>
            <h2 className="font-[Inknut Antiqua] text-lg text-center mt-1">{details}</h2>
        </div>
    );
}
