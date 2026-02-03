import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, Hammer, X } from "lucide-react";
import { MdVerified } from "react-icons/md";

export default function MainLayout() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmartTalkOpen, setIsSmartTalkOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const menuName = path.charAt(0).toUpperCase() + path.slice(1);
    setActiveMenu(menuName);
  }, [location]);

  return (
    <div className="min-h-screen bg-blue-card flex justify-center items-start p-0 lg:py-14 lg:px-19">
      <header className="lg:hidden w-full fixed top-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 z-50 px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="/images/profile3.jpg"
              alt="Avatar"
              className="w-9 h-9 rounded-full border border-zinc-700 object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full"></span>
          </div>

          <div className="flex items-center gap-2">
            <h1 className="text-white font-semibold text-md tracking-wide">
              Putra Rizky
            </h1>
            <MdVerified className="w-4 h-4 text-blue-400 mt-1" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center cursor-pointer hover:bg-emerald-500 transition-colors">
            <span className="text-white text-xs font-bold">ID</span>
          </div>

          <button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
            <Cloud className="w-4 h-4" />
          </button> */}

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:bg-zinc-800 p-1.5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="w-full max-w-400 flex overflow-hidden">
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onOpenSmartTalk={() => setIsSmartTalkOpen(true)}
        />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 ml-0 lg:ml-66 pt-16 lg:pt-0"
        >
          <div className="max-w-5xl mx-auto py-6 px-6 lg:px-16 lg:py-0">
            <Outlet />
          </div>
        </motion.main>
      </div>

      <AnimatePresence>
        {isSmartTalkOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSmartTalkOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-zinc-900 border border-zinc-700 p-6 rounded-2xl shadow-2xl z-70 text-center"
            >
              <button
                onClick={() => setIsSmartTalkOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center justify-center gap-4 py-4">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                  <Hammer className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Under Development
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Fitur ini sedang dalam pengembangan oleh developers.
                    <br />
                    Nantikan update selanjutnya! 🚀
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsSmartTalkOpen(false)}
                className="w-full mt-4 bg-cyan-600 hover:bg-cyan-500 text-white py-2.5 rounded-xl font-medium transition-colors cursor-pointer"
              >
                Siap, Ditunggu!
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
