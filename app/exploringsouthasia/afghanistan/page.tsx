import afghanistan from "@/app/assets/afghanistan.png";
import Image from "next/image";
import afghanistanflag from "@/app/assets/afghanistanflag.png";
import TouristCard from "@/app/components/touristcard";
import afghanistantourist1 from "@/app/assets/afghanistantourist1.jpg";
import afghanistantourist2 from "@/app/assets/afghanistantourist2.webp";
import afghanistantourist3 from "@/app/assets/afghanistantourist3.jpg";
import afghanistantourist4 from "@/app/assets/afghanistantourist4.jpg";
import afghanistantourist5 from "@/app/assets/afghanistantourist5.jpg";
import afghanistantourist6 from "@/app/assets/afghanistantourist6.jpeg";
import afghanistantourist7 from "@/app/assets/afghanistantourist7.jpeg";
import afghanistantourist8 from "@/app/assets/afghanistantourist8.jpeg";
import afghanistantourist9 from "@/app/assets/afghanistantourist9.jpeg";
import afghanistantourist10 from "@/app/assets/afghanistantourist10.jpeg";
import afghanistantourist11 from "@/app/assets/afghanistantourist11.jpg";
import afghanistantourist12 from "@/app/assets/afghanistantourist12.jpg";
import LeaderCard from "@/app/components/leadercard";
import ahmadshah from "@/app/assets/ahmadshah.jpeg";
import abdulrahman from "@/app/assets/abdulrahman.jpeg";
import amanullah from "@/app/assets/amanullah.jpeg";
import zahirshah from "@/app/assets/zahirshah.jpeg";
import daoud from "@/app/assets/daoud.jpeg";
import najibullah from "@/app/assets/najibullah.jpeg";
import massoud from "@/app/assets/massoud.jpeg";
import karzai from "@/app/assets/karzai.jpeg";
import ghani from "@/app/assets/ghani.jpeg";
import abdullah from "@/app/assets/abdullah.jpeg";


