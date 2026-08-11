import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Home({ scrollToSection, refs }) {
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
      <div className="min-h-screen px-6 py-20 flex flex-col justify-center items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white flex flex-col max-w-3xl mx-auto text-center items-center p-8 md:p-12 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <img
              className="w-40 h-40 md:w-45 md:h-45 rounded-[50%] object-cover shadow-[0_0_25px_rgba(6,182,212,0.3)] border-2 border-cyan-500/50"
              src="img/myImg.PNG"
              alt="Youssef"
            />
            <p className="text-[28px] md:text-[32px] pt-5 font-bold">
              Hi, I&apos;m Youssef
            </p>
          </div>
          <p className="text-[24px] md:text-[32px] pb-5 font-semibold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-pink-400">
            Frontend Developer
          </p>
          <p className="px-4 md:px-0 text-sm md:text-base leading-relaxed text-slate-300 max-w-xl">
            Frontend Developer specialized in building scalable,
            high-performance web applications with React and modern UI/UX.
          </p>
          <button
            className="bg-cyan-500 mt-6 text-black px-6 py-2.5 rounded-md font-semibold hover:bg-cyan-400 transition-all flex items-center group cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)]"
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
          className="flex flex-col justify-center items-center pt-16 max-w-2xl mx-auto text-center"
        >
          <p className="text-[20px] font-medium mb-1 text-white">Tech Stack</p>
          <p className="text-[#a1a1a1] text-sm mb-6">Technologies I work with</p>

          <div className="flex flex-wrap gap-4 justify-center">
            {arry.map((el, index) => (
              <div
                key={index}
                style={{
                  borderColor: `${el.bordar}`,
                  backgroundColor: `${el.bgColor}15`,
                }}
                className="border px-4 py-2 rounded-lg transition-transform hover:scale-105 text-sm md:text-base shadow-sm backdrop-blur-xs"
              >
                <span style={{ color: el.color }} className="font-semibold">
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