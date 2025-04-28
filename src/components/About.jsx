import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image1 from '../assets/images/About/Swiper_Images/Image1.jpg'
import Image2 from '../assets/images/About/Swiper_Images/Image2.jpg'
import Image3 from '../assets/images/About/Swiper_Images/Image3.jpg'
import Image4 from '../assets/images/About/Swiper_Images/Image4.jpg'
import Image5 from '../assets/images/About/Swiper_Images/Image5.jpg'
import Crosshair from '../assets/images/Home/Crosshair.png'

function About() {
  return (
    <div id="about" className="relative h-full xl:h-screen w-full bg-midnight-black z-20">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full lg:p-24 lg:gap-2">

            <div className="flex-1 flex justify-center items-center w-full h-full relative p-8 lg:p-16 xl:p-0">
                <div className='absolute transform hidden lg:block -translate-x-14 -translate-y-14 w-full h-full lg:w-[700px] lg:h-[500px] border opacity-50 border-spectral-white'></div>  
                {/* Swiper Images */}
                <Swiper  
                    className='w-full h-[300px] lg:w-[700px] lg:h-[500px]'
                    slidesPerView={1}
                    modules={[EffectFade, Autoplay]}
                    effect='fade'
                    loop={true}
                    autoplay={{
                      delay:2500,
                      disableOnInteraction: false,
                    }}
                  >
                    {[Image1, Image2, Image3, Image4, Image5].map((image, index) => (
                        <SwiperSlide key={index} className='w-full h-full object-cover'>
                          <img src={image} alt={'Slide ${index + 1}'} className='w-full h-full object-cover block'/>
                        </SwiperSlide>
                    ))}
                  </Swiper>
            </div>

            <div className="flex-1 flex flex-col w-full h-full items-center xl:items-end justify-start xl:justify-center p-8 xl:p-0 gap-10 z-20 ">
              <h1 className=" text-center xl:text-right text-6xl lg:text-7xl xl:text-9xl font-bebas-neue text-spectral-white">ABOUT <span className="text-mystic-purple">ME</span></h1>
              <div className="flex flex-col text-center xl:text-right font-source-sans xl:text-xl text-spectral-white pl-4 text-balance gap-10">
                <p className=" ">I'm a soon-to-be BSIT graduate at STI College Lucena and <strong className="text-highlight">Front-End Development enthusiast</strong> passionate about crafting user-friendly and visually appealing web experiences. I enjoy turning designs into clean, responsive interfaces and constantly learning new technologies to improve my skills.</p>
                <p>Beyond coding, I'm deeply into <strong className="text-highlight">music</strong>. I play bass and guitar, sing, and write songs. Music fuels my creativity, much like web development. I'm also a gamer, which inspires my interest in interactive digital experiences.</p>
                <p>I'm always looking for new challenges and opportunities to grow as a developer and creative individual. <strong className="text-highlight">Let's connect and create something amazing!</strong></p>
              </div>
            </div>  
        </div>

        {/*Decorations*/}
        {/*Crosshair*/}
        <img src={Crosshair} className='absolute hidden xl:block top-40 right-40 m-0 p-0 transform -translate-x-96 '/>
        <img src={Crosshair} className='absolute right-6 bottom-40 xl:right-12 lg:right-64'/>
        <img src={Crosshair} className='absolute bottom-20 left-6 xl:left-12 lg:left-64'/>
    </div>
  )
}

export default About;