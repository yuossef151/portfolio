import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';



export default function Projects() {
  const proj = [
    {
      img: "img/proj-4.PNG",
      title: "Bookstore website",
      disc: "A dynamic e-commerce platform for book lovers, featuring a seamless browsing experience, advanced search functionality, and a secure cart system.",
      tags: ["React", "Tailwind", "Css" , "JavaScript"],
      links: {
        demo: "https://yuossef151.github.io/",
        github: "https://github.com/yuossef151/yuossef151.github.io",
      },
    },
    {
      img: "img/proj-1.PNG",
      title: "Auto parts website",
      disc: "A comprehensive solution for auto enthusiasts to find spare parts easily, with categorized navigation, product filtering, and detailed technical specifications.",
      tags: ["React", "Tailwind",  "Css" , "JavaScript"],
      links: {
        demo: "https://yuossef151.github.io/Car-Progect/",
        github: "https://github.com/yuossef151/Car-Progect",
      },
    },
    {
      img: "img/proj-3.PNG",
      title: "A replica of the ReDragon website",
      disc: "A practice project focused on replicating a high-end gaming e-commerce interface. Key learning outcomes included mastering complex CSS grid layouts, implementing interactive product hover effects, and achieving a highly responsive design for gaming peripherals.",
      tags: ["HTML5", "Tailwind", "Css" , "JavaScript"],
      links: {
        demo: "https://yuossef151.github.io/shopping-cart/",
        github: "https://github.com/yuossef151/shopping-cart",
      },
    },
    {
      img: "img/proj-2.PNG",
      title: "A replica of the Logitech website",
      disc: "A frontend recreation of the Logitech website, focused on building a high-end product showcase. This project highlights my ability to create immersive user interfaces, implement fluid navigation systems, and display technical hardware products with a clean, modern, and engaging aesthetic",
      tags: ["HTML5", "bootstrap", "Css" , "JavaScript"],
      links: {
        demo: "https://yuossef151.github.io/logitech-shop/",
        github: "https://github.com/yuossef151/logitech-shop",
      },
    },
  ];
  return (
    <>

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="bg-[#0a0a0a61] py-20 px-6"
>
  {/* العنوان والوصف */}
  <div className="text-center mb-20">
    <p className="text-[20px] font-medium mb-4 text-white">
      Featured Projects
    </p>
    <p className="text-[#a1a1a1]">
      A selection of my recent work showcasing web development skills
    </p>
  </div>

  {/* الكروت */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {proj.map((el, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
      >
<div className="overflow-hidden w-full h-56">
  <img 
    src={el.img} 
    alt={el.title} 
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
  />
</div>        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{el.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{el.disc}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {el.tags.map((tag, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider bg-white/5 text-white px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-8">
            <a href={el.links.demo} target="_blank" className="text-sm flex  gap-2 text-white hover:text-blue-400 transition-colors font-medium">
              <ExternalLink size={20} /> Live Demo →
            </a>
            <a href={el.links.github} target="_blank" className="text-sm flex gap-2 text-gray-500 hover:text-white transition-colors">
             <BsGithub size={20} />  Code
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

    </>
  );
}
