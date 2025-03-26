import { HeaderCourse } from "../components/header";
import Image from "next/image";
import southasia from "@/app/assets/southasia.png";
import download from "@/app/assets/download.png";
import book from "@/app/assets/book.png";
import worldmap from "@/app/assets/worldmap.png";

export default function ExploringSouthAsia() {
    return (
        <div className="bg-[#212731] text-white">
            <HeaderCourse />
            <div className="flex flex-row gap-[1%] mb-8 mt-6">
            <div className="flex flex-col flex-[75%] gap-[2%] ml-[7%] mr-[2%]">
                <div className="bg-[#CEC2FF] rounded-2xl flex-[30%] mb-[3%]">
                    <h1 className="font-[Inknut Antiqua] font-bold text-4xl text-center text-black mt-8 ">Exploring South Asia:</h1>
                    <h2 className="font-[Inknut Antiqua] text-center text-2xl text-black mt-6 ml-4 mr-4 mb-8">
                        This course explains the South Asian countries, talks about
                        the country, its capital, its flag, the tourist spots, the
                        culture, and a lot more about the country.
                    </h2>
                </div>

                <div className="bg-[#FEF9F1] rounded-lg flex-[70%] p-4">
                    <h1 className="font-[Inknut Antiqua] font-bold text-4xl text-left ml-[5%] mr-[5%] text-black">Course content:</h1>
                    <h2 className="font-[Inknut Antiqua] text-left ml-[5%] text-2xl text-black mt-4 mb-2 font-">
                        Information about the maps, flags, capitals, leaders, tourist
                        spots, the language spoken, and interesting facts about the
                        South Asian countries. The countries discussed are:
                    </h2>
                    <ul className="font-[Inknut Antiqua] text-left ml-[5%] text-2xl text-black font-[500]">
                        <li>1. Afghanistan</li>
                        <li>2. Bangladesh</li>
                        <li>3. Bhutan</li>
                        <li>4. India</li>
                        <li>5. Maldives</li>
                        <li>6. Nepal</li>
                        <li>7. Pakistan</li>
                        <li>8. Sri Lanka</li>
                        
                    </ul>
                </div>
            </div>
            <div className="flex flex-col bg-[#7FC7D9] rounded-md flex-[25%] mr-[5%]">
                <Image src={southasia} alt="South Asia" className="w-[85%] ml-[1%] rounded-md self-center mt-[7.5%] border-2 border-black"/>
                <button className="mt-4 px-4 py-2 bg-[#FDA0B0] border-2 border-black rounded-md ml-[7.5%] mr-[7.5%] text-black font-[Inknut Antiqua] text-xl font-semibold w-[85%]">
                    <a href="/exploringsouthasia/startcourse">
                    Register Now</a>
                </button>

                <div className="flex flex-col justify-center gap-8 mt-8 ml-[7.5%] mr-[7.5%]">
                    <div className="flex flex-row items-center">
                        <Image src={book} alt="Book" className=" flex-[5%] " />
                        <h1 className="flex-[80%] ml-4 text-black font-[Inknut Antiqua] text-lg">This course contains 10 hours of readable work</h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image src={download} alt="Download" className=" flex-[5%] " />
                        <h1 className="flex-[80%] ml-4 text-black font-[Inknut Antiqua] text-lg">15+ downloadable content</h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image src={worldmap} alt="World Map" className=" flex-[5%] " />
                        <h1 className="flex-[80%] ml-4 text-black font-[Inknut Antiqua] text-lg">Information about 8 countries</h1>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-[#212731] h-[20%] color-[#212731] text-[#212731]"> .... </div>
        </div>
    );
}
