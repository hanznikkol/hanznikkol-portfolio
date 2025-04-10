function NavigationMenu({ isOpen }) {
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 bg-midnight-black z-40 
        transition-transform duration-500 ${isOpen ? "translate-y-0" : "translate-y-full"}`}>
            
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
            <ul className="text-spectral-white font-bebas-neue text-5xl lg:text-7xl space-y-16">
                <li className="hover:cursor-pointer hover:scale-105 duration-300 hover:text-mystic-purple"><a>HOME</a></li>
                <li className="hover:cursor-pointer hover:scale-105 duration-300 hover:text-mystic-purple"><a>ABOUT</a></li>
                <li className="hover:cursor-pointer hover:scale-105 duration-300 hover:text-mystic-purple"><a>SKILLS</a></li>
                <li className="hover:cursor-pointer hover:scale-105 duration-300 hover:text-mystic-purple"><a>WORKS</a></li>
                <li className="hover:cursor-pointer hover:scale-105 duration-300 hover:text-mystic-purple"><a>CONTACTS</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavigationMenu