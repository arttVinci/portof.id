import type { ProjectItem } from "../../../types/ui.types";
import ProjectCard from "./ProjectCard";

export interface ProjectCardsProps {
  projects: ProjectItem[];
}

export default function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <section className="mt-4 pb-3">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 font-sans text-md">
            Total: {projects.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
