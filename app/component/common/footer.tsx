"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpCircle, ExternalLink } from "lucide-react";
import StayInTouch from "../main/StayInTouch"; // تأكد من المسار الصحيح
import { AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-gray-100 pt-16 pb-8 overflow-hidden">
      {/* لمسة جمالية في الأسفل */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--chart-3)] via-[var(--chart-4)] to-[var(--chart-3)]"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* العمود الأول: اللوجو والوصف */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Abdulrahman<span className="text-[var(--chart-3)]">.</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Crafting high-performance web experiences with modern technologies. 
              Focused on clean code and exceptional user interface design.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://github.com/AboodHejazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-all shadow-sm"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abood-hejazi-17aa84295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-[#0077b5] hover:bg-blue-50 transition-all shadow-sm"
              >
                <Linkedin size={20} />
              </a>
              {/* زر الإيميل يفتح المودال */}
              <button 
                onClick={() => setIsContactOpen(true)}
                className="p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-[var(--chart-3)] hover:bg-orange-50 transition-all shadow-sm cursor-pointer"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* العمود الثاني: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={scrollToTop} className="text-gray-500 hover:text-[var(--chart-3)] transition-colors cursor-pointer">Home</button>
              </li>
              <li>
                <Link href="#ProjectSection" className="text-gray-500 hover:text-[var(--chart-3)] transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="#SkillsSection" className="text-gray-500 hover:text-[var(--chart-3)] transition-colors">Skills</Link>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: Let's Talk */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Let's Talk</h4>
            <p className="text-gray-500 mb-4 text-sm">Have a project or a question?</p>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 text-[var(--chart-3)] font-semibold hover:underline cursor-pointer transition-all"
            >
              Contact Me
              <ExternalLink size={14} />
            </button>
          </div>

        </div>

        {/* الجزء السفلي */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear} Abdulrahman Hejazi. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            Back to top
            <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* المودال - يظهر عند الضغط على أيقونة الإيميل أو زر Contact Me */}
      <AnimatePresence>
        {isContactOpen && (
          <StayInTouch onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;