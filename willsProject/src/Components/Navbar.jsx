import { useState } from "react"
import Logo from "../assets/Logo.png"
import Day from "../assets/day.png"
import Night from "../assets/night.png"


const NavBar = () => {
    const [theme,setTheme]=useState("light");
    const [unwrap, setUnwrap]=useState(true);
    const [hamopen, setHamopen]= useState("open")
    function changeTheme(){
        theme == "light" ? setTheme("Dark") : setTheme("light")
    }
    function openHumburger(){
        hamopen == "open"? setHamopen("closed") : setHamopen("open");
    }
    return ( 
        <>
            {/* the entire nav */}
            <div className={theme == "light"? "flex justify-around py-3  items-center shadow-2xl shadow-gray-300 ": "bg-[#0d131e] flex justify-around py-3 items-center" }>
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
                        <li className="hover:border-b hover:border-[#1A84FF]">Home</li>
                        <li onMouseEnter={()=>setUnwrap(true)} onMouseLeave={()=>setUnwrap(false)} className="relative hover:border-b hover:border-[#1A84FF]">Opportunities
                            {unwrap && <div className=" absolute bg-[#8cc2ff] py-3 px-2 top-6">
                                <ul className="font-light text-sm ">
                                    <li>Scholarships</li>
                                    <li className="py-3">Interships</li>
                                    <li>Jobs</li>
                                </ul>
                            </div> }
                        </li>
                        <li className="hover:border-b border-[#1A84FF]">Let Them Talk</li>
                        <li className="hover:border-b border-[#1A84FF]">About</li>
                    </ul>
                </div>
                {/* humburger */}
                <div  onClick={openHumburger} className=" relative block cursor-pointer md:hidden">
                    <div className={hamopen == "open"? "bg-[#1A84FF] w-9 h-1 my-1 rotate-45 translate-y-2" : "bg-[#1A84FF] w-9 h-1 my-1"} ></div>
                    <div className={hamopen == "open"? "bg-[#1A84FF] w-9 h-1 my-1 rotate-45" : "bg-[#1A84FF] w-7 h-1 my-1"}></div>
                    <div className={hamopen == "open"? "bg-[#1A84FF] w-9 h-1 my-1 -rotate-45 -translate-y-2" : "bg-[#1A84FF] w-9 h-1 my-1"}></div>
                </div>
                {hamopen == "open" && <div className={theme == "light"? "absolute top-16 p-4 left-2  bg-[#8cc2ff] md:hidden": "absolute top-16 p-4 left-2  bg-[#404243] md:hidden"}> 
                    <div className=" " >
                    <ul className={theme== "light" ? "cursor-pointer  font-semi-bold " : "gap-10 cursor-pointer font-semi-bold text-gray-300" }>
                        <li className="hover:border-b hover:border-[#1A84FF] text-sm">Home</li>
                        <li onMouseEnter={()=>setUnwrap(true)} onMouseLeave={()=>setUnwrap(false)} className="relative hover:border-b hover:border-[#1A84FF] my-2 text-sm">Opportunities
                            {unwrap && <div className={theme == "light"?" absolute bg-[#8cc2ff] left-25 py-3 pr-2 pl-3 top-1" : "absolute bg-[#8c9197] left-25 py-3 pr-2 pl-3 top-1" }>
                                <ul className="font-light text-sm ">
                                    <li>Scholarships</li>
                                    <li className="py-3">Interships</li>
                                    <li>Jobs</li>
                                </ul>
                            </div> }
                        </li>
                        <li className="hover:border-b border-[#1A84FF] my-2 text-sm">Let Them Talk</li>
                        <li className="hover:border-b border-[#1A84FF] text-sm">About</li>
                    </ul>
                </div>
                    </div> }

                <div className="flex gap-7.5">
                    {/* login */}
                <div className={theme == "light"? " border border-[#1A84FF] rounded-sm flex items-center justify-center hover:text-white ": "font-bold rounded-sm bg-white flex items-center justify-center"}>
                    <h1 className=" cursor-pointer  text-[#1A84FF] px-6 py-1.5  font-bold hover:bg-[#1A84FF] hover:text-white">LOGIN</h1>
                </div>
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