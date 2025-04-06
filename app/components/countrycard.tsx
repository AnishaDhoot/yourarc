import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CountryCardProps = {
  image: StaticImageData;
  name: string;
  link: string;
};

export default function CountryCard({ image, name, link }: CountryCardProps) {
  return (
    <Link href={`/${link}`}>
        <div className="group bg-[#7FC7D9] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-full max-w-xs mx-auto border-2 border-[#6AB3C2]">
        <div className="relative h-52 sm:h-60 w-full bg-white flex items-center justify-center border-b-2 border-[#6AB3C2]">
          <Image
            src={image}
            alt={name}
            className="object-contain w-full h-full p-4"
            width={250}
            height={250}
          />
        </div>
        <div className="py-4 text-center">
          <h2 className="text-xl font-bold font-[Kameron] text-[#212731] group-hover:underline uppercase tracking-wide">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  );
}
