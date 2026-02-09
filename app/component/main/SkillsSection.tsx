"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Database, 
  Github, 
  Wind, 
  Zap 
} from "lucide-react";

const skills = [
  { name: "React", icon: <Zap size={32} />, level: "Advanced" },
  { name: "Next.js", icon: <Cpu size={32} />, level: "Expert" },
  { name: "Tailwind CSS", icon: <Wind size={32} />, level: "Expert" },
  { name: "TypeScript", icon: <Code2 size={32} />, level: "Intermediate" },
  { name: "Git & GitHub", icon: <Github size={32} />, level: "Advanced" },
  { name: "JavaScript", icon: <Layout size={32} />, level: "Expert" },
  { name: "Responsive Design", icon: <Globe size={32} />, level: "Expert" },
  { name: "Web Performance", icon: <Database size={32} />, level: "Advanced" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const SkillsSection: FC = () => {
  return (
    <section id="SkillsSection" className="py-24 scroll-smooth bg-white relative overflow-hidden">
      {/* لمسة خلفية صفراء خفيفة جداً */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--chart-4)_0%,transparent_70%)] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* عنوان القسم بالأصفر */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            My <span className="text-[var(--chart-3)]">Tech Stack</span>
          </h2>
          {/* الخط اللي طلبته باللون الأصفر المتدرج */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--chart-3)] to-[var(--chart-4)] mx-auto rounded-full shadow-sm"></div>
          <p className="mt-6 text-gray-500 max-w-lg mx-auto font-medium">
           My favorite tools for building fast, modern, and powerful user interfaces
          </p>
        </div>

        {/* شبكة المهارات */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-5">
                {/* الأيقونة - تتحول للأصفر عند الـ Hover */}
                <div className="p-4 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[var(--chart-4)] group-hover:text-white transition-all duration-300 shadow-inner">
                  {skill.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[var(--chart-3)] transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--chart-4)]"></span>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.1em]">
                      {skill.level}
                    </p>
                  </div>
                </div>
              </div>

              {/* تأثير الإضاءة الصفراء عند الـ Hover */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-[var(--chart-4)]/30 transition-all pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;