// pages/Projects.jsx
import Market from "../assets/Market.png";
import Trade from "../assets/Trade.png";
import Book from '../assets/logo.jpg'
import Disaster from '../assets/Disaster.png'
export default function Projects() {
  const projects = [
  {
    title: "GroceryManager – Online Grocery Management System",
    image: Grocery,
    bullets: [
      "Developed a full-stack grocery management platform with FastAPI backend and React frontend.",
      "Designed and managed product, user, and order data with MySQL on PlanetScale.",
      "Implemented complete user flow including category browsing, cart, checkout, and order history.",
    ],
    projectUrl: "https://grocery-omega.vercel.app/",
    githubUrl: "https://github.com/malaikashinchan"
  },
  {
    title: "Disaster Management System on Azure",
    image: Disaster,
    bullets: [
      "Architected a cloud-based disaster response system using Azure Cognitive Services for real-time image analysis and speech-to-text recognition.",
      "Facilitated collaborative decision-making through AI-driven insights and role-based access control.",
      "Integrated Azure Functions and Cosmos DB for efficient backend processing and live system updates.",
    ],
    projectUrl: "https://github.com/anika2711garg/Microsoft-Hackathon",
    githubUrl: "https://github.com/anika2711garg/Microsoft-Hackathon"
  },
  {
    title: "AI-Powered Resume Improvement Website",
    image: Resume,
    bullets: [
      "Engineered a full-stack web application enabling users to upload resumes (PDF/DOCX) and receive personalized improvement suggestions powered by NLP and AI.",
      "Implemented robust text extraction using PyMuPDF and python-docx, plus spaCy/NLTK parsing to extract name, skills, experience, and education.",
      "Designed and implemented a FastAPI backend to compute a resume–job match percentage and persist results to MySQL for history and versioning.",
      "Developed a modern React + Tailwind frontend with upload UI, results dashboard, job-match tool, and downloadable PDF reports.",
    ],
    projectUrl: "https://github.com/malaikashinchan/RESUME-II",
    githubUrl: "https://github.com/malaikashinchan/RESUME-II"
  },
  {
    title: "Travel Booking Platform",
    image: Travel,
    bullets: [
      "Developed a full-stack travel booking system with user login, destination listings, bookings, and reviews.",
      "Designed RESTful APIs using Node.js and Express, and managed relational data using MySQL with complex joins, constraints, and triggers.",
      "Created a responsive frontend using React, enabling real-time user interactions and bookings.",
    ],
    projectUrl: "https://github.com/malaikashinchan/travel-guide",
    githubUrl: "https://github.com/malaikashinchan/travel-guide"
  },
  {
    title: "RL-Based Handover Optimization in 5G Networks",
    image: RL5G,
    bullets: [
      "Built a 5G network simulator with gNBs, UEs, interference, and mobility to evaluate handover strategies.",
      "Implemented Q-Learning and DQN with custom reward functions to reduce ping-pong effects.",
      "Benchmarked RL against A3 handover, achieving higher throughput and stability in simulations.",
    ],
    projectUrl: "https://github.com/IIITV-5G-and-Edge-Computing-Activity/2024GR11CS462",
    githubUrl: "https://github.com/IIITV-5G-and-Edge-Computing-Activity/2024GR11CS462"
  }
];

//bg-[#fff7e6]
  return (
    <div className="bg-grey py-16 px-6 md:px-20 min-h-screen">
  <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
    Recent projects
  </h2>
  <p className="text-center text-red-500 max-w-3xl mx-auto text-lg mb-12">
    Below you can see some examples of my recent work. Check out my complete{" "}
    <a href="#" className="text-purple-700 font-semibold underline hover:text-purple-900 transition">
      portfolio
    </a>
    . Have a project you would like to discuss?{" "}
    <a href="#" className="text-purple-700 font-semibold underline hover:text-purple-900 transition">
      Let’s make something great together!
    </a>
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white shadow-xl rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {project.bullets[0]}
          </p>
          <div className="mt-auto flex gap-3">
  <a
    href={project.projectUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
  >
    View Project →
  </a>
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition"
  >
    GitHub ↗
  </a>
</div>

        </div>
      </div>
    ))}
  </div>
</div>

  );
}
