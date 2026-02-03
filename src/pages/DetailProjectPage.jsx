import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveLeft, ExternalLink, FolderOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import ProjectTechStack from "../components/ProjectTechStack";
import { SiGithub } from "@icons-pack/react-simple-icons";
import GlowCard from "../components/GlowCard";
import ImageGallery from "../components/ImageGallery";

export default function DetailProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((data) => data.id === parseInt(id));

  if (!project) {
    console.log("data tidak ditemukan!");
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body pb-10"
    >
      <div>
        <Link
          to={"/projects"}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 group mb-5 md:mb-7"
        >
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </Link>

        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 font-mono tracking-tight leading-snug">
          <FolderOpen className="w-7 h-7 md:w-9 md:h-9 text-cyan-400 shrink-0" />
          {project.title}
        </h2>

        <p className="text-gray-400 mt-3 font-sans text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="border-b border-zinc-700 mt-6 mb-6"></div>

        <div className="text-white flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-gray-400 font-medium text-sm md:text-base">
              Tech Stack :
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <ProjectTechStack key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-4 md:pt-0 border-t border-zinc-800 md:border-t-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="flex items-center gap-2 px-3 py-2 md:px-0 md:py-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
            >
              <SiGithub className="w-5 h-5 text-gray-300" />
              <span>Source Code</span>
            </a>

            <span className="text-gray-600 hidden md:block">|</span>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveUrl}
              className="flex items-center gap-2 px-3 py-2 md:px-0 md:py-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
            >
              <ExternalLink className="w-5 h-5 text-gray-300" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 mt-8 md:mt-10 mb-8 md:mb-10"
      >
        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">📸</span>
          Interface Showcase
        </h3>
        <ImageGallery images={project.gallery} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlowCard className="h-full">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4">
            <span className="text-orange-400">⚡</span>
            Challenges
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {project.challenges}
          </p>
        </GlowCard>

        <GlowCard className="h-full">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4">
            <span className="text-green-400">💡</span>
            Solution
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {project.solution}
          </p>
        </GlowCard>
      </div>

      <GlowCard certi={true} className={"rounded-2xl md:rounded-3xl mt-6"}>
        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 mb-6">
          <span className="text-cyan-400 animate-pulse">✨</span>
          <span className="relative">Key Features</span>
        </h3>

        <div className="space-y-6 md:space-y-8">
          {project.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + featureIndex * 0.1 }}
              className="group space-y-3 md:space-y-4"
            >
              <h4 className="text-base md:text-lg font-semibold text-white flex items-center gap-3">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                {feature.title}
              </h4>

              <ul className="space-y-3 pl-4 md:pl-6">
                {feature.key.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + featureIndex * 0.1 + itemIndex * 0.05,
                    }}
                    className="relative flex items-start gap-3 md:gap-4 text-gray-300 hover:text-white transition-all duration-300 group/item text-sm md:text-base"
                  >
                    <span className="text-cyan-400 mt-1 group-hover/item:translate-x-1 transition-transform shrink-0">
                      ▹
                    </span>

                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </GlowCard>
    </motion.div>
  );
}
