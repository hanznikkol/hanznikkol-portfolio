/*Icons and Images */
import mePhoto from '../assets/images/Home/mePhoto.png'
import DotPattern from '../assets/images/Home/DotPatterns.png'
import TwoSquare from '../assets/images/Home/TwoSquare.png'
import Crosshair from '../assets/images/Home/Crosshair.png'
function Home() {
  return (
    <>
    <div id='home' className="h-screen relative w-full flex bg-midnight-black z-20 overflow-hidden">
        {/*Content*/}
        <div className="flex items-center justify-center w-full h-full py-24 px-2 lg:p-24">
            <div className='w-full h-full flex flex-col items-center justify-center lg:justify-around p-8 gap-24'>
                <div className='w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] z-20'>
                    <img src={mePhoto} className=' w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col items-center gap-8 flex-1'>
                    <p className='lg:text-xl'>Hello I'm</p>
                    <h1 className=' text-center tracking-wider font-bebas-neue font-bold text-7xl lg:text-9xl'> <span className='text-mystic-purple'>&gt;_</span>HANZ NIKKOL<span className='text-mystic-purple'>.</span></h1>
                    <div className='w-92'>
                        <p className='text-center lg:text-xl'>Passionate <strong className='text-infernal-gold'>Front-End Developer</strong> crafting intuitive web and mobile experiences.</p>
                    </div>
                    <a className="hover:cursor-pointer hover:scale-105 relative font-bold mt-4 bg-crimson-red px-6 lg:px-8 py-2 rounded-lg lg:text-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:scale-x-0 before:bg-mystic-purple before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <span className="relative z-10">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>

        {/*Decorations*/}
        <div className='absolute overflow-hidden w-[100px] h-[100px] lg:w-auto lg:h-auto left-0 bottom-24 transform -translate-x-10 lg:-translate-x-16'>
            <img src={DotPattern} className='object-cover w-full h-full'/>
        </div>
        <div className='absolute overflow-hidden w-[250px] h-[250px] lg:w-auto lg:h-auto right-0 top-40 transform translate-x-32 z-10'>
            <img src={TwoSquare} className='object-cover w-full h-full'/>
        </div>
        {/* Crosshair */}
        <img src={Crosshair} className='absolute top-64 left-8 lg:left-72 z-30'/>
        <img src={Crosshair} className='absolute bottom-56 right-12 lg:right-64'/>
    </div>
    </>
  )
}

export default Home
