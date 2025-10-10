import { useEffect, useRef, useState } from "react";
import { FaTruckMonster } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function Road() {
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

  const phases = [
    {
      title: "Phase 1 — Cat Nap",
      text: "Token launch, early RESTers onboarding, and brand awakening.",
      side: "left",
    },
    {
      title: "Phase 2 — Deep Sleep",
      text: "NFT collection drop, exchange listings, and influencer push.",
      side: "right",
    },
    {
      title: "Phase 3 — Dreamland",
      text: "REST staking and RESTverse beta rollout for early users.",
      side: "left",
    },
    {
      title: "Phase 4 — Eternal Rest",
      text: "Global partnerships, cross-chain expansion, and RESTverse 2.0.",
      side: "right",
    },
  ];

  return (
    <section
      id="roadmap"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 text-white overflow-hidden"
    >
      <h2 className="text-4xl sm:text-5xl  font-extrabold text-center mb-30 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Roadmap
      </h2>

      {/* 🔹 Road with Truck Driving Directly On It */}
      <div className="relative w-full mb-24">
        {/* Road Base */}
        <div className="absolute top-1/2 left-0 right-0 h-[6px] bg-gray-900 rounded-full overflow-hidden">
          <div className="w-full h-full bg-[length:60px_6px] bg-repeat-x bg-[linear-gradient(to_right,transparent_70%,#38bdf8_70%)] animate-road"></div>
        </div>

        {/* Monster Truck driving on the road */}
        <div className="absolute top-[calc(50%-3.75rem)] left-0 w-full z-20">
          <Marquee speed={100} direction="right" gradient={false}>
            <FaTruckMonster className="text-cyan-400 text-7xl mx-8 " />
          </Marquee>
        </div>
      </div>

      {/* 🔹 Roadmap Phases */}
      <div className="relative z-10 mt-40">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`flex items-center justify-${
              p.side === "left" ? "start" : "end"
            } mb-24`}
          >
            <div
              className={`w-full sm:w-1/2 p-6 ${
                p.side === "left" ? "text-right pr-10" : "text-left pl-10"
              } transition-all duration-[1200ms] ease-out ${
                visible
                  ? "opacity-100 translate-x-0"
                  : p.side === "left"
                  ? "-translate-x-16 opacity-0"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {p.title}
              </h3>
              <p className="text-gray-300 mt-2">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Road Animation */}
      <style jsx>{`
        @keyframes road {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 60px 0;
          }
        }
        .animate-road {
          animation: road 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
