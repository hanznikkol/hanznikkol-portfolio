import { useState } from 'react'
import Logo from '../assets/images/Home/Logo.png'
import Hamburger from './subcomponents/Hamburger'
import NavigationMenu from './subcomponents/NavigationMenu';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
    <>
        {/* Mobile */}
        <nav className="flex items-center justify-between fixed top-0 w-full h-auto bg-midnight-black px-6 py-2 z-50 lg:hidden">
            <div className='w-auto h-14'>
                <a href='#home'>
                    <img src={Logo} alt='Logo' className='w-full h-full'/>
                </a>
            </div>
            <Hamburger toggleMenu={toggleMenu} isOpen={isOpen}/>
        </nav>
        {/*Desktop*/}
        <nav className="hidden lg:flex items-center justify-between fixed top-0 left-0 right-0 w-full py-5 px-24 z-50">
            <div className='w-auto h-auto'>
                <a href='#home'>
                    <img src={Logo} alt='Logo' className=''/>
                </a>
            </div>
            <div className='flex items-center gap-6 '>
                <a href='https://www.linkedin.com/in/hanznikkol'
                 target='_black'
                >
                    <FaLinkedinIn className=' w-7 h-7 text-white hover:scale-110 hover:text-blue-400 hover:cursor-pointer duration-100'/>
                </a>
                <a href='https://github.com/hanznikkol'
                target='_black'
                >
                    <FaGithub className=' w-7 h-7 text-white hover:scale-110 hover:text-orange-400 hover:cursor-pointer duration-100'/>
                </a>
                <Hamburger toggleMenu={toggleMenu} isOpen={isOpen}/>
            </div>
            
        </nav>

        <NavigationMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </>
    )
}

export default Header