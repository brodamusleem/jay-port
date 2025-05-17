import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';



export default function NavBar(){
    const [nav,setNav] = useState(false)
    const toogleMenu = () => {
        setNav(!nav)
    }
    const toogleClose = () => {
        setNav(false)
    }
    return(
        <div className="fixed top-0 left-0 bg-white shadow-2xl  w-full z-50">
          <div className="flex justify-between items-center p-4 h-20 max-w-[1300px]">
            <h1 className="text-teal-950 text-3xl font-serif font-bold  md:text-5xl">JayEdit</h1>
            <ul className="hidden md:flex gap-3 cursor-pointer text-xl">
                <li>
                    <Link  >Home</Link>
                </li>
                <li>
                    <Link to="Aboutme"
                   smooth={true}
                    offset={50}
                   onClick={toogleClose}
                   duration={500}>About me</Link>
                </li>
                <li>
                    <Link 
                    to="experience"
                    smooth={true}
                     offset={50}
                    onClick={toogleClose}
                    duration={500}>What I do</Link>
                </li>
                <li>
                    <Link 
                    to="contact"
                    smooth={true}
                     offset={50}
                    onClick={toogleClose}
                    duration={500}
                    >Contact me</Link>
                </li>
              
              
            </ul>
            <div className="md:hidden gap-12 z-30 text-gray-300 " onClick={toogleMenu}>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
            </div>
           
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-800 text-white mt-20 flex flex-col justify-center items-center text-2xl space-y-8 z-40 transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link to="/" onClick={toogleClose}>Home</Link>
        <Link 
        to="Aboutme"
        smooth={true}
         offset={50}
        duration={500}
        onClick={toogleClose}>About me</Link>
        <Link 
        to="experience"
        smooth={true}
         offset={50}
        onClick={toogleClose}
        duration={500}>What I do</Link>
        <Link 
        to="contact"
        smooth={true}
         offset={50}
        onClick={toogleClose}
        duration={500}
        >Contact me</Link>
      </div>
          </div>
        </div>
    )
}