import { motion } from 'framer-motion';
// import { Linkedin, Mail } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
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

      <div className="bg-[#111111] p-8 rounded-2xl border border-white/10 flex flex-col gap-4">
        
        <a href="https://github.com/youssef151" target="_blank" className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-white/20 transition-all text-white">
          <BsGithub className="w-6 h-6" />
          <span>GitHub - youssef151</span>
        </a>

        <a href="https://www.linkedin.com/in/yuossef-mahmoud-89a0b0377/" target="_blank" className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-white/20 transition-all text-white">
          <LiaLinkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>

        {/* رابط الفيس بوك الجديد */}
        <a href="https://www.facebook.com/youssef.ak.94376" target="_blank" className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-white/20 transition-all text-white">
          <FaFacebook className="w-6 h-6" />
          <span>Facebook</span>
        </a>

        <div className="mt-4 p-4 border-t border-white/10 pt-6">
          <p className="text-sm text-[#a1a1a1] mb-2">Email Me Directly</p>
          <a href="yuossefgaafar07@gmail.com" className="text-white hover:text-blue-400 transition-colors font-medium">
            yuossefgaafar07@gmail.com
          </a>
        </div>

      </div>
    </motion.section>
    </>
  )
}
