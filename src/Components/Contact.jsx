import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function Contact() {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 max-w-lg mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-[#a1a1a1] mb-10">Find me on these platforms or email me directly</p>

        <div className="bg-[#0a0a0a]/95 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col gap-4 shadow-2xl">
          
          <a href="https://github.com/youssef151" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg border border-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all text-white group">
            <BsGithub className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium">GitHub - youssef151</span>
          </a>

          <a href="https://www.linkedin.com/in/yuossef-mahmoud-89a0b0377/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg border border-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all text-white group">
            <LiaLinkedin className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a href="https://www.facebook.com/youssef.ak.94376" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg border border-white/5 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all text-white group">
            <FaFacebook className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Facebook</span>
          </a>

          <div className="mt-4 p-4 border-t border-white/10 pt-6">
            <p className="text-sm text-[#a1a1a1] mb-2">Email Me Directly</p>
            <a href="mailto:yuossefgaafar07@gmail.com" className="text-white hover:text-cyan-400 transition-colors font-medium">
              yuossefgaafar07@gmail.com
            </a>
          </div>

        </div>
      </motion.section>
    </>
  );
}