import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { AiFillTikTok } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="font-sans">
      {" "}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-linear-to-r from-red-600 to-red-700 rounded-xl p-7 relative overflow-hidden shadow-lg">
          <div className="flex justify-between items-start">
            <div className="relative z-10">
              <h2 className="text-white text-3xl font-bold font-sans tracking-tight mb-2">
                Stay in Touch
              </h2>
              <p className="text-red-100 mb-6 font-body text-base">
                Reach out via email for inquiries or collaborations.
              </p>
              <motion.button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=traarzkyy97@gmail.com",
                    "_blank"
                  )
                }
                className="bg-white/90 text-red-700 px-6 py-3 rounded-lg font-bold font-sans flex items-center gap-2 cursor-pointer shadow-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Go to Gmail
                <ExternalLink size={18} />
              </motion.button>
            </div>
            <div className="border-white/30 border-4 p-4 rounded-2xl rotate-3">
              <TbMail size={48} className="text-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl p-6 md:p-8 relative overflow-hidden shadow-lg">
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Follow My Journey
                </h2>

                <p className="text-white/90 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Follow my creative journey.
                </p>

                <motion.button
                  onClick={() =>
                    window.open("https://www.instagram.com/artt__r", "_blank")
                  }
                  className="bg-white/90 text-pink-600 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Instagram
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>
              <div className="w-14 h-14 md:w-20 md:h-20 border-white/30 border-2 md:border-4 rounded-xl flex items-center justify-center -rotate-6 shrink-0">
                <FaInstagram className="text-white w-7 h-7 md:w-15 md:h-15" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-700 to-blue-900 rounded-xl p-6 md:p-8 relative overflow-hidden shadow-lg">
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Let's Connect
                </h2>

                <p className="text-blue-100 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Connect with me professionally.
                </p>

                <motion.button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/putra-rizky-nugraha",
                      "_blank"
                    )
                  }
                  className="bg-white/90 text-blue-800 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>
              <div className="w-14 h-14 md:w-20 md:h-20 border-white/30 border-2 md:border-4 rounded-xl flex items-center justify-center rotate-6 shrink-0">
                <FaLinkedin className="text-white w-7 h-7 md:w-15 md:h-15" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Join the Fun
                </h2>

                <p className="text-gray-300 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Watch engaging and fun content.
                </p>

                <motion.button
                  onClick={() =>
                    window.open("https://www.tiktok.com/@artt_rzky", "_blank")
                  }
                  className="bg-white/90 text-gray-900 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  TikTok
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>
              <div className="w-14 h-14 md:w-20 md:h-20 border-white/30 border-2 md:border-4 rounded-xl flex items-center justify-center -rotate-3 shrink-0 backdrop-blur-sm">
                <AiFillTikTok className="text-white w-7 h-7 md:w-15 md:h-15" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-900 to-black rounded-xl p-6 md:p-8 relative overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Explore Code
                </h2>

                <p className="text-gray-400 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Explore my open-source work.
                </p>

                <motion.button
                  onClick={() =>
                    window.open("https://github.com/arttVinci", "_blank")
                  }
                  className="bg-white/90 text-black px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  GitHub
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>

              <div className="w-14 h-14 md:w-20 md:h-20 border-white/30 border-2 md:border-4 rounded-xl flex items-center justify-center rotate-3 shrink-0 backdrop-blur-sm">
                <FaGithub className="text-white w-7 h-7 md:w-15 md:h-15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
