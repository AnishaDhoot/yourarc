import bhutan from "@/app/assets/bhutan.jpg";
import Image from "next/image";
import bhutanflag from "@/app/assets/bhutanflag.png";
import TouristCard from "@/app/components/touristcard";
import bhutantourist1 from "@/app/assets/bhutantourist1.jpeg";
import bhutantourist2 from "@/app/assets/bhutantourist2.jpeg";
import bhutantourist3 from "@/app/assets/bhutantourist3.jpeg";
import bhutantourist4 from "@/app/assets/bhutantourist4.jpeg";
import bhutantourist5 from "@/app/assets/bhutantourist5.jpeg";
import bhutantourist6 from "@/app/assets/bhutantourist6.jpeg";
import bhutantourist7 from "@/app/assets/bhutantourist7.jpeg";
import bhutantourist8 from "@/app/assets/bhutantourist8.jpeg";
import bhutantourist9 from "@/app/assets/bhutantourist9.jpeg";
import bhutantourist10 from "@/app/assets/bhutantourist10.jpeg";
import bhutantourist11 from "@/app/assets/bhutantourist11.jpeg";
import bhutantourist12 from "@/app/assets/bhutantourist12.jpeg";
import LeaderCard from "@/app/components/leadercard";
import jigme_dorji from "@/app/assets/jigme_dorji.jpeg";
import jigme_singye from "@/app/assets/jigme_singye.jpeg";
import jigme_khesar from "@/app/assets/jigme_khesar.jpeg";
import lotay_tshering from "@/app/assets/lotay_tshering.jpeg";
import tshering_tobgay from "@/app/assets/tshering_tobgay.jpeg";
import jigme_palden from "@/app/assets/jigme_palden.jpeg";
import dorji_wangchuck from "@/app/assets/dorji_wangchuck.jpeg";
import tshering_wangchuk from "@/app/assets/tshering_wangchuk.jpeg";
import lyonpo_jigme from "@/app/assets/lyonpo_jigme.jpeg";
import sangay_ngeyley from "@/app/assets/sangay_ngeyley.jpeg";
import dorji_tenzing from "@/app/assets/dorji_tenzing.jpeg";
import kinzang_dorji from "@/app/assets/kinzang_dorji.jpeg";

