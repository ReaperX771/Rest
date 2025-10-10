import { useEffect, useRef, useState } from "react";
import { FaTruckMonster, FaCheckCircle, FaPlayCircle, FaClock } from "react-icons/fa";

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
      status: "completed", // ✅ Done
      icon: FaCheckCircle
    },
    {
      title: "Phase 2 — Deep Sleep", 
      text: "NFT collection drop, exchange listings, and influencer push.",
      status: "live", // 🟢 Currently happening
      icon: FaPlayCircle
    },
    {
      title: "Phase 3 — Dreamland",
      text: "REST staking and RESTverse beta rollout for early users.",
      status: "coming", // ⏳ Future
      icon: FaClock
    },
    {
      title: "Phase 4 — Eternal Rest",
      text: "Global partnerships, cross-chain expansion, and RESTverse 2.0.",
      status: "coming", // ⏳ Future
      icon: FaClock
    },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500 border-green-400';
      case 'live': return 'bg-cyan-500 border-cyan-400 animate-pulse';
      case 'coming': return 'bg-gray-600 border-gray-500';
      default: return 'bg-gray-600 border-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <FaCheckCircle className="text-white text-xs" />;
      case 'live': return <FaPlayCircle className="text-white text-xs" />;
      case 'coming': return <FaClock className="text-white text-xs" />;
      default: return <FaClock className="text-white text-xs" />;
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Completed';
      case 'live': return 'Live Now';
      case 'coming': return 'Coming Soon';
      default: return 'Coming Soon';
    }
  };

  return (
    <section
      id="roadmap"
      ref={ref}
      className="relative py-16 px-4 text-white"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
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

        {/* Phase Dots with Status */}
        <div className="relative flex justify-between">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 ${getStatusColor(phase.status)}`}
            />
          ))}
        </div>
      </div>

      {/* Phase Boxes with Status */}
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
            <div className="flex-shrink-0 relative">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${getStatusColor(phase.status)}`}>
                {i + 1}
              </div>
              {/* Status Badge */}
              <div className={`absolute -top-2 -right-2 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ${getStatusColor(phase.status)}`}>
                {getStatusIcon(phase.status)}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {phase.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  phase.status === 'live' ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {getStatusText(phase.status)}
                </span>
              </div>
              <p className="text-gray-300">{phase.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}