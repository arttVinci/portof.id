import { GraduationCap, Briefcase } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import type { CareerItem } from "../../../types/ui.types";

interface Props {
  data: CareerItem[];
  type: "work" | "edu";
}

export default function CareerCard({ data, type }: Props) {
  if (!data || data.length === 0) return null;

  return (
    <section className="mt-7 pb-3">
      {type === "edu" && (
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
            <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
            Education
          </h3>
          <p className="text-gray-400 mt-1 font-sans text-md">
            My educational journey.
          </p>
        </div>
      )}

      {type === "work" && (
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
            <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
            Work Experience
          </h3>
          <p className="text-gray-400 mt-1 font-sans text-md">
            My professional journey.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {data.map((exp, index) => (
          <ExperienceCard key={exp.id} data={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
