import { useEffect, useRef, useState } from "react";
import { FaTruckMonster, FaCheckCircle, FaPlayCircle, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Roadmap() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [truckPosition, setTruckPosition] = useState(0);
  const [expandedPhase, setExpandedPhase] = useState(null);

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

  const togglePhase = (index) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  const phases = [
    {
      title: "Phase 1 — Foundation",
      shortTitle: "Foundation",
      period: "Q4 2025",
      items: [
        "Launch of REST Token on Solana",
        "Contract locked and liquidity sealed forever",
        "Official Website Launch (Nov 7, 2025)",
        "Fair Launch with no pre-sale",
        "Community establishment",
        "Listing on DEX (Raydium / Jupiter)"
      ],
      status: "completed",
      icon: FaCheckCircle
    },
    {
      title: "Phase 2 — Ecosystem",
      shortTitle: "Ecosystem",
      period: "Q1–Q2 2026",
      items: [
        "Integration with ConnectGlobal94 App",
        "REST payment rails for key sectors",
        "REST Merchant API and Wallet System",
        "Listing on Tier 2 CEX",
        "Community Governance Portal",
        "Audit Publication"
      ],
      status: "live",
      icon: FaPlayCircle
    },
    {
      title: "Phase 3 — Expansion",
      shortTitle: "Expansion",
      period: "Q3–Q4 2026",
      items: [
        "Real Estate & Education integration",
        "Flight Payment Systems",
        "100+ Merchants across Africa",
        "REST Rewards and Loyalty System",
        "REST Staking and Yield Mechanisms"
      ],
      status: "coming",
      icon: FaClock
    },
    {
      title: "Phase 4 — Global Integration",
      shortTitle: "Global",
      period: "2027+",
      items: [
        "REST DAO Governance activation",
        "Cross-border payment gateways",
        "E-governance integration",
        "Entrepreneurial platform launch",
        "Continuous app upgrades",
        "Industry benchmark establishment"
      ],
      status: "coming",
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
      className="relative py-12 px-4 sm:px-6 text-white"
    >
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        🚙 Roadmap
      </h2>

      {/* Mobile: Horizontal Timeline with Truck */}
      <div className="block md:hidden">
        {/* Horizontal Road Line */}
        <div className={`relative max-w-4xl mx-auto mb-8 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2"></div>
          
          {/* Moving Truck */}
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 z-10"
            style={{
              left: `${truckPosition}%`,
              transition: 'left 0.1s linear'
            }}
          >
            <FaTruckMonster className="text-cyan-400 text-3xl" />
          </div>

          {/* Phase Dots */}
          <div className="relative flex justify-between">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border-2 ${getStatusColor(phase.status)} transition-all duration-1000 ${
                  visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  transitionDelay: visible ? `${i * 200}ms` : '0ms'
                }}
              />
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="max-w-4xl mx-auto">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`mb-6 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-sm transition-all duration-700 ${
                expandedPhase === i ? 'bg-cyan-500/5' : ''
              } ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: visible ? `${i * 300}ms` : "0ms"
              }}
            >
              {/* Header - Always Visible */}
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => togglePhase(i)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-cyan-300">
                      Phase {i + 1}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      phase.status === 'live' ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {getStatusText(phase.status)}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-blue-400">
                    {phase.period}
                  </div>
                  <div className="text-sm text-cyan-200 mt-1">
                    {phase.shortTitle}
                  </div>
                </div>
                <div className="text-cyan-400">
                  {expandedPhase === i ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {/* Expandable Content */}
              {expandedPhase === i && (
                <div className="mt-4 pt-4 border-t border-cyan-500/20">
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm text-cyan-200">
                        <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal Timeline */}
      <div className="hidden md:block">
        {/* Simple Road Line */}
        <div className={`relative max-w-4xl mx-auto mb-12 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
                className={`w-4 h-4 rounded-full border-2 ${getStatusColor(phase.status)} transition-all duration-1000 ${
                  visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  transitionDelay: visible ? `${i * 200}ms` : '0ms'
                }}
              />
            ))}
          </div>
        </div>

        {/* Phase Boxes */}
        <div className="max-w-6xl mx-auto">
          {phases.map((phase, i) => (
            <div
              key={i}
              className={`flex items-start gap-6 mb-8 p-6 rounded-xl border border-cyan-500/30 backdrop-blur-sm transition-all duration-700 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: visible ? `${i * 300}ms` : "0ms"
              }}
            >
              <div className="flex-shrink-0 relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${getStatusColor(phase.status)}`}>
                  {i + 1}
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${getStatusColor(phase.status)}`}>
                  {getStatusIcon(phase.status)}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {phase.title}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    phase.status === 'live' ? 'bg-cyan-500/20 text-cyan-400 animate-pulse' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {getStatusText(phase.status)}
                  </span>
                </div>
                <div className="text-lg font-semibold text-blue-400 mb-4">
                  {phase.period}
                </div>
                <ul className="grid lg:grid-cols-2 gap-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-cyan-200">
                      <span className="text-cyan-400 mt-1">🔸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className={`block md:hidden text-center mt-8 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: visible ? '1200ms' : '0ms'
      }}>
        <p className="text-cyan-300 text-sm mb-4">
          Tap on each phase to see details
        </p>
      </div>
    </section>
  );
}