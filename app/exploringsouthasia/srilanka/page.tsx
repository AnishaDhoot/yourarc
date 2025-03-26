import sriLanka from "@/app/assets/srilanka.jpg";
import Image from "next/image";
import sriLankaFlag from "@/app/assets/srilankaflag.png";
import TouristCard from "@/app/components/touristcard";
import sriLankaTourist1 from "@/app/assets/srilankatourist1.jpeg";
import sriLankaTourist2 from "@/app/assets/srilankatourist2.jpeg";
import sriLankaTourist3 from "@/app/assets/srilankatourist3.jpeg";
import sriLankaTourist4 from "@/app/assets/srilankatourist4.jpeg";
import sriLankaTourist5 from "@/app/assets/srilankatourist5.jpeg";
import sriLankaTourist6 from "@/app/assets/srilankatourist6.jpeg";
import sriLankaTourist7 from "@/app/assets/srilankatourist7.jpg";
import sriLankaTourist8 from "@/app/assets/srilankatourist8.jpeg";
import sriLankaTourist9 from "@/app/assets/srilankatourist9.jpeg";
import sriLankaTourist10 from "@/app/assets/srilankatourist10.jpeg";
import sriLankaTourist11 from "@/app/assets/srilankatourist11.jpeg";
import sriLankaTourist12 from "@/app/assets/srilankatourist12.jpeg";
import LeaderCard from "@/app/components/leadercard";
import ds_senanayake from "@/app/assets/ds_senanayake.jpeg";
import swrd_bandaranaike from "@/app/assets/swrd_bandaranaike.jpeg";
import sirimavo_bandaranaike from "@/app/assets/sirimavo_bandaranaike.jpeg";
import j_r_jayewardene from "@/app/assets/j_r_jayewardene.jpeg";
import ranasinghe_premadasa from "@/app/assets/ranasinghe_premadasa.jpeg";
import chandrika_kumaratunga from "@/app/assets/chandrika_kumaratunga.jpeg";
import mahinda_rajapaksa from "@/app/assets/mahinda_rajapaksa.jpeg";
import gotabaya_rajapaksa from "@/app/assets/gotabaya_rajapaksa.jpeg";
import ranil_wickremesinghe from "@/app/assets/ranil_wickremesinghe.jpeg";
export default function SriLanka() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Sri Lanka
            </h1>

            <div className="flex flex-col md:flex-row mt-6 gap-8">
            <div className="md:flex-1">
                    <Image src={sriLanka} alt="Sri Lanka" className="rounded-lg w-full h-auto" />
                </div>

                <div className="md:flex-1 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-xl md:text-2xl mb-2">Flag:</h1>
                            <Image src={sriLankaFlag} alt="Sri Lanka Flag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] rounded-lg text-center font-[Inknut Antiqua] text-lg md:text-xl p-4 h-auto">
                        <h1 className="mb-2 font-bold">Capital: Sri Jayawardenepura Kotte
                            </h1>
                            <h2>
                                Sri Jayawardenepura Kotte is the administrative capital, while Colombo is the commercial capital.
                            </h2>
                        </div>
                    </div>

                   
                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-4 md:p-6 rounded-lg">
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">Interesting Facts about Sri Lanka</h1>
                        <ul className="text-lg md:text-xl space-y-2">
    <li>1. Nepal is home to Mount Everest, the world's highest peak.</li>
    <li>2. It is the only country with a non-quadrilateral national flag.</li>
    <li>3. Nepal was never colonized by any foreign power.</li>
    <li>4. The birthplace of Lord Buddha, Lumbini, is in Nepal.</li>
    <li>5. It has the densest concentration of World Heritage Sites.</li>
    <li>6. Nepal hosts eight of the world's fourteen highest mountains.</li>
    <li>7. Kathmandu, the capital, is known as the "City of Temples."</li>
    <li>8. The Nepalese Gurkha soldiers are renowned for their bravery worldwide.</li>
    <li>9. Nepal has over 120 different ethnic groups and more than 120 languages.</li>
    <li>10. The Living Goddess, or "Kumari," is a revered cultural tradition in Nepal.</li>
    <li>11. It has one of the highest elevations of biodiversity in the world.</li>
    <li>12. Nepal experiences five seasons: spring, summer, monsoon, autumn, and winter.</li>
    <li>13. The Yeti, or "Abominable Snowman," is a legendary creature believed to roam the Himalayas.</li>
    <li>14. The deepest gorge in the world, Kali Gandaki Gorge, is located in Nepal.</li>
    <li>15. Nepal has one of the slowest internet speeds in the world.</li>
    <li>16. The Nepali calendar (Bikram Sambat) is ahead of the Gregorian calendar by about 57 years.</li>

    <li>17. The Annapurna region is one of the most popular trekking destinations in the world.</li>
