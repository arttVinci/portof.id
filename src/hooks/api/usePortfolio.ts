import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type {
  CareerItem,
  ProfileItem,
  ProjectItem,
  AchievementItem,
} from "../../types/ui.types";
import {
  transformProfile,
  transformExperiences,
  transformEducations,
  transformAchievements,
  transformProjects,
} from "../../utils/transformer";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const usePortfolio = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState<ProfileItem | null>(null);
  const [experiences, setExperiences] = useState<CareerItem[]>([]);
  const [educations, setEducations] = useState<CareerItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    setProfile(null);
    setExperiences([]);
    setEducations([]);
    setProjects([]);
    setAchievements([]);
    setError("");

    if (!username) return;

    const fetchData = async () => {
      try {
        const [
          resProfile,
          resExperience,
          resEducation,
          resProject,
          resAchievement,
        ] = await Promise.all([
          fetch(`${API_BASE_URL}/api/public/${username}`),
          fetch(`${API_BASE_URL}/api/public/${username}/experiences`),
          fetch(`${API_BASE_URL}/api/public/${username}/educations`),
          fetch(`${API_BASE_URL}/api/public/${username}/projects`),
          fetch(`${API_BASE_URL}/api/public/${username}/achievements`),
        ]);

        if (resProfile.status === 404)
          throw new Error(`User @${username} not found`);
        if (!resProfile.ok) throw new Error("Failed to load profile");

        const [
          jsonProfile,
          jsonExperiences,
          jsonEducations,
          jsonProjects,
          jsonAchievements,
        ] = await Promise.all([
          resProfile.json(),
          resExperience.ok ? resExperience.json() : [],
          resEducation.ok ? resEducation.json() : [],
          resProject.ok ? resProject.json() : [],
          resAchievement.ok ? resAchievement.json() : [],
        ]);

        setProfile(transformProfile(jsonProfile));
        setExperiences(transformExperiences(jsonExperiences));
        setEducations(transformEducations(jsonEducations));
        setAchievements(transformAchievements(jsonAchievements));
        setProjects(transformProjects(jsonProjects));
      } catch (err) {
        console.error(err);
        setError("Failed to load portfolio.");
      }
    };
    fetchData();
  }, [username]);

  return {
    username,
    profile,
    experiences,
    educations,
    projects,
    achievements,
    error,
  };
};
