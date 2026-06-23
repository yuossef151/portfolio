import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        // التعديل هنا: استخدام max-w-4xl و mx-auto بدلاً من px-40
        className="max-w-4xl mx-auto flex flex-col items-center py-10"
      >
        <p className="text-[20px] font-medium mb-4 text-white">About Me</p>
        <p className="mb-10 text-gray-300">My journey in web development</p>
        
        {/* تنسيق الكارت ليكون متجاوباً */}
        <div className="p-6 md:p-10 border border-gray-500 flex flex-col gap-6 text-gray-300 leading-relaxed rounded-2xl bg-[#111111]/50">
                <p>
              My journey into web development began with a curiosity about how
              websites work and quickly evolved into a passion for creating
              digital experiences that truly matter. I started by learning the
              fundamentals—HTML, CSS, and JavaScript—and spent countless hours
              building small projects that helped me understand the core
              principles of web development.
            </p>
            <p>
              As I progressed, I discovered React and fell in love with its
              component-based architecture and the powerful ecosystem it offers.
              This opened up new possibilities for building interactive and
              dynamic web applications. I focus on writing clean, maintainable
              code and creating responsive designs that work seamlessly across
              all devices.
            </p>
            <p>
              Today, I specialize in front-end development with a strong
              emphasis on user experience and accessibility. I believe that
              great websites should not only look beautiful but also be
              intuitive and inclusive. I'm constantly learning and staying
              up-to-date with the latest technologies and best practices to
              deliver exceptional results for every project I work on.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new web
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community. I'm always excited to take
              on new challenges and collaborate on innovative projects.
            </p>
        </div>
      </motion.div>
    </div>
  );
}