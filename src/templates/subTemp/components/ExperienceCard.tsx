import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";
import type { CareerItem } from "../../../types/ui.types";

interface Props {
  data: CareerItem;
  index: number;
}

export default function ExperienceCard({ data, index }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <GlowCard>
        <div className="flex gap-3 md:gap-6">
          <motion.div
            className="flex shrink-0"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={data.logo}
              alt={`${data.organization} Logo`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover p-1 cursor-pointer"
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-base md:text-lg font-semibold text-white mb-1 cursor-pointer font-mono tracking-tight leading-snug"
              transition={{ duration: 0.2 }}
            >
              {data.role ?? null}
            </motion.h3>

            <motion.p
              whileHover={{ color: "#22d3ee" }}
              className="text-sm text-zinc-300 mb-1 font-sans"
            >
              <a
                href={data.organization}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.organization ?? null}
              </a>
            </motion.p>

            <p className="text-xs text-zinc-400 mb-2 font-sans">
              {data.location ?? null}
            </p>

            <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-zinc-400 mb-3 font-mono">
              <span>{data.period}</span>
              {data.duration && (
                <>
                  <span>•</span>
                  <span>{data.duration}</span>
                </>
              )}

              <motion.span
                className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300"
                whileHover={{ backgroundColor: "#3f3f46", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {data.type}
              </motion.span>

              {data.mode && (
                <motion.span
                  className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300"
                  whileHover={{ backgroundColor: "#3f3f46", scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {data.mode}
                </motion.span>
              )}
            </div>

            {data.responsibilities && data.responsibilities.length > 0 && (
              <>
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 text-zinc-400 cursor-pointer font-mono text-xs group mt-2"
                  whileHover={{ color: "#ffffff" }}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 group-hover:text-cyan-400" />
                  </motion.div>
                  <span className="text-xs group-hover:underline decoration-cyan-400/50 underline-offset-4">
                    {isExpanded ? "Hide details" : "Show details"}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-zinc-800/50">
                        <ul className="space-y-2">
                          {data.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="text-xs md:text-sm text-zinc-400 flex gap-2 font-sans leading-relaxed"
                            >
                              <span className="text-cyan-500/70 shrink-0">
                                •
                              </span>
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
