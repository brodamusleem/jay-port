import Jay from '../assets/update.jpg'
import {FaFacebookF,FaInstagram,FaYoutube} from 'react-icons/fa'

export default function Home(){
    return(
       <div className='max-w-[1200px] mx-auto relative mt-32'>
        <div className='grid md:grid-cols-2 place-items-center gap-8'>
            <div className='ml-5 '>
                <h1 className='text-2xl text-teal-900 font-bold md:text-4xl'>Hey there, I'm Pharooq Jay.</h1>
                <p>
                A professional video editor dedicated to turning your raw footage into powerful visual stories. With a blend of precision and creativity, I help brands, creators, and businesses bring their vision to life—frame by frame.</p>
                <div className=' flex items-center justify-center gap-5 mt-2 '>
                    <a href="#">
                        <FaFacebookF className='text-5xl text-blue-600 border-blue border-t-2 border-b-2 rounded-full p-2 md:text-6xl text-blue-600 
                        hover:text-blue-800 hover:border-blue-500 transform hover:scale-110 transition-all duration-300'></FaFacebookF>
                    </a>
                    <a href="#">
                        <FaInstagram className='text-5xl text-red-500 border-blue border-t-2 border-b-2 rounded-full p-2 md:text-6xl  hover:text-red-800 hover:border-red-500 transform hover:scale-110 transition-all duration-300'></FaInstagram>
                    </a>
                    <a href="#">
                        <FaYoutube className='text-5xl text-red-700 border-blue border-t-2 border-b-2 rounded-full p-2 md:text-6   hover:text-red-800 hover:border-red-700 transform hover:scale-110 transition-all duration-300  '></FaYoutube>
                    </a>
                </div>
            </div>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
        <div className="absolute h-full w-full rounded-full border-black border-t-2 border-b-2 animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full border-black border-t-2 border-b-2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center "></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-slate-300 rounded-full shadow-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden ">
          <img src={Jay} alt="Jay" className="w-full h-full object-cover rounded-full " />
        </div>
      </div>
            
        </div>
       </div>
    )
  
}