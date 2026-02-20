import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-6 fixed 
      top-0 z-20 backdrop-blur-md bg-primary/80 border-b border-blueAccent/20 
      shadow-lg shadow-blueAccent/10 transition-all duration-300`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-[50px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] 
                       h-[40px] sm:h-[48px] object-contain 
                       drop-shadow-lg filter brightness-110"
          />
          <h1 className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-serif montserrat
                         bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400
                         text-transparent bg-clip-text
                         drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]
                         tracking-wide hidden xs:block">
            Eyuel&apos;s Portfolio
          </h1>

        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6 lg:gap-10 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title
                ? 'text-blueLight border-b-2 border-blueLight'
                : 'text-white-100'
                } hover:text-blueLight hover:border-b-2 hover:border-blueLight 
                text-[14px] md:text-[16px] lg:text-[18px] font-medium font-poppins uppercase tracking-[1px] md:tracking-[2px] 
                cursor-pointer nav-links transition-all duration-300 pb-1 
                border-b-2 border-transparent`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-primary/95 backdrop-blur-lg absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu border-r border-blueAccent/20
                ${toggle ? 'menu-open' : 'menu-close'}`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer 
                  filter brightness-0 invert hover:opacity-70 transition-opacity duration-300"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col gap-6 sm:gap-8 
                items-start justify-center mt-[6rem] sm:mt-[8rem] ml-6 sm:ml-8">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${active === nav.title ? 'text-blueLight' : 'text-white-100'
                      } text-[32px] xs:text-[40px] sm:text-[48px] font-bold font-poppins 
                      uppercase tracking-[1px] xs:tracking-[2px] cursor-pointer 
                      hover:text-blueLight transition-colors duration-300
                      border-l-4 border-transparent hover:border-blueLight pl-3 sm:pl-4`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] object-contain cursor-pointer 
              filter brightness-0 invert hover:opacity-70 transition-opacity duration-300"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
