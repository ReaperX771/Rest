// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center h-screen px-6 overflow-hidden"
    >
      <div
        className={`transition-all duration-[1200ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          REST
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          The chillest meme token on the blockchain. Stake, sleep, and earn while you REST.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-400/50 text-cyan-300 px-6 py-3 rounded-full transition-all"
          >
            Learn More
          </a>
          <a
            href="#community"
            className="bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/50 text-purple-300 px-6 py-3 rounded-full transition-all"
          >
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}
