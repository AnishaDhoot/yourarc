import maldivesMap from "@/app/assets/maldives.png";
import Image from "next/image";
import maldivesFlag from "@/app/assets/maldivesflag.png";
import TouristCard from "@/app/components/touristcard";
import maldivesTourist1 from "@/app/assets/maldives1.jpeg";
import maldivesTourist2 from "@/app/assets/maldives2.jpeg";
import maldivesTourist3 from "@/app/assets/maldives3.jpeg";
import maldivesTourist4 from "@/app/assets/maldives4.jpeg";
import maldivesTourist5 from "@/app/assets/maldives5.jpeg";
import maldivesTourist6 from "@/app/assets/maldives6.jpeg";
import maldivesTourist7 from "@/app/assets/maldives7.jpeg";
import maldivesTourist8 from "@/app/assets/maldives8.jpg";
import maldivesTourist9 from "@/app/assets/maldives9.jpeg";
import maldivesTourist10 from "@/app/assets/maldives10.jpeg";
import maldivesTourist11 from "@/app/assets/maldives11.jpeg";
import maldivesTourist12 from "@/app/assets/maldives12.jpeg";
import LeaderCard from "@/app/components/leadercard";
import mohamed_nasir from "@/app/assets/mohamed_nasir.jpeg";
import ibrahim_nasir from "@/app/assets/ibrahim_nasir.jpeg";
import maumoon_gayoom from "@/app/assets/maumoon_gayoom.jpeg";
import mohamed_nasheed from "@/app/assets/mohamed_nasheed.jpeg";
import abdulla_yameen from "@/app/assets/abdulla_yameen.jpeg";
import ibrahim_solih from "@/app/assets/ibrahim_solih.jpeg";
import mohamed_muizzu from "@/app/assets/mohamed_muizzu.jpeg";
import mohamed_waheed from "@/app/assets/mohamed_waheed.jpeg";
import dr_hassan_saeed from "@/app/assets/dr_hassan_saeed.jpeg";
import qasim_ibrahim from "@/app/assets/qasim_ibrahim.jpeg";
import faris_maumoon from "@/app/assets/faris_maumoon.jpeg";
import ahmed_zahir from "@/app/assets/ahmed_zahir.jpeg";

export default function Maldives() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Maldives
            </h1>

            <div className="flex flex-col md:flex-row mt-6 gap-8">
            <div className="md:flex-1">
                    <Image src={maldivesMap} alt="maldives" className="rounded-lg w-full h-auto" />
                </div>

                <div className="md:flex-1 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-xl md:text-2xl mb-2">Flag:</h1>
                            <Image src={maldivesFlag} alt="maldives flag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] rounded-lg text-center font-[Inknut Antiqua] text-lg md:text-xl p-4 h-auto">
                        <h1 className="mb-2 font-bold">Capital: Malé
                            </h1>
                            <h2>
                                Malé is one of the most densely populated cities in the world, known for its colorful buildings and bustling markets.
                            </h2>
                        </div>
                    </div>

                    {/* Interesting Facts */}
                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-4 md:p-6 rounded-lg">
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">Interesting Facts about Maldives</h1>
                        <ul className="text-lg md:text-xl space-y-2">
    <li>1. The Maldives is made up of 1,192 coral islands grouped into 26 atolls.</li>
    <li>2. It is the lowest-lying country in the world, with an average ground level of just 1.5 meters above sea level.</li>
    <li>3. The Maldives has a rich marine biodiversity, with over 2,000 species of fish.</li>
    <li>4. It is famous for its luxurious overwater bungalows and resorts.</li>
    <li>5. The country relies heavily on tourism, which contributes around 30% of its GDP.</li>
    <li>6. Bioluminescent plankton creates glowing beaches at night in some Maldivian islands.</li>
    <li>7. The Maldives is the flattest country in the world, with no natural mountains or hills.</li>
    <li>8. Traditional Maldivian boats, called "dhonis," have been used for centuries for fishing and transportation.</li>
    <li>9. The capital, Malé, is one of the most densely populated cities in the world.</li>
    <li>10. The Maldives follows a strict policy of eco-tourism to protect its fragile marine ecosystem.</li>
    <li>11. The Maldives has a unique underwater post office, where visitors can send waterproof postcards.</li>
