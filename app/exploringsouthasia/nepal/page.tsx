import nepal from "@/app/assets/nepal.jpg";
import Image from "next/image";
import nepalflag from "@/app/assets/nepalflag.png";
import TouristCard from "@/app/components/touristcard";
import nepaltourist1 from "@/app/assets/nepaltourist1.jpeg";
import nepaltourist2 from "@/app/assets/nepaltourist2.jpeg";
import nepaltourist3 from "@/app/assets/nepaltourist3.jpeg";
import nepaltourist4 from "@/app/assets/nepaltourist4.jpeg";
import nepaltourist5 from "@/app/assets/nepaltourist5.jpeg";
import nepaltourist6 from "@/app/assets/nepaltourist6.jpeg";
import nepaltourist7 from "@/app/assets/nepaltourist7.jpeg";
import nepaltourist8 from "@/app/assets/nepaltourist8.jpeg";
import nepaltourist9 from "@/app/assets/nepaltourist9.jpeg";
import nepaltourist10 from "@/app/assets/nepaltourist10.jpeg";
import nepaltourist11 from "@/app/assets/nepaltourist11.jpeg";
import nepaltourist12 from "@/app/assets/nepaltourist12.jpeg";
import LeaderCard from "@/app/components/leadercard";
import prithvi_narayana from "@/app/assets/prithvi_narayana.jpeg";
import tribhuwan from "@/app/assets/tribhuwan.jpeg";
import mahendra from "@/app/assets/mahendra.jpeg";
import birendra from "@/app/assets/birendra.jpeg";
import gyanendra from "@/app/assets/gyanendra.jpeg";
import bp_koirala from "@/app/assets/bp_koirala.jpeg";
import manmohan_adhikari from "@/app/assets/manmohan_adhikari.jpeg";
import girija_prasad from "@/app/assets/girija_prasad.jpeg";
import pushpa_dahal from "@/app/assets/pushpa_dahal.jpeg";
import sher_bahadur from "@/app/assets/sher_bahadur.jpeg";
import madhav_nepal from "@/app/assets/madhav_nepal.jpeg";
import kp_oli from "@/app/assets/kp_oli.jpeg";

export default function Nepal() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Nepal
            </h1>

            <div className="flex flex-row mt-6 gap-8">
                <div className="flex-[50%]">
                    <Image src={nepal} alt="Nepal" className="rounded-lg w-full h-auto" />
                </div>

                <div className="flex-[50%] flex flex-col gap-6">
                    <div className="flex flex-row items-center gap-6">
                        <div className="w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-2xl mb-2">Flag:</h1>
                            <Image src={nepalflag} alt="Nepal Flag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] flex-1 rounded-lg text-center font-[Inknut Antiqua] text-xl p-4 mt-8 h-[83%] w-[50%]">
                            <h1 className="mb-2">
                                <span className="font-bold">Capital:</span> Kathmandu
                            </h1>
                            <h2>
                                Kathmandu is known as the "City of Temples" due to its rich cultural heritage and stunning architecture.
                            </h2>
                        </div>
                    </div>

                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-6 rounded-lg">
                        <h1 className="text-3xl font-bold mb-3">Interesting Facts about Nepal</h1>
                        <ul className="text-xl space-y-2">
                            <li>1. Nepal is home to Mount Everest, the world's highest peak.</li>
                            <li>2. It is the only country with a non-quadrilateral national flag.</li>
                            <li>3. Nepal was never colonized by any foreign power.</li>
                            <li>4. The birthplace of Lord Buddha, Lumbini, is in Nepal.</li>
                            <li>5. It has the densest concentration of World Heritage Sites.</li>
                            <li>6. Nepal hosts eight of the world's fourteen highest mountains.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <h2 className="font-[Kameron] text-4xl text-white text-center mt-8">Tourist Spots</h2>
            
            <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                <TouristCard image={nepaltourist1} heading="Mount Everest" details="The highest mountain on Earth, attracting climbers and trekkers from all over the world." />
                <TouristCard image={nepaltourist2} heading="Pashupatinath Temple" details="A sacred Hindu temple dedicated to Lord Shiva, located in Kathmandu." />
                <TouristCard image={nepaltourist3} heading="Lumbini" details="The birthplace of Lord Buddha, a major pilgrimage site for Buddhists." />
                <TouristCard image={nepaltourist4} heading="Pokhara" details="A picturesque city with stunning lakes and a gateway to the Annapurna Circuit." />
                <TouristCard image={nepaltourist5} heading="Bhaktapur Durbar Square" details="An ancient city known for its rich culture, temples, and exquisite craftsmanship." />
                <TouristCard image={nepaltourist6} heading="Chitwan National Park" details="A UNESCO World Heritage Site, home to rhinos, tigers, and other wildlife." />
                <TouristCard image={nepaltourist7} heading="Annapurna Circuit" details="A world-famous trekking route offering breathtaking mountain scenery." />
                <TouristCard image={nepaltourist8} heading="Swayambhunath (Monkey Temple)" details="A historic stupa offering panoramic views of Kathmandu." />
                <TouristCard image={nepaltourist9} heading="Gosaikunda" details="A sacred alpine lake popular among trekkers and Hindu pilgrims." />
                <TouristCard image={nepaltourist10} heading="Rara Lake" details="Nepal's largest lake, known for its pristine beauty and remote location." />
                <TouristCard image={nepaltourist11} heading="Bandipur" details="A beautifully preserved hilltop town known for its traditional Newari culture and stunning views." />
                <TouristCard image={nepaltourist12} heading="Janakpur" details="A vibrant city famous for the Janaki Temple, a sacred Hindu pilgrimage site." />
            </div>
            <div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">
                Prominent Leaders of Nepal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <LeaderCard image={prithvi_narayana} name="Prithvi Narayan Shah" details="Founder of modern Nepal, unified the country." />
                <LeaderCard image={tribhuwan} name="King Tribhuwan" details="Led Nepal’s movement against the Rana regime." />
                <LeaderCard image={mahendra} name="King Mahendra" details="Introduced the Panchayat system, expanded Nepal’s modernization." />
                <LeaderCard image={birendra} name="King Birendra" details="Promoted democracy, tragically killed in the 2001 palace massacre." />
                <LeaderCard image={gyanendra} name="King Gyanendra" details="Last monarch of Nepal before the abolition of the monarchy in 2008." />
                <LeaderCard image={bp_koirala} name="B. P. Koirala" details="First democratically elected Prime Minister, leader of Nepali Congress." />
                <LeaderCard image={manmohan_adhikari} name="Manmohan Adhikari" details="First communist Prime Minister of Nepal." />
                <LeaderCard image={girija_prasad} name="Girija Prasad Koirala" details="Multiple-time Prime Minister, played a key role in Nepal’s democratic transition." />
                <LeaderCard image={pushpa_dahal} name="Pushpa Kamal Dahal (Prachanda)" details="Former Maoist leader, served multiple terms as Prime Minister." />
                <LeaderCard image={sher_bahadur} name="Sher Bahadur Deuba" details="Five-time Prime Minister, leader of Nepali Congress." />
                <LeaderCard image={madhav_nepal} name="Madhav Kumar Nepal" details="Communist leader, former Prime Minister of Nepal." />
                <LeaderCard image={kp_oli} name="K. P. Sharma Oli" details="Two-time Prime Minister, known for nationalist and infrastructural policies." />
            </div>
        </div>
        </div>
    );
}
