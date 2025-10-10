import { useEffect, useRef, useState } from "react";
import { FaTruckMonster, FaCheckCircle, FaClock, FaRocket, FaGlobe, FaStar } from "react-icons/fa";

export default function Road() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [truckPosition, setTruckPosition] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.1 }
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
      side: "left",
      icon: FaRocket,
      status: "completed",
      features: ["Token Launch", "Community Building", "Brand Identity"],
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Phase 2 — Deep Sleep",
      text: "NFT collection drop, exchange listings, and influencer push.",
      side: "right",
      icon: FaClock,
      status: "current",
      features: ["NFT Collection", "CEX Listings", "Influencer Marketing"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Phase 3 — Dreamland",
      text: "REST staking and RESTverse beta rollout for early users.",
      side: "left",
      icon: FaCheckCircle,
      status: "upcoming",
      features: ["Staking Platform", "RESTverse Beta", "Early Access"],
      color: "from-purple-400 to-indigo-600"
    },
    {
      title: "Phase 4 — Eternal Rest",
      text: "Global partnerships, cross-chain expansion, and RESTverse 2.0.",
      side: "right",
      icon: FaGlobe,
      status: "upcoming",
      features: ["Global Partnerships", "Cross-chain", "RESTverse 2.0"],
      color: "from-pink-500 to-rose-600"
    },
  ];

  const getTruckPosition = () => {
    const phaseWidth = 100 / phases.length;
    return (activePhase * phaseWidth) + (truckPosition * phaseWidth / 100);
  };

  return (
    <section
      id="roadmap"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <FaStar className="text-cyan-400/20 text-sm" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Roadmap to REST
        </h2>

        {/* 🔹 Enhanced Road with Single Animated Truck */}
        <div className="relative w-full h-48 mb-32">
          {/* Road Base */}
          <div className="absolute top-1/2 left-4 right-4 h-4 bg-gray-800 rounded-full overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-[length:80px_4px] bg-repeat-x bg-[linear-gradient(to_right,transparent_60%,#38bdf8_60%,#38bdf8_70%,transparent_70%)] animate-road"></div>
          </div>

          {/* Phase Markers */}
          <div className="absolute top-1/2 left-4 right-4 flex justify-between -translate-y-1/2">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`flex flex-col items-center cursor-pointer transition-all duration-500 ${
                  i <= activePhase ? "scale-110" : "scale-100"
                }`}
                onClick={() => setActivePhase(i)}
              >
                <div
                  className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                    i < activePhase
                      ? "bg-green-400 border-green-400 shadow-lg shadow-green-400/50"
                      : i === activePhase
                      ? "bg-cyan-400 border-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50"
                      : "bg-gray-600 border-gray-700"
                  }`}
                />
                <span className={`text-xs mt-2 font-semibold transition-all duration-500 ${
                  i <= activePhase ? "text-cyan-300 opacity-100" : "text-gray-500 opacity-70"
                }`}>
                  Phase {i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Single Animated Truck */}
          <div
            className="absolute top-1/2 -translate-y-12 z-30 transition-all duration-1000 ease-out"
            style={{
              left: `calc(${getTruckPosition()}% - 2rem)`,
            }}
          >
            <div className="relative">
              <FaTruckMonster 
                className="text-cyan-400 text-6xl drop-shadow-2xl transform hover:scale-110 transition-transform duration-300" 
              />
              {/* Exhaust */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-4 bg-orange-500 rounded-full blur-sm animate-pulse"></div>
              </div>
              {/* Headlights */}
              <div className="absolute -bottom-1 left-2 w-2 h-1 bg-yellow-300 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-1 right-2 w-2 h-1 bg-yellow-300 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>

          {/* Road Glow */}
          <div className="absolute top-1/2 left-4 right-4 h-8 bg-cyan-500/10 blur-xl rounded-full -translate-y-1/2"></div>
        </div>

        {/* 🔹 Enhanced Roadmap Phases */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div
                key={index}
                className={`group ${
                  phase.side === "left" ? "lg:pr-8" : "lg:pl-8"
                } ${index >= 2 ? "lg:mt-8" : ""}`}
              >
                <div
                  className={`relative p-8 rounded-3xl backdrop-blur-xl border-2 transition-all duration-700 transform-gpu ${
                    phase.status === "completed"
                      ? "bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-green-500/30"
                      : phase.status === "current"
                      ? "bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border-cyan-400/50 shadow-2xl shadow-cyan-500/25"
                      : "bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-purple-500/30"
                  } ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  } ${
                    index === activePhase 
                      ? "scale-105 ring-4 ring-cyan-500/30" 
                      : "scale-100 hover:scale-102"
                  } cursor-pointer`}
                  style={{
                    transitionDelay: visible ? `${index * 150}ms` : "0ms"
                  }}
                  onClick={() => setActivePhase(index)}
                  onMouseEnter={() => setActivePhase(index)}
                >
                  {/* Status Ribbon */}
                  <div className={`absolute -top-3 ${
                    phase.side === "left" ? "-left-3" : "-right-3"
                  } flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                    phase.status === "completed"
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/50"
                      : phase.status === "current"
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 shadow-lg shadow-cyan-400/50"
                      : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/50"
                  }`}>
                    <IconComponent className="text-sm" />
                    {phase.status === "current" ? "IN PROGRESS" : phase.status.toUpperCase()}
                  </div>

                  {/* Phase Number */}
                  <div className={`absolute -top-4 ${
                    phase.side === "left" ? "-right-4" : "-left-4"
                  } w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gray-800 border-2 border-cyan-400 text-cyan-300 shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                    {phase.text}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {phase.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          phase.status === "completed" ? "bg-green-400" :
                          phase.status === "current" ? "bg-cyan-400 animate-pulse" : "bg-purple-400"
                        }`}></div>
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Connecting Line for Desktop */}
                  <div className={`hidden lg:block absolute top-1/2 ${
                    phase.side === "left" ? "-right-8" : "-left-8"
                  } w-8 h-1 bg-cyan-400/50 transform -translate-y-1/2`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔹 Progress Indicator */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
          <span className="text-gray-300 text-lg font-semibold">Journey Progress</span>
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-cyan-400 text-lg font-bold min-w-12">
              {Math.round(((activePhase + 1) / phases.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Custom Animations */}
      <style jsx>{`
        @keyframes road {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 80px 0;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-road {
          animation: road 0.6s linear infinite;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}