</ul>

                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-[Kameron] text-4xl text-white text-center mt-8"> Tourist Spots</h2>
                <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                    <TouristCard image={maldivesTourist1} heading="Maafushi Island" details="A popular island with white sandy beaches, water sports, and local Maldivian culture." />
                    <TouristCard image={maldivesTourist2} heading="Banana Reef" details="One of the most famous dive sites, known for its vibrant coral formations and marine life." />
                    <TouristCard image={maldivesTourist3} heading="Hulhumalé" details="An artificial island known for its beautiful beach and urban development." />
                    <TouristCard image={maldivesTourist4} heading="Vaadhoo Island" details="Famous for its glowing bioluminescent beach at night." />
                    <TouristCard image={maldivesTourist5} heading="Sun Island" details="A tropical paradise offering luxury resorts and stunning ocean views." />
                    <TouristCard image={maldivesTourist6} heading="Addu Atoll" details="The southernmost atoll with rich history and WWII-era relics." />
                    <TouristCard image={maldivesTourist7} heading="Fihalhohi Island" details="A beautiful island with overwater bungalows and crystal-clear waters." />
                    <TouristCard image={maldivesTourist8} heading="Male Fish Market" details="A bustling market showcasing the local fishing culture of the Maldives." />
                    <TouristCard image={maldivesTourist9} heading="Manta Point" details="A world-famous diving site where you can swim with manta rays." />
                    <TouristCard image={maldivesTourist10} heading="Alimatha Island" details="Known for its stunning beaches, water villas, and snorkeling spots." />
                    <TouristCard image={maldivesTourist11} heading="Thulusdhoo Island" details="A local island famous for its surf breaks and authentic Maldivian culture." />
                    <TouristCard image={maldivesTourist12} heading="Hanifaru Bay" details="A UNESCO Biosphere Reserve where whale sharks and manta rays gather seasonally." />
                </div>
            </div>
            <div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">
                Prominent Leaders of Maldives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <LeaderCard image={mohamed_nasir} name="Mohamed Amin Didi" details="First President of Maldives, introduced modernization reforms." />
                <LeaderCard image={ibrahim_nasir} name="Ibrahim Nasir" details="Second President, led Maldives to full independence from Britain." />
                <LeaderCard image={maumoon_gayoom} name="Maumoon Abdul Gayoom" details="Longest-serving President, modernized infrastructure and economy." />
                <LeaderCard image={mohamed_nasheed} name="Mohamed Nasheed" details="First democratically elected President, known for climate activism." />
                <LeaderCard image={abdulla_yameen} name="Abdulla Yameen" details="Former President, focused on economic development and infrastructure." />
                <LeaderCard image={ibrahim_solih} name="Ibrahim Mohamed Solih" details="Current President, advocating for democratic governance and sustainability." />
                <LeaderCard image={mohamed_muizzu} name="Mohamed Muizzu" details="Current political leader with a strong background in urban planning." />
                <LeaderCard image={mohamed_waheed} name="Mohamed Waheed Hassan" details="Former President, played a key role in Maldives’ political transition." />
                <LeaderCard image={dr_hassan_saeed} name="Dr. Hassan Saeed" details="Lawyer and politician, contributed to legal and educational reforms." />
                <LeaderCard image={qasim_ibrahim} name="Qasim Ibrahim" details="Business magnate and politician, known for his contributions to tourism." />
                <LeaderCard image={faris_maumoon} name="Faris Maumoon" details="Politician and son of Maumoon Gayoom, involved in democratic movements." />
                <LeaderCard image={ahmed_zahir} name="Ahmed Zahir" details="Veteran Maldivian politician, contributed to national policymaking." />
            </div>
        </div>
        </div>
    );
}
