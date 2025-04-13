// pages/Projects.jsx
import Market from "../assets/market.png";
import Trade from "../assets/trade.png";
import Book from '../assets/logo.jpg'
import Disaster from '../assets/disaster.png'
export default function Projects() {
  const projects = [
    {
      title: "NSE Market Scanner",
      image: Market,
      bullets: [
        "Streamlit-based stock screener for NSE with real-time filters and analytics.",
        "Included gainers, volume shockers, moving averages, and sector-wise insights.",
        "Visualized market trends with Plotly and integrated alert system via Gmail SMTP.",
      ],
      projectUrl: "https://marketscanner-keakz7fafvxiednjhp2tkn.streamlit.app/",
      githubUrl:"https://github.com/anshkie/MarketScanner.git"
    },
    {
      title: "Trade Monitor",
      image: Trade,
      bullets: [
        "Real-time trading dashboard with live prices, P&L tracking, and mock position simulation.",
        "Fetched stock data via Yahoo Finance and visualized performance in a clean UI.",
        "Designed for extensibility with support for broker APIs like Kite and Upstox.",
      ],
      projectUrl:"https://trademonitor-safpfmg3eftf3vqfv7htzg.streamlit.app/",
      githubUrl:"https://github.com/anshkie/TradeMonitor.git"
    },
    {
      title: "BookSwap – Online Book Exchange Platform",
      image: Book,
      bullets: [
        "Peer-to-peer book sharing platform built with the MERN stack and geolocation-based discovery.",
        "Integrated Auth0 for secure authentication and added in-app chat using Sendbird.",
        "Designed a responsive UI with Tailwind CSS for a modern user experience.",
      ],
      projectUrl:"https://github.com/Mountain-Bytes",
      githubUrl:"https://github.com/Mountain-Bytes"
    },
    {
      title: "Disaster Management System on Azure",
      image: Disaster,
      bullets: [
        "Cloud-based disaster response system leveraging Azure services and cognitive APIs.",
        "Used AI for voice and image analysis to improve emergency resource allocation.",
        "Implemented real-time data processing with Azure Functions and Cosmos DB.",
      ],
      projectUrl:"https://github.com/anika2711garg/Microsoft-Hackathon",
      githubUrl:"https://github.com/anika2711garg/Microsoft-Hackathon"

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
