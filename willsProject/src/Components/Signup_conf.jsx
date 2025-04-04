import BulletOne from "../assets/bullet1.png"
import UnFilledBullet from "../assets/UnFilledBullet.png"
import TickedBullet from "../assets/tickedbullet.png"
import UploadCloud from "../assets/upload-cloud.png"
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
                    <img src={TickedBullet} alt="" className="w-7 h-7" />
                    <div>
                        <h2 className="text-sm font-bold text-white">Your Organization details</h2>
                        <p className="text-sm font-light text-white">Please fill in your name and email</p>
                    
                    </div>
                    {/* line2 */}
                    <div className="absolute bg-white w-[1px] h-22 top-8 left-3"></div>
                </div>
                {/* bullet3 */}
                <div className="relative flex  items-center gap-6 mt-3 mb-15">
                    <img src={BulletOne} alt="" className="w-7 h-7" />
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
            <div className="flex flex-col items-center  md:-translate-y-20 md:w-1/2">
                <h1 className="font-bold mt-5 md:mt-6">BowStrings</h1>
                {/* the form */}
                <div className="flex flex-col items-center">
                    <h1 className={theme == "light" ? "font-bold text-gray-600 my-6 text-sm md:text-md": "font-bold text-gray-300 my-6 text-sm md:text-md"}>Confirmation</h1>
                    <h1 className="font-light text-gray-400 md:-translate-x-39 text-sm mb-2">Profile Picture</h1>
                    {/* uplaod picture area */}
                    <div className="bg-[#D5E4DD80] flex flex-col items-center justify-center w-[100%] md:w-100 h-50 mb-6">
                        <img src={UploadCloud} alt="" className="w-15 h-15" />
                        <p className="text-gray-400">Drag and Drop to upload</p>
                        <button className="p-1 bg-blue-500 text-[14px]  px-2 my-3 text-white hover:bg-black ">Select Files</button>

                    </div>
                    <div className="flex flex-col items-center">
                    <h1 className="font-light text-gray-400 md:-translate-x-39 text-sm mb-2">Password</h1>
                    <input type="text" name="" id="" placeholder="Please enter your password" className="p-2 bg-[#D5E4DD80] mb-9 text-sm outline-blue-500 w-70 md:w-100"  />
                    </div>
                    
                

        
            
                    
                    {/* continue btn */}

                    <Link to= "/Signup_appr">
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