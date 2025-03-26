import CountryCard from "@/app/components/countrycard"
import afghanistan from "@/app/assets/afghanistan.png";
import bangladesh from "@/app/assets/bangladesh.png";
import bhutan from "@/app/assets/bhutan.jpg";
import india from "@/app/assets/india.jpg";
import maldives from "@/app/assets/maldives.png";
import nepal from "@/app/assets/nepal.jpg";
import pakistan from "@/app/assets/pakistn.jpeg"; // Fixed typo in filename
import srilanka from "@/app/assets/srilanka.jpg";

export default function StartCourse() {
    return (
        <div className="bg-[#212731]">
            <div className="bg-[#212731]">....</div>
            <h2 className="text-white font-[kameron] text-4xl text-center mt-4 mb-4">Which country do you want to study?</h2>
            <div className="flex flex-row flex-wrap gap-[3%] justify-around mr-12 ml-12">
            <CountryCard image={afghanistan} name="Afghanistan" link="exploringsouthasia/afghanistan"/>
            <CountryCard image={pakistan} name="Pakistan"  link="exploringsouthasia/pakistan"/>
            <CountryCard image={india} name="India"  link="exploringsouthasia/india"/>
            <CountryCard image={maldives} name="Maldives"  link="exploringsouthasia/maldives"/>
            <CountryCard image={bangladesh} name="Bangladesh"  link="exploringsouthasia/bangladesh"/> 
            <CountryCard image={srilanka} name="Sri Lanka"  link="exploringsouthasia/srilanka"/>
            <CountryCard image={nepal} name="Nepal"  link="exploringsouthasia/nepal"/>
            <CountryCard image={bhutan} name="Bhutan"  link="exploringsouthasia/bhutan"/>
            </div>
        </div>
    );
}
