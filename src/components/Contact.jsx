import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { send, sendHover } from '../assets';


const ContactInfo = ({ icon, title, content, href, index }) => (
  <motion.a
    href={href}
    variants={fadeIn('right', 'spring', index * 0.1, 0.75)}
    className="group flex items-start gap-4 p-4 rounded-2xl
    bg-primary/30 backdrop-blur-sm border border-blueAccent/20
    hover:border-blueAccent/50 hover:bg-primary/50
    transition-all duration-300
    hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
    hover:-translate-y-1"
  >
    <div className="w-12 h-12 rounded-full bg-blueAccent/20 
      flex items-center justify-center flex-shrink-0
      group-hover:bg-blueAccent/40 group-hover:scale-110
      transition-all duration-300
      shadow-lg group-hover:shadow-blueAccent/50">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-white font-semibold text-[16px] mb-1">{title}</h4>
      <p className="text-white-100/70 text-[14px] group-hover:text-blueLight 
        transition-colors duration-300">
        {content}
      </p>
    </div>
  </motion.a>
);

const SocialLink = ({ href, icon, label, index }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn('up', 'spring', 0.5 + index * 0.1, 0.75)}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="w-14 h-14 rounded-full bg-blueAccent/20 backdrop-blur-sm
    flex items-center justify-center
    hover:bg-blueAccent border border-blueAccent/30
    hover:border-blueLight
    transition-all duration-300
    shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
    group"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMsg('');

    emailjs
      .send(
        'service_u751skc',
        'template_wann9is',
        {
          from_name: form.name,
          to_name: 'Eyuel',
          from_email: form.email,
          to_email: 'eyuelgetachew212@gmail.com',
          message: form.message,
        },
        'Nj7V4qX-My8evNKsd'
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: '', email: '', message: '' });

          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setErrorMsg('❌ Something went wrong. Please try again.');

          setTimeout(() => {
            setErrorMsg('');
          }, 4000);
        }
      );
  };



  return (
    

    <div className="relative">
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className={`${styles.sectionSubTextLight}`}>
          Let's connect
        </p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          Get In Touch.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-1 space-y-3 sm:space-y-4">
          <ContactInfo
            icon={
              <svg className="w-6 h-6 text-blueLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Email"
            content="eyuelgetachew212@gmail.com"
            href="mailto:eyuelgetachew212@gmail.com"
            index={0}
          />

          <ContactInfo
            icon={
              <svg className="w-6 h-6 text-blueLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title="Phone"
            content="+251 975469072"
            href="tel:+251 975469072"
            index={1}
          />

          <ContactInfo
            icon={
              <svg className="w-6 h-6 text-blueLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Location"
            content="Addis Ababa, Ethiopia"
            index={2}
          />

          
          <motion.div
            variants={fadeIn('right', 'spring', 0.3, 0.75)}
            className="pt-6"
          >
            <h4 className="text-white font-semibold text-[16px] mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              <SocialLink
                href="https://github.com"
                label="GitHub"
                index={0}
                icon={
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                }
              />
              <SocialLink
                href="https://linkedin.com"
                label="LinkedIn"
                index={1}
                icon={
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                }
              />
              <SocialLink
                href="https://twitter.com"
                label="Twitter"
                index={2}
                icon={
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                }
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="lg:col-span-2 bg-primary/40 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl
          border border-blueAccent/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]
          hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500"
        >
          <h3 className="text-white text-[22px] sm:text-[26px] md:text-[28px] font-bold font-beckman mb-2">
            Send Me a Message
          </h3>
          <p className="text-white-100/70 text-[13px] sm:text-[14px] md:text-[15px] mb-6 sm:mb-8">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-6 font-poppins"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-[13px] sm:text-[14px]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blueLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-primary/60 backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 
                  placeholder:text-white-100/40 text-white text-[13px] sm:text-[14px] rounded-xl 
                  outline-none border border-blueAccent/30 
                  focus:border-blueAccent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                  transition-all duration-300 font-medium"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-[13px] sm:text-[14px]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blueLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-primary/60 backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 
                  placeholder:text-white-100/40 text-white text-[13px] sm:text-[14px] rounded-xl 
                  outline-none border border-blueAccent/30 
                  focus:border-blueAccent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                  transition-all duration-300 font-medium"
                />
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-[13px] sm:text-[14px]">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blueLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Your Message
              </span>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="bg-primary/60 backdrop-blur-sm py-3 px-4 sm:py-4 sm:px-6 
                placeholder:text-white-100/40 text-white text-[13px] sm:text-[14px] rounded-xl 
                outline-none border border-blueAccent/30 
                focus:border-blueAccent focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                transition-all duration-300 font-medium resize-none"
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="flex justify-center items-center gap-2 sm:gap-3
              text-[14px] sm:text-[16px] text-white font-bold font-beckman 
              py-3 px-6 sm:py-4 sm:px-8 rounded-xl
              bg-gradient-to-r from-blueAccent to-blueLight
              hover:from-blueLight hover:to-blueAccent
              border border-white/20
              shadow-[0_0_20px_rgba(59,130,246,0.4)]
              hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              relative overflow-hidden group"
              onMouseOver={() => {
                document.querySelector('.contact-btn')?.setAttribute('src', sendHover);
              }}
              onMouseOut={() => {
                document.querySelector('.contact-btn')?.setAttribute('src', send);
              }}
            >

              <span className="absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/20 to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%]
              transition-transform duration-700"></span>

              <span className="relative z-10">
                {loading ? 'Sending...' : 'Send Message'}
              </span>
              <img
                src={send}
                alt="send"
                className="contact-btn w-4 h-4 sm:w-5 sm:h-5 object-contain relative z-10
                group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {success && (
        <div className="mb-4 p-4 rounded-lg bg-green-500/20 border border-green-400 text-green-300 text-center">
          ✅ Thank you! I will get back to you as soon as possible.
        </div>
      )}

      {errorMsg && (
        <div className="mb-4 p-4 rounded-lg bg-red-500/20 border border-red-400 text-red-300 text-center">
          {errorMsg}
        </div>
      )}

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blueAccent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-skyBlue/5 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
