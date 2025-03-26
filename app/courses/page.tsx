import { HeaderCourse } from "../components/header";
import SearchBar from "../components/searchbar";
import CourseCard from "../components/coursecard";
export default function CoursesPage() {
    return (
        <div className="bg-[#212731]">
        <HeaderCourse/>
        <SearchBar/>
        <div>
            <h2 className="font-[Kameron] text-4xl ml-[5%] mt-16 text-white font-extrabold"> Our Courses: </h2>
        </div>
        <div className="flex flex-row gap-[8%] mt-8 ml-[5%] mb-8">
            <CourseCard/>    
            <CourseCard/>    
            <CourseCard/>    
        </div>
        <div className="bg-[#212731] h-[20%] color-[#212731]"> .... </div>
        </div>

    );
  }
  