import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";
import { MdOutlineContacts } from "react-icons/md";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          <MdOutlineContacts className="w-7 h-7 text-cyan-400" />
          Contact
        </h2>
        <p className="text-gray-400 mt-1 font-sans text-md">
          Let's connect with each other and exchange knowledge or experience.
        </p>
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <ContactSection />
      </div>
    </motion.div>
  );
}
