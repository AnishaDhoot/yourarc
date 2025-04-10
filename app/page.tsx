import Image from "next/image";
import Header from "@/app/components/header";
import man from "@/app/assets/man.png";
import bulb from "@/app/assets/bulb.png";
import map from "@/app/assets/map.png";
import bridge from "@/app/assets/bridge.png";
import globe from "@/app/assets/globe.png";
import notes from "@/app/assets/notes.png";
import home  from "@/app/assets/home.png";
import CourseCard from "./components/coursecard";
import arrow from "@/app/assets/arrow.png";
import ReviewCard from "./components/reviewcard";

export default function Home() {
  return (
    <div className="bg-[#212731]">
      <Header />
      <div className="flex flex-row"> 
        <div className="flex-[40%]">
      <Image src={man} alt="man" className="pl-20 pt-12 w-[60%] " />
      </div>
      <div className="text-white text-center mr-16 flex-[60%] text-5xl leading-[6rem] pt-16 font-[Inknut Antiqua]">
        "Your Arc" symbolizes growth, discovery, and fulfillment. We're more than a platform - we're your partner in realizing your dreams.
      </div>
      </div>
      <div className="flex flex-row">
      <Image src={bulb} alt="bulb" className="ml-[30%] pt-2 w-[20%] " />
      <Image src={map} alt="map" className="ml-[25%] pt-2 w-[20%]" />
      </div>
      {/* -------------------------------------------      */}

      <div className="text-white bg-cover h-[90%]"    style={{ backgroundImage: "url('/background1.png')" }} >
       <h1 className="font-[Kameron] text-5xl font-extrabold ml-16 mt-8 pt-20">How does Your Arc help you?</h1>
      <div className="flex flex-col">
        <div className="flex flex-row mt-12 ml-16  ">
          <span className="flex-[13%]"><Image src={bridge} alt="bridge" className=" w-[30%]" /></span>
          <h2 className="flex-[50%] font-[Inknut Antiqua] text-3xl font-extrabold text-center">Your Arc acts as a<span className="text-[#F7B6CA]"> Bridge</span>, connecting your <span className="text-[#F7B6CA]">present</span> to your <span className="text-[#F7B6CA]">aspirations.</span></h2>
          <span className="flex-[35%]"></span>
        </div>
        <div className="flex flex-row mt-12 ml-16  ">
          <span className="flex-[13%]"><Image src={globe} alt="globe" className=" w-[30%]" /></span>
          <h2 className="flex-[50%] font-[Inknut Antiqua] text-3xl font-extrabold text-center">Immerse yourself in a platform that uniquely focuses on the <span className="text-[#F7B6CA]">richness of South Asia.</span></h2>
          <span className="flex-[35%]"></span>
        </div>
        <div className="flex flex-row mt-12 ml-16  ">
          <span className="flex-[13%]"><Image src={home} alt="home" className=" w-[30%]" /></span>
          <h2 className="flex-[50%] font-[Inknut Antiqua] text-3xl font-extrabold text-center">Learn at your own <span className="text-[#F7B6CA]">pace, place and time, </span>with  <span className="text-[#F7B6CA]">flexibility</span> to suit your <span className="text-[#F7B6CA]">schedule.</span></h2>
          <span className="flex-[35%]"></span>
        </div>
        <div className="flex flex-row mt-12 ml-16  ">
          <span className="flex-[13%]"><Image src={notes} alt="notes" className=" w-[30%]" /></span>
          <h2 className="flex-[50%] font-[Inknut Antiqua] text-3xl font-extrabold text-center">Our courses are cater to all skill levels, ensuring a <span className="text-[#F7B6CA]">personalized learning experience</span> for everyone.</h2>
          <span className="flex-[35%]"></span>
        </div>
       
      </div>
      </div>
      {/* ---------------------------------------------------------- */}
      {/* <div className="text-white bg-cover h-[100%]"    style={{ backgroundImage: "url('/background2.png')" }}> 
      <h1 className="font-[Kameron] text-5xl font-extrabold ml-16 mt-8 pt-20 text-center text-white">Word of the Day</h1>
      <div className="text-white ml-[20%] mt-12">
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left"><span className="text-[#CEC2FF]">Word :</span> novation</h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-8"><span className="text-[#CEC2FF]">Meaning:</span> the introduction of something new; innovation</h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-8"><span className="text-[#CEC2FF]">About:</span> </h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-4">- First recorded around 1525.</h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-4">- From the Latin novātiō, meaning “a renewing;” related to the words new and novel.</h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-8"><span className="text-[#CEC2FF]">Examples of novation:</span> </h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-4">- The city’s novation in urban planning has made it a model for other metropolitan areas.</h2>
      <h2 className="font-[Inknut Antiqua] text-3xl font-extrabold text-left mt-4">-  His artistic novation introduced a new aesthetic that quickly gained popularity.</h2>
      </div>
      </div> */}
      {/*    ---------------------------------------------------------- */}
      <div className="ml-[3%] mt-24">
      <div className="flex flex-row">  
        <h1 className="text-white font-[Kameron] text-5xl font-extrabold ml-[3%] mb-4  ">Explore Courses </h1>
        <Image src={arrow} alt="arrow" className="w-[4%] h-[4%] mt-2 ml-4 "/>
         </div>
         <div className="flex flex-row gap-[8%] mt-8 ml-[3%]">
         <CourseCard/>    
         <CourseCard/>    
         <CourseCard/>    
         </div>
      </div>
      <div>
        <h1 className="font-[Kameron] text-5xl text-white font-extrabold text-center mt-12"> Feedback </h1>
        <div className="flex flex-row gap-[8%] mt-8 ml-[5%] mb-8">
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div>
      </div>
      <div className="bg-[#212731] h-[20%] color-[#212731]"> .... </div>
      </div>
  );
}
