import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
function SplashScreen() {
  return (
    <motion.div
      initial={{ x: 0, opacity: 1, backgroundColor: "#0F0F0F"}}
      animate={{ x: "100%", opacity: 1}} // only slide, no fade yet
      transition={{
        delay: 1.6, //  wait before sliding
        duration: 1, // smoother slide
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 flex items-center justify-center bg-midnight-black text-spectral-white z-[9999]"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-8xl font-bold font-bebas-neue"
      >
        <span className="text-mystic-purple">&gt;</span>
        <span className="inline-flex">
          <span className="text-spectral-white ml-2">Hanz Nikkol</span>
          <span className="text-mystic-purple ml-1 animate-pulse">_</span>
        </span>
      </motion.h1>
    </motion.div>
  )
}

export default SplashScreen