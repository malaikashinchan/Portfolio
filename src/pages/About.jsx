import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Ansh from "../assets/ansh.jpg"; // Replace with your actual image
 // Replace with your actual image
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";
import "../styles/animations.css";

function FloatingSphere() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 48, 48]} />
      <meshStandardMaterial color="#60a5fa" wireframe />
    </mesh>
  );
}

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
        <img
          src={Ansh}
          alt="My Portrait"
          className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-xl object-cover animate-float"
        />

        <h1 className="text-6xl font-extrabold text-blue-800 animate-text-slide whitespace-nowrap">
          Hey, I’m Malaika Varshney 👋
        </h1>

        <p className="text-2xl font-bold text-gray-800 animate-fade-in">
          🚀 3rd year B.Tech student at <span className="text-blue-600 font-extrabold">IIIT-V</span>
        </p>

        <p className="text-xl font-bold max-w-xl animate-fade-in">
          I'm a passionate <span className="text-indigo-700 font-extrabold">Full Stack Developer</span> with hands-on experience in the <span className="text-pink-700 font-extrabold">MERN stack</span>, <span className="text-purple-700 font-extrabold">Python backend</span> development, and <span className="text-yellow-600 font-extrabold">Deep Learning</span>.
        </p>

        <p className="text-lg italic text-gray-700 font-semibold animate-fade-in">
          "I turn coffee ☕ into code and bugs 🐞 into features!"
        </p>

        <div className="mt-4 space-y-3 animate-fade-in">
  <h2 className="text-3xl font-extrabold text-blue-700">🧠 Tech Stack</h2>
  <p className="text-lg font-semibold leading-relaxed">
    Azure, React, Node.js, Express, MongoDB, Flask, Python, Tailwind CSS, Material UI, JavaScript, HTML, CSS, REST APIs, Git, GitHub, Axios, React Syntax Highlighter, WebSockets
  </p>
  <p className="text-md font-medium text-black text-3xl">
    🧩 Additionally, I've solved <span className="text-yellow-400 font-bold">350+ problems</span> on <a href="https://leetcode.com/u/anshgup444/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-yellow-300">LeetCode</a>, strengthening my problem-solving and DSA skills.
  </p>
</div>


        <div className="mt-4 space-y-3 animate-fade-in">
          <h2 className="text-3xl font-extrabold text-blue-700">🎯 Fun Facts</h2>
          <ul className="list-disc list-inside text-left text-lg font-semibold space-y-2">
            <li>Love debugging more than writing code 😅</li>
            <li>Music + Tech = perfect weekend 💻🍜</li>
            <li>Hackathon nights = best memories ⚡</li>
          </ul>
        </div>

        <div className="mt-6 flex gap-6 text-4xl text-blue-600 animate-fade-in">
          <a href="https://www.linkedin.com/in/malaika-varshney-2bab53259" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com/malaikashinchan/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                      <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/malai_ney/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                      <FaInstagram />
                    </a>
                    <a href="https://leetcode.com/u/Mala1ka/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                      <FaCode />
                    </a>
        </div>
      </div>

      {/* Right Side: Skills Grid + Learning + 3D */}
      <div className="md:w-1/2 w-full flex flex-col gap-8">
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-blue-800 font-bold text-lg">
          <div className="bg-white shadow-md rounded-lg p-4">React</div>
          <div className="bg-white shadow-md rounded-lg p-4">Next.js</div>
          <div className="bg-white shadow-md rounded-lg p-4">Node.js</div>
          <div className="bg-white shadow-md rounded-lg p-4">MongoDB</div>
          <div className="bg-white shadow-md rounded-lg p-4">Tailwind</div>
          <div className="bg-white shadow-md rounded-lg p-4">Flask</div>
        </div>

        {/* Currently Learning Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center animate-fade-in">
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-3">📚 Currently Learning</h2>
          <p className="text-md font-semibold text-gray-700">
            TypeScript, Redux Toolkit, Docker, Three.js, Next.js, Kubernetes
          </p>
        </div>

        {/* 3D Sphere */}
        <div className="h-[420px] w-full">
          <Canvas camera={{ position: [2, 2, 4] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 5, 2]} />
            <FloatingSphere />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
