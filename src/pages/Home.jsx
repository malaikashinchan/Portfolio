// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import RotatingCube from "../components/3d/RotatingCube";
import BouncingSphere from "../components/3d/BouncingSphere";
import Scene from "../components/3d/Scene";
import "../styles/animations.css";
import WavyCone from "../components/3d/WavyCone";
import FloatingIcosahedron from "../components/3d/FloatingIcosahedron";
import SpinningTorus from "../components/3d/SpinningTorus";
import Capsule from "../components/3d/Capsule";
import Cylinder from "../components/3d/Cylinder";
import RotatingDodecahedron from "../components/3d/Dodecahedron";
import { Dodecahedron } from "@react-three/drei";
import ReactIcon from '../assets/react.svg';
import Nextjs from '../icons/nextjs.svg';
import Tailwind from '../icons/tailwindcss.svg';
import Threejs from '../icons/Threejs.svg';
import Stream from '../icons/streamlitt.png';
import Plotly from '../icons/plotly-icon.svg';
import Chart from '../icons/chartjs-logo.svg';
import Node from '../icons/node-js.svg';
import Express from '../icons/express.png';
import Flask from '../icons/flask.png';
import Mongo from '../icons/Mongo.png';
import Mysql from '../icons/Mysql.png';
import Python from '../icons/python.png';
import Rest from '../icons/rest.png'
import Fastapi from '../icons/Fast.png';
import Auth0 from '../icons/Auth0.png';
import Puppeteer from '../icons/puppet.png';
import github from '../icons/github.png';
import Azure from '../icons/azure.jpeg';
import Docker from '../icons/Docker.png';
import Gmail from '../icons/gmail.jpeg';
import Postman from '../icons/postman.png';
import NSE from '../icons/Nse.png';
import Pandas from '../icons/pandas_mark.svg';
import Numpy from '../icons/numpy.png';
import scikit from '../icons/scikit.png';
import Backtrader from '../icons/Backtrader.png';
import Deep from '../icons/Deeplearning.png';
import Image from '../icons/Image.jpeg';  
import opencv from '../icons/opencv.png'; // Add your OpenCV icon path here
export default function Home() {
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowExtra(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const frontend = [
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: Nextjs },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Three.js", icon: Threejs },
    { name: "Streamlit", icon: Stream },
    { name: "Plotly", icon: Plotly },
    { name: "Chart.js", icon: Chart }, // For light plotting inside UIs
  ];
  
  const backend = [
    { name: "Node.js", icon: Node },
    { name: "Express.js", icon: Express},
    { name: "Flask", icon: Flask },
    { name: "MongoDB", icon: Mongo },
    { name: "MySQL", icon: Mysql }, // For structured financial data
    { name: "Python", icon: Python},
    { name: "RESTful APIs", icon: Rest }, // Custom APIs for brokers/trading
    { name: "FastAPI", icon: Fastapi }, // Great for high-perf APIs
  ];
  
  const tools = [
    { name: "Auth0", icon: Auth0},
    { name: "Puppeteer", icon: Puppeteer },
    { name: "GitHub", icon: github},
    { name: "Azure", icon: Azure },
    { name: "Docker", icon: Docker}, // For deploying strategies as containers
    { name: "Gmail SMTP", icon:Gmail },
    { name: "Postman", icon: Postman }, // For API testing
    { name: "NSE/BSE APIs", icon: NSE }, // Custom icon, if you have one
  ];
  
  const ai = [
    { name: "Python", icon: Python},
    { name: "Pandas", icon: Pandas }, // Essential for financial wrangling
    { name: "NumPy", icon: Numpy },
    { name: "Scikit-learn", icon: scikit }, // For backtesting logic
    { name: "Backtrader", icon: Backtrader }, // Trading strategy simulation
    { name: "Deep Learning", icon: Deep },
    { name: "Image Processing", icon: Image},
    { name: "OpenCV", icon: opencv },
  ];
  
  
  const SkillColumn = ({ title, skills }) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-pink-500 tracking-wide">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center gap-4 p-4 rounded-xl shadow-md backdrop-blur-lg bg-red-300 border border-pink-300/30 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img src={icon} alt={name} className="w-7 h-7" />
            <span className="text-black font-bold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white px-6 py-12 md:px-20 flex flex-col items-center justify-center space-y-20">
      {/* Hero Section */}
      <div className="w-full grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-['Raleway'] tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 animate-pulse">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 max-w-xl">
  I’m a full-stack & AI developer blending creativity and intelligence to build cutting-edge web and ML solutions. With a passion for innovation, I specialize in building seamless, responsive applications and intelligent systems that solve real-world problems. Whether it’s crafting intuitive UIs, designing scalable backends, or deploying advanced machine learning models, I strive to push the boundaries of technology to deliver exceptional results.
</p>

        </div>

        <div className="h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-fade-in">
        <Scene>
  <RotatingCube position={[-4, 2, -2]} />
  <BouncingSphere position={[4, 2, -2]} />
  <SpinningTorus position={[-4, -2, 2]} />
  <WavyCone position={[4, -2, 2]} />
  <FloatingIcosahedron position={[-2, 0, 4]} />
  <Capsule position={[2, 0, 4]} />
  <Cylinder position={[0, -3, -3]} />
  <Dodecahedron
    position={[0, 3, 0]}
    args={[1, 0]}
    scale={1.5}
    rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}
  />
  <RotatingDodecahedron position={[0, 3, 0]} args={[1, 0]} scale={1.5} rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]} />
</Scene>


        </div>
      </div>

      {/* Tech Stacks Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <SkillColumn title="Frontend" skills={frontend} />
        <SkillColumn title="Backend" skills={backend} />
       
        <SkillColumn title="Tools & Libraries" skills={tools} />
        <SkillColumn title="AI & Python" skills={ai} />
      </div>

      {/* Extra Animated Section */}
      {showExtra && (
  <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center pt-16">
    
    {/* Rotating Cube */}
    <div className="w-[300px] h-[380px] bg-black rounded-2xl p-4 shadow-lg animate-float flex flex-col items-center justify-between text-white relative">
      <div className="absolute top-4 text-xl">🧊 Debug Mode: ON</div>
      <Scene>
        <RotatingCube />
      </Scene>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">The Debugging Cube</h2>
        <p className="text-sm mt-1 text-gray-300">
          Just like this cube, I keep spinning through bugs until I land on the fix. Ctrl + Z is my spirit animal.
        </p>
      </div>
    </div>

    {/* Bouncing Sphere */}
    <div className="w-[300px] h-[380px] bg-black rounded-2xl p-4 shadow-lg animate-float delay-500 flex flex-col items-center justify-between text-white relative">
      <div className="absolute top-4 text-xl">☕ Code. Bounce. Repeat.</div>
      <Scene>
        <BouncingSphere />
      </Scene>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">The Hyperactive Dev</h2>
        <p className="text-sm mt-1 text-gray-300">
          I bounce between React, Node, and StackOverflow at light speed. Fueled by chai and chaos.
        </p>
      </div>
    </div>
  </div>
)}



      {/* Moving Tagline Section */}
      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text-slide">
          Innovate. Build. Repeat.
        </h2>
        <p className="text-lg mt-4 text-gray-400">
          From 3D experiences to intelligent systems — I love bringing ideas to life.
        </p>
      </div>
    </div>
  );
}
