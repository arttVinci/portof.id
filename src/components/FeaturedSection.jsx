import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Award, Wrench } from "lucide-react";
import GlowCard from "./GlowCard";

export default function FeaturedSection() {
  return (
    <section className="mt-7 pb-3">
      <div className="mb-6 md:mb-8 px-1 md:px-0">
        <h3 className="text-xl md:text-2xl font-bold font-sans text-white flex items-center gap-2 tracking-tight">
          <LayoutGrid className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
          Featured
        </h3>
        <p className="text-zinc-400 mt-1 font-body text-md">
          Highlighted sections of my work & profile
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[180px] gap-4 md:gap-6">
        <Link
          to="/projects"
          className="md:col-span-7 md:row-span-2 block group relative h-full"
        >
          <GlowCard className="h-full overflow-hidden">
            <div className="flex flex-col md:flex-row h-full justify-between">
              <div className="p-5 md:p-6 flex flex-col justify-start w-full md:w-[45%] shrink-0 relative z-10">
                <div className="bg-zinc-800/50 border border-white/10 w-fit p-2.5 md:p-3 rounded-xl mb-4 shadow-sm">
                  <LayoutGrid className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                <h4 className="text-lg md:text-xl font-semibold font-sans text-white tracking-tight mb-2">
                  Projects Showcase
                </h4>
                <p className="font-body text-zinc-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                  A selection of real apps built to solve real problems.
                </p>
              </div>

              <div className="relative flex-1 flex flex-col gap-3 md:gap-4 p-5 pt-0 md:p-1 md:pl-2 overflow-hidden">
                <div className="w-full aspect-video rounded-lg border border-white/10 overflow-hidden shrink-0 shadow-lg shadow-black/40">
                  <img
                    src="/images/projects/dekatku/project1.png"
                    className="w-full h-full object-cover"
                    alt="Project Dekatku"
                  />
                </div>

                <div className="w-full aspect-video rounded-lg border border-white/10 overflow-hidden shrink-0 shadow-lg shadow-black/40">
                  <img
                    src="/images/projects/golang-api-ecommerce/6.png"
                    className="w-full h-full object-cover"
                    alt="Project Ecommerce"
                  />
                </div>
              </div>
            </div>
          </GlowCard>
        </Link>

        <Link
          to="/achievements"
          className="md:col-span-5 block group h-full min-h-40"
        >
          <GlowCard className="h-full p-5 md:p-6 flex flex-col justify-center">
            <div className="bg-zinc-800/50 border border-white/10 w-fit p-2.5 md:p-3 rounded-xl mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>

            <div>
              <h4 className="text-lg font-bold font-sans text-white">
                Achievements
              </h4>
              <p className="text-sm font-body text-zinc-400 mt-1">
                Milestones & recognitions.
              </p>
            </div>
          </GlowCard>
        </Link>

        <Link
          to="/contact"
          className="md:col-span-5 block group h-full min-h-40"
        >
          <GlowCard className="h-full p-5 md:p-6 flex flex-col justify-center">
            <div className="bg-zinc-800/50 border border-white/10 w-fit p-2.5 md:p-3 rounded-xl mb-4">
              <Wrench className="w-6 h-6 text-white" />
            </div>

            <div>
              <h4 className="text-lg font-bold font-sans text-white">
                Services
              </h4>
              <p className="text-sm font-body text-zinc-400 mt-1">
                Fullstack development & system design.
              </p>
            </div>
          </GlowCard>
        </Link>
      </div>
    </section>
  );
}
