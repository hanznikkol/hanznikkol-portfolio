/*Icons and Images */
import mePhoto from '../assets/images/Home/mePhoto.png'
import DotPattern from '../assets/images/Home/DotPatterns.png'
import TwoSquare from '../assets/images/Home/TwoSquare.png'
import Crosshair from '../assets/images/Home/Crosshair.png'

/*GSAP*/
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

function Home() {
    gsap.registerPlugin(TextPlugin)
    const textRef = useRef()
    const cursorRef = useRef()
    const fullText = "Hanz Nikkol."
    useEffect(() => {
        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        })

        gsap.to(textRef.current, {
            text: fullText,
            duration: fullText.length * 0.1,
            ease: 'none' 
        })
    }) 

  return (
    <>
    <div id='home' className="h-screen relative w-full flex items-center justify-center bg-midnight-black z-20 overflow-hidden">
        
        {/*Content*/}
        <div className="flex justify-center items-center w-full h-full px-2 lg:p-24">
            <div className='w-full h-fit flex flex-col items-center justify-center lg:p-8 gap-16 xl:gap-24'>
                
                <div className='w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] z-20'>
                    <img src={mePhoto} className=' w-full h-full object-cover'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-6 lg:gap-8 flex-1'>
                    <p className='lg:text-xl'>Hello I'm</p>
                    <h1 className='text-center tracking-wider font-bebas-neue font-bold text-6xl lg:text-9xl'>
                        <span className='text-mystic-purple'>&gt;</span>
                        <span className='inline-flex'>
                            <span ref={textRef} className='text-white'></span>
                            <span ref={cursorRef} className='text-mystic-purple ml-1'>_</span>
                        </span>
                    </h1>
                    <div className='w-92 px-6 xl:p-0'>
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
        <img src={Crosshair} className='absolute bottom-56 right-6 lg:right-64'/>
    </div>
    </>
  )
}

export default Home
