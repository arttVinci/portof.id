import React from "react";
import { motion } from "framer-motion";
import CareerCard from "../components/CareerCard";

const experiences = [
  {
    id: 1,
    logo: "/images/akebono.jpg",
    title: "IT Support",
    company: "PT Akebono Brake Astra Indonesia",
    location: "Jakarta Utara, Jakarta Raya, Indonesia",
    period: "Desember 2021 - April 2022",
    duration: "5 Months",
    type: "Internship",
    mode: "Onsite",
    urlCompany:
      "https://www.linkedin.com/company/pt-akebono-brake-astra-indonesia/",
    responsibilities: [
      "Create an RFID-based field operator attendance project with a mentor.",
      "Wiring the HMI to be installed in the field where the operators work.",
      "Registering/signing up kanbans so they can be counted by the system.",
      "Counting incoming and outgoing data via kanbans.",
      "Maintaining the work area to ensure occupational safety and health.",
      "Implementing troubleshooting processes.",
    ],
  },
  {
    id: 2,
    logo: "/images/evermos.jpg",
    title: "Back-end Developer",
    company: "PT Evermos",
    location: "Bandung, Jawa Barat, Indonesia",
    period: "November 2025 - Desember 2025",
    duration: "2 Months",
    type: "Project Based Internship",
    mode: "Remote",
    urlCompany: "https://www.linkedin.com/company/evermos/posts/?feedView=all",
    responsibilities: [
      "High-Performance API: Engineered a robust REST API using Go Fiber and GORM, implementing Clean Architecture to ensure code modularity and testability.",
      "Containerization: Fully containerized the application, database, and migration services using Docker and Docker Compose, streamlining the deployment process across environments.",
      "Complex Transactions: Implemented atomic database transactions (ACID compliance) for the checkout process, ensuring inventory accuracy and data integrity by creating historical product snapshots (log_products).",
      "Security & Auth: Secured API endpoints using JWT (JSON Web Token) authentication and custom Middleware for Role-Based Access Control (Admin vs Customer).",
      "Database Management: Designed relational database schemas in MySQL and managed version control using Golang-Migrate.",
      " Features Delivered: User Management, Store Creation, Product Inventory with Image Upload, Address Management, and Transaction History.",
    ],
  },
];

const education = [
  {
    id: 1,
    logo: "/images/universitas_terbuka.jpg",
    edu: true,
    title: "Universitas Terbuka",
    company: "Bachelor's degree - Information Systems, (FST)",
    location: "Tangerang Selatan, Banten, Indonesia",
    period: "2024 - 2028",
    urlCompany:
      "https://www.linkedin.com/school/universitas-terbuka/posts/?feedView=all",
    responsibilities: [
      "Create an RFID-based field operator attendance project with a mentor.",
      "Wiring the HMI to be installed in the field where the operators work.",
      "Registering/signing up kanbans so they can be counted by the system.",
      "Counting incoming and outgoing data via kanbans.",
      "Maintaining the work area to ensure occupational safety and health.",
      "Implementing troubleshooting processes.",
    ],
  },
];

export default function AboutPage() {
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

      <div className="space-y-6 text-gray-300 leading-relaxed font-normal text-md">
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
      </div>

      <div className="mt-16">
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <CareerCard experiences={experiences} type="work" />
      </div>

      <div className="mt-16">
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <CareerCard experiences={education} type="edu" />
      </div>
    </motion.div>
  );
}
