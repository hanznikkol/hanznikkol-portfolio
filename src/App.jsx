import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contact from "./components/Contact"
import { Toaster } from "./components/ui/sonner"
function App() {  
  return (
    <>
      <Header />
      <div className=" flex flex-col scroll-smooth w-full min-h-screen font-source-sans text-spectral-white bg-midnight-black">
          <Home/>
          <Works/>
          <Skills />
          <About/>
          <Contact/>
      </div>
      <Toaster position="bottom-right" richColors/>
    </>
  )
}

export default App
