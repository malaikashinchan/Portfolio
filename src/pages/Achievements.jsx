// pages/Achievements.jsx
import Scene from "../components/3d/Scene";
import FloatingCone from "../components/3d/FloatingCone";
import BouncingSphere from "../components/3d/BouncingSphere";
import EY from "../assets/EY.png";
import Hopelang from "../assets/hopelang_logo.jpeg";
import Hack from "../assets/Hack.jpeg";
import electronics from "../icons/electronics.jpg"; // Add this to your public/images folder
export default function Achievements() {
const achievements = [
  {
    image: Storytelling, // Add a relevant image (e.g., AI, Vision, or Research icon)
    title: "Research Intern – Visual Storytelling (SISG)",
    subtitle: "IIIT Vadodara | May 2025 – June 2025",
    description:
      "Engineered a novel storytelling pipeline (ACPR 2025) integrating Grad-CAM, ViT, CLIPSeg, and Cohere LLM for vision-grounded narrative generation. Benchmarked the pipeline on a curated dataset of 1,000 images using BLEU, ROUGE, and achieved an average cosine similarity of 0.5514 with reference stories.",
    githubUrl: "https://github.com/Jarvisss1/Story_generation_with_single_image",
  },
  {
    image: Electronics, // Add an image/icon for teaching/mentoring
    title: "Teaching Assistant",
    subtitle: "IIIT Vadodara | Aug 2024 – May 2025",
    description:
      "Led weekly laboratory sessions and vivas for 221 students in Basic Electronics Circuits (EC160). Collaborated with professors to design problems and solutions for quizzes and exams.",
  },
];


  return (
    <div className="relative min-h-screen bg-[#0b0c10] px-6 py-20 text-white overflow-hidden">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl font-bold mb-3">My Experience</h2>
        <p className="text-xl text-red-400">Some of My Major Experiences</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {achievements.map((a, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] hover:scale-105 transition-all duration-500 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-48 object-contain bg-[#0d0d0d] p-6"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{a.title}</h3>
              <p className="text-md text-pink-400 mb-2">{a.subtitle}</p>
              <p className="text-sm text-gray-300">{a.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <Scene>
          <FloatingCone />
          <BouncingSphere />
          <FloatingCone position={[1, 2, -2]} />
          <BouncingSphere position={[-2, 0.5, 1]} />
        </Scene>
      </div>
    </div>
  );
}
