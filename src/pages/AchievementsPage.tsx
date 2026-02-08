import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CertificateCards from "../components/CertificateCards";
import { Award } from "lucide-react";
import type { AchievementItem } from "../types/ui.types";
import type { Achievement } from "../types/api.types";
import { transformAchievements } from "../utils/transformer";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export default function AchievementsPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}public/${username}/achievements`,
        );

        if (response.status === 404) {
          setError("achievements not found");
          return;
        }

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const json: Achievement[] = await response.json();

        setAchievements(transformAchievements(json));
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
          <Award className="w-7 h-7 text-cyan-400" />
          Certificates
        </h2>
        <p className="text-gray-400 mt-1 font-sans text-md">
          The following are the certificates and badges that I have obtained
          throughout my journey, which are academic or other categories.
        </p>
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <CertificateCards data={achievements} />
      </div>
    </motion.div>
  );
}
