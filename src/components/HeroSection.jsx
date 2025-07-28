import { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Home,
  User,
  FolderOpen,
  Gamepad2,
  Briefcase,
} from "lucide-react";
import ExpandableNavbar from "./NavBar";
import { Link } from "react-scroll";

const HeroSection = ({ id }) => {
  const [text, setText] = useState("");
  const fullText = "Web Developer & UI/UX Enthusiast";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const tabs = [
    { title: "Home", icon: Home, sectionId: "home" },
    { title: "About", icon: User, sectionId: "about" },
    { title: "Projects", icon: FolderOpen, sectionId: "project" },
    { title: "Demo", icon: Gamepad2, sectionId: "demo" },
    { title: "Services", icon: Briefcase, sectionId: "services" },
    { title: "Contact", icon: Mail, sectionId: "contact" },
  ];

  return (
    <section
      id={id}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <ExpandableNavbar
        tabs={tabs}
        showDarkModeToggle={true}
        isDarkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(!darkMode)}
      />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 dark:bg-gray-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-15 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 dark:bg-gray-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-15 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white">
          <div className="mb-8">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-60 h-60 rounded-full mx-auto border-4 border-white/20 shadow-2xl mb-6 hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            YASSIR CHOUIKA
          </h1>
          <p className="text-2xl mb-8 h-8">
            <span className="border-r-2 border-cyan-400 animate-pulse">
              {text}
            </span>
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/yassir-chouika"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <img src="/github.svg" alt="github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yassir-chouika-b88895295/"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <img src="/linkedin.svg" alt="linkedin icon" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?to=yassir.chouika@gmail.com&fs=1&tf=cm"
              target="_blank"
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <Link to="projectSection" smooth={true} duration={700} offset={-70}>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              View My Work
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};
export default HeroSection;
