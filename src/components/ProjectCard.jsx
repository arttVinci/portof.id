import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin } from "lucide-react";
import GlowCard from "./GlowCard";
import ProjectTechStack from "./ProjectTechStack";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, index }) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group cursor-pointer h-full"
      onClick={handleViewDetail}
    >
      <div className="relative border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-cyan-400 text-black px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Pin className="w-4 h-4" />
              Featured
            </div>
          </div>
        )}

        <div
          className="relative aspect-video overflow-hidden bg-zinc-800 shrink-0"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isImageHovered ? 1.1 : 1,
              filter: isImageHovered ? "brightness(0.4)" : "brightness(1)",
            }}
            transition={{ duration: 0.3 }}
          />

          <AnimatePresence>
            {isImageHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>View Details</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <GlowCard certi={true}>
          <h3 className="text-xl font-semibold text-white line-clamp-2 min-h-12">
            {project.title}
          </h3>

          <p className="text-md text-zinc-400 mb-3 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap mt-auto">
            {project.techStack.map((tech, index) => (
              <ProjectTechStack key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </GlowCard>
      </div>
    </motion.div>
  );
}
