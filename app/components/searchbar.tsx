import search from "@/app/assets/search.png";
import Image from "next/image";
export default function SearchBar() {
    return (
        <div className=" ml-[25%] mr-[25%] flex flex-row bg-[#FEF9F1] text-black border-2 border-[#28303D] rounded-lg mt-[2%]" >
            <input type="text" placeholder="Search courses" className="flex-[90%] bg-[#FEF9F1] text-black ml-4 rounded-lg font-[Inknut Antiqua] text-lg" />
            <Image src={search} alt="search" className="flex-[4%] p-3" />
        </div>
    );
}