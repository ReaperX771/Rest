import { FaTwitter, FaTelegramPlane, FaDiscord, FaGlobe } from "react-icons/fa";
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 text-gray-300 bg-transparent border-t border-gray-800 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Logo / Name */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
          <img 
            className="w-24 sm:w-17 h-auto mx-auto sm:mx-0 transition-transform duration-300 hover:scale-105" 
            src={logo} 
            alt="REST Logo"
          />
          <p className="text-sm mt-3 text-gray-400 text-center sm:text-left">
            A calm movement for a restless world.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="#"
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="#"
            className="hover:text-cyan-300 transition-colors duration-300"
            aria-label="Website"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} REST Token. All rights reserved.
      </div>
    </footer>
  );
}
