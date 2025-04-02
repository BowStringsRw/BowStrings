import SearchIcon from "../assets/search Icon.png"
import CommonWealth from "../assets/commonwealthpic.png"
import MapPin from "../assets/map-pin.png"
const OpportunitiesAll = ({theme}) => {
    return ( 
        <>
        <div className={theme== "light"? "md:flex": "md:flex bg-[#2d3041] text-white"}>
            {/* sidebar */}
            <div className="flex flex-col mx-8 md:mx-27 md:h-[100vh] md:w-1/4  md:shadow-[1px_0_0px_rgba(0,0,0,0.2)]
">
                <h1 className="font-bold text-sm mt-7 mb-4">Keyword Search</h1>
                <div className="flex mb-4 w-60 justify-between shadow shadow-gray-400 p-1">
                <input type="text" name="" id="" placeholder="Search opportunites" className="border-nono text-sm outline-none"/>
                    <div className="">
                    <img src={SearchIcon} alt="" className="w-6 h-6" />
                    </div>


                </div>

                <div className="hidden md:grid">
                {/* date posted */}
                <div className="">
                    <h1 className="font-bold text-sm mb-3">Date Posted</h1>
                <div className="">
                        <input type="radio" name="date" id="" className="mr-2 mb-4"/><span className="text-sm font-light">Last 1 hour</span>
                       
                    </div>
                    <div className="">
                        <input type="radio" name="date" id="" className="mr-2 mb-4"/><span className="text-sm font-light">Last 24 hour</span>
                        
                    </div>
                </div>
                    <div className="">
                        <input type="radio" name="date" id="" className="mr-2 mb-4"/><span className="text-sm font-light">Last 7 days</span>
                        
                    </div>
                     <div className="">
                        <input type="radio" name="date" id="" className="mr-2 mb-4"/><span className="text-sm font-light">Last 14 Days</span>
                        
                    </div>
                    <div className="">
                        <input type="radio" name="date" id="" className="mr-2"/><span className="text-sm font-light">Last 30 Days</span>
                        
                    </div>
                    <div className="">
                        <input type="radio" name="date" id="" className="mr-2"/><span className="text-sm font-light">All</span>
                        
                    </div>
                    {/* opportunity type */}
                    <h1 className="text-sm font-bold my-3 ">Opportunity type</h1>
                    <p className="font-light text-sm mb-3 cursor-pointer">Internships</p>
                    <p className="font-light text-sm mb-3 cursor-pointer">Scholarships</p>
                    <p className="font-light text-sm mb-3 cursor-pointer">Competitions</p>
                    <p></p>
                    
                

                </div>
            
            
            </div>
            {/* opportunites column */}
            <div className={theme == "light"?"md:mx-9 my-9 flex flex-col items-center md:items-start justify-center md:justify-normal": "md:mx-9 my-9 flex flex-col items-center md:items-start justify-center md:justify-normal " }>
                <div className="relative">
                    <h1 className=" text-sm font-bold">120 Essay Writing Competition</h1>
                    <h1 className="text-blue-500 text-sm my-2">Essay Competition</h1>
                    <h1 className="text-sm font-light">The QCEC (Queen's Commonwealth)</h1>
                    <img src={CommonWealth} alt="" className="my-5 w-80 md:w-50 md:h-30 md:absolute md:translate-x-100 md:-translate-y-24"/>
                    <div className="flex">
                        <img src={MapPin} alt="" className="w-6" />
                        <p className="ml-2 text-sm font-light">Online, Global</p>
                    </div>
                    <div className={theme="light"? "grid grid-cols-3 md:grid-cols-4 md:gap-3":"grid grid-cols-3 md:grid-cols-4  md:gap-3"}>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> APPLY BY <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Immediately</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> STARTING DATE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>15 May 2025</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> DURATION <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>1 Month</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> ELIGIBILITY <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Anyone</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> PRIZE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Money</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> DEADLINE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>30 June 2025</span></p>
                    </div>
                    <button className="p-2 border border-blue-500 text-blue-500 font-light text-sm relative left-1/2 -translate-x-1/2 md:left-0  md:translate-0 my-3 hover:bg-blue-500 hover:text-white cursor-pointer">View Contest</button>
                </div>
                {/* opp 2 */}
                <div className="relative my-9">
                    <h1 className=" text-sm font-bold">120 Essay Writing Competition</h1>
                    <h1 className="text-blue-500 text-sm my-2">Essay Competition</h1>
                    <h1 className="text-sm font-light">The QCEC (Queen's Commonwealth)</h1>
                    <img src={CommonWealth} alt="" className="my-5 w-80 md:w-50 md:h-30 md:absolute md:translate-x-100 md:-translate-y-24"/>
                    <div className="flex">
                        <img src={MapPin} alt="" className="w-6" />
                        <p className="ml-2 text-sm font-light">Online, Global</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 md:gap-3">
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> APPLY BY <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Immediately</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> STARTING DATE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>15 May 2025</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> DURATION <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>1 Month</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> ELIGIBILITY <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Anyone</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> PRIZE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Money</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> DEADLINE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>30 June 2025</span></p>
                    </div>
                    <button className="p-2 border border-blue-500 text-blue-500 font-light text-sm relative left-1/2 -translate-x-1/2 md:left-0  md:translate-0 my-3 hover:bg-blue-500 hover:text-white cursor-pointer">View Contest</button>
                </div>
                <div className="relative">
                    <h1 className=" text-sm font-bold">120 Essay Writing Competition</h1>
                    <h1 className="text-blue-500 text-sm my-2">Essay Competition</h1>
                    <h1 className="text-sm font-light">The QCEC (Queen's Commonwealth)</h1>
                    <img src={CommonWealth} alt="" className="my-5 w-80 md:w-50 md:h-30 md:absolute md:translate-x-100 md:-translate-y-24"/>
                    <div className="flex">
                        <img src={MapPin} alt="" className="w-6" />
                        <p className="ml-2 text-sm font-light">Online, Global</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-4 md:gap-3">
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> APPLY BY <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Immediately</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> STARTING DATE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>15 May 2025</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> DURATION <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>1 Month</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> ELIGIBILITY <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Anyone</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> PRIZE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>Money</span></p>
                        <p className="text-gray-400 text-sm font-bold mt-7 mb-3"> DEADLINE <br /><span className={theme == "light"? "text-black font-light":" text-black  font-bold"}>30 June 2025</span></p>
                    </div>
                    <button className="p-2 border border-blue-500 text-blue-500 font-light text-sm relative left-1/2 -translate-x-1/2 md:left-0  md:translate-0 my-3 hover:bg-blue-500 hover:text-white cursor-pointer">View Contest</button>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default OpportunitiesAll;