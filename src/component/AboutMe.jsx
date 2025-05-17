import Jay2 from '../assets/photo.jpg'

export default function AboutMe(){
    return(
        <div className='w-full mx-auto relative mt-32 ' id='Aboutme'>
                        <h1 className='text-center mt-14 text-teal-950 text-3xl font-sans font-bold '>About me</h1>
            <div className='grid md:grid-cols-2 place-items-center mt-20 '>
                <div className='p-7 transition-transform duration-300 transform hover:scale-105 hover: text-black rounded-xl '>
                    <p className=' bg-slate-100  text-lg text-center text-black shadow-2xl p-5'>Hi, I’m Pharooq Jay a passionate and professional video editor dedicated to transforming raw footage into compelling stories. With expertise in industry-leading software such as Adobe Premiere Pro, Final Cut Pro, CapCut, and more, I bring creativity and precision to every project. Whether it’s a corporate video, a social media clip, or a personal vlog, I focus on delivering high-quality content that captivates and engages audiences.
                    When I’m not editing, I’m always exploring new techniques and tools to stay ahead in this fast-evolving field.
                     Feel free to check out my portfolio and let’s create something amazing together!</p>
                </div>
                <div className=' '>
                    <img src={Jay2} alt="" className='w-80 rounded-xl' />
                </div>
            </div>
        </div>
    )
}