import { FaTwitter, FaTelegramPlane, FaDiscord, FaGlobe } from "react-icons/fa";
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 text-gray-300 bg-transparent border-t border-gray-800 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center sm:text-left">
          {/* <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            REST
          </h1> */}
           <img className="w-17" src={logo}/>
          <p className="text-sm mt-1 text-gray-400">
            Sleep better knowing your meme token works for you.
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
