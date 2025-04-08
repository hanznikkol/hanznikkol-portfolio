import Logo from '../assets/images/Home/Logo.png'
import Hamburger from './subcomponents/Hamburger'
function Header() {
  return (
    <>
        {/* Mobile */}
        <nav className="flex items-center justify-between fixed top-0 w-full h-auto py-4 px-5 z-50 md:hidden">
            <div className='w-auto h-auto'>
                <img src={Logo} className=''/>
            </div>
            <Hamburger />
        </nav>
        {/*Desktop*/}
        <nav className="hidden md:flex items-center justify-between fixed top-0 left-0 right-0 w-full py-5 px-24 z-50">
            <div className='w-auto h-auto'>
                <img src={Logo} alt="Logo" />
            </div>
            <Hamburger />
        </nav>
    </>
  )
}

export default Header