import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function GlowCard({
  children,
  className = "",
  delay = 0,
  certi = false,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      });
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseenter", () => setHovered(true));
    el.addEventListener("mouseleave", () => setHovered(false));

    return () => el.removeEventListener("mousemove", move);
  }, []);

  return certi ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative overflow-hidden p-4
      bg-zinc-900/80 backdrop-blur-xl
      border border-white/10
      hover:border-cyan-400/40
      hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
      transition-all ${className}`}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300"
        style={{
          opacity: hovered ? 0.7 : 0,
          left: pos.x - 240,
          top: pos.y - 240,
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(59,130,246,0.25) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  ) : (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.04 }}
      className={`relative overflow-hidden rounded-3xl p-6
      bg-zinc-900/80 backdrop-blur-xl
      border border-white/10
      hover:border-cyan-400/40
      hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
      transition-all ${className}`}
    >
      <div
        className="pointer-events-none absolute transition-opacity duration-300"
        style={{
          opacity: hovered ? 0.7 : 0,
          left: pos.x - 240,
          top: pos.y - 240,
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, rgba(59,130,246,0.25) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
