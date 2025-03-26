import bangladesh from "@/app/assets/bangladesh.png";
import Image from "next/image";
import bangladeshflag from "@/app/assets/bangladeshflag.webp";
import TouristCard from "@/app/components/touristcard";
import bangladeshtourist1 from "@/app/assets/bangladeshtourist1.jpg";
import bangladeshtourist2 from "@/app/assets/bangladeshtourist2.jpg";
import bangladeshtourist3 from "@/app/assets/bangladeshtourist3.jpeg";
import bangladeshtourist4 from "@/app/assets/bangladeshtourist4.jpeg";
import bangladeshtourist5 from "@/app/assets/bangladeshtourist5.jpeg";
import bangladeshtourist6 from "@/app/assets/bangladeshtourist6.jpeg";
import bangladeshtourist7 from "@/app/assets/bangladeshtourist7.jpeg";
import bangladeshtourist8 from "@/app/assets/bangladeshtourist8.jpeg";
import bangladeshtourist9 from "@/app/assets/bangladeshtourist9.jpeg";
import bangladeshtourist10 from "@/app/assets/bangladeshtourist10.jpeg";
import bangladeshtourist11 from "@/app/assets/bangladeshtourist11.jpeg";
import bangladeshtourist12 from "@/app/assets/bangladeshtourist12.jpg";
import LeaderCard from "@/app/components/leadercard";
import mujib from "@/app/assets/mujib.jpeg";
import ziaur from "@/app/assets/ziaur.jpeg";
import hasina from "@/app/assets/hasina.jpeg";
import khaleda from "@/app/assets/khaleda.jpeg";
import erhsad from "@/app/assets/erhsad.jpeg";
import rahman from "@/app/assets/rahman.jpeg";
import tajuddin from "@/app/assets/tajuddin.jpeg";
import quader from "@/app/assets/quader.jpeg";
import aziz from "@/app/assets/aziz.jpeg";
import musharraf from "@/app/assets/musharraf.jpeg";
import hamid from "@/app/assets/hamid.jpeg";
import abdul from "@/app/assets/abdul.jpeg";

export default function Bangladesh() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Bangladesh
            </h1>
            <div className="flex flex-row gap-8 mt-8">
    {/* Left Side - Map Image */}
    <div className="flex-1 flex items-center">
        <Image 
            src={bangladesh} 
            alt="bangladesh" 
            className="rounded-lg w-full h-full object-contain"
        />
    </div>

    {/* Right Side - Flag & Facts */}
    <div className="flex-1 flex flex-col gap-6">
        {/* Flag & Capital */}
        <div className="flex flex-row items-center gap-6">
            <div className="w-[40%]">
                <h1 className="text-white font-[Inknut Antiqua] text-2xl mb-2">Flag:</h1>
                <Image src={bangladeshflag} alt="bangladeshflag" className="rounded-lg w-full" />
            </div>
            <div className="bg-[#7FC7D9] flex-1 rounded-lg text-center font-[Inknut Antiqua] text-xl p-4 flex flex-col justify-center">
                <h1 className="mb-2">
                    <span className="font-bold">Capital:</span> Dhaka
                </h1>
                <h2>
                    Dhaka, the "City of Mosques," is a bustling metropolis rich in history, culture, and growth.
                </h2>
            </div>
        </div>

        {/* Interesting Facts */}
        <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-3">Interesting Facts about Bangladesh</h1>
            <ul className="text-xl space-y-2">
    <li>1. Home to the world's largest mangrove forest, the Sundarbans.</li>
    <li>2. Cox’s Bazar has the world’s longest unbroken sea beach (120 km).</li>
    <li>3. Bangladesh has over 700 rivers, earning it the nickname "Land of Rivers."</li>
    <li>4. Second-largest exporter of ready-made garments after China.</li>
    <li>5. The only country to fight a war for its language, leading to International Mother Language Day.</li>
    <li>6. Barisal hosts one of the largest floating markets in South Asia.</li>
    <li>7. The Bangladeshi flag is unique as it is slightly off-centered to represent a moving nation.</li>
    <li>8. Bangladesh has the world’s largest river delta, formed by the Ganges, Brahmaputra, and Meghna rivers.</li>
    <li>9. It is the eighth-most populous country in the world, with over 170 million people.</li>
    <li>10. The traditional boat race, "Nouka Baich," is a popular cultural sport in Bangladesh.</li>
    <li>11. The Royal Bengal Tiger, an endangered species, is found in the Sundarbans.</li>
    <li>12. Bangladesh has one of the fastest-growing economies in the world.</li>
    <li>13. The national fruit of Bangladesh is the jackfruit, locally known as "Kathal."</li>
    <li>14. The country has six seasons: Summer, Monsoon, Autumn, Late Autumn, Winter, and Spring.</li>
