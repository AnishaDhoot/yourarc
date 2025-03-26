"use client";
import React from "react";
import Image from "next/image";
import southasia from "@/app/assets/southasia.png"
export default function CourseCard() {
    return (
        <div className="bg-[#CEC2FF] w-[25%] h-[50%] content-center hover:scale-105 hover:ease-in-out"><a href="/exploringsouthasia">
            <div>
                <Image src= {southasia} alt= "southasia" className="w-[90%] h-[70%] align-center border-2 border-black mt-[5%] ml-[5%]"/>
                <h2 className="text-black text-2xl text-center font-[Inknut Antiqua] font-bold ml-[5%] mr-[5%]">
                    Exploring South Asia
                </h2>
                <h3 className="text-black font-[Judson]  leading-5 text-xl text-center ml-[5%] mr-[5%] mb-4">
                    Discover the rich culture, history, and stunning landscapes of South Asia. 
                </h3>
            </div>
            </a>
        </div>
    );
}