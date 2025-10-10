import { useState, useEffect, useRef } from "react";
import logo from '../assets/images/logo.png';

export default function Hero() {
  const [visible, setVisible] = useState(false);
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

  return (
    <section 
      ref={ref}
      id="home"
      className="min-h-screen flex pt-40 items-center justify-center px-4 sm:px-6 text-white relative overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo with Alluring Frame */}
        <div className={`mb-8 transition-all duration-1000 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="relative inline-block">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            
            {/* Main Frame */}
            <div className="relative bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl p-8 shadow-2xl shadow-cyan-500/25">
              
              {/* Inner Frame */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <img 
                  src={logo} 
                  alt="REST Logo"
                  className="w-64 h-64 sm:w-80 sm:h-80 mx-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className={`text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          The meme coin on Solana that's putting crypto to sleep. Seriously, get some REST.
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg shadow-cyan-500/25">
            Buy $REST
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-300 rounded-xl font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300">
            Learn More
          </button>
        </div>
        
        {/* Stats */}
        <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">1B</div>
            <div className="text-gray-400 text-sm">Total Supply</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">0%</div>
            <div className="text-gray-400 text-sm">Tax</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">SOL</div>
            <div className="text-gray-400 text-sm">Network</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}