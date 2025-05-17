
export default function Experience(){
    return(
        <div className="w-full min-h-screen " id="experience">
            <h1 className="text-3xl font-serif text-center mb-10 font-bold md:text-4xl ">What i do</h1>
            <div className="grid  gap-5 md:grid-cols-3  h-64 content-between gap-4 place-content-center  ">
                <div className=" flex flex-col items-center shadow-2xl p-20 transition-transform duration-300 transform hover:scale-105 hover: text-black rounded-xl  md:row-span-12">
                   <ul>
                    <li><span>➤</span> importing and organising footage</li>
                    <li><span>➤</span> adding transition and effects</li>
                    <li><span>➤</span> color correction and grading</li>
                   </ul>
                </div>
                <div className=" flex flex-col items-center shadow-2xl p-20 md:row-span-full 
                transition-transform duration-300 transform hover:scale-105 hover: text-black rounded-xl ">
                    <ul>
                        <li><span>➤</span> sound desing and mixing</li>
                        <li><span>➤</span> visual effects (VFX) intergration</li>
                        <li><span>➤</span> final cut and export</li>
                    </ul>
                </div>
                <div className=" flex flex-col items-center shadow-2xl p-20 transition-transform duration-300 transform hover:scale-105 hover: text-black rounded-xl  md:row-span-9">
                    <ul>
                        <li><span>➤</span> collaborating with other director </li>
                        <li><span>➤</span> Ensuring conssistency </li>
                        <li><span>➤</span> Triming and arranging clips</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}