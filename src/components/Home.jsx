/*Icons and Images */
import mePhoto from '../assets/images/Home/mePhoto.png'
import DotPattern from '../assets/images/Home/DotPatterns.png'
import TwoSquare from '../assets/images/Home/TwoSquare.png'
import Crosshair from '../assets/images/Home/Crosshair.png'
function Home() {
  return (
    <>
    <div className="h-screen relative w-full flex bg-midnight-black z-10 overflow-hidden">
        {/*Content*/}
        <div className="flex items-center justify-center w-full h-full p-24">
            <div className='w-full h-full flex flex-col items-center justify-around p-8 gap-24'>
                <div className='w-[200px] h-[200px]'>
                    <img src={mePhoto} className=' w-full h-full object-cover'/>
                </div>
                <div className='flex flex-col items-center gap-8 flex-1'>
                    <p className='text-xl'>Hello I'm</p>
                    <h1 className=' tracking-wider font-bebas-neue font-bold text-9xl'> <span className='text-mystic-purple'>&gt;_</span>HANZ NIKKOL<span className='text-mystic-purple'>.</span></h1>
                    <div className='w-92'>
                        <p className='text-center text-xl'>Passionate <strong className='text-infernal-gold'>Front-End Developer</strong> crafting intuitive web and mobile experiences.</p>
                    </div>
                    <a className="hover:cursor-pointer relative font-bold mt-4 bg-crimson-red px-8 py-2 rounded-lg text-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:scale-x-0 before:bg-mystic-purple before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <span className="relative z-10">Contact Me</span>
                    </a>
                </div>
            </div>
        </div>

        {/*Decorations*/}
        <div className='absolute overflow-hidden left-0 bottom-24 transform -translate-x-16'>
            <img src={DotPattern} className=' object-cover'/>
        </div>
        <div className='absolute overflow-hidden right-0 top-48 transform translate-x-32'>
            <img src={TwoSquare}/>
        </div>

        <img src={Crosshair} className='absolute top-64 left-72'/>
        <img src={Crosshair} className='absolute bottom-56 right-64'/>
    </div>
    </>
  )
}

export default Home
