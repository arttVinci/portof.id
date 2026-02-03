import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MenuItem({ item, isActive, onClick, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.05 }}
    >
      <Link
        to={item.route}
        onClick={onClick}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${
          isActive
            ? "bg-zinc-800 text-white"
            : "text-blue-text hover:bg-blue-border hover:text-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span className="font-medium text-sm">{item.label}</span>
        </div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <svg
              className="w-4 h-4"
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
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
}