export default function Afghanistan() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Afghanistan
            </h1>

            <div className="flex flex-row mt-6 gap-8 mt-8">
                {/* Left Side - Image */}
                <div className="flex-[50%]">
                    <Image src={afghanistan} alt="afghanistan" className="rounded-lg w-full h-auto" />
                </div>

                {/* Right Side - Flag & Facts */}
                <div className="flex-[50%] flex flex-col gap-6">
                    {/* Flag & Capital */}
                    <div className="flex flex-row items-center gap-6">
                        <div className="w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-2xl mb-2">Flag:</h1>
                            <Image src={afghanistanflag} alt="afghanistanflag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] flex-1 rounded-lg text-center font-[Inknut Antiqua] text-xl p-4 mt-8 h-[83%] w-[50%]">
                            <h1 className="mb-2">
                                <span className="font-bold">Capital:</span> Kabul
                            </h1>
                            <h2>
                                Kabul is one of the highest capital cities in the world, sitting at 1,790 meters above sea level.
                            </h2>
                        </div>
                    </div>

                    {/* Interesting Facts */}
                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-6 rounded-lg">
                        <h1 className="text-3xl font-bold mb-3">Interesting Facts about Afghanistan</h1>
                        <ul className="text-xl space-y-2">
                            <li>1. Bamiyan Buddhas were among the world’s tallest until their destruction in 2001.</li>
                            <li>2. Afghanistan was a key stop on the ancient Silk Road trade route.</li>
                            <li>3. Over 40 languages are spoken, with Dari and Pashto as official languages.</li>
                            <li>4. Afghanistan produces 85% of the world’s opium.</li>
                            <li>5. 80% of the country is covered by rugged mountains.</li>
                            <li>6. Buzkashi is the national sport, where riders fight for a goat carcass.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            <h2 className="font-[Kameron] text-4xl text-white text-center mt-8"> Tourist Spots</h2>
            
            <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                <TouristCard image={afghanistantourist1} heading="Band-e Amir National Park"  details="A stunning series of deep blue lakes surrounded by limestone cliffs, often called the 'Grand Canyon of Afghanistan.'"   />
                <TouristCard image={afghanistantourist2} heading="Bamiyan Buddhas"  details="Although the giant Buddha statues were destroyed in 2001, the Bamiyan Valley remains a significant historical and archaeological site."   />
                <TouristCard image={afghanistantourist3} heading="Kabul Museum"  details="One of the finest museums in Central Asia, featuring artifacts from Afghanistan’s diverse history, including ancient Buddhist and Islamic relics."   />
                <TouristCard image={afghanistantourist4} heading="Blue Mosque "  details="A magnificent turquoise-tiled mosque believed to be the resting place of Ali, the cousin and son-in-law of Prophet Muhammad."   />
                <TouristCard image={afghanistantourist5} heading="Herat Citadel"  details="An ancient fortress dating back to Alexander the Great, offering breathtaking views of the city of Herat."   />
                <TouristCard image={afghanistantourist6} heading="Minaret of Jam"  details="A UNESCO World Heritage Site, this 12th-century minaret is an architectural masterpiece standing in a remote valley."   />
                <TouristCard image={afghanistantourist7} heading="Panjshir Valley"  details="A picturesque valley surrounded by towering mountains, famous for its historical resistance movements and natural beauty."   />
                <TouristCard image={afghanistantourist8} heading="Darul Aman Palace"  details="A grand palace in Kabul that has been restored in recent years, offering a glimpse into Afghanistan’s royal past."   />
                <TouristCard image={afghanistantourist9} heading="Wakhan Corridor"  details="A remote and rugged region with stunning landscapes, connecting Afghanistan to Tajikistan, China, and Pakistan. It is a paradise for trekkers and adventure seekers."   />
                <TouristCard image={afghanistantourist10} heading="Paghman Gardens"  details="Located near Kabul, this scenic area is known for its lush greenery, gardens, and European-style arch, serving as a relaxing getaway."   />
                <TouristCard image={afghanistantourist11} heading="Bagh-e Babur"  details="A beautifully restored garden in Kabul where the Mughal Emperor Babur was buried, offering a peaceful escape from the city's hustle."   />
                <TouristCard image={afghanistantourist12} heading="Kandahar Mosque"  details="One of Afghanistan’s most sacred sites, it is believed to house the cloak of Prophet Muhammad." />
        
            </div>
            </div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">Prominent Leaders</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
    <LeaderCard image={ahmadshah} name="Ahmad Shah Durrani" details="Founder of modern Afghanistan and the Durrani Empire in the 18th century." />
    <LeaderCard image={abdulrahman} name="Abdur Rahman Khan" details="The 'Iron Emir' who modernized Afghanistan and established central authority." />
    <LeaderCard image={amanullah} name="King Amanullah Khan" details="Led Afghanistan to independence from British influence in 1919." />
    <LeaderCard image={zahirshah} name="King Zahir Shah" details="Afghanistan's last king, who ruled for 40 years and introduced democratic reforms." />
    <LeaderCard image={daoud} name="Mohammad Daoud Khan" details="First President of Afghanistan, known for economic and social reforms." />
    <LeaderCard image={najibullah} name="Mohammad Najibullah" details="President during Soviet withdrawal, known for attempts at national reconciliation." />
    <LeaderCard image={massoud} name="Ahmad Shah Massoud" details="A key resistance leader against Soviet occupation and the Taliban." />
    <LeaderCard image={karzai} name="Hamid Karzai" details="First President after the fall of the Taliban, focused on rebuilding Afghanistan." />
    <LeaderCard image={ghani} name="Ashraf Ghani" details="Former President, worked on modernization and governance reforms." />
    <LeaderCard image={abdullah} name="Abdullah Abdullah" details="Key political leader and former Chief Executive, promoting democracy in Afghanistan." />
</div>

        </div>
    );
}
