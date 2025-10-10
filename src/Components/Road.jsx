import { useEffect, useRef, useState } from "react";
import { FaTruckMonster } from "react-icons/fa";

export default function Road() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [truckPosition, setTruckPosition] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!visible) return;
    
    const interval = setInterval(() => {
      setTruckPosition(prev => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, [visible]);

  const phases = [
    {
      title: "Phase 1 — Cat Nap",
      text: "Token launch, early RESTers onboarding, and brand awakening.",
    },
    {
      title: "Phase 2 — Deep Sleep", 
      text: "NFT collection drop, exchange listings, and influencer push.",
    },
    {
      title: "Phase 3 — Dreamland",
      text: "REST staking and RESTverse beta rollout for early users.",
    },
    {
      title: "Phase 4 — Eternal Rest",
      text: "Global partnerships, cross-chain expansion, and RESTverse 2.0.",
    },
  ];

  return (
    <section
      id="roadmap"
      ref={ref}
      className="relative py-16 px-4 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-cyan-400">
        Roadmap
      </h2>

      {/* Simple Road Line */}
      <div className="relative max-w-4xl mx-auto mb-12">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2"></div>
        
        {/* Moving Truck */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 z-10"
          style={{
            left: `${truckPosition}%`,
            transition: 'left 0.1s linear'
          }}
        >
          <FaTruckMonster className="text-cyan-400 text-4xl" />
        </div>

        {/* Phase Dots */}
        <div className="relative flex justify-between">
          {phases.map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-white"
            />
          ))}
        </div>
      </div>

      {/* Simple Phase Boxes */}
      <div className="max-w-4xl mx-auto">
        {phases.map((phase, i) => (
          <div
            key={i}
            className={`flex items-start gap-6 mb-8 p-6 rounded-xl bg-white/5 border border-cyan-500/30 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{
              transitionDelay: visible ? `${i * 100}ms` : "0ms"
            }}
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              {i + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {phase.title}
              </h3>
              <p className="text-gray-300">{phase.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}