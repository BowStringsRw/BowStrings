import BulletOne from "../assets/bullet1.png"
import UnFilledBullet from "../assets/UnFilledBullet.png"
import TickedBullet from "../assets/tickedbullet.png"
import { Link } from "react-router-dom"

const Signup = ({theme}) => {
    return (
         <>
         <div className={theme == "light"? "md:flex items-center md:gap-30 md:h-[100vh] mb-30" : "md:flex items-center md:gap-30 md:h-[100vh]  bg-[#2d3041] text-white" }>
            {/* the blue part */}
            <div className="hidden md:flex flex-col bg-blue-500 w-1/3 h-[100vh] items-center">
                <h1 className="font-bold  my-5 -translate-x-20 ">BowStrings</h1>
                {/* bullet1 */}
                <div className="relative flex  items-center gap-6 my-3">
                    <img src={TickedBullet} alt="" className="w-7 h-7" />
                    <div>
                        <h2 className="text-sm font-bold text-white">Your Organization details</h2>
                        <p className="text-sm font-light text-white">Please fill in your name and email</p>
                    
                    </div>
                    {/* line1 */}
                    <div className="absolute bg-white w-[1px] h-22 top-8 left-3"></div>
                </div>
                 {/* bullet2 */}
                <div className="relative flex  items-center gap-6 my-15">
                    <img src={BulletOne} alt="" className="w-7 h-7" />
                    <div>
                        <h2 className="text-sm font-bold text-white">Your Organization details</h2>
                        <p className="text-sm font-light text-white">Please fill in your name and email</p>
                    
                    </div>
                    {/* line2 */}
                    <div className="absolute bg-white w-[1px] h-22 top-8 left-3"></div>
                </div>
                {/* bullet3 */}
                <div className="relative flex  items-center gap-6 mt-3 mb-15">
                    <img src={UnFilledBullet} alt="" className="w-7 h-7" />
                    <div>
                        <h2 className="text-sm font-bold text-white">Your Organization details</h2>
                        <p className="text-sm font-light text-white">Please fill in your name and email</p>
                    
                    </div>
                    {/* line1 */}
                    <div className="absolute bg-white w-[1px] h-22 top-8 left-3"></div>
                </div>
                {/* bullet4 */}
                <div className="flex  items-center gap-6 my-3">
                    <img src={UnFilledBullet} alt="" className="w-7 h-7" />
                    <div>
                        <h2 className="text-sm font-bold text-white">Your Organization details</h2>
                        <p className="text-sm font-light text-white">Please fill in your name and email</p>
                    
                    </div>
                    
                </div>
    
            </div>
            {/* the white part */}
            <div className="flex flex-col items-center md:-translate-y-20 md:w-1/2">
                <h1 className="font-bold mt-5 md:mt-6">BowStrings</h1>
                {/* the form */}
                <div className="flex flex-col items-center ">
                    <h1 className={theme == "light" ? "font-bold text-gray-600 my-6 text-sm md:text-md": "font-bold text-gray-300 my-6 text-sm md:text-md"}>Organization approval</h1>
                    <h1 className="font-light text-sm mb-4 mx-[3%] md:mx-0">Using any one of the options below, get your account verified <br /> and start posting internships/jobs</h1>
                    
                    {/* radio btn 1*/}
                    <div className="flex">
        
                    <input
                            type="radio"
                            name="choice"
                            value="functionalwebsite"
                            /> 
                            <span className=" m-3 text-sm cursor-pointer font-light ">I have an active and functional website <br />
                            <span className="font-light  hover:text-blue-300 text-sm text-gray-400">Verify using your active & functional website</span> 
                            </span>
                    </div>
                    {/* radio btn 2*/}
                    <div className="flex">
        
                    <input
                            type="radio"
                            name="choice"
                            value="functionalwebsite"
                            /> 
                            <span className=" m-3 text-sm cursor-pointer font-light ">I have an active and functional website <br />
                                <span className="font-light text-sm  hover:text-blue-300 text-gray-400">Verify using your active & functional website</span> 
                            </span>
                    </div>
                    {/* radio btn 3*/}
                    <div className="flex mb-6">
                                
                            <input
                                    type="radio"
                                    name="choice"
                                    value="functionalwebsite"
                                        /> 
                                    <span className=" m-3 text-sm cursor-pointer font-light ">I have an active and functional website <br />
                                      <span className="font-light  text-sm hover:text-blue-300 text-gray-400">Verify using your active & functional website</span> 
                                    </span>
                    </div>
                    {/* continue btn */}

                    <Link to= "/Signup_conf">
                    <button className="cursor-pointer relative p-2 md:p-3 w-30 bg-blue-500 text-sm text-white hover:bg-black left-1/2 -translate-x-1/2">Continue</button>
                    </Link>
                
                    {/* the ... */}
                    <div className=" flex mt-10 left-1/2 -translate-x-1/10">
                        <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full mx-2"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>

                </div>

            </div>
         </div>
         </> );
}
 
export default Signup;