import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const TechCard = ({ technology, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 group"
    >
      <div className="relative w-full h-full">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-blueAccent/20 rounded-full blur-xl 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Card container */}
        <div className="relative w-full h-full rounded-full 
          bg-primary/40 backdrop-blur-sm
          border border-blueAccent/30 
          group-hover:border-blueAccent/60
          shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
          transition-all duration-500
          group-hover:scale-110
          flex items-center justify-center overflow-hidden">
          
          {/* 3D Ball */}
          <BallCanvas icon={technology.icon} />
        </div>
        
        <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 
          opacity-0 group-hover:opacity-100 transition-all duration-300
          whitespace-nowrap pointer-events-none">
          <span className="text-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold font-poppins
            bg-primary/90 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1 rounded-full
            border border-blueAccent/50 shadow-lg">
            {technology.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight}`}>
          Technologies I work with
        </p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          Tech Stack.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-3 sm:mt-4 text-white-100/70 text-[14px] sm:text-[15px] md:text-[17px] max-w-3xl leading-[24px] sm:leading-[28px] md:leading-[30px]"
      >
        I have experience working with a diverse range of technologies and tools
        that enable me to build robust, scalable, and modern applications. Here are
        some of the key technologies I use regularly.
      </motion.p>

      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
        {technologies.map((technology, index) => (
          <TechCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blueAccent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-skyBlue/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
