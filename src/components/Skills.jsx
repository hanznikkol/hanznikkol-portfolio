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
  SiSupabase,
} from "react-icons/si";

const skillSections = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <BiLogoJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-400" /> },
      { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <RiNextjsLine className="text-neutral-500" /> },
      { name: "VueJS", icon: <FaVuejs className="text-green-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Material Design", icon: <SiMaterialdesign className="text-blue-400" /> },
      { name: "XML (Android Layouts)", icon: <SiXml className="text-gray-300" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Java", icon: <FaJava className="text-gray-400 group-hover:text-red-600 transition-colors duration-300" /> },
      { name: "C# (.NET)", icon: <SiDotnet className="text-purple-500" /> },
      { name: "Microsoft SQL Server", icon: <DiDatabase className="text-[#029DEA]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-500"/> }
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
      { name: "Visual Studio", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-orange-500" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Stack Overflow", icon: <DiStackoverflow className="text-[#EC7B23]" /> },
    ],
  },
];

function Skills() {
  return (
    <div id="skills" className="relative h-auto w-full justify-center items-center flex bg-midnight-black mt-0 lg:mt-12 z-20 py-16 px-2 lg:px-12 select-none">
      <div className="w-full h-full flex flex-col items-center gap-10">
        <h1 className=" text-center text-6xl lg:text-7xl font-bebas-neue text-spectral-white">SKILLS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full divide-x divide-deep-charcoal">
          {skillSections.map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-6 px-6 py-6">
               {/* Category Title */}
              <h2 className="text-3xl lg:text-4xl font-bebas-neue text-spectral-white">
                {category.title}
              </h2>

              {/* Category sKills */}
              <div className="flex flex-wrap justify-center gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative w-20 h-20 lg:w-24 lg:h-24 bg-deep-charcoal rounded-full flex items-center justify-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 shadow-md z-10 hover:z-50"
                  >
                    {/* Circle */}
                    <div
                      className="group relative w-20 h-20 lg:w-24 lg:h-24 bg-deep-charcoal rounded-full flex items-center justify-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 shadow-md z-10 hover:z-50"
                    >
                      {/* Icon */}
                      <div className="text-3xl lg:text-4xl">{skill.icon}</div>

                      {/* Tooltip (desktop only) */}
                      <div className="hidden lg:block absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-deep-charcoal text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 font-source-code shadow pointer-events-none z-50 text-center">
                        {skill.name}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  )
}

export default Skills