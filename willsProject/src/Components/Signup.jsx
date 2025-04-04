import BulletOne from "../assets/bullet1.png"
import UnFilledBullet from "../assets/UnFilledBullet.png"
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
                    <img src={BulletOne} alt="" className="w-7 h-7" />
                    <div>
                        <h2 className="text-sm font-bold text-white">Your Organization details</h2>
                        <p className="text-sm font-light text-white">Please fill in your name and email</p>
                    
                    </div>
                    {/* line1 */}
                    <div className="absolute bg-white w-[1px]  h-22 top-8 left-3"></div>
                </div>
                 {/* bullet2 */}
                <div className="relative flex  items-center gap-6 my-15">
                    <img src={UnFilledBullet} alt="" className="w-7 h-7" />
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
                <div className="w-[90%] md:flex flex-col items-center">
                    <h1 className={theme == "light" ? "font-bold text-gray-600 my-7 text-sm md:text-md": "font-bold text-gray-300 my-7 text-sm md:text-md"}>Organization details</h1>
                    {/* name */}
                    <div>
                    <p className={theme == "light"?"text-gray-500 text-sm" : "text-gray-300 text-sm" }>Name</p>
                    <input type="text" name="" id="" placeholder="Enter your Name" className={theme =="light"? "text-sm w-90 my-4 p-3 outline-blue-500  bg-[#D5E4DD80]": "text-sm my-4 w-90 p-3 outline-blue-500  bg-[#D5E4DD80]"}/>
                    </div>
                    {/* Email*/}
                    <div>
                    <p className={theme == "light"?"text-gray-500 text-sm" : "text-gray-300 text-sm" }>Email</p>
                    <input type="text" name="" id="" placeholder="Enter your Email" className="text-sm my-4 w-90 p-3 outline-blue-500 bg-[#D5E4DD80]"/>
                    </div>
                    {/* about */}
                    <div>
                    <p className={theme == "light"?"hidden md:block text-gray-500 text-sm" : "hidden md:block text-gray-300 text-sm" }>About your organization and what you do</p>
                    <textarea name="" id="" placeholder="A brief Description of your organization" className="bg-[#D5E4DD80] w-90 h-40 p-3 my-7 text-sm outline-blue-500 "></textarea>
                    </div>
                    {/* continue btn */}

                    <Link to= "/Signup_appr">
                    <button className="cursor-pointer relative p-2 md:p-3 w-30 bg-blue-500 text-sm text-white hover:bg-black left-1/2 -translate-x-1/2">Continue</button>
                    </Link>
                
                    {/* the ... */}
                    <div className="relative flex mt-10 left-1/2 -translate-x-1/10">
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