</ul>

                    </div>
                </div>
            </div>
            
            <h2 className="font-[Kameron] text-4xl text-white text-center mt-8">Tourist Spots</h2>
            
            <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                <TouristCard image={sriLankaTourist1} heading="Sigiriya" details="An ancient rock fortress and a UNESCO World Heritage Site." />
                <TouristCard image={sriLankaTourist2} heading="Temple of the Tooth" details="A sacred Buddhist temple in Kandy, housing a relic of Buddha's tooth." />
                <TouristCard image={sriLankaTourist3} heading="Galle Fort" details="A historic coastal fortress built by the Portuguese and Dutch." />
                <TouristCard image={sriLankaTourist4} heading="Yala National Park" details="A famous wildlife sanctuary home to leopards, elephants, and diverse fauna." />
                <TouristCard image={sriLankaTourist5} heading="Ella" details="A picturesque hill town known for hiking trails and stunning landscapes." />
                <TouristCard image={sriLankaTourist6} heading="Adam's Peak" details="A sacred mountain with religious significance to multiple faiths." />
                <TouristCard image={sriLankaTourist7} heading="Mirissa" details="A beautiful beach town known for whale watching and surfing." />
                <TouristCard image={sriLankaTourist8} heading="Dambulla Cave Temple" details="A complex of Buddhist cave temples with stunning murals and statues." />
                <TouristCard image={sriLankaTourist9} heading="Horton Plains National Park" details="A stunning highland plateau with the famous World's End cliff." />
                <TouristCard image={sriLankaTourist10} heading="Polonnaruwa" details="An ancient city with well-preserved ruins from Sri Lanka's golden age." />
                <TouristCard image={sriLankaTourist11} heading="Arugam Bay" details="A world-renowned surfing destination with stunning beaches." />
                <TouristCard image={sriLankaTourist12} heading="Nuwara Eliya" details="A scenic hill station known for its tea plantations and cool climate." />
            </div>
            <div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">
                Prominent Leaders of Sri Lanka
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <LeaderCard image={ds_senanayake} name="D. S. Senanayake" details="First Prime Minister of Sri Lanka, known as the 'Father of the Nation'." />
                <LeaderCard image={swrd_bandaranaike} name="S. W. R. D. Bandaranaike" details="Prime Minister, introduced Sinhala as the official language." />
                <LeaderCard image={sirimavo_bandaranaike} name="Sirimavo Bandaranaike" details="World's first female Prime Minister, served three terms." />
                <LeaderCard image={j_r_jayewardene} name="J. R. Jayewardene" details="First Executive President, introduced economic reforms." />
                <LeaderCard image={ranasinghe_premadasa} name="Ranasinghe Premadasa" details="Third Executive President, focused on poverty alleviation." />
                <LeaderCard image={chandrika_kumaratunga} name="Chandrika Kumaratunga" details="First female Executive President, focused on peace efforts." />
                <LeaderCard image={mahinda_rajapaksa} name="Mahinda Rajapaksa" details="Led Sri Lanka during the end of the civil war in 2009." />
                <LeaderCard image={gotabaya_rajapaksa} name="Gotabaya Rajapaksa" details="Former President, faced mass protests leading to resignation." />
            </div>
        </div>
        </div>
    );
}
