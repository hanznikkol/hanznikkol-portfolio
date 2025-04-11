import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
function App() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen font-source-sans text-spectral-white">
        <Home/>
        <About/>
      </div>

      {/*Scroll*/}
      <div className=" text-white font-source-sans flex items-center z-20 justify-center fixed bottom-10 right-10 lg:right-20 group hover:cursor-pointer hover:scale-110 duration-200">
        <p className="text-xl font-source-code">01</p>
        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"  className="transition-colors duration-300 fill-mystic-purple group-hover:fill-infernal-gold">
          <path d="M11.6436 20.3844C11.7392 20.5232 11.8671 20.6367 12.0162 20.7151C12.1654 20.7935 12.3314 20.8344 12.4999 20.8344C12.6684 20.8344 12.8344 20.7935 12.9835 20.7151C13.1327 20.6367 13.2606 20.5232 13.3561 20.3844L22.7311 6.84272C22.8397 6.68653 22.9033 6.50359 22.9151 6.31377C22.927 6.12395 22.8866 5.93451 22.7983 5.76605C22.7101 5.59758 22.5773 5.45652 22.4145 5.3582C22.2517 5.25987 22.0651 5.20805 21.8749 5.20834H3.12489C2.93514 5.20913 2.7492 5.26162 2.58706 5.36018C2.42491 5.45874 2.2927 5.59963 2.20465 5.76771C2.11659 5.93579 2.07602 6.12469 2.08729 6.31411C2.09857 6.50352 2.16126 6.68627 2.26864 6.84272L11.6436 20.3844Z"/>
        </svg>
      </div>
    
    </>
  )
}

export default App
