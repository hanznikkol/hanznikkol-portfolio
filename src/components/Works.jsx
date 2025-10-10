import mockup1 from '../assets/images/Mockups/ONEFlowMockup.png'
import mockup2 from '../assets/images/Mockups/STIJoinMockup.png'
import mockup3 from '../assets/images/Mockups/DoodleMockup.png'
import { FaFigma, FaGithub } from 'react-icons/fa';
import { Badge } from './ui/badge';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

function Works() {

  const projects = [
    {
      title: 'ONEFlow',
      role: 'Lead Front-End Developer',
      desc: `Web-based Self-Service Kiosk Queue Management System for STI College or ONEFlow is a modular queue management system designed for STI College Lucena to improve the service flow for students and visitors. It integrates both kiosk and web-based interfaces to handle queueing efficiently and transparently. Developed as a capstone project, it focuses on reducing wait times, enhancing accessibility, and optimizing queue operations within multiple service departments.`,
      tech: ['HTML', 'CSS', 'JavaScript', 'VueJS'],
      techColors: {
        HTML: 'bg-orange-500',
        CSS: 'bg-blue-500',
        JavaScript: 'bg-yellow-500',
        VueJS: 'bg-green-700',
      },
      mockup: mockup1, // your imported image
      repoLink: 'https://github.com/',
      figmaLink: 'https://www.figma.com/design/If7gAiGoNhnNvYyWwZHkf3/Capstone-ONEFlow?node-id=0-1&t=MNVcsWYIyhfHVz1A-1',
    },
    {
      title: 'STI Join',
      role: 'Full Stack Developer',
      desc: `STIJoin is a Student Registration System developed for STI College Lucena. It streamlines the enrollment process and efficiently manages student information. Built with C# (.NET) and Microsoft SQL Server, the system allows administrators to register, update, and track student data in a centralized platform.`,
      tech: ['C# (.NET)', 'Microsoft SQL Server'],
      techColors: {
        'C# (.NET)': 'bg-purple-500',
        'Microsoft SQL Server': 'bg-[#029DEA]'
      },
      mockup: mockup2, // your imported image
      repoLink: 'https://github.com/hanznikkol/STIJoin',
      figmaLink: null,
    },
    {
      title: 'Dood.le',
      role: 'Front-End Developer',
      desc: `Dood.le is a fun and interactive Android mobile game where players guess words based on drawn clues in real time. It challenges creativity and quick thinking, making it engaging for both casual and competitive play. With real-time multiplayer functionality, Dood.le offers a dynamic and social gaming experience.`,
      tech: ['Android Studio', 'XML', 'Java'],
      techColors: {
        'Android Studio': 'bg-green-600',
        XML: 'bg-blue-500',
        Java: 'bg-red-600'
      },
      mockup: mockup3, // your imported image
      repoLink: 'https://github.com/randallegend/doodle',
      figmaLink: 'https://www.figma.com/design/vKMO44zhZtiErRubi8vsp9/Dood.le?node-id=0-1&p=f&t=IQhDnACcVBI9MCJ1-0',
    }
  ]

  return (
    <>
    <div id='projects' className="flex flex-col w-full lg:h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}  
        loop={true}
        pagination={{ clickable: true }}
        className = "w-full h-full overflow-y-auto"
        slidesPerView={1}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className='flex lg:items-center justify-center flex-col lg:flex-row w-full lg:h-screen lg:gap-2 p-8 lg:py-4 lg:pr-24 cursor-grab grab-active'>
              {/* Mockup Images */}
              <div className='w-full lg:w-[70%]'>
                <img src={project.mockup} alt='' className='w-full h-full'/> 
              </div>

              {/* Description */}
              <div className='w-full lg:w-[40%] h-full flex lg:items-center'>
                <div className='flex flex-col w-full'>
                  <h1 className='font-bold font-bebas-neue text-7xl lg:text-8xl xl:text-9xl'>{project.title}</h1>
                  <p className='text-white font-semibold text-lg mb-2'>Role: {project.role}</p>
                  <div className='flex gap-4'>
                    {project.tech.map((tech, i) => (
                      <Badge key={i} className={`${project.techColors[tech]} font-bold`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className='mt-4 text-sm lg:text-base xl:text-lg'>{project.desc}</p>
                  
                  <div className='flex gap-2 items-center'>
                    {project.repoLink && (
                      <a
                        className="hover:cursor-pointer hover:scale-105 flex items-center gap-2 bg-spectral-white/10 text-spectral-white font-bold mt-4 py-2 px-4 rounded-lg text-sm lg:text-lg transition-all duration-300"
                        href={project.repoLink} // update with actual repo
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-lg" />
                        <span>View Repository</span>
                    </a>
                    )}
                    
                    {project.figmaLink && (
                      <a
                        className="hover:cursor-pointer hover:scale-105 flex items-center gap-2 bg-pink-500 text-spectral-white font-bold mt-4 py-2 px-4 rounded-lg text-sm lg:text-lg transition-all duration-300"
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFigma className="text-lg" /> 
                        <span>Open Figma</span>
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="hidden lg:block text-center text-sm text-spectral-white opacity-70">
        Swipe or drag to explore more →
      </p>
    </div>
    </>
  )
}

export default Works