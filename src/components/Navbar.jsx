// components/Navbar.jsx
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  return (
    <nav className="p-3 flex justify-between items-center bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-lg rounded-lg backdrop-blur-md">
      <div className="text-3xl font-extrabold text-white tracking-widest">
        <Link to="/">My Portfolio</Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/Home">
          <button className="px-6 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transform transition-all duration-300 ease-in-out hover:scale-105">
            Home
          </button>
        </Link>
        <Link to="/projects">
          <button className="px-6 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transform transition-all duration-300 ease-in-out hover:scale-105">
            Projects
          </button>
        </Link>
        <Link to="/achievements">
          <button className="px-6 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transform transition-all duration-300 ease-in-out hover:scale-105">
            Experiences
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-6 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transform transition-all duration-300 ease-in-out hover:scale-105">
            Contact
          </button>
        </Link>
        <Link to="/">
          <button className="px-6 py-2 text-white bg-indigo-700 rounded-full shadow-lg hover:bg-indigo-800 transform transition-all duration-300 ease-in-out hover:scale-105">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
}
