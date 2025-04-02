import CommonWealth from "../assets/commonwealthpic.png"


const Opportunities = ({theme}) => {
    return ( 
        <>
        <div className= {theme == "light" ? "flex flex-col items-center justify-center pb-40 mb-9": "flex flex-col items-center bg-[#0d131e] text-gray-300 justify-center pb-60"}>
            <button className="p-2 border border-blue-500 text-[12px] text-blue-500 m-9 w-50 hover:bg-blue-500 font-bold hover:text-white relative md:-translate-x-5/2 md:text-[15px] cursor-pointer">VIEW ALL COMPETITION</button>
            <div className="flex flex-col items-center">
                <h1 className="font-bold mb-6">The QCEC (Queen’s Commonwealth)</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <img src={CommonWealth} alt="" className="relative w-4/5 left-1/2 -translate-x-1/2"/>
                    <div className="w-4/5 flex mx-11 my-3 flex-col">
                        <h1 className="font-bold">Organizer</h1>
                        <h1 className="font-bold my-3">Organizer</h1>
                        <h1 className="font-bold mb-3">Organizer</h1>
                        <p className="font-light text-sm">Think of a project that can add value to our agricultural systems (Aquaculture, fish farming, hydoponics,...).</p>
                        
                        <div>
                        <h1 className="font-bold text-sm my-3">First week (9th-15th May)</h1>
                        <h2 className="font-light text-sm mb-3">Rural Development, Food Security and Sustainable agriculture</h2>
                        <p className="font-bold text-sm">Article:<span className="font-light ml-3">Link</span></p>
                        <p className="font-bold text-sm">Video: <span className="font-light ml-3">Link2</span></p>

                        </div>
                        <div>
                        <h1 className="font-bold text-sm my-3">Second week (16th-22th May)</h1>
                        <p className="font-bold my-2 text-sm">Debate topic:<span className="font-light ml-2">Today's agriculture is harmful</span></p>
                        <p className="text-sm font-bold">Essay/Poem/Theatre Theme: <span className="font-light">How should we deal with draughts and floods</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Opportunities;