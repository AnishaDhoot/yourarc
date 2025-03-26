import Image from "next/image";

type TouristCardProps = {
    image: string;
    heading: string;
    details: string;
};

export default function TouristCard({ image, heading, details }: TouristCardProps) {
    return (    
        <div className="bg-[#CDE8E5] w-[300px] h-[450px] flex flex-col items-center hover:scale-105 hover:ease-in-out p-4 rounded-lg shadow-md">
            <div className="relative w-full h-[60%] border-2 border-black">
                <Image src={image} alt={heading} layout="fill" objectFit="cover" className="rounded-t-lg"/>
            </div>
            <h1 className="font-[Inknut Antiqua] font-semibold text-xl text-center mt-2">{heading}</h1>
            <h2 className="font-[Inknut Antiqua] text-lg text-center mt-1">{details}</h2>
        </div>
    );
}
