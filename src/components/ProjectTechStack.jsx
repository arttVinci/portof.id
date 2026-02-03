import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectTechStack({ tech, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tech.Icon;

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
        className="flex items-center w-9 h-9 cursor-pointer"
      >
        <Icon size={27} color={tech.color} />
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap border border-zinc-700 z-50"
        >
          {tech.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-zinc-700 rotate-45" />
        </motion.div>
      )}
    </motion.div>
  );
}
