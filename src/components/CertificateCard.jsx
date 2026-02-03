import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";

export default function CertificateCard({ certificate, index, onClick }) {
  const [isImageHovered, setIsImageHovered] = useState(false);

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
      onClick={onClick}
    >
      <div className="relative border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
        <div
          className="relative aspect-4/3 overflow-hidden bg-zinc-800 shrink-0"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.img
            src={certificate.image}
            alt={certificate.title}
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
                  <span>Show Credentials</span>
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

        {/* Content */}
        <GlowCard certi={true}>
          <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-12">
            {certificate.title}
          </h3>

          <p className="text-sm text-zinc-300 mb-3">
            {certificate.organization}
          </p>

          <div className="flex flex-col gap-1 mt-auto">
            <span className="text-xs text-zinc-500">
              {certificate.issuedLabel}
            </span>
            <span className="text-sm text-zinc-300">
              {certificate.issuedDate}
            </span>
          </div>
        </GlowCard>

        <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10" />
      </div>
    </motion.div>
  );
}
