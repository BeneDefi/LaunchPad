import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
// import { repeat } from 'maath/dist/declarations/src/misc';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex  flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Leading Decentralized Launchpad <span className="text-[#915eff]">and Token Services Platform</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <br className="sm:block hidden" /> 
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero