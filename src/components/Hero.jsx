import { HERO_CONTENT } from '../constants';
import profile from '../assets/me.png';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Yohannes Rahul Rafael
            </motion.h1>
            <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Front End Web Developer
            </motion.span>
            <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center lg:p-8">
          <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} src={profile} alt="Me" className="max-w-full h-auto lg:max-h-[600px] lg:mt-[-100px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
