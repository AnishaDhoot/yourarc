import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png"
export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#212731] py-4 px-8">
      <div>
        <Image src={logo} alt="logo" width={60} height={60} />
      </div>
      <nav className="flex space-x-6 text-[#FEF9F1] font-[Inknut Antiqua] text-lg bg-[#28303D] px-8 py-2 rounded-full shadow-lg border border-[#FEF9F1]/20">
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">About Us</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">Courses</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">Feedback</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">My Courses</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">Contact Us</h4>
      </nav>
      <button className="bg-[#F7B6CA] text-[#28303D] px-5 py-2 rounded-md font-semibold text-lg hover:bg-[#E89AAF] transition shadow-md">
        Sign In
      </button>
    </div>
  );
}
