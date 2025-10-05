import Home from "./components/Home"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Works from "./components/Works"
import Contact from "./components/Contact"
import { Toaster } from "./components/ui/sonner"
import { useEffect, useState } from "react"
import SplashScreen from "./components/subcomponents/SplashScreen"
import { AnimatePresence, motion } from "framer-motion"
function App() {  
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      <div className="relative bg-midnight-black min-h-screen overflow-hidden">
        <AnimatePresence>
          {showSplash && <SplashScreen />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex flex-col scroll-smooth w-full min-h-screen font-source-sans text-spectral-white"
        >
          <Header />
          <Home />
          <Works />
          <Skills />
          <About />
          <Contact />
          <Toaster position="bottom-right" richColors />
        </motion.div>
      </div>
    </>
  )
}

export default App
