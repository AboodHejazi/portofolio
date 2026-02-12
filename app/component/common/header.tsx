// "use client";
// import { FC, useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Header: FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "#top" }, // قمنا بتغييرها لـ #top للتحكم بها برمجياً
//     { name: "Projects", href: "#ProjectSection" },
//     { name: "Skills", href: "#SkillsSection" },
//     { name: "Stay in touch", href: "/Stayintouch" },
//   ];

//   const handleScroll = (e, href) => {
//     if (href.startsWith("#")) {
//       e.preventDefault();
      
//       // إذا كان الرابط هو Home (#top)، نطلعه لأول الصفحة (0)
//       if (href === "#top") {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//       } else {
//         // لباقي الأقسام، نحسب المسافة مع الـ offset
//         const targetId = href.replace("#", "");
//         const element = document.getElementById(targetId);
//         if (element) {
//           const offset = 80;
//           const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//           window.scrollTo({
//             top: elementPosition - offset,
//             behavior: "smooth",
//           });
//         }
//       }
//       setIsOpen(false);
//     }
//   };

//   return (
//     <header className="w-full bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//         {/* اللوجو - يرجع لأول الصفحة أيضاً عند الضغط عليه */}
//         <Link
//           href="/"
//           onClick={(e) => handleScroll(e, "#top")}
//           className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
//         >
//           MyPortfolio
//         </Link>

//         {/* الروابط بنفس الستايل والأنيميشن الخاص بك */}
//         <nav className="hidden md:flex space-x-8">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={(e) => handleScroll(e, link.href)}
//               className="group relative inline-block text-[var(--foreground)] hover:text-[var(--chart-3)] font-medium transition-colors duration-200"
//             >
//               {link.name}
//               <span className="block h-[2px] bg-[var(--chart-4)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//             </Link>
//           ))}
//         </nav>

//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-[var(--foreground)] cursor-pointer"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* منيو الموبايل */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t ${
//           isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={(e) => handleScroll(e, link.href)}
//               className="group relative inline-block text-lg font-medium text-[var(--foreground)] hover:text-[var(--chart-3)]"
//             >
//               {link.name}
//               <span className="block h-[2px] bg-[var(--chart-4)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import StayInTouch from "../main/StayInTouch"; // تأكد من المسار الصحيح
import { AnimatePresence } from "framer-motion";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // حالة التحكم في المودال

  const links = [
    { name: "Home", href: "#top" },
    { name: "Projects", href: "#ProjectSection" },
    { name: "Skills", href: "#SkillsSection" },
    { name: "Stay in touch", href: "modal" }, // نغير الـ href لتمييزه
  ];

 const handleAction = (
  e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();

  if (href === "modal") {
    setIsContactOpen(true);
    setIsOpen(false);
    return;
  }

  if (href.startsWith("#")) {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false);
  }
};


  return (
    <>
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" onClick={(e) => handleAction(e, "#top")} className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200">
            MyPortfolio
          </Link>

          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleAction(e, link.href)}
                className="group relative inline-block text-[var(--foreground)] hover:text-[var(--chart-3)] font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.name}
                <span className="block h-[2px] bg-[var(--chart-4)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--foreground)] cursor-pointer">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* منيو الموبايل */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleAction(e, link.href)}
                className="group relative inline-block text-lg font-medium text-left text-[var(--foreground)] hover:text-[var(--chart-3)]"
              >
                {link.name}
                <span className="block h-[2px] bg-[var(--chart-4)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* عرض الـ Modal باستخدام Framer Motion */}
      <AnimatePresence>
        {isContactOpen && (
          <StayInTouch onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;