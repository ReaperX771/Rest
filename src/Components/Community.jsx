// src/components/Community.jsx
import { useEffect, useRef, useState } from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import log from '../assets/images/log.jpg';

export default function Community() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const socials = [
    { 
      icon: <FaDiscord />, 
      label: "Discord", 
      color: "text-indigo-400",
      link: "https://discord.gg/HBdpy6YyG"
    },
    { 
      icon: <FaTelegramPlane />, 
      label: "Telegram", 
      color: "text-cyan-400",
      link: "https://t.me/realtoken"
    },
    { 
      icon: <FaTwitter />, 
      label: "Twitter", 
      color: "text-blue-400",
      link: "https://x.com/RealRest01"
    },
  ];

  return (
    <section
      id="community"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 text-center text-white overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto transition-all duration-[1200ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join the REST Community
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12">
          Chill, laugh, and grow with dreamers across the globe.
        </p>

        <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl mb-12 sm:mb-16">
          {socials.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-[1000ms] ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: visible ? `${i * 200}ms` : "0ms"
              }}
            >
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.color} hover:text-white hover:scale-110 transition-all duration-500 block p-2 sm:p-3`}
                title={`Join our ${s.label}`}
              >
                {s.icon}
              </a>
              <p className="text-cyan-300 text-xs sm:text-sm mt-1 sm:mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className={`border-t border-cyan-500/30 pt-8 sm:pt-12 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Logo Placeholder Box */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <img 
                src={log} 
                alt="6Minutes Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>
            
            {/* Powered by Text */}
            <div className="text-center sm:text-left">
              <p className="text-cyan-300 text-sm sm:text-base font-medium">
                Powered by 6Minutes
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Building the future of decentralized payments
              </p>
            </div>

            {/* X Logo with Link */}
            <a 
              href="https://x.com/6Minutes_co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 bg-cyan-900/20 border border-cyan-500/20 rounded-lg px-3 sm:px-4 py-2 hover:border-cyan-400/40 transition-all duration-300">
                <FaTwitter className="text-lg sm:text-xl" />
                <span className="text-xs sm:text-sm font-medium">Follow us</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}