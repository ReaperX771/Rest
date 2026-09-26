// src/components/Header.jsx
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCoins,
  FaRoad,
  FaUsers,
  FaPuzzlePiece,
  FaGem,
  FaVoteYea,
  FaHandshake,
  FaSeedling,
} from "react-icons/fa";
import logo from '../assets/images/logo.png'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaInfoCircle /> },
    { id: "partners", label: "Partners", icon: <FaHandshake /> },
    { id: "tokenomics", label: "Tokenomics", icon: <FaCoins /> },
    { id: "utility", label: "Utility", icon: <FaPuzzlePiece /> },
    { id: "food-security", label: "Food Security", icon: <FaSeedling /> },
    { id: "value", label: "Value", icon: <FaGem /> },
    { id: "governance", label: "Governance", icon: <FaVoteYea /> },
    { id: "roadmap", label: "Roadmap", icon: <FaRoad /> },
    { id: "community", label: "Community", icon: <FaUsers /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-blue-900/30 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text">
          REST
        </h1> */}
        <img className="w-17" src={logo}/>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {links.map((link) => (
            <AnchorLink
              key={link.id}
              href={`#${link.id}`}
              offset="100"
              className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-300 hover:text-blue-300 transition-colors duration-300"
            >
              {link.icon}
              <span>{link.label}</span>
            </AnchorLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="text-2xl xl:hidden text-blue-300"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {navOpen && (
        <div className="xl:hidden flex flex-col bg-black/90 border-t border-blue-900/40 py-4 px-6">
          {links.map((link) => (
            <AnchorLink
              key={link.id}
              href={`#${link.id}`}
              offset="100"
              onClick={() => setNavOpen(false)}
              className="flex items-center gap-2 py-3 text-gray-300 hover:text-blue-300 transition-colors duration-300"
            >
              {link.icon}
              <span>{link.label}</span>
            </AnchorLink>
          ))}
        </div>
      )}
    </header>
  );
}