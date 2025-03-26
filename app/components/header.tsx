"use client";
import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png"
import { signIn } from "next-auth/react"
export default function Header() {
  return (
    <div className="flex items-center justify-between bg-[#212731] py-4 px-8">
      <div><a href="/">
        <Image src={logo} alt="logo" width={60} height={60} /></a>
      </div>
      <nav className="flex space-x-6 text-[#FEF9F1] font-[Inknut Antiqua] text-lg bg-[#28303D] px-8 py-2 rounded-full shadow-lg border border-[#FEF9F1]/20">
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">About Us</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition"> <a href="/courses">Courses</a></h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition"><a href="/feedback">Feedback</a></h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition">My Courses</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition"><a href="/contact">Contact Us</a></h4>
      </nav>
      
      <button 
      onClick={()=>signIn("google")} 
      className="bg-[#F7B6CA] text-[#28303D] px-5 py-2 rounded-md font-semibold text-lg hover:bg-[#E89AAF] transition shadow-md">
        Sign In
      </button>
    
    </div>
  );
}
export function HeaderCourse() {
  return (
    <div className="flex items-center justify-between bg-[#212731] py-4 px-8">
      <div><a href="/">
        <Image src={logo} alt="logo" width={60} height={60} /></a>
      </div>
      <nav className="flex space-x-6 text-[#FEF9F1] font-[Inknut Antiqua] text-lg bg-[#28303D] px-8 py-2 rounded-full shadow-lg border border-[#FEF9F1]/20">
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1">About Us</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition bg-[#FEF9F1] rounded-md p-1 text-black"> <a href="/courses">Courses</a></h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1"><a href="/feedback">Feedback</a></h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1">My Courses</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1"><a href="/contact">Contact Us</a></h4>
      </nav>
      
      <button 
      onClick={()=>signIn("google")} 
      className="bg-[#F7B6CA] text-[#28303D] px-5 py-2 rounded-md font-semibold text-lg hover:bg-[#E89AAF] transition shadow-md">
        Sign In
      </button>
    
    </div>
  );
}

export function HeaderFeedback() {
  return (
    <div className="flex items-center justify-between bg-[#212731] py-4 px-8">
      <div><a href="/">
        <Image src={logo} alt="logo" width={60} height={60} /></a>
      </div>
      <nav className="flex space-x-6 text-[#FEF9F1] font-[Inknut Antiqua] text-lg bg-[#28303D] px-8 py-2 rounded-full shadow-lg border border-[#FEF9F1]/20">
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1">About Us</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1"> <a href="/courses">Courses</a></h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition bg-[#FEF9F1] rounded-md p-1 text-black"><a href="/feedback">Feedback</a></h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1">My Courses</h4>
        <h4 className="hover:text-[#F7B6CA] cursor-pointer transition p-1"><a href="/contact">Contact Us</a></h4>
      </nav>
      
      <button 
      onClick={()=>signIn("google")} 
      className="bg-[#F7B6CA] text-[#28303D] px-5 py-2 rounded-md font-semibold text-lg hover:bg-[#E89AAF] transition shadow-md">
        Sign In
      </button>
    
    </div>
  );
}


 
