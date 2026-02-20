import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { profile } from '../assets';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTexts = [
    'Full-Stack Developer',
    'Graphics Designer',
    'UI/UX Designer'
  ];

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section className="relative w-full min-h-screen mx-auto bg-primary" style={{ overflow: 'visible' }}>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-blueAccent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-skyBlue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blueDark/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="0" y1="0" x2="100%" y2="100%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="100%" y1="0" x2="0" y2="100%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto 
        flex flex-row items-center sm:items-center gap-3 sm:gap-5 z-10`}>

        <div className="flex flex-col justify-center items-center mt-3 sm:mt-5">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blueAccent shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
          <div className="w-1 h-32 sm:h-80 bg-gradient-to-b from-blueAccent via-blueLight to-transparent" />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-black text-white lg:text-[60px] md:text-[50px] sm:text-[40px] xs:text-[32px] text-[28px] lg:leading-[70px] md:leading-[60px] sm:leading-[50px] leading-[40px] mt-2 font-poppins">
              Hi, I'm{' '}
              <motion.span
                className="block sm:inline text-transparent bg-clip-text 
                bg-gradient-to-r from-blueAccent via-blueLight to-skyBlue
                font-extrabold uppercase lg:text-[90px] md:text-[70px] sm:text-[60px] xs:text-[45px] text-[38px]
                drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% auto',
                }}
              >
                Eyuel
              </motion.span>
            </h1>
          </motion.div>

          <div className="text-white-100 font-bold lg:text-[32px] md:text-[26px] sm:text-[22px] xs:text-[18px] text-[16px] lg:leading-[40px] md:leading-[34px] sm:leading-[28px] leading-[24px] mt-3 sm:mt-4 text-white-100/80 min-h-[60px] sm:min-h-[50px]">
            <div className="flex items-center gap-1">
              <span className="text-blue-500 font-mono text-[14px] xs:text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                {displayedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] sm:w-[3px] h-[1.2em] bg-blueLight ml-1"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold font-beckman text-[13px] sm:text-[16px]
              bg-gradient-to-r from-blueAccent to-blueLight
              text-white border border-white/20
              shadow-[0_0_30px_rgba(59,130,246,0.5)]
              hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]
              transition-all duration-300
              relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/20 to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%]
              transition-transform duration-700"></span>
              <span className="relative z-10">View My Work</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-bold font-beckman text-[13px] sm:text-[16px]
              bg-primary/60 backdrop-blur-sm
              text-white border-2 border-blueAccent/50
              hover:bg-blueAccent/20 hover:border-blueAccent
              shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
              transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute
  bottom-8 right-1/2 translate-x-1/2
  xs:bottom-12 xs:right-4 xs:translate-x-0
  sm:top-[60%] sm:right-[-2%] sm:-translate-y-1/2
  md:top-[50%] md:right-0
  lg:top-[42%] lg:right-11
  xl:top-1/4 xl:right-5
  w-[200px] h-[200px]
  xs:w-[240px] xs:h-[240px]
  sm:w-[280px] sm:h-[280px]
  md:w-[320px] md:h-[320px]
  lg:w-[420px] lg:h-[420px]
  xl:w-[480px] xl:h-[480px]
  pointer-events-none z-10"

      >
        {/* Outer Glow Ring */}
        <div className="hidden sm:block absolute inset-0 rounded-full bg-gradient-to-br 
        from-blueAccent via-blueLight to-skyBlue opacity-30 blur-2xl
        animate-pulse"></div>

        {/* Rotating Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="hidden sm:block absolute inset-0 rounded-full 
          bg-gradient-to-br from-blueAccent via-blueLight to-skyBlue
          p-[3px]"
        >
          <div className="w-full h-full rounded-full bg-primary"></div>
        </motion.div>

        {/* Image Container */}
        <div className="hidden sm:block absolute inset-[3px] rounded-full overflow-hidden
        border-4 border-primary bg-gradient-to-br from-primary/80 to-primary/60
        backdrop-blur-sm shadow-[0_0_60px_rgba(59,130,246,0.4)]">

          <div className="absolute inset-0 bg-gradient-to-t
          from-blueAccent/20 via-transparent to-transparent"></div>

          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover relative z-1
            scale-110 hover:scale-115 transition-transform duration-700"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br 
          from-transparent via-transparent to-blueAccent/10"></div>
        </div>

        <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full 
        bg-blueAccent shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
        <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full 
        bg-skyBlue shadow-[0_0_20px_rgba(14,165,233,0.8)] animate-pulse delay-500"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="hidden sm:flex absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2
          px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
          bg-primary/90 backdrop-blur-md
          border border-blueAccent/50
          shadow-[0_0_20px_rgba(59,130,246,0.4)]
          items-center gap-1.5 sm:gap-2"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-white text-[10px] sm:text-[12px] font-semibold font-poppins whitespace-nowrap">
            Available for work
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 xs:bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            className="w-[28px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 sm:border-4 border-blueAccent/50
            backdrop-blur-sm bg-primary/30
            flex justify-center items-start p-1.5 sm:p-2
            hover:border-blueAccent transition-colors duration-300
            shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blueAccent 
              shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            />
          </motion.div>
        </a>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blueAccent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
