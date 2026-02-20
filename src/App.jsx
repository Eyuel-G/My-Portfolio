import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 sm:top-20 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blueAccent/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-skyBlue/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-blueDark/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <Tech />
        </div>

        <Projects />

        <div className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blueAccent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-skyBlue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blueDark/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <Experience />
        </div>
        <div className="relative bg-primary overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 sm:top-20 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blueAccent/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-skyBlue/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-blueDark/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
