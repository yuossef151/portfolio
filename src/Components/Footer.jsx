import { Heart } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="bg-black border-t border-gray-300">
      {/* استخدمنا flex-col في الموبايل و flex-row في الشاشات الكبيرة */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-10 gap-4">
        
        {/* النص (يصبح في المركز على الموبايل) */}
        <div className="text-white flex flex-wrap justify-center gap-2 items-center text-sm md:text-base text-center">
          <p>© 2026 Portfolio. Made with</p>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          <p>by a passionate developer</p>
        </div>

        {/* الأيقونات */}
        <div className="flex gap-6">
          <a href="https://github.com/youssef151" target="_blank" className="hover:text-blue-400 transition-colors text-white">
            <BsGithub className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yuossef-mahmoud-89a0b0377/" target="_blank" className="hover:text-blue-400 transition-colors text-white">
            <LiaLinkedin className="w-7 h-7" />
          </a>
          <a href="https://www.facebook.com/youssef.ak.94376" target="_blank" className="hover:text-blue-400 transition-colors text-white">
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
        
      </div>
    </div>
  );
}