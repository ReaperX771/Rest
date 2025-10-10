// src/components/About.jsx
import { useEffect, useRef, useState } from "react";

export default function About() {
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
      id="about"
      ref={ref}
      className="relative py-24 px-6 text-white overflow-hidden"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-[1200ms] ease-out ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          About REST
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          <span className="text-cyan-400 font-semibold">REST</span> is a meme token that rewards calm traders.
          Built to make crypto fun again — no stress, no FOMO, just REST.
        </p>
        <p className="mt-6 text-gray-400 text-center italic">
          “Because even markets need a nap.”
        </p>
      </div>
    </section>
  );
}
