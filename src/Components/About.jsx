import { useEffect, useRef, useState } from "react";
import about from '../assets/images/about.jpg'

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 text-white overflow-hidden"
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-12 transition-all duration-[1200ms] ease-out ${
          visible ? "opacity-100 translate-x-0" : "-translate-x-12 opacity-0"
        }`}
      >
        {/* Text */}
        <div className="sm:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About REST
          </h2>
          <p className="text-gray-300 leading-relaxed">
            REST isn’t just another meme token — it’s a movement of calm in the
            chaos. In a world where everything’s racing, REST reminds the
            blockchain community to breathe, vibe, and earn while doing it.
          </p>
          <p className="text-gray-400">
            Holders are part of the RESTverse — a digital sanctuary powered by
            humor, creativity, and shared chill energy. Every holder plays a
            role in spreading peace across the crypto ecosystem.
          </p>
          <p className="text-cyan-400 font-semibold">
            Take a break. Stack some REST.
          </p>
        </div>

        {/* Image / Visual */}
        <div className="sm:w-1/2 flex justify-center">
          <img
            src={about}
            alt="Relaxing Illustration"
            className="w-100 h-60 sm:w-100 drop-shadow-[0_0_20px_#38bdf8aa] transition-all duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
