import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CareerCard from "../templates/subTemp/components/CareerCard";
import type { CareerItem, ProfileItem } from "../types/ui.types";
import type { PublicPortfolioResponse } from "../types/api.types";
import {
  transformProfile,
  transformExperiences,
  transformEducations,
} from "../utils/transformer";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function AboutPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [profile, setProfile] = useState<ProfileItem | null>(null);
  const [work, setWork] = useState<CareerItem[]>([]);
  const [edu, setEdu] = useState<CareerItem[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/public/${username}`);

        if (response.status === 404) {
          setError("Profile not found");
          return;
        }

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const json: PublicPortfolioResponse = await response.json();

        setProfile(transformProfile(json.profile));
        setWork(transformExperiences(json.experiences));
        setEdu(transformEducations(json.educations));
      } catch (err) {
        console.error(err);
        setError("Failed to load portfolio.");
      }
    };
    fetchData();
  }, [username]);

  if (error) {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-400 font-mono">404</h2>
        <p className="text-gray-400">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-zinc-800 rounded text-white hover:bg-zinc-700 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          About
        </h2>
        <p className="text-gray-400 mt-1 font-sans text-md">
          A brief introduction to who I am.
        </p>
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
      </div>

      {/* <div className="space-y-6 text-gray-300 leading-relaxed font-normal text-md">
        <p>
          Hello there! Thank you for visiting my personal website.{" "}
          <span className="font-mono text-sky-400">
            I'm Putra Rizky Nugraha,
          </span>{" "}
          a dedicated student at the Faculty of Science and Technology,
          Universitas Terbuka, majoring in Information Systems.
        </p>

        <p>
          Currently, I am navigating an exciting career transition to become a
          professional Software Engineer, with a sharp focus on{" "}
          <span className="font-mono text-sky-400">Web Development</span> My
          journey into tech is driven by a genuine passion for building digital
          solutions that are not only functional but also scalable and
          user-centric. I am deeply committed to mastering the craft of coding,
          moving beyond just writing syntax to engineering robust software
          architectures.
        </p>

        <p>
          As a Fullstack Developer, I have honed my skills across a modern
          technology stack. On the backend, I leverage the power of{" "}
          <span className="font-mono text-sky-400">PHP(Laravel)</span> and{" "}
          <span className="font-mono text-sky-400">Golang</span> to build secure
          and efficient APIs, managing data structures with{" "}
          <span className="font-mono text-sky-400">MySQL</span>. On the
          frontend, I utilize{" "}
          <span className="font-mono text-sky-400">React</span> and{" "}
          <span className="font-mono text-sky-400">Tailwind CSS</span> to create
          responsive and intuitive user interfaces. My development workflow is
          disciplined and professional, incorporating{" "}
          <span className="font-mono text-sky-400">Docker</span> for consistent
          containerized environments and{" "}
          <span className="font-mono text-sky-400">Postman</span> for
          comprehensive API testing.
        </p>

        <p>
          I am a staunch believer in{" "}
          <span className="font-mono text-sky-400">Clean Code</span> principles.
          For me, writing code is a form of communication; it must be clear,
          maintainable, and efficient to ensure long-term success. Whether I'm
          architecting a new feature or optimizing an existing system, I strive
          for excellence and clarity in every layer of the application.
        </p>

        <p>
          Beyond my personal projects, I am an active member of the{" "}
          <span className="font-mono text-sky-400">
            Google Developers Group (GDG) community.
          </span>{" "}
          Engaging with this vibrant network allows me to stay ahead of the
          latest industry trends, share knowledge, and collaborate with
          like-minded innovators. I am a fast learner who thrives in dynamic
          environments, and I am eager to bring my technical skills and fresh
          perspective to contribute to impactful projects.
        </p>

        <p className="text-gray-400">Thank You.</p>
      </div> */}
      <p className="text-gray-400 mt-1 font-sans text-md">
        {profile?.about || `Welcome to ${username}'s portfolio.`}
      </p>
      <div className="border-b border-zinc-700 mt-3 mb-6"></div>

      <div className="space-y-6 text-gray-300 leading-relaxed font-normal text-md">
        {profile?.bio ? (
          profile.bio.split("\n").map((text, i) => (
            <p key={i} className="mb-4">
              {text}
            </p>
          ))
        ) : (
          <p className="italic text-gray-500">
            This user hasn't written a bio yet.
          </p>
        )}
      </div>

      <div className="mt-16">
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <CareerCard data={work} type="work" />
      </div>

      <div className="mt-16">
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <CareerCard data={edu} type="edu" />
      </div>
    </motion.div>
  );
}
