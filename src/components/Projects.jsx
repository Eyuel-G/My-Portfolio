import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple } from '../assets';
import { projects } from '../constants';
import { textVariant } from '../utils/motion';

const ProjectCard = ({ project, direction }) => {
  const { name, description, image, repo, demo, tags } = project;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="relative bg-primary/40 backdrop-blur-md rounded-[32px] overflow-hidden
        border border-blueAccent/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]
        hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition-all duration-500">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blueAccent/10 via-transparent to-skyBlue/10 
        opacity-50"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative h-[300px] sm:h-[350px] md:h-[500px] overflow-hidden group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blueAccent/20 via-transparent to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700
              group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent
              md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-primary/90"></div>
            
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 sm:gap-3 z-20">
              <motion.a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/80 backdrop-blur-md
                border-2 border-blueAccent/50 flex items-center justify-center
                hover:bg-blueAccent hover:border-blueLight transition-all duration-300
                shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                <img src={github} alt="github" className="w-5 h-5 sm:w-6 sm:h-6 invert" />
              </motion.a>
              
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blueAccent/80 backdrop-blur-md
                border-2 border-blueLight/50 flex items-center justify-center
                hover:bg-blueLight transition-all duration-300
                shadow-lg hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]"
              >
                <img src={pineapple} alt="demo" className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </div>
          </div>

          <div className="relative p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-blueAccent/40 text-[11px] sm:text-[12px] md:text-[14px] font-bold font-poppins mb-2 
              tracking-wider">
                FEATURED PROJECT
              </div>

              <h3 className="text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-bold font-beckman mb-3 sm:mb-4
                leading-tight bg-gradient-to-r from-white to-blueLight bg-clip-text text-transparent">
                {name}
              </h3>
              
              <p className="text-white-100/80 text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed mb-4 sm:mb-6">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {tags?.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px] font-semibold rounded-full
                    backdrop-blur-sm transition-all duration-300
                    hover:scale-110 cursor-default
                    ${tag.color === 'blue-text-gradient' 
                      ? 'bg-blueAccent/25 text-blueLight border border-blueAccent/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                      : tag.color === 'green-text-gradient'
                      ? 'bg-green-500/25 text-green-400 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                      : tag.color === 'pink-text-gradient'
                      ? 'bg-pink-500/25 text-pink-400 border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                      : 'bg-white/15 text-white border border-white/30'
                    }`}
                  >
                    #{tag.name}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full
                  bg-gradient-to-r from-blueAccent to-blueLight
                  text-white text-[12px] sm:text-[13px] md:text-[14px] font-bold font-beckman
                  border border-white/20
                  shadow-[0_0_20px_rgba(59,130,246,0.4)]
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
                  transition-all duration-300
                  relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/20 to-transparent
                  translate-x-[-200%] group-hover:translate-x-[200%]
                  transition-transform duration-700"></span>
                  <span className="relative z-10">VIEW LIVE</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full
                  bg-primary/60 backdrop-blur-sm
                  text-white text-[12px] sm:text-[13px] md:text-[14px] font-bold font-beckman
                  border border-blueAccent/50
                  hover:bg-blueAccent/30 hover:border-blueAccent
                  transition-all duration-300"
                >
                  <span>VIEW CODE</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + projects.length) % projects.length;
    setCurrentIndex([newIndex, newDirection]);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        paginate(1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <div className="relative w-full flex flex-col justify-center py-8 sm:py-12">
      <motion.div variants={textVariant()} className="mb-8 sm:mb-12 text-center">
        <p className={`${styles.sectionSubTextLight}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          Projects.
        </h2>
      </motion.div>

      {/* Slider Container */}
      <div 
        className="relative w-full px-4 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <ProjectCard
            key={currentIndex}
            project={projects[currentIndex]}
            direction={direction}
          />
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/80 backdrop-blur-md
            text-white text-lg sm:text-xl md:text-2xl font-bold
            hover:bg-blueAccent transition-all duration-300
            border-2 border-blueAccent/40 hover:border-blueAccent
            shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
            flex items-center justify-center pointer-events-auto
            z-20"
          >
            ←
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/80 backdrop-blur-md
            text-white text-lg sm:text-xl md:text-2xl font-bold
            hover:bg-blueAccent transition-all duration-300
            border-2 border-blueAccent/40 hover:border-blueAccent
            shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
            flex items-center justify-center pointer-events-auto
            z-20"
          >
            →
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
        {projects.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrentIndex([idx, idx > currentIndex ? 1 : -1])}
            whileHover={{ scale: 1.2 }}
            className={`relative h-2 rounded-full transition-all duration-300 cursor-pointer
              ${idx === currentIndex ? 'w-12 bg-blueAccent' : 'w-2 bg-white/30 hover:bg-white/50'}`}
          >
            {idx === currentIndex && !isPaused && (
              <motion.div
                className="absolute inset-0 bg-blueLight rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3, ease: 'linear' }}
              />
            )}
            {idx === currentIndex && (
              <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Project Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6 text-white-100/60 text-sm font-poppins"
      >
        {currentIndex + 1} / {projects.length}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
