import React from "react";
import Image from "next/image";

interface LeaderCardProps {
  image: string; // Ensure this is a string (path to the image)
  name: string;
  details: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ image, name, details }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-[#D8BFD8] rounded-2xl shadow-lg w-full max-w-2xl 
                    transition-all duration-300 hover:shadow-2xl hover:bg-[#C9A8C9] border border-[#B88EB8]">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 border-4 border-[#B88EB8] 
                      transition-transform duration-300 hover:scale-105">
        <Image 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          width={130} 
          height={130} 
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-[#4A235A] mb-2">{name}</h2>
        <p className="text-lg text-[#6C3483] max-w-prose">{details}</p>
      </div>
    </div>
  );
};

export default LeaderCard;