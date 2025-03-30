import Pic1 from "../assets/picone.png"
import pic2 from "../assets/pictwo.png"
import Kalisa from "../assets/kalisa.png"
import Dotted from "../assets/dotted.svg"
import Writer from "../assets/writerblog.png"
import Leaflady from "../assets/leaflady.png"
import Profilepic from "../assets/profilepic.png"
import Twitter from "../assets/twitterIcon.png"
import Mail from "../assets/mailIcon.png"
import Instagram from "../assets/instagram.png"

const Homepage2 = ({theme}) => {
    return ( 
    <>
     {/* the second page about opportunities */}

     <div className={theme == "light"? "mt-30 mx-20 pt-40" : "mt-0 px-20 pt-20 bg-[#161618]" }>
               <div className=" flex gap-7 flex-col md:flex items-center md:justify-between ">
                    <p className="text-blue-500 font-bold">Explore popular scholarships </p>
                    <button className="text-white mb-3 text-sm font-bold py-1 px-3 bg-[#1A84FF] " >View all</button>
               </div>
               {/* all cards */}
               <div className={theme == "light"? "flex flex-col items-center gap-8 md:flex-row md:justify-between" : "flex justify-between text-white" } >
                {/* card one */}
               <div data-aos="fade-right" className=" w-3/4 md:w-1/4 my-4 shadow shadow-gray-400">
                <img src={Pic1} alt="" />
                <h2 className={theme == "light" ? "text-sm font-bold my-3 px-2" : "text-sm text-white font-bold my-3 px-2"} >Essay writing competition</h2>
                <p className="text-sm font-light p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis cumque corrupti dicta neque cupiditate consectetur, veniam possimus aperiam expedita optio quo, excepturi iusto eius molestiae deleniti ea culpa at.</p>
                <p className="text-blue-500 text0-sm font-light my-2 px-2">See more </p>
               </div>
               {/* card two */}
               <div data-aos="fade-up" className=" w-3/4 md:w-1/4 my-4 shadow shadow-gray-400">
                <img src={Pic1} alt="" />
                <h2 className="text-sm font-bold my-3 px-2">Essay writing competition</h2>
                <p className="text-sm font-light p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis cumque corrupti dicta neque cupiditate consectetur, veniam possimus aperiam expedita optio quo, excepturi iusto eius molestiae deleniti ea culpa at.</p>
                <p className="text-blue-500 text0-sm font-light my-2 px-2">See more </p>
               </div>
               {/* card three */}
               <div data-aos="fade-left" className=" w-3/4 md:w-1/4 my-4 shadow shadow-gray-400">
                <img src={Pic1} alt="" />
                <h2 className="text-sm font-bold my-3 px-2">Essay writing competition</h2>
                <p className="text-sm font-light p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis cumque corrupti dicta neque cupiditate consectetur, veniam possimus aperiam expedita optio quo, excepturi iusto eius molestiae deleniti ea culpa at.</p>
                <p className="text-blue-500 text0-sm font-light my-2 px-2">See more </p>
               </div>
               </div>
               {/* the lady with books */}
               <div data-aos="fade-left" className="flex justify-between items-center mt-10">
                <div className="relative w-1/2 ">
                <img src={Kalisa} alt="" className="w-100 h-120 z-10"/>
                <img src={Dotted} alt="" className="absolute bottom-0 w-30 -translate-x-1/3 z-0" />
                <img src={Dotted} alt="" className="absolute top-0 left-80 w-30 -translate-x-1/3 z-0" />
                </div>

                <div className= {theme == "light"? " w-1/2": " w-1/2 text-white" }>
                    <h2 className="text-blue-500 font-bold text-2xl mb-10 ">Students be talking about us!</h2>
                    <p className="font-light text-sm mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nisi doloribus commodi, debitis nulla maiores est dicta! Ut sit nemo blanditiis ad ipsam placeat, dicta exercitationem, dolor, nam omnis nobis.</p>
                    <h2 className="font-bold">Kalisa Belyse</h2>
                    <h2 className="text-sm font-light">Student</h2>
                </div>

               </div>

                   <div className="flex items-center justify-center">
                    <p className="text-blue-500 font-bold ">Our Working process</p>
                    </div>            
               {/* the leaf Lady */}
               <div className=" my-10 md:flex justify-between">

                <div className={theme == "light"? " md:grid grid-cols-2 w-1/2 gap-10" : "grid grid-cols-2 w-1/2 gap-10 text-white"}>
                    {/* icon 1 */}
                    <div data-aos="fade-right" className=" translate-x-1/2 md:translate-0 w-75 shadow shadow-gray-300 md:p-4">
                        <div className="w-15 h-15 bg-[#F2FFF5] rounded-full mb-5 flex justify-center items-center">
                        <img src={Writer} alt="" className="w-10 h-10"/>
                        </div>
                    
                    <h1 className="font-bold text-sm mb-3">Register on ROH</h1>
                    <p className="text-sm font-light">Lorem ipsum . Aliquid illo, vero, pariatur quos dolorem odio  laboriosam fugit nesciunt iure nostrum.</p>

                    </div>
                     {/* icon 1 */}
                     <div data-aos="fade-left" className="w-75 shadow shadow-gray-300 p-4 translate-y-7">
                        <div className="w-15 h-15 bg-[#F2FFF5] rounded-full mb-5 flex justify-center items-center">
                        <img src={Writer} alt="" className="w-10 h-10"/>
                        </div>
                    
                    <h1 className="font-bold text-sm mb-3">Register on ROH</h1>
                    <p className="text-sm font-light">Lorem ipsum . Aliquid illo, vero, pariatur quos dolorem odio  laboriosam fugit nesciunt iure nostrum.</p>

                    </div>
                     {/* icon 1 */}
                     <div data-aos="fade-up" className=" translate-x-1/3 md:translate-0 mt-15 md:m-0 w-75 shadow shadow-gray-300 p-4">
                        <div className="w-15 h-15 bg-[#F2FFF5] rounded-full mb-5 flex justify-center items-center">
                        <img src={Writer} alt="" className="w-10 h-10"/>
                        </div>
                    
                    <h1 className="font-bold text-sm mb-3">Register on ROH</h1>
                    <p className="text-sm font-light">Lorem ipsum . Aliquid illo, vero, pariatur quos dolorem odio  laboriosam fugit nesciunt iure nostrum.</p>

                    </div>
                     {/* icon 1 */}
                     <div data-aos="fade-up" className="w-75 shadow shadow-gray-300 p-4 translate-y-7">
                        <div className="w-15 h-15 bg-[#F2FFF5] rounded-full mb-5 flex justify-center items-center">
                        <img src={Writer} alt="" className="w-10 h-10"/>
                        </div>
                    
                    <h1 className="font-bold text-sm mb-3">Register on ROH</h1>
                    <p className="text-sm font-light">Lorem ipsum . Aliquid illo, vero, pariatur quos dolorem odio  laboriosam fugit nesciunt iure nostrum.</p>

                    </div>
                    
                </div>
                {/* real leaf lady */}
                <div data-aos="fade-left" className="flex items-center justify-center">
                    <img src={Leaflady} className="w-2/3  mt-16 md:mt-0 md:w-2/2" alt="" />
                </div>
               </div>
               {/* the team intro */}

               <div className= {theme == "light"? "my-30" : "mt-30 text-white  pb-30"}>
                <p className="font-bold my-3 md:text-2xl">MEET <br /><span className="text-blue-500">OUR TEAM</span></p>
                <div className=" md:flex md:justify-between">
                    {/* person 1 */}
                    <div className={theme == "light" ? "flex items-center gap-9 w-90 shadow-2xl shadow-black rounded-full":"flex items-center gap-9 w-90 shadow-2xl shadow-black bg-gray-400 rounded-full"}>
                        <div className="bg-[#393D3E] w-40">
                            <img src={Profilepic} alt="" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="font-bold ">William MUGISHA</h2>
                            <h2 className="font-light my-3 text-sm">FOUNDER</h2>
                            <div className="gap-3 flex">
                                {/* socials */}
                               <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Twitter} className="w-1/2" alt="" />
                                </div>
                                
                                <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Instagram} className="w-1/2" alt="" />
                                </div>
                                <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Mail} className="w-1/2"  alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* person 2 */}
                    {/* person 1 */}
                    <div className={theme == "light" ? "flex items-center gap-9 m-10 md:m-0 w-90 shadow-2xl shadow-black rounded-full" : "flex items-center gap-9 w-90 shadow-2xl shadow-black bg-gray-400 rounded-full"}>
                        <div className="bg-[#393D3E] w-40">
                            <img src={Profilepic} alt="" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="font-bold ">Enock Hakizayesu</h2>
                            <h2 className="font-light my-3 text-sm">FOUNDER</h2>
                            <div className="gap-3 flex">
                                {/* socials */}
                               <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Twitter} className="w-1/2" alt="" />
                                </div>
                                
                                <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Instagram} className="w-1/2" alt="" />
                                </div>
                                <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Mail} className="w-1/2"  alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* person 3 */}
                    {/* person 1 */}
                    <div className={theme == "light" ? "flex items-center gap-9  w-90 md:w-90 shadow-2xl shadow-black rounded-full" : "flex items-center gap-9 w-90 shadow-2xl shadow-black bg-gray-400 rounded-full"}>
                        <div className="bg-[#393D3E] w-40">
                            <img src={Profilepic} alt="" />
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="font-bold ">Jean Philippe N.</h2>
                            <h2 className="font-light my-3 text-sm">FOUNDER</h2>
                            <div className="gap-3 flex">
                                {/* socials */}
                               <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Twitter} className="w-1/2" alt="" />
                                </div>
                                
                                <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Instagram} className="w-1/2" alt="" />
                                </div>
                                <div className="w-7 h-7 bg-blue-500 flex items-center justify-center">
                               <img src={Mail} className="w-1/2"  alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
              

            </div>

    
    </> );
}
 
export default Homepage2;