import { useState, useEffect, useRef } from "react";
import skate from '../assets/images/skate.png';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [visible, setVisible] = useState(false);
  const [skatePosition, setSkatePosition] = useState(-100);
  const ref = useRef(null);
  const fullText = "REST";
  
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (visible) {
      // Typing animation
      let i = 0;
      const typing = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 150);

      // Skating animation
      const skateInterval = setInterval(() => {
        setSkatePosition(prev => {
          if (prev > 100) return -100;
          return prev + 0.5;
        });
      }, 20);

      return () => {
        clearInterval(typing);
        clearInterval(skateInterval);
      };
    }
  }, [visible]);

  return (
    <section 
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 text-white relative overflow-hidden"
    >
      {/* Skating Cat */}
      <img 
        src={skate} 
        alt="Skating cat"
        className="absolute bottom-10 z-20 transition-all duration-100"
        style={{
          left: `${skatePosition}%`,
          transform: 'scaleX(-1)'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className={`text-5xl sm:text-7xl md:text-8xl font-black mb-6 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse">|</span>
        </h1>
        
        {/* Subtitle */}
        <p className={`text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          The meme coin on Solana that's putting crypto to sleep. Seriously, get some REST.
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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