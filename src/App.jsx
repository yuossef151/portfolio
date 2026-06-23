
import { useRef } from 'react';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import bgImage from '/img/img.png';
function App() {
const refs = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
<>
<Nav scrollToSection={scrollToSection} refs={refs} />
      <div className='bg-img' style={{ backgroundImage: `url(${bgImage})` }}>
        
      <div ref={refs.home}> <Home scrollToSection={scrollToSection} refs={refs}/> </div>
      <div ref={refs.projects}> <Projects /> </div>
      <div ref={refs.about}> <About /> </div>
      <div ref={refs.contact}> <Contact /> </div>
      </div>
      <Footer />
</>
  )
}

export default App
