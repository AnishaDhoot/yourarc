import Image from "next/image";

type CountryCardProps = {
    image: string;
    name: string;
    link:string;
};

export default function CountryCard({ image, name,link }: CountryCardProps) {
    return (
        <div className="bg-[#7FC7D9] w-[25%] h-[50%] flex flex-col items-center justify-center hover:scale-105 hover:ease-in-out rounded-lg mb-8">
            <a href={`/${link}`} className="w-full h-full flex flex-col items-center">
                <div className="w-[90%] h-[200px] mt-4 overflow-hidden rounded-lg border-2 border-black">
                    <Image 
                        src={image} 
                        alt={name}   // Matches 90% of 300px width
                         // Ensures proper height
                        className=" bg-white object-contain w-full h-full w-[90%] h-[80%]"
                    />
                </div>
                <h2 className="text-black text-2xl text-center font-[Kameron] font-bold mt-2 mb-2">
                    {name}
                </h2>
            </a>
        </div>
    );
}
