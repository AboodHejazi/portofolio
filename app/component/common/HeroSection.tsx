"use client";
import React, { useState } from "react"; // أضفنا useState
import { X } from "lucide-react";
import StayInTouch from "../main/StayInTouch"; // تأكد من المسار الصحيح للكومبوننت
import { AnimatePresence } from "framer-motion";

const HeroSection = () => {
  // حالة التحكم في ظهور المودال
  const [isContactOpen, setIsContactOpen] = useState(false);

  // وظيفة الانتقال السلس للمشاريع
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("ProjectSection");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[var(--chart-4)] opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--chart-3)] to-[var(--chart-4)] rounded-full filter blur-2xl opacity-20 animate-pulse"></div>
          
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-[var(--chart-3)] rounded-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] overflow-hidden rounded-2xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="/images/pic2.jpg"
                alt="Abdulrahman Hejazi"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl rounded-xl hidden md:block">
              <p className="text-sm font-bold text-gray-800">Experience in</p>
              <p className="text-xs text-[var(--chart-3)]">React & Next.js</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div>
            <h3 className="text-[var(--chart-3)] font-semibold tracking-wide uppercase text-sm mb-2">
              Front-End Developer
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Abdulrahman{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--chart-3)] to-[var(--chart-4)]">
                Hejazi
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
            I don't just build websites; I craft digital experiences. Specialized in
            creating high-performance, accessible, and visually stunning web applications
            that users love.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToProjects}
              className="px-8 cursor-pointer py-3 bg-[var(--foreground)] text-white rounded-full font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              View Projects
            </button>
            
            {/* ربط الزر بفتح المودال */}
            <button 
              onClick={() => setIsContactOpen(true)}
              className="px-8 cursor-pointer py-3 border-2 border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-all active:scale-95"
            >
              Stay in touch
            </button>
          </div>
        </div>
      </div>

      {/* عرض المودال عند النقر */}
      <AnimatePresence>
        {isContactOpen && (
          <StayInTouch onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;