import { div } from "framer-motion/client";
import { ArrowDown } from "lucide-react";
import { motion } from 'framer-motion';
export default function Home({ scrollToSection , refs }) {
//   const arry = [
//     {
//       name: "React",
//       color: "text-[#61DAFB]",
//       bgColor: "rgba(97, 218, 251, 0.1)",
//       bordar: "#61DAFB",
//     },
//     {
//       name: "JavaScript",
//       color: "text-[#F7DF1E]",
//       bgColor: "bg-[#F7DF1E]/10",
//       bordar: "#F7DF1E",
//     },
//     {
//       name: "HTML5",
//       color: "text-[#61DAFB]",
//       bgColor: "bg-[#61DAFB]/10",
//       bordar: "#61DAFB",
//     },
//     {
//       name: "CSS3",
//       color: "text-[#F7DF1E]",
//       bgColor: "bg-[#F7DF1E]/10",
//       bordar: "#F7DF1E",
//     },
//     {
//       name: "Git",
//       color: "text-[#61DAFB]",
//       bgColor: "bg-[#61DAFB]/10",
//       bordar: "#61DAFB",
//     },
//     {
//       name: "GitHub",
//       color: "text-[#F7DF1E]",
//       bgColor: "bg-[#F7DF1E]/10",
//       bordar: "#F7DF1E",
//     },
//   ];


const arry = [
  {
    name: "React",
    color: "#61DAFB",
    bgColor: "#61DAFB",
    bordar: "#61DAFB",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bgColor: "#F7DF1E",
    bordar: "#F7DF1E",
  },
  {
    name: "HTML5",
    color: "#E34F26",
    bgColor: "#E34F26",
    bordar: "#E34F26",
  },
  {
    name: "CSS3",
    color: "#1572B6",
    bgColor: "#1572B6",
    bordar: "#1572B6",
  },
  {
    name: "Git",
    color: "#F05032",
    bgColor: "#F05032",
    bordar: "#F05032",
  },
  {
    name: "GitHub",
    color: "#6e5494",
    bgColor: "#6e5494",
    bordar: "#6e5494",
  },
];
  return (
    <>


      <div className=" min-h-screen   px-6 py-20">
<motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
        className="text-white flex flex-col max-w-4xl mx-auto text-center items-center py-20"
      >
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 md:w-45 md:h-45 rounded-[50%] object-cover" // تحكم في الحجم حسب الشاشة
            src="img/myImg.PNG"
            alt="Youssef"
          />
          <p className="text-[28px] md:text-[32px] pt-5">Hi, I'm Youssef</p>
        </div>
        <p className="text-[24px] md:text-[32px] pb-5">I'm a Web Developer</p>
        <p className="px-4 md:px-0 text-sm md:text-base leading-relaxed">
          I build modern, responsive web applications with clean code and
          exceptional user experiences. Passionate about creating solutions
          that make a difference for users and businesses.
        </p>
        <button
          className="bg-white mt-5 text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-all flex items-center"
          onClick={() => scrollToSection(refs.projects)}
        >
          View Projects
          <ArrowDown className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
<motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center items-center py-10"
      >
        <p className="text-[20px] font-medium mb-2 text-white">Tech Stack</p>
        <p className="text-[#a1a1a1] text-sm">Technologies I work with</p>
        
        {/* التعديل هنا: flex-wrap تسمح للعناصر بالنزول لسطر جديد عند ضيق المساحة */}
        <div className="flex flex-wrap gap-4 justify-center pt-10 max-w-2xl">
          {arry.map((el, index) => (
            <div
              key={index}
              style={{
                borderColor: `${el.bordar}`,
                backgroundColor: `${el.bgColor}20`,
              }}
              className="border px-4 py-2 rounded-md transition-transform hover:scale-105 text-sm md:text-base"
            >
              <span style={{ color: el.color }} className="font-medium">
                {el.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      </div>
    </>
  );
}
