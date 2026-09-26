// src/components/Partners.jsx
import { useEffect, useRef, useState } from "react";
import { FaUsers, FaHandsHelping, FaBolt, FaMobileAlt, FaExchangeAlt, FaBookOpen } from "react-icons/fa";
import partner from "../assets/images/partner.jpeg";

export default function Partners() {
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

  const pillars = [
    {
      icon: FaUsers,
      title: "Connecting People",
      description: "Linking holders, merchants and communities across borders on one payment rail.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: FaHandsHelping,
      title: "Empowering Communities",
      description: "Putting real utility in the hands of everyday people across Africa and beyond.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
    },
    {
      icon: FaBolt,
      title: "Inspiring Impact",
      description: "Turning every REST transaction into measurable, real-world change.",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
    },
  ];

  const unlocks = [
   
  ];

  const reveal = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section
      id="partners"
      ref={ref}
      className="relative py-20 sm:py-28 px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] sm:w-[40rem] sm:h-[40rem] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Partner Emblem Card */}
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-cyan-400 via-amber-400 to-purple-500 opacity-30 blur-2xl animate-pulse"></div>
            <div className="relative w-72 sm:w-80 md:w-96 overflow-hidden rounded-3xl border border-amber-400/30 bg-black shadow-2xl shadow-amber-500/20">
              <img
                src={partner}
                alt="Connect The Dot Global — Connecting people. Empowering communities. Inspiring impact."
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Eyebrow */}
        <p className={`mt-12 text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400/80 transition-all duration-700 delay-200 ${reveal}`}>
          Infrastructure &amp; Partnerships
        </p>

        {/* Headline */}
        <h2 className={`mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight transition-all duration-700 delay-300 ${reveal}`}>
          Building the connections
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            for a global brand.
          </span>
        </h2>

        {/* Body */}
        <p className={`mt-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${reveal}`}>
          Taking REST around the world requires infrastructure. We have formed a strategic relationship with{" "}
          <span className="font-semibold text-white">Connect The Dot Global</span> — an organisation connecting people,
          empowering communities, and inspiring real-world impact. Together, we're building the network to expand the
          REST ecosystem globally.
        </p>

        {/* Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-xl border ${pillar.borderColor} backdrop-blur-sm transition-all duration-700 ease-out ${reveal} hover:border-cyan-400/60 hover:-translate-y-1 transform-gpu`}
                style={{ transitionDelay: visible ? `${500 + i * 150}ms` : "0ms" }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-cyan-500/20 mb-4 ${pillar.color}`}>
                  <Icon className="text-xl" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${pillar.color}`}>{pillar.title}</h3>
                <p className="text-cyan-300 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* What the partnership unlocks */}
        <div className={`mt-10 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-1000 ${reveal}`}>
          {unlocks.map((item) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 px-4 py-2 text-sm text-cyan-200"
              >
                <Icon className="text-cyan-400" />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
