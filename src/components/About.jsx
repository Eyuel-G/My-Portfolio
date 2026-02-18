import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full group"
    >
      <div className="relative bg-primary/40 backdrop-blur-sm rounded-[24px] 
        border border-blueAccent/20 hover:border-blueAccent/50
        transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
        hover:-translate-y-2 p-[1px]">
        
        <div className="bg-primary/60 backdrop-blur-sm rounded-[24px] 
          py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col
          transition-all duration-500">
          
          <div className="w-20 h-20 rounded-full bg-blueAccent/10 
            flex items-center justify-center mb-4
            group-hover:bg-blueAccent/20 transition-all duration-500
            group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          </div>
          
          <h3 className="text-white text-[18px] font-bold text-center
            group-hover:text-blueLight transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white-100/70 text-[18px] max-w-3xl leading-[30px]">
        I am an aspiring developer driven by a passion for continuous learning 
        and building visually compelling, community-focused solutions. I take pride in 
        my dedication to every project, constantly refining my technical stack to meet 
        modern challenges. I ensure that every line of code contributes to a meaningful 
        user experience while actively seeking opportunities to push my boundaries and scale 
        my impact.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
