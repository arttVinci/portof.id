import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AchievementsPage from "./pages/AchievementsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import DetailProjectPage from "./pages/DetailProjectPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project/:id" element={<DetailProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
