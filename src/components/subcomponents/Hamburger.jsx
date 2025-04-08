import { useState } from "react"
function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="flex flex-col justify-center items-center w-10 h-10 space-y-1 hover:cursor-pointer group"
      onClick={toggleMenu}
    >
        {/* First Line */}
        <div
            className={`w-8 h-1 bg-white transition-all duration-300 rounded-3xl 
            ${isOpen ? "transform rotate-45 translate-y-2" : ""} 
            ${isOpen ? "group-hover:bg-crimson-red" : "group-hover:bg-mystic-purple"}`}
        ></div>

        {/* Second Line */}
        <div
            className={`w-8 h-1 bg-white transition-all duration-300 rounded-3xl 
            ${ isOpen ? "opacity-0" : "" } 
            ${isOpen ? "group-hover:bg-crimson-red" : "group-hover:bg-mystic-purple"}`}
        ></div>
        {/* Third Line */}
        
        <div
            className={`w-8 h-1 bg-white transition-all duration-300 rounded-3xl ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""} 
            ${isOpen ? "group-hover:bg-crimson-red" : "group-hover:bg-mystic-purple"}`}
        ></div>
    </button>
  )
}

export default Hamburger