</ul>


        </div>
    </div>
</div>


            <div>
            <h2 className="font-[Kameron] text-4xl text-white text-center mt-8"> Tourist Spots</h2>
            
            <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                <TouristCard image={bangladeshtourist1} heading="Sundarbans"  details="The world’s largest mangrove forest and a UNESCO World Heritage Site, home to the Royal Bengal Tiger."   />
                <TouristCard image={bangladeshtourist2} heading="Cox’s Bazar"  details="The longest unbroken sea beach in the world, perfect for relaxing by the Bay of Bengal."   />
                <TouristCard image={bangladeshtourist3} heading="Srimangal"  details="Known as the 'Tea Capital of Bangladesh,' famous for its lush tea gardens and serene environment."   />
                <TouristCard image={bangladeshtourist4} heading="Saint Martin’s Island"  details="The only coral island in Bangladesh, offering stunning blue waters and marine life."   />
                <TouristCard image={bangladeshtourist5} heading="Rangamati"  details="A picturesque hill district with Kaptai Lake, floating markets, and indigenous culture."   />
                <TouristCard image={bangladeshtourist6} heading="Bandarban "  details="Home to beautiful hills, waterfalls, and the highest peak in Bangladesh, Boga Lake."   />
                <TouristCard image={bangladeshtourist7} heading="Paharpur "  details="An ancient Buddhist monastery and a UNESCO World Heritage Site, showcasing rich history."   />
                <TouristCard image={bangladeshtourist8} heading="Sonargaon "  details="The old capital of Bengal, featuring historical buildings like Panam City and the Folk Arts Museum."   />
                <TouristCard image={bangladeshtourist9} heading="Lalbagh Fort"  details="A 17th-century Mughal fort in Dhaka with stunning architecture and an intriguing history."   />
                <TouristCard image={bangladeshtourist10} heading="Ratargul Swamp Forest "  details="A mystical freshwater swamp forest in Sylhet, perfect for boat rides."   />
                <TouristCard image={bangladeshtourist11} heading="Kuakata"  details="Known as the 'Daughter of the Sea,' it’s one of the few places where you can see both sunrise and sunset over the ocean."   />
                <TouristCard image={bangladeshtourist12} heading="Mahasthangarh"  details=" The oldest archaeological site in Bangladesh, featuring ruins from the ancient Pundranagara civilization." />
        
            </div>
            </div>
            <div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">
                Prominent Leaders of Bangladesh
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <LeaderCard image={mujib} name="Sheikh Mujibur Rahman" details="Father of the Nation, led Bangladesh to independence in 1971." />
                <LeaderCard image={ziaur} name="Ziaur Rahman" details="Former President, founder of BNP, and key military leader post-independence." />
                <LeaderCard image={hasina} name="Sheikh Hasina" details="Current Prime Minister, leader of Awami League, longest-serving leader of Bangladesh." />
                <LeaderCard image={khaleda} name="Khaleda Zia" details="Former Prime Minister, leader of BNP, first female PM of Bangladesh." />
                <LeaderCard image={erhsad} name="Hussain Muhammad Ershad" details="Former military ruler and President of Bangladesh from 1983 to 1990." />
                <LeaderCard image={rahman} name="Abdur Rahman Biswas" details="Former President of Bangladesh (1991-1996), oversaw transition to democracy." />
                <LeaderCard image={tajuddin} name="Tajuddin Ahmad" details="First Prime Minister of Bangladesh, key figure in the Liberation War." />
                <LeaderCard image={quader} name="Obaidul Quader" details="Current Minister of Road Transport and a key Awami League politician." />
                <LeaderCard image={aziz} name="Shafiul Azam" details="Prominent diplomat and civil servant, shaped Bangladesh's foreign policy." />
                <LeaderCard image={musharraf} name="Mirza Fakhrul Islam Alamgir" details="Secretary-General of BNP, prominent opposition leader." />
                <LeaderCard image={hamid} name="Mohammad Abdul Hamid" details="Longest-serving President of Bangladesh (2013-2023), known for his diplomacy." />
                <LeaderCard image={abdul} name="Abdul Malek Ukil" details="Speaker of Parliament, instrumental in early political development." />
            </div>
        </div>
        </div>
    );
}
