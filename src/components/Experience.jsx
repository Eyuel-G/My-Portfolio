import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant, fadeIn } from '../utils/motion';

const JourneyCard = ({ experience, index }) => {
  const hasCertificate = experience.certificateImage && experience.certificateLink;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: '#fff',
        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        borderRadius: '20px',
        padding: '1.5rem',
      }}
      contentArrowStyle={{
        borderRight: '8px solid rgba(59, 130, 246, 0.6)',
      }}
      date={
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-blueLight text-[16px] font-bold font-poppins 
          drop-shadow-lg">
            {experience.date}
          </h3>
        </motion.div>
      }
      iconStyle={{ 
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.4)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain drop-shadow-lg"
          />
        </div>
      }>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Title and Company */}
        <h3 className="text-white text-[24px] font-bold font-beckman tracking-wide
        mb-2">
          {experience.title}
        </h3>
        <p className="text-blueLight text-[18px] font-semibold font-poppins 
        tracking-wide mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-blueAccent rounded-full"></span>
          {experience.company_name}
        </p>
        
        {/* What I Learned / Key Points */}
        {experience.points && (
          <div className="mt-4">
            <h4 className="text-white/90 text-[16px] font-semibold font-poppins mb-2">
              What I Learned:
            </h4>
            <ul className="list-disc ml-5 space-y-2">
              {experience.points.map((point, idx) => (
                <li
                  key={`experience-point-${idx}`}
                  className="text-white-100/80 text-[14px] pl-1 tracking-wide leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Certificate Section */}
        {hasCertificate && (
          <div className="mt-6">
            <h4 className="text-white/90 text-[16px] font-semibold font-poppins mb-3 
            flex items-center gap-2">
              <svg 
                className="w-5 h-5 text-green-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
              Certificate
            </h4>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-lg overflow-hidden border-2 border-green-400/30
              shadow-lg hover:shadow-green-400/40 transition-all duration-300"
            >
              <img
                src={experience.certificateImage}
                alt={`${experience.title} certificate`}
                className="w-full h-auto object-cover"
              />
              <motion.a
                href={experience.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 right-4 px-4 py-2 
                bg-green-500/90 backdrop-blur-sm
                text-white text-[14px] font-bold font-beckman
                rounded-lg border border-white/20
                hover:bg-green-600 transition-all duration-300
                shadow-lg hover:shadow-green-500/50
                flex items-center gap-2"
              >
                <span>View Certificate</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative z-10">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight} sm:pl-16 pl-[2rem]`}>
          My path so far
        </p>
        <h2 className={`${styles.sectionHeadTextLight} sm:pl-16 pl-[2rem]`}>
          Journey.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <JourneyCard 
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
          
          {/* Resume Download Card */}
          <VerticalTimelineElement
            contentStyle={{
              background: 'rgba(59, 130, 246, 0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              color: '#fff',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.25)',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
            }}
            contentArrowStyle={{
              borderRight: '8px solid rgba(59, 130, 246, 0.6)',
            }}
            iconStyle={{ 
              background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
              boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.3), 0 0 30px rgba(96, 165, 250, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
            }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[50%] h-[50%] object-contain drop-shadow-2xl"
                />
              </div>
            }>
            <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/Eyuel's_Resume.pdf"
  download
  className="flex justify-center items-center gap-3
    sm:text-[16px] text-[14px] text-white 
    font-bold font-beckman py-4 px-8
    rounded-xl bg-blueAccent/80 backdrop-blur-sm
    border border-blueLight/50
    hover:bg-blueLight hover:border-white/50
    transition-all duration-300 ease-out
    shadow-lg hover:shadow-blueAccent/50
    group"
  onMouseOver={() => {
    document
      .querySelector('.download-btn')
      ?.setAttribute('src', downloadHover);
  }}
  onMouseOut={() => {
    document
      .querySelector('.download-btn')
      ?.setAttribute('src', download);
  }}
>
  <span className="tracking-wider">DOWNLOAD RESUME</span>
  <img
    src={download}
    alt="download"
    className="download-btn sm:w-[24px] sm:h-[24px] 
      w-[20px] h-[20px] object-contain
      group-hover:animate-bounce"
  />
</motion.a>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