export default function Bhutan() {
    return (
        <div className="bg-[#212731] min-h-screen p-8">
            <h1 className="font-[Inknut Antiqua] text-5xl text-white text-center mt-4">
                Bhutan
            </h1>

            <div className="flex flex-col md:flex-row mt-6 gap-8">
                <div className="md:flex-1">
        <Image src={bhutan} alt="bhutan" className="rounded-lg w-full h-auto" />
    </div>
            

    <div className="md:flex-1 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-[40%]">
                            <h1 className="text-white font-[Inknut Antiqua] text-xl md:text-2xl mb-2">Flag:</h1>
                            <Image src={bhutanflag} alt="bhutanflag" className="rounded-lg w-full" />
                        </div>
                        <div className="bg-[#7FC7D9] rounded-lg text-center font-[Inknut Antiqua] text-lg md:text-xl p-4 h-auto">
                            <h1 className="mb-2 font-bold">Capital: Thimphu
                            </h1>
                            <h2>
                                Thimphu is the only capital city in the world without traffic lights, relying instead on human traffic controllers.
                            </h2>
                        </div>
                    </div>
                    <div className="text-black font-[Inknut Antiqua] bg-[#FEF9F1] p-4 md:p-6 rounded-lg">
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">Interesting Facts about Bhutan</h1>
                        <ul className="text-lg md:text-xl space-y-2">
                            <li>1. Bhutan is the only carbon-negative country in the world.</li>
                            <li>2. The country measures its progress using Gross National Happiness (GNH) instead of GDP.</li>
                            <li>3. Bhutan has never been colonized by another country.</li>
                            <li>4. Smoking is banned nationwide, and tobacco sales are strictly regulated.</li>
                            <li>5. The national dress, Gho for men and Kira for women, is mandatory in public spaces.</li>
                            <li>6. Bhutan's constitution mandates that at least 60% of its land remains forested.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-[Kameron] text-4xl text-white text-center mt-8"> Tourist Spots</h2>
                <div className="flex flex-row flex-wrap gap-8 justify-around mt-8">
                    <TouristCard image={bhutantourist1} heading="Tiger’s Nest Monastery" details="A stunning cliffside monastery and Bhutan’s most iconic landmark." />
                    <TouristCard image={bhutantourist2} heading="Punakha Dzong" details="One of Bhutan’s most beautiful fortresses, located between two rivers." />
                    <TouristCard image={bhutantourist3} heading="Buddha Dordenma" details="A massive golden Buddha statue overlooking Thimphu Valley." />
                    <TouristCard image={bhutantourist4} heading="Dochula Pass" details="A breathtaking mountain pass with 108 memorial stupas and stunning Himalayan views." />
                    <TouristCard image={bhutantourist5} heading="Phobjikha Valley" details="A scenic valley home to rare black-necked cranes and traditional Bhutanese villages." />
                    <TouristCard image={bhutantourist6} heading="Tashichho Dzong" details="A grand Buddhist monastery and government building in Thimphu." />
                    <TouristCard image={bhutantourist7} heading="Haa Valley" details="A secluded valley known for its pristine landscapes and rich cultural heritage." />
                    <TouristCard image={bhutantourist8} heading="Gangtey Monastery" details="A 17th-century monastery overlooking the beautiful Phobjikha Valley." />
                    <TouristCard image={bhutantourist9} heading="Chele La Pass" details="The highest motorable pass in Bhutan, offering panoramic mountain views." />
                    <TouristCard image={bhutantourist10} heading="Rinpung Dzong" details="A fortress-monastery with intricate wooden carvings and historical significance." />
                    <TouristCard image={bhutantourist11} heading="Drukgyel Dzong" details="The ruins of a historic fortress that once defended Bhutan against invasions." />
                    <TouristCard image={bhutantourist12} heading="Simtokha Dzong" details="The first dzong built in Bhutan, now serving as a Buddhist educational institute." />
                </div>
            </div>
            <div>
            <h2 className="font-[Kameron] text-6xl text-white text-center mt-8 mb-4">
                Prominent Leaders of Bhutan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                <LeaderCard image={jigme_dorji} name="Jigme Dorji Wangchuck" details="The Third King of Bhutan, modernized the country and introduced reforms." />
                <LeaderCard image={jigme_singye} name="Jigme Singye Wangchuck" details="The Fourth King of Bhutan, introduced democracy and Gross National Happiness." />
                <LeaderCard image={jigme_khesar} name="Jigme Khesar Namgyel Wangchuck" details="The current King of Bhutan, continuing modernization and diplomatic expansion." />
                <LeaderCard image={lotay_tshering} name="Lotay Tshering" details="Current Prime Minister of Bhutan, a doctor-turned-politician leading reforms." />
                <LeaderCard image={tshering_tobgay} name="Tshering Tobgay" details="Former Prime Minister of Bhutan, advocate for democracy and climate policies." />
                <LeaderCard image={jigme_palden} name="Jigme Palden Dorji" details="Bhutan’s first Prime Minister, played a crucial role in early governance." />
                <LeaderCard image={ dorji_wangchuck} name="Dorji Wangchuck" details="Notable politician and diplomat, contributed to Bhutan’s modernization." />
                <LeaderCard image={tshering_wangchuk} name="Tshering Wangchuk" details="Former Chief Justice of Bhutan, played a role in the country's judiciary system." />
                <LeaderCard image={lyonpo_jigme} name="Lyonpo Jigme Thinley" details="First elected Prime Minister of Bhutan, focused on Gross National Happiness." />
                <LeaderCard image={sangay_ngeyley} name="Sangay Ngeyley" details="Prominent politician in Bhutan, contributed to education reforms." />
                <LeaderCard image={dorji_tenzing} name="Dorji Tenzing" details="Economic affairs expert, contributed to Bhutan’s financial policies." />
                <LeaderCard image={kinzang_dorji} name="Kinzang Dorji" details="Served as interim Prime Minister of Bhutan, ensuring smooth political transitions." />
            </div>
        </div>
        </div>
    );
}
