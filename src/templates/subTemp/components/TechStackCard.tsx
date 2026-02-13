import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TechStackCard({ tech, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const Icon = tech.Icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: index * 0.05 }}
      className="relative flex items-center bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer group overflow-hidden w-fit"
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          left: mousePos.x - 100,
          top: mousePos.y - 100,
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/30 transition-all duration-300 z-10" />
      <div className="flex shrink-0 p-2 w-15 h-15 items-center justify-center relative z-10">
        <Icon size={35} color={tech.color} />
      </div>

      <div
        className="relative z-10 overflow-hidden transition-all duration-300 ease-out"
        style={{
          width: isHovered ? "75px" : "0px",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap block pr-3">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}
