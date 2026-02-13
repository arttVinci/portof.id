import { useState } from "react";
import { motion } from "framer-motion";

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface ProjectTechStackProps {
  skill: Skill;
  index: number;
}
export default function ProjectTechStack({
  skill,
  index,
}: ProjectTechStackProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group mt-2"
    >
      <motion.div
        whileHover={{ scale: 1.1, y: -2 }}
        className="flex items-center justify-center w-9 h-9 cursor-pointer rounded-full bg-zinc-800/80 border border-zinc-700 transition-colors"
        style={{ borderColor: isHovered ? skill.color : undefined }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-5 h-5 object-contain"
        />
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap border border-zinc-700 z-50"
        >
          {skill.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-zinc-700 rotate-45" />
        </motion.div>
      )}
    </motion.div>
  );
}
