import { useState } from 'react'
import Logo from '../assets/images/Home/Logo.png'
import Hamburger from './subcomponents/Hamburger'
import NavigationMenu from './subcomponents/NavigationMenu';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile */}
            <nav className="flex items-center justify-between fixed top-0 w-full h-auto p-2 bg-midnight-black px-5 z-50 lg:hidden">
                <div className='w-auto h-auto'>
                    <img src={Logo} alt='Logo' className=''/>
                </div>
                <Hamburger toggleMenu={toggleMenu} isOpen={isOpen}/>
            </nav>
            {/*Desktop*/}
            <nav className="hidden lg:flex items-center justify-between fixed top-0 left-0 right-0 w-full py-5 px-24 z-50">
                <div className='w-auto h-auto'>
                    <img src={Logo} alt="Logo" />
                </div>
                <Hamburger toggleMenu={toggleMenu} isOpen={isOpen}/>
            </nav>

            <NavigationMenu isOpen={isOpen}/>
        </>
    )
}

export default Header