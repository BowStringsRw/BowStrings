import Twitter from "../assets/twitterIcon.png"
import Mail from "../assets/mailIcon.png"
import Instagram from "../assets/instagram.png"
const Footer = ({theme}) => {
    return ( 
        <>
        {/* the entire footer */}
        <div className={theme == "light"? "mx-20 flex flex-col items-center" : "px-20 pt-30 bg-[#2d3041] flex text-gray-300 flex-col items-center" }>
            {/* the subscribe area */}
            <div className= {theme == "light"? "relative bg-[#F3FAFF] md:w-1/3  h-10 flex  justify-between  items-center rounded-sm mb-3 shadow shadow-black": "relative bg-[#000000] md:w-1/3 flex justify-between  items-center rounded-sm mb-3 shadow shadow-black"}>
                <input type="text" placeholder="Your email" className={theme == "light"? "w-2/3 border-none outline-none pl-2 text-sm" : "w-2/3 border-none outline-none  pl-2  text-sm" } />
                <button className="bg-blue-500 hover:bg-white hover:text-black p-3 h-10 rounded-sm text-white text-sm font-light">Subscribe</button>
            </div>
            {/* socials */}
           <div className="flex gap-6 my-3">
            {/* icon 1 */}
            <div className="bg-blue-500 hover:bg-black w-9 h-8 flex items-center justify-center rounded-sm">
                <img src={Twitter} alt="" className=" w-5 h-5" />
            </div>
            {/* icon 1 */}
            <div className="bg-blue-500 hover:bg-black w-9 h-8 flex items-center justify-center rounded-sm">
                <img src={Instagram} alt="" className=" w-5 h-5" />
            </div>
            {/* icon 1 */}
            <div className="bg-blue-500 w-9 h-8 flex items-center justify-center rounded-sm hover:bg-black">
                <img src={Mail} alt="" className=" w-5 h-5" />
            </div>
           </div>
           {/* copy right */}
           <p className="font-light text-sm my-5">&copy;{new Date().getFullYear()} AGUKA Copyright </p>

        </div>
        </>        
     );
}
 
export default Footer;