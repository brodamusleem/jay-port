import { useState } from "react"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope ,FaFacebookF,FaInstagram,FaYoutube} from "react-icons/fa";

const Footer = () => {
    const [card,setCard] = useState(false)
    const date = new Date().getFullYear()
    return(
        <div className="w-full h-full  mt-40  bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-32" id="contact">
            <div className="h-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex justify-center">
                    <button onClick={() => setCard(true)} className="border-t-2 border-b-2 border-white  bg-slate-900 px-6 py-2 rounded hover:bg-slate-800 transition">
                        Text Me
                    </button>
                </div>
                <div className=" flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                <div className="flex items-center gap-2">
                   <FaEnvelope />
                     <span>pharooqjay@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaPhoneAlt />
                       <span>07060828685</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <FaMapMarkerAlt />
                      <span>tishama ring road</span>
                 </div>
                </div>
                <div className="flex items-center gap-4 text-xl">
                <FaFacebookF className="hover:text-blue-500 transition" />
                <FaInstagram className="hover:text-pink-500 transition" />
                <FaYoutube className="hover:text-red-500 transition" />
                </div>
                {card && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md">
      <form  className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center">Send a Message</h2>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          required
          className="border border-gray-300 rounded text-black px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
        ></textarea>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setCard(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

        </div>
               
          <p>@ pharooqjay All right reserve. {date}</p>  
        </div>
    )
}
export default Footer