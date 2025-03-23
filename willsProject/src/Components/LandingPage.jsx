import StudentImg from "../assets/the landingimg.png"
import { ShieldCheck,GraduationCap } from "lucide-react";
import SearchIcon from "../assets/search Icon.png"
import Yale from "../assets/yale.png"
import Coursera from "../assets/coursera.png"
import Mastercard from "../assets/Mastercard.png"
const Home = () => {
    return ( 
        // the Entire home page together
        <div className=" flex flex-col items-center mt-3">
            {/* the intro page */}
            <div className="flex flex-col items-center md:items-start md:m-20">
            <h2 className="font-bold text-xl md:text-3xl">Let's find a perfect <span className="text-[#1A84FF]">Opportunity</span> <br /> As bright as you are</h2>
            <div className="flex flex-col items-center md:flex-row-reverse md:items-start md:mt-6">
                <img src={StudentImg} alt="" className=" w-1/3 md:absolute md:top-30" />
                <p className="w-2/3 font-light mt-4 text-sm md:text-30 md:relative md:mt-0  md:w-2/4 md:left-1 md:-translate-full md:translate-y-1/10">BowStrings is an initiative by the youth to improve education. We hope to improve education through different ways. We have started to partner with “Let Them Talk,” another youth led initiative that aims at improving communication skills in Rwanda.
                    We publish opportunities for youth - especially secondary school students - that will help them to prepare their futures and careers.
                </p>

            </div>
            {/* the search box */}
            <div className=" hidden md:flex md:relative md:translate-y-2/2 shadow shadow-gray-400 py-1 px-3 items-center mt-10">
                <img src={SearchIcon} alt="" className="w-5 h-5"/>
                <input type="text" placeholder="Search by Faculty" className="border-none outline-none mx-3 text-sm" />
                <button className="py-1 px-3 bg-[#1A84FF] rounded-sm text-white text-sm cursor-pointer">Search</button>
            </div>
            {/* school icons */}
            <div className=" hidden relative translate-y-30 md:flex w-60 gap-40 items-center">
                <img src={Coursera} alt="" className="w-30 h-10 cursor-pointer"/>
                <img src={Mastercard} alt="" className="w-24 h-14 cursor-pointer"/>
                <img src={Yale} alt="" className="w-28 h-20 cursor-pointer"/>
            </div>
            
            
            </div>

            <div className="absolute flex left-210 top-84">
                <div><ShieldCheck className="w-6 h-6 top-[23px] left-[46px] text-blue-500" /></div>
                <p className="">Congratulations</p>
            </div>
            
            <div className="absolute top-87 left-310 w-6 h-6 text-blue-500">
              <GraduationCap className="w-full h-full" />
              <p className="text-gray-500">Sholarships <br />Over +1900</p>
            </div>

        </div>

     );
}
 
export default Home;