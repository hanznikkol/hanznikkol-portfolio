import mePhoto from '../assets/images/Home/mePhoto.png';
import DotPattern from '../assets/images/Home/DotPatterns.png';
import TwoSquare from '../assets/images/Home/TwoSquare.png';
import Crosshair from '../assets/images/Home/Crosshair.png';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

function Home() {
    gsap.registerPlugin(TextPlugin);
    const textRef = useRef();
    const cursorRef = useRef();
    const fullText = "Hanz Nikkol.";

    useEffect(() => {
    // make cursor blink forever, only once
    gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut",
    });

    // function that types the text
    const typeText = () => {
      gsap.fromTo(
        textRef.current,
        { text: "" },
        {
          text: fullText,
          duration: fullText.length * 0.1,
          ease: "none",
        }
      );
    };

    // initial and repeated typing
    typeText();
    const interval = setInterval(typeText, 10000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div id='home' className="relative w-full h-screen flex items-center justify-center bg-midnight-black overflow-hidden z-20 select-none">

            {/* Content */}
            <div className="flex justify-center items-center w-full h-full px-4 lg:px-16">
                <div className="w-full max-w-2xl h-fit flex flex-col items-center justify-center gap-12 2xl:gap-16 lg:px-8">

                    {/* Profile Image */}
                    <div className="w-40 h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 z-20">
                        <img src={mePhoto} className="w-full h-full object-cover" />
                    </div>

                    {/* Text Block */}
                    <div className="flex flex-col justify-center items-center gap-4">
                        <p className="text-sm lg:text-lg xl:text-xl text-spectral-white">Hello I&apos;m</p>
                        <h1 className="text-center tracking-wider font-bebas-neue font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            <span className="text-mystic-purple">&gt;</span>
                            <span className="inline-flex">
                                <span ref={textRef} className="text-spectral-white"></span>
                                <span ref={cursorRef} className="text-mystic-purple ml-1">_</span>
                            </span>
                        </h1>
                        <div className="max-w-xl px-6">
                            <p className="text-center text-sm lg:text-lg xl:text-xl text-spectral-white">
                                <strong className="text-highlight">Front-End driven.</strong> <strong className="text-violet-400">Full-Stack capable.</strong> Passionate about building sleek, fast, and user-first digital experiences.
                            </p>
                        </div>
                        {/* Buttons */}
                        <div className='flex gap-4 items-center'>
                            <a href='#contacts' className="hover:cursor-pointer hover:scale-105 relative font-bold mt-4 bg-button-primary py-2 px-4 text-spectral-white rounded-lg text-sm lg:text-lg overflow-hidden transition-all duration-300 hover:bg-button-hover">
                                <span className="relative z-10">Contact Me</span>
                            </a>
                            <a href='#projects' className="hover:cursor-pointer hover:scale-105 relative font-bold mt-4 border py-2 px-4  rounded-lg text-sm lg:text-lg overflow-hidden transition-all duration-300 border-spectral-white text-spectral-white hover:bg-spectral-white hover:text-midnight-black">
                                <span className="relative z-10">View Projects</span>
                            </a>
                        </div>  
                    </div>

                </div>
            </div>

            <div className="absolute w-24 h-24 lg:w-40 lg:h-40 -left-12 bottom-24 lg:bottom-40">
                <img src={DotPattern} className="w-full h-full object-cover" />
            </div>

            {/* Two Square - top right, floated outside */}
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 -right-32 top-24 lg:top-32">
                <img src={TwoSquare} className="w-full h-full object-cover" />
            </div>

            {/* Crosshair - middle left */}
            <img
                src={Crosshair}
                className="absolute top-1/2 -translate-y-1/2 -left-10 lg:-left-24 w-10 lg:w-14 z-20"
            />

            {/* Crosshair - bottom right */}
            <img
                src={Crosshair}
                className="absolute bottom-20 -right-10 lg:-right-24 w-10 lg:w-14 z-20"
            />
        </div>
    );
}

export default Home;
