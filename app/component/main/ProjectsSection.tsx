

// "use client";
// import { FC, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Github, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const projects = [
//   {
//     title: "Fixtroller",
//     description: "A responsive & fullStack Maintenance Request Management System",
//     tags: ["Next.js", "typescript", "Tailwind", "next-i18next", "Zustand", "shadcn", "react hook form", "zod", "Asp.net"],
//     image: "/images/fixtroller.jpg",
//     github: "https://github.com/Anas-Abuhamed/Fix-Troller.git"
//   },
//   {
//     title: "Travel-App",
//     description: "👉 A simple, fully responsive website that displays weather conditions for a specific location over a defined time period",
//     tags: ["js", "Bootstrap", "Third-party API"],
//     image: "/images/travelapp.jpg",
//     github: "https://github.com/AboodHejazi/Travel_app.git"
//   },
//   {
//     title: "Weather Prediction Rule-Based AI",
//     description: "A rule-based AI system for predicting tomorrow’s weather using confidence-based reasoning",
//     tags: ["html", "js", "css"],
//     image: "/images/weather-ai.jpg",
//     github: "https://github.com/AboodHejazi/weather-prediction-rule-based-ai.git"
//   },
//    {
//     title: "Simple-Dashboard",
//     description: "A responsive & front end Admsin dashboard to manage products & customers & inventory",
//     tags: ["Next.js", "typescript", "Tailwind", "shadcn", ],
//     image: "/images/Admin-dashboard.png",
//     github: "https://github.com/AboodHejazi/AdminDashboard.git",
//   },
// ];

// const ProjectsSection: FC = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <section id="ProjectSection" className="py-24 bg-white relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Featured <span className="text-[var(--chart-3)]">Projects</span>
//           </h2>
//           <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--chart-3)] to-[var(--chart-4)] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <Card className="group h-full flex flex-col bg-white border-gray-100 overflow-hidden rounded-[2rem] shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-[var(--chart-3)]/10 transition-all duration-500 border-t-2 border-t-[var(--chart-3)]">
//                 <CardHeader className="p-0 overflow-hidden h-52 relative">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     onClick={() => setSelectedImage(project.image)}
//                     className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-all duration-700 cursor-zoom-in"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
//                 </CardHeader>
//                 <CardContent className="p-6 flex-grow">
//                   <div className="flex flex-wrap gap-1.5 mb-4">
//                     {project.tags.map(tag => (
//                       <Badge key={tag} variant="secondary" className="px-2 py-0.5 text-[9px] font-bold uppercase bg-[var(--chart-3)]/10 text-[var(--chart-3)] border-none">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--chart-3)] transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>
//                 </CardContent>
//                 <CardFooter className="p-6 pt-0 gap-4">
//                   <Button asChild variant="ghost" className="h-auto p-0 text-gray-400 hover:text-gray-900 hover:bg-transparent font-medium text-sm">
//                     <a target="_blank" href={project.github} className="flex items-center gap-1.5">
//                       <Github size={16} /> Code
//                     </a>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="relative max-w-5xl w-full max-h-[90vh] flex justify-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white p-2">
//                 <X size={32} />
//               </button>
//               <img src={selectedImage} alt="Preview" className="w-full h-full object-contain rounded-xl shadow-2xl" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsSection;


"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  linkedin?: string; // ✅ اختياري
};

const projects: Project[] = [
  {
    title: "Fixtroller",
    description: "A responsive & fullStack Maintenance Request Management System",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "next-i18next",
      "Zustand",
      "shadcn",
      "react hook form",
      "zod",
      "ASP.NET",
    ],
    image: "/images/fixtroller.jpg",
    github: "https://github.com/Anas-Abuhamed/Fix-Troller.git",
    linkedin: "https://www.linkedin.com/posts/abood-hejazi-17aa84295_graduationproject-fixtroller-aichatbot-activity-7421159939940700160-MKeJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeHK-4BTyI4zaoHwRuxpFZWQixsOFB0zHA",
  },
  {
    title: "Travel-App",
    description:
      "A simple, fully responsive website that displays weather conditions for a specific location",
    tags: ["JavaScript", "Bootstrap", "Third-party API"],
    image: "/images/travelapp.jpg",
    github: "https://github.com/AboodHejazi/Travel_app.git",
  },
  {
    title: "Weather Prediction Rule-Based AI",
    description:
      "A rule-based AI system for predicting tomorrow’s weather using confidence-based reasoning",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/weather-ai.jpg",
    github:
      "https://github.com/AboodHejazi/weather-prediction-rule-based-ai.git",
  },
  {
    title: "Simple Dashboard",
    description:
      "A responsive frontend admin dashboard to manage products, customers, and inventory",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn"],
    image: "/images/Admin-dashboard.png",
    github: "https://github.com/AboodHejazi/AdminDashboard.git",
    linkedin: "https://www.linkedin.com/posts/abood-hejazi-17aa84295_nextjs-frontenddevelopment-admindashboard-activity-7426593134844907522-3YF-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeHK-4BTyI4zaoHwRuxpFZWQixsOFB0zHA",
  },
];

const ProjectsSection: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="ProjectSection"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Featured{" "}
            <span className="text-[var(--chart-3)]">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--chart-3)] to-[var(--chart-4)] mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group h-full flex flex-col bg-white overflow-hidden rounded-[2rem] shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-[var(--chart-3)]/10 transition-all duration-500 border-t-2 border-t-[var(--chart-3)]">
                {/* Image */}
                <CardHeader className="p-0 overflow-hidden h-52 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => setSelectedImage(project.image)}
                    className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-all duration-700 cursor-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                </CardHeader>

                {/* Content */}
                <CardContent className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                   <Badge
  key={tag}
  variant="outline"

                        className="px-2 py-0.5 text-[9px] font-bold uppercase bg-[var(--chart-3)]/10 text-[var(--chart-3)] border-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--chart-3)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-6 pt-0 flex items-center gap-4">
                  {/* GitHub */}
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto p-0 text-gray-400 hover:text-gray-900 hover:bg-transparent text-sm"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>

                  {/* LinkedIn (اختياري) */}
                  {project.linkedin && (
                    <Button
                      asChild
                      variant="ghost"
                      className="h-auto p-0 text-gray-400 hover:text-[#0A66C2] hover:bg-transparent text-sm"
                    >
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5"
                      >
                        <Linkedin size={16} />
                        Post
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white p-2"
              >
                <X size={32} />
              </button>

              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
