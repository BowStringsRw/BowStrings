import { useState } from "react"
import Logo from "../assets/Logo.png"
import Day from "../assets/day.png"
import Night from "../assets/night.png"
import { Link } from "react-router-dom"

const NavBar = ({theme, setTheme}) => {
    const [unwrap, setUnwrap]=useState(false);
    const [hamopen, setHamopen]= useState("close")
    function changeTheme(){
        theme == "light" ? setTheme("Dark") : setTheme("light")
    }
    function openHumburger(){
        hamopen == "open"? setHamopen("closed") : setHamopen("open");
    }
    return ( 
        <>
            {/* the entire nav */}
            <div className={theme == "light"? "navbar flex justify-around py-3  sm:overflow-visible items-center shadow-2xl shadow-gray-300 ": "bg-[#0d131e] flex justify-around py-3 items-center" }>
                {/* The logo */}
                <div className="flex items-center gap-1.5 cursor-pointer">
                    <div className=" relative w-7 h-7 bg-[#1A84FF] rounded-full flex items-center " >
                        <img src={Logo} alt="" />
                    </div>
                    <h1 className={theme == "light"? " text-black font-bold ":"text-white font-bold" }>AGUKA</h1>
                </div>
                {/* The menu list */}
                <div className="hidden md:flex" >
                    <ul className={theme== "light" ? "cursor-pointer flex gap-10 font-semi-bold " : "flex gap-10 cursor-pointer font-semi-bold text-gray-300" }>
                        <Link to="/">
                        <li className="hover:border-b hover:border-[#1A84FF]">Home</li>
                        </Link>
                        <Link to="/OpportunitiesAll">
                        <li onMouseEnter={()=>setUnwrap(true)} onMouseLeave={()=>setUnwrap(false)} className="relative hover:border-b hover:border-[#1A84FF]">Opportunities
                            {unwrap && <div className=" absolute bg-[#8cc2ff] py-3 px-2 top-6 z-10">
                                <ul className="font-light text-sm ">
                                    <li>Scholarships</li>
                                    <li className="py-3">Interships</li>
                                    <li>Jobs</li>
                                </ul>
                            </div> }
                        </li>
                        </Link>

                        <li className="hover:border-b border-[#1A84FF]">Let Them Talk</li>
                        <li className="hover:border-b border-[#1A84FF]">About</li>
                    </ul>
                </div>
                {/* humburger */}
                <div  onClick={openHumburger} className=" relative block cursor-pointer md:hidden transition-[1s]">
                    <div className={hamopen == "open"? "bg-[#1A84FF] w-9 h-1 my-1 rotate-45 translate-y-2" : "bg-[#1A84FF] w-9 h-1 my-1"} ></div>
                    <div className={hamopen == "open"? "bg-[#1A84FF] w-9 h-1 my-1 rotate-45" : "bg-[#1A84FF] w-7 h-1 my-1"}></div>
                    <div className={hamopen == "open"? "bg-[#1A84FF] w-9 h-1 my-1 -rotate-45 -translate-y-2" : "bg-[#1A84FF] w-9 h-1 my-1"}></div>
                </div>
                {hamopen == "open" && <div data-aos="fade-right" className={theme == "light"? "absolute h-[100vh] w-[80%] z-20 top-16 p-4 left-0  bg-blue-500 md:hidden": "absolute z-20 h-[100vh] w-[70%] top-15 p-4 left-0  bg-[#404243] md:hidden"}> 
                    <div className=" " >
                    <ul className={theme== "light" ? "cursor-pointer  font-bold text-white " : "gap-10 cursor-pointer font-semi-bold text-gray-300" }>
                        <Link to="/">
                        <li className="hover:border-b hover:border-[#1A84FF] text-[18px]">Home</li>
                        </Link>
                        <li className="relative hover:border-b hover:border-[#1A84FF] my-2 text-[18px]"> <Link to="/OpportunitiesAll">Opportunities</Link>
                            <div className={theme == "light"?" z-30 left-0 py-3 pr-2 pl-3 top-6" : " left-0 py-3 pr-2 pl-3 top-6" }>
                                <ul className="font-light text-sm ">
                                    <li>Scholarships</li>
                                    <li className="py-3">Interships</li>
                                    <li>Jobs</li>
                                </ul>
                            </div> 
                        </li>
                        <li className="hover:border-b border-[#1A84FF] my-2 text-[18px]">Let Them Talk</li>
                        <li className="hover:border-b border-[#1A84FF] text-[18px]">About</li>
                    </ul>
                </div>
                    </div> }

                <div className="flex gap-7.5">
                    {/* login */}
               <Link to="/signup">
               <div className={theme == "light"? " border border-[#1A84FF] rounded-sm flex items-center justify-center hover:text-white ": "font-bold rounded-sm bg-white flex items-center justify-center"}>
                    <h1 className=" cursor-pointer  text-[#1A84FF] px-6 py-1.5  font-bold hover:bg-[#1A84FF] hover:text-white">LOGIN</h1>
                </div>
               </Link>
                
                {/* toogle icon theme */}
                <div className="w-9 cursor-pointer">
                    <img onClick={changeTheme} src={theme == "light" ? Night: Day} alt="" />
                </div>
                </div>
                
            </div>
        </>

     );
}
 
export default NavBar;