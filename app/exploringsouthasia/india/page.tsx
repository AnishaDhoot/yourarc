import india from "@/app/assets/india.jpg";
import Image from "next/image";
import indiaflag from "@/app/assets/indiaflag.png";
import TouristCard from "@/app/components/touristcard";
import indiatourist1 from "@/app/assets/indiatourist1.jpeg";
import indiatourist2 from "@/app/assets/indiatourist2.jpeg";
import indiatourist3 from "@/app/assets/indiatourist3.jpeg";
import indiatourist4 from "@/app/assets/indiatourist4.jpeg";
import indiatourist5 from "@/app/assets/indiatourist5.jpeg";
import indiatourist6 from "@/app/assets/indiatourist6.jpeg";
import indiatourist7 from "@/app/assets/indiatourist7.jpeg";
import indiatourist8 from "@/app/assets/indiatourist8.jpeg";
import indiatourist9 from "@/app/assets/indiatourist9.jpeg";
import indiatourist10 from "@/app/assets/indiatourist10.jpeg";
import indiatourist11 from "@/app/assets/indiatourist11.jpeg";
import indiatourist12 from "@/app/assets/indiatourist12.jpeg";
import LeaderCard from "@/app/components/leadercard";
import modiji from "@/app/assets/modiji.jpeg";
import ambedkar from "@/app/assets/ambedkar.jpeg";
import gandhi from "@/app/assets/gandhi.jpeg";
import nehru from "@/app/assets/nehru.jpeg";
import indira from "@/app/assets/indira.jpeg";
import patel from "@/app/assets/patel.jpeg";
import kalam from "@/app/assets/kalam.jpeg";
import bose from "@/app/assets/bose.jpeg";
import vajpayee from "@/app/assets/vajpayee.jpg";  
import manmohan from "@/app/assets/manmohan.jpeg";
import prasad from "@/app/assets/prasad.jpeg";
import rajnath from "@/app/assets/rajnath.jpeg";

export default function India() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-7xl text-white text-center mt-4">
                India
            </h1>

            <div className="flex flex-row mt-6 gap-8 mt-8">
                <div className="flex-1">
                    <Image src={india} alt="india" className="rounded-lg w-full h-auto" />
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-row items-center gap-6">
                        <div className="w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-2xl mb-2">Flag:</h1>
                            <Image src={indiaflag} alt="indiaflag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] flex-1 rounded-lg text-center font-[Inknut Antiqua] text-xl p-4 mt-8 h-[83%] w-[50%]">
                            <h1 className="mb-2">
                                <span className="font-bold">Capital:</span> New Delhi
                            </h1>
                            <h2>
                                New Delhi is the political and cultural center of India, known for its historical landmarks and vibrant markets.
                            </h2>
                        </div>
                    </div>

                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-6 rounded-lg">
                        <h1 className="text-3xl font-bold mb-3">Interesting Facts about India</h1>
                        <ul className="text-xl space-y-2">
                            <li>1. India is the world's largest democracy with over 1.4 billion people.</li>
                            <li>2. The Taj Mahal, one of the Seven Wonders of the World, was built by Mughal Emperor Shah Jahan.</li>
                            <li>3. India is home to the world's highest cricket ground in Chail, Himachal Pradesh, at 2,444 meters.</li>
                            <li>4. The Indian Railways is one of the largest employers in the world, with over 1.2 million employees.</li>
                            <li>5. Yoga originated in India over 5,000 years ago and is now practiced worldwide.</li>
                            <li>6. India is the only country where lions and tigers coexist in the wild.</li>
                            <li>7. The Kumbh Mela is the largest religious gathering on Earth, attracting millions of pilgrims.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8">Tourist Spots</h2>
            <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                <TouristCard image={indiatourist1} heading="Taj Mahal" details="A stunning white marble mausoleum in Agra, built by Emperor Shah Jahan." />
                <TouristCard image={indiatourist2} heading="Jaipur" details="The Pink City, known for its palaces, forts, and vibrant culture." />
                <TouristCard image={indiatourist3} heading="Varanasi" details="One of the oldest cities in the world, famous for its ghats along the Ganges." />
                <TouristCard image={indiatourist4} heading="Kerala Backwaters" details="A network of lagoons and lakes, best explored on a houseboat." />
                <TouristCard image={indiatourist5} heading="Goa" details="A beach paradise with a mix of Indian and Portuguese influences." />
                <TouristCard image={indiatourist6} heading="Hampi" details="A UNESCO World Heritage site with ruins of the Vijayanagara Empire." />
                <TouristCard image={indiatourist7} heading="Ranthambore National Park" details="A wildlife sanctuary famous for its Bengal tiger population." />
                <TouristCard image={indiatourist8} heading="Mysore Palace" details="A stunning example of Indo-Saracenic architecture." />
                <TouristCard image={indiatourist9} heading="Sundarbans" details="The world's largest mangrove forest and home to the Bengal tiger." />
                <TouristCard image={indiatourist10} heading="Ladakh" details="A high-altitude desert with breathtaking landscapes and monasteries." />
                <TouristCard image={indiatourist11} heading="Rishikesh" details="Known as the 'Yoga Capital of the World,' offering spiritual retreats." />
                <TouristCard image={indiatourist12} heading="Ajanta & Ellora Caves" details="Ancient rock-cut caves showcasing Buddhist, Hindu, and Jain art." />
            </div>

            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">Prominent Leaders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-4 p-4">
      

                <LeaderCard image={modiji} name="Narendra Modi (2014 - Present)" details="Prime Minister of India. Known for economic reforms, digital initiatives, and global diplomacy." />
                <LeaderCard image={ambedkar} name="Dr. B.R. Ambedkar" details="Father of the Indian Constitution. Social reformer and advocate for Dalit rights." />
                <LeaderCard image={gandhi} name="Mahatma Gandhi" details="Led India's independence movement through non-violence and civil disobedience." />
                <LeaderCard image={nehru} name="Jawaharlal Nehru" details="India's First Prime Minister. Architect of modern India and founder of IITs and AIIMS." />
                <LeaderCard image={indira} name="Indira Gandhi" details="First female Prime Minister of India. Known for bold leadership and the Green Revolution." />
                <LeaderCard image={patel} name="Sardar Vallabhbhai Patel" details="Iron Man of India. Unified 562 princely states into the Republic of India." />
                <LeaderCard image={kalam} name="A.P.J. Abdul Kalam" details="Former President & scientist. Developed India's missile program and inspired youth." />
                <LeaderCard image={bose} name="Subhas Chandra Bose" details="Founder of the Indian National Army (INA). Famous for 'Give me blood, and I shall give you freedom.'" />
                <LeaderCard image={vajpayee} name="Atal Bihari Vajpayee" details="Former Prime Minister. Led India during nuclear tests and economic reforms." />
                <LeaderCard image={manmohan} name="Dr. Manmohan Singh" details="Economist & Former Prime Minister. Liberalized India's economy in 1991." />
                <LeaderCard image={prasad} name="Dr. Rajendra Prasad" details="India's first President. Played a key role in shaping the Republic." />
                <LeaderCard image={rajnath} name="Rajnath Singh" details="Current Defence Minister of India. Known for strengthening India's military power." />
            </div>
        </div>
    );
}
