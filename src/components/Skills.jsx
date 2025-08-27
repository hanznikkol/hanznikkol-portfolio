// src/components/Skills.jsx
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { DiDatabase, DiStackoverflow, DiVisualstudio } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaGithub,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiAndroidstudio,
  SiXml,
  SiMaterialdesign,
  SiDotnet,
  SiShadcnui,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-400"/>},
  { name: "VueJS", icon: <FaVuejs className="text-green-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <RiNextjsLine className="text-neutral-500"/>},
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Java", icon: <FaJava className="text-gray-400 group-hover:text-red-600 text-3xl lg:text-4xl transition-colors duration-300" />},
  { name: "C#(.NET)", icon: <SiDotnet className="text-purple-500"/>},
  { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
  { name: "Material Design", icon: <SiMaterialdesign className="text-blue-400"/>},
  { name: "shadcn", icon: <SiShadcnui className="text-neutral-500"/>},
  { name: "GitHub", icon: <FaGithub className="text-orange-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "XML", icon: <SiXml className="text-gray-300" /> },
  { name: "Visual Studio", icon: <DiVisualstudio className="text-blue-500"/>},
  { name: "Microsoft SQL Server", icon: <DiDatabase className="text-[#029DEA]"/>},
  { name: "Stack Overflow", icon: <DiStackoverflow className="text-[#EC7B23]"/>},
];

function Skills() {
  return (
    <div id="skills" className="relative h-auto w-full justify-center items-center flex bg-midnight-black mt-0 lg:mt-12 z-20 py-16 px-2 lg:px-12 select-none">
      <div className="w-full h-full flex flex-col items-center gap-10">
        <h1 className=" text-center text-6xl lg:text-7xl font-bebas-neue text-spectral-white">SKILLS</h1>

        <div className="w-full flex flex-wrap justify-center gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative w-20 h-20 lg:w-24 lg:h-24 bg-deep-charcoal rounded-full flex items-center justify-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 shadow-md"
            >
              {/* Icon */}
              <div className="text-3xl lg:text-4xl">{skill.icon}</div>

              {/* Tooltip */}
              <div className="hidden lg:block absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 font-source-code shadow pointer-events-none z-20 text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills