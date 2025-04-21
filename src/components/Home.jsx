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
        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        gsap.to(textRef.current, {
            text: fullText,
            duration: fullText.length * 0.1,
            ease: 'none'
        });
    }, []);

    return (
        <div id='home' className="relative w-full h-screen flex items-center justify-center bg-midnight-black overflow-hidden z-20">

            {/* Content */}
            <div className="flex justify-center items-center w-full h-full px-4 lg:px-16">
                <div className="w-full max-w-2xl h-fit flex flex-col items-center justify-center gap-12 xl:gap-20 lg:px-8">

                    {/* Profile Image */}
                    <div className="w-40 h-40 lg:w-64 lg:h-64 z-20">
                        <img src={mePhoto} className="w-full h-full object-cover" />
                    </div>

                    {/* Text Block */}
                    <div className="flex flex-col justify-center items-center gap-4 lg:gap-6">
                        <p className="text-lg lg:text-2xl text-spectral-white">Hello I&apos;m</p>
                        <h1 className="text-center tracking-wider font-bebas-neue font-bold text-6xl lg:text-8xl">
                            <span className="text-mystic-purple">&gt;</span>
                            <span className="inline-flex">
                                <span ref={textRef} className="text-spectral-white"></span>
                                <span ref={cursorRef} className="text-mystic-purple ml-1">_</span>
                            </span>
                        </h1>
                        <div className="max-w-xl px-6">
                            <p className="text-center text-base lg:text-xl text-spectral-white">
                                Passionate <strong className="text-highlight">Front-End Developer</strong> crafting intuitive web and mobile experiences.
                            </p>
                        </div>

                        <a className="hover:cursor-pointer hover:scale-105 relative font-bold mt-4 bg-button-primary px-6 lg:px-10 py-2 lg:py-3 text-spectral-white rounded-lg text-sm lg:text-lg overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:scale-x-0 before:bg-button-hover before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                            <span className="relative z-10">Contact Me</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute w-24 h-24 lg:w-40 lg:h-40 -left-12 bottom-24 lg:bottom-40">
                <img src={DotPattern} className="w-full h-full object-cover" />
            </div>

            {/* Two Square - top right, floated outside */}
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 -right-16 top-20 lg:top-32">
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
