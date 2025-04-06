import CountryCard from "@/app/components/countrycard";
import afghanistan from "@/app/assets/afghanistan.png";
import bangladesh from "@/app/assets/bangladesh.png";
import bhutan from "@/app/assets/bhutan.jpg";
import india from "@/app/assets/india.jpg";
import maldives from "@/app/assets/maldives.png";
import nepal from "@/app/assets/nepal.jpg";
import pakistan from "@/app/assets/pakistn.jpeg";
import srilanka from "@/app/assets/srilanka.jpg";
import Link from "next/link";

export default function StartCourse() {
  return (
    <div className="bg-[#212731] min-h-screen px-6 py-12">
      <h2 className="text-white font-[Kameron] text-4xl text-center mb-10">
        Which country do you want to study?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <CountryCard image={afghanistan} name="Afghanistan" link="exploringsouthasia/afghanistan" />
        <CountryCard image={pakistan} name="Pakistan" link="exploringsouthasia/pakistan" />
        <CountryCard image={india} name="India" link="exploringsouthasia/india" />
        <CountryCard image={maldives} name="Maldives" link="exploringsouthasia/maldives" />
        <CountryCard image={bangladesh} name="Bangladesh" link="exploringsouthasia/bangladesh" />
        <CountryCard image={srilanka} name="Sri Lanka" link="exploringsouthasia/srilanka" />
        <CountryCard image={nepal} name="Nepal" link="exploringsouthasia/nepal" />
        <CountryCard image={bhutan} name="Bhutan" link="exploringsouthasia/bhutan" />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-16">
        <Link href="/quiz">
          <button className="bg-[#7FC7D9] text-[#212731] font-semibold px-8 py-3 uppercase tracking-wide border border-[#6AB3C2] hover:bg-[#6AB3C2] transition-all duration-200 shadow-lg text-lg">
            Take the Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
