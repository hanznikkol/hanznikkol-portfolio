import Crosshair from '../assets/images/Home/Crosshair.png'

function About() {
  return (
    <div id="about" className="relative h-screen w-full bg-midnight-black">

        <div className="flex items-center justify-center w-full h-full p-24 gap-2">

            <div className="flex-1 flex justify-center items-center w-full h-full">
                <div className='absolute top-50 left-30 w-[600px] h-[400px] border opacity-50 border-spectral-white'></div>
                {/* Images */}
                <div className='w-[600px] h-[400px] bg-gray-700 z-20'></div>
            </div>

            <div className="flex-1 flex flex-col w-full h-full items-end justify-center p-8 gap-10 z-20">
              <h1 className=" text-right text-9xl font-bebas-neue text-spectral-white">ABOUT <span className="text-mystic-purple">ME</span></h1>
              <div className="flex flex-col text-right font-source-sans text-xl text-spectral-white pl-4 text-balance gap-10">
                <p className=" ">I'm a soon-to-be BSIT graduate at STI College Lucena and <strong className="text-infernal-gold">Front-End Development enthusiast</strong> passionate about crafting user-friendly and visually appealing web experiences. I enjoy turning designs into clean, responsive interfaces and constantly learning new technologies to improve my skills.</p>
                <p>Beyond coding, I'm deeply into <strong className="text-infernal-gold">music</strong>. I play bass and guitar, sing, and write songs. Music fuels my creativity, much like web development. I'm also a gamer, which inspires my interest in interactive digital experiences.</p>
                <p>I'm always looking for new challenges and opportunities to grow as a developer and creative individual. <strong className="text-infernal-gold">Let's connect and create something amazing!</strong></p>
              </div>
            </div>  
        </div>

        {/*Decorations*/}
        {/*Crosshair*/}
        <img src={Crosshair} className='absolute top-40 right-80 m-0 p-0 transform -translate-x-96 '/>
        <img src={Crosshair} className='absolute bottom-40 right-12 lg:right-64'/>
        <img src={Crosshair} className='absolute bottom-20 left-12 lg:left-64'/>
    </div>
  )
}

export default About;