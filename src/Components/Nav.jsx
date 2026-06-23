import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LuCodeXml } from "react-icons/lu";

export default function Nav({scrollToSection , refs}) {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
    { name: "Home", ref: refs.home },
    { name: "Projects", ref: refs.projects },
    { name: "About", ref: refs.about },
    { name: "Contact", ref: refs.contact },
  ];
  return (
    <>
<div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-[#0a0a0a]/90 backdrop-blur-md text-[#a1a1a1] border-b border-white/10">
      {/* اللوجو */}
      <button className="flex gap-2 hover:text-white items-center" onClick={() => scrollToSection(refs.home)}>
        <LuCodeXml className="h-6 w-6" />
        <span className="font-bold text-white">Portfolio</span>
      </button>

      {/* القائمة للشاشات الكبيرة */}
      <nav className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <button key={link.name} className="hover:text-white transition" onClick={() => scrollToSection(link.ref)}>
            {link.name}
          </button>
        ))}
      </nav>

      {/* زر المنيو للموبايل */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
      </button>

      {/* القائمة المنسدلة للموبايل */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              className="text-lg hover:text-white" 
              onClick={() => {
                scrollToSection(link.ref);
                setIsOpen(false); // إغلاق القائمة بعد الضغط
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
