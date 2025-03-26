import pakistan from "@/app/assets/pakistn.jpeg";
import Image from "next/image";
import pakistanflag from "@/app/assets/pakistanflag.png";
import TouristCard from "@/app/components/touristcard";
import pakistantourist1 from "@/app/assets/pakistantourist1.jpeg";
import pakistantourist2 from "@/app/assets/paksitantourist2.jpg";
import pakistantourist3 from "@/app/assets/pakistantourist3.jpeg";
import pakistantourist4 from "@/app/assets/pakistantourist4.jpeg";
import pakistantourist5 from "@/app/assets/pakistantourist5.jpeg";
import pakistantourist6 from "@/app/assets/pakistantourist6.jpeg";
import pakistantourist7 from "@/app/assets/pakistantourist7.jpeg";
import pakistantourist8 from "@/app/assets/pakistantourist8.jpeg";
import pakistantourist9 from "@/app/assets/pakistantourist9.jpeg";
import pakistantourist10 from "@/app/assets/pakistantourist10.jpeg";
import pakistantourist11 from "@/app/assets/pakistantourist11.jpeg";
import pakistantourist12 from "@/app/assets/pakistantourist12.jpeg";
import LeaderCard from "@/app/components/leadercard";
import jinnah from "@/app/assets/jinnah.jpeg";
import liaquat_ali from "@/app/assets/liaquat_ali.jpeg";
import ayub_khan from "@/app/assets/ayub_khan.jpeg";
import bhutto from "@/app/assets/bhutto.jpeg";
import zia_ul_haq from "@/app/assets/zia_ul_haq.jpeg";
import benazir from "@/app/assets/benazir.jpeg";
import nawaz_sharif from "@/app/assets/nawaz_sharif.jpeg";
import musharrafpak from "@/app/assets/musharrafpak.jpeg";
import imran_khan from "@/app/assets/imran_khan.jpeg";
import zardari from "@/app/assets/zardari.jpg";
import shehbaz from "@/app/assets/shehbaz.jpeg";

export default function Pakistan() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Pakistan
            </h1>

            <div className="flex flex-row mt-6 gap-8">
                <div className="flex-[50%]">
                    <Image src={pakistan} alt="Pakistan" className="rounded-lg w-full h-auto" />
                </div>

                <div className="flex-[50%] flex flex-col gap-6">
                    <div className="flex flex-row items-center gap-6">
                        <div className="w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-2xl mb-2">Flag:</h1>
                            <Image src={pakistanflag} alt="Pakistan Flag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] flex-1 rounded-lg text-center font-[Inknut Antiqua] text-xl p-4 mt-8 h-[83%] w-[50%]">
                            <h1 className="mb-2">
                                <span className="font-bold">Capital:</span> Islamabad
                            </h1>
                            <h2>
                                Islamabad is known for its scenic beauty, modern infrastructure, and lush greenery.
                            </h2>
                        </div>
                    </div>

                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-6 rounded-lg">
                        <h1 className="text-3xl font-bold mb-3">Interesting Facts about Pakistan</h1>
                        <ul className="text-xl space-y-2">
                            <li>1. Pakistan is home to K2, the second-highest mountain in the world.</li>
                            <li>2. It has the world's largest contiguous irrigation system.</li>
                            <li>3. Pakistan hosts one of the world's oldest civilizations, the Indus Valley Civilization.</li>
                            <li>4. The country has the highest paved international road, the Karakoram Highway.</li>
                            <li>5. Pakistan is the only Muslim-majority nation with nuclear power.</li>
                            <li>6. It has some of the most beautiful valleys, including Swat and Hunza.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <h2 className="font-[Kameron] text-4xl text-white text-center mt-8">Tourist Spots</h2>
            
            <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                <TouristCard image={pakistantourist1} heading="K2" details="The second-highest mountain in the world, attracting mountaineers globally." />
                <TouristCard image={pakistantourist2} heading="Badshahi Mosque" details="One of the largest mosques in the world, known for its Mughal-era architecture." />
                <TouristCard image={pakistantourist3} heading="Hunza Valley" details="A breathtaking valley known for its stunning landscapes and hospitable people." />
                <TouristCard image={pakistantourist4} heading="Lahore Fort" details="A UNESCO World Heritage Site showcasing Mughal grandeur." />
                <TouristCard image={pakistantourist5} heading="Mohenjo-daro" details="One of the world's earliest urban settlements from the Indus Valley Civilization." />
                <TouristCard image={pakistantourist6} heading="Fairy Meadows" details="A picturesque location offering spectacular views of Nanga Parbat." />
                <TouristCard image={pakistantourist7} heading="Shandur Pass" details="Home to the world’s highest polo ground." />
                <TouristCard image={pakistantourist8} heading="Rohtas Fort" details="A historic fort built by Sher Shah Suri, known for its strategic location." />
                <TouristCard image={pakistantourist9} heading="Ranikot Fort" details="The largest fort in the world, also known as 'The Great Wall of Sindh.'" />
                <TouristCard image={pakistantourist10} heading="Swat Valley" details="Known as the 'Switzerland of Pakistan' due to its stunning natural beauty." />
                <TouristCard image={pakistantourist11} heading="Makli Necropolis" details="One of the world's largest funerary sites, rich in history and architecture." />
                <TouristCard image={pakistantourist12} heading="Skardu" details="A paradise for trekkers and adventure lovers, surrounded by mountains and lakes." />
            </div>
            <div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">
                Prominent Leaders of Pakistan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <LeaderCard image={jinnah} name="Muhammad Ali Jinnah" details="Founder of Pakistan, served as the country's first Governor-General." />
                <LeaderCard image={liaquat_ali} name="Liaquat Ali Khan" details="Pakistan’s first Prime Minister, played a key role in nation-building." />
                <LeaderCard image={ayub_khan} name="Ayub Khan" details="Pakistan's first military ruler, led the country from 1958 to 1969." />
                <LeaderCard image={bhutto} name="Zulfikar Ali Bhutto" details="Founder of PPP, introduced major reforms, executed in 1979." />
                <LeaderCard image={zia_ul_haq} name="Zia-ul-Haq" details="Military ruler from 1977 to 1988, imposed Islamic laws." />
                <LeaderCard image={benazir} name="Benazir Bhutto" details="First female Prime Minister of Pakistan, assassinated in 2007." />
                <LeaderCard image={nawaz_sharif} name="Nawaz Sharif" details="Three-time Prime Minister, known for economic policies." />
                <LeaderCard image={musharrafpak} name="Pervez Musharraf" details="Military ruler from 1999 to 2008, introduced liberal reforms." />
                <LeaderCard image={imran_khan} name="Imran Khan" details="Former cricketer turned politician, served as Prime Minister from 2018 to 2022." />
                <LeaderCard image={zardari} name="Asif Ali Zardari" details="President from 2008 to 2013, husband of Benazir Bhutto." />
                {/* <LeaderCard image={shehbaz} name="Shehbaz Sharif" details="Current Prime Minister, leader of PML-N, known for infrastructure projects." /> */}
            </div>
        </div>
        </div>
    );
}