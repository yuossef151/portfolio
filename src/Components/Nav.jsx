import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { LuCodeXml } from "react-icons/lu";

export default function Nav({ scrollToSection, refs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const isScrollingRef = useRef(false);

  const navLinks = [
    { name: "Home", ref: refs.home },
    { name: "Projects", ref: refs.projects },
    { name: "About", ref: refs.about },
    { name: "Contact", ref: refs.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 250;

      navLinks.forEach((link) => {
        if (link.ref?.current) {
          const element = link.ref.current;
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  const handleNavClick = (link) => {
    if (isScrollingRef.current) return;

    setActiveSection(link.name); 
    isScrollingRef.current = true; // تشغيل القفل

    scrollToSection(link.ref);
    setIsOpen(false);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#0a0a0a]/90 backdrop-blur-md text-[#a1a1a1] border-b border-white/10 transition-all duration-300">
        <button 
          className="flex gap-2 hover:text-white items-center cursor-pointer transition-transform duration-300 hover:scale-105" 
          onClick={() => handleNavClick(navLinks[0])}
        >
          <LuCodeXml className="h-6 w-6 text-cyan-400 animate-pulse" />
          <span className="font-bold text-white tracking-wider">Youssef Dev<span className="text-cyan-400">.</span></span>
        </button>

        <nav className="hidden md:flex gap-10 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`relative py-1 transition-colors duration-300 cursor-pointer font-medium ${
                  isActive ? "text-cyan-400" : "hover:text-cyan-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        <button className="md:hidden cursor-pointer p-1 transition-transform duration-300 active:scale-95" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white h-6 w-6" /> : <Menu className="text-white h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <button
                  key={link.name}
                  className={`text-lg transition-all duration-300 cursor-pointer font-medium relative py-1 ${
                    isActive ? "text-cyan-400 scale-105 font-bold" : "hover:text-cyan-300"
                  }`}
                  onClick={() => handleNavClick(link)}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}