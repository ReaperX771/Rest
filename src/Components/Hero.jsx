import { useState, useEffect, useRef } from "react";
import logo from '../assets/images/logo.png';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const contractAddress = "ERpXkEafaKuKEARBCFsVnLZA1GARWUjBBbQCukXpbonk";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section 
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 text-white relative overflow-hidden"
    >
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto py-20">
        {/* Logo with Alluring Frame */}
        <div className={`mb-6 sm:mb-8 transition-all mt-20 duration-1000 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="relative inline-block">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            
            {/* Main Frame */}
            <div className="relative bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-cyan-500/25">
              
              {/* Inner Frame */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                <img 
                  src={logo} 
                  alt="REST Logo"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          REST TOKEN
        </h1>
        
        {/* Subtitle */}
        <p className={`text-lg sm:text-xl md:text-2xl text-cyan-300 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Powering Everyday Payments with Trust and Freedom
        </p>

        {/* Overview */}
        <p className={`text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          A utility-driven token built on Solana, designed to power everyday payments through a trusted community-driven ecosystem. 
          Redefining blockchain utility in Africa and beyond.
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a 
            href="https://x.com/RealRest01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          > 
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/25">
              Get Started
            </button>
          </a>
          <a 
            href="https://raydium.io/swap/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-cyan-400 text-cyan-300 rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-400/10 transition-all duration-300">
              Buy Rest
            </button>
          </a>
        </div>

        {/* Contract Address */}
        <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-600 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-md mx-auto">
            <p className="text-cyan-300 text-sm mb-2">Contract Address</p>
            <div className="flex items-center justify-between bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-3">
              <code className="text-cyan-200 text-xs sm:text-sm font-mono truncate flex-1 mr-2">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto transition-all py-6 sm:py-8 md:py-10 duration-1000 delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400">500M</div>
            <div className="text-cyan-300 text-xs sm:text-sm">Total Supply</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-blue-400">0%</div>
            <div className="text-blue-300 text-xs sm:text-sm">Tax</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-purple-400">SOL</div>
            <div className="text-purple-300 text-xs sm:text-sm">Network</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}