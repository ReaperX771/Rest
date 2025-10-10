import { useEffect, useRef, useState } from "react";
import { FaUsers, FaCoins, FaBullhorn, FaCode, FaChartPie } from "react-icons/fa";

export default function Tok() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const tokenData = [
    {
      label: "Community",
      value: "50%",
      percentage: 50,
      color: "from-cyan-400 to-blue-500",
      icon: FaUsers,
      desc: "Power to the RESTers — the backbone of our ecosystem and future growth.",
      features: ["Airdrops", "Community Rewards", "Governance Power"],
      delay: "0ms"
    },
    {
      label: "Liquidity",
      value: "25%",
      percentage: 25,
      color: "from-blue-500 to-purple-500",
      icon: FaCoins,
      desc: "Solid liquidity ensures smooth trading and long-term confidence for all holders.",
      features: ["DEX Liquidity", "Market Stability", "Sustainable Trading"],
      delay: "200ms"
    },
    {
      label: "Marketing",
      value: "15%",
      percentage: 15,
      color: "from-purple-500 to-pink-500",
      icon: FaBullhorn,
      desc: "Meme campaigns, strategic collabs, and influencer partnerships for viral growth.",
      features: ["Influencer Marketing", "Social Campaigns", "Partnerships"],
      delay: "400ms"
    },
    {
      label: "Development",
      value: "10%",
      percentage: 10,
      color: "from-pink-500 to-rose-500",
      icon: FaCode,
      desc: "Building RESTverse tools, staking systems, and future ecosystem expansion.",
      features: ["Product Development", "Security Audits", "Infrastructure"],
      delay: "600ms"
    },
  ];

  const totalSupply = "1B"; // Example total supply

  return (
    <section
      id="tokenomics"
      ref={ref}
      className="relative py-24 px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          >
            <FaChartPie className="text-cyan-400/10 text-lg" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Strategic allocation designed for sustainable growth and community empowerment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Pie Chart Visualization */}
          <div className="relative">
            {/* Main Pie Chart */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 rounded-full bg-gray-800/50 border-2 border-white/10"></div>
              
              {/* Animated Pie Slices */}
              {tokenData.map((item, index) => {
                const startAngle = tokenData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0);
                const rotation = (startAngle / 100) * 360;
                
                return (
                  <div
                    key={item.label}
                    className={`absolute inset-0 rounded-full transition-all duration-1000 ease-out ${
                      visible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `conic-gradient(
                        transparent 0deg ${rotation}deg,
                        transparent ${rotation}deg ${rotation + (item.percentage / 100) * 360}deg,
                        transparent ${rotation + (item.percentage / 100) * 360}deg 360deg
                      )`
                    }}
                  >
                    <div
                      className={`absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-r ${item.color} rounded-full transition-transform duration-500 ${
                        activeIndex === index ? "scale-110" : "scale-100"
                      }`}
                      style={{
                        transform: `translate(-50%, -50%) rotate(${rotation}deg) skew(${(item.percentage / 100) * 360}deg)`,
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos((rotation * Math.PI) / 180) * 50}% ${50 + Math.sin((rotation * Math.PI) / 180) * 50}%)`
                      }}
                    />
                  </div>
                );
              })}

              {/* Center Content */}
              <div className="absolute inset-8 rounded-full bg-gray-900/90 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-cyan-400">{totalSupply}</span>
                <span className="text-gray-400 text-sm">Total Supply</span>
                <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full my-2"></div>
                <span className="text-lg font-semibold text-gray-200">
                  {tokenData[activeIndex].label}
                </span>
                <span className="text-cyan-400 font-bold">{tokenData[activeIndex].value}</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {tokenData.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "bg-white/10 border-cyan-400/50 scale-105"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                  <span className="text-sm font-medium text-gray-200">{item.label}</span>
                  <span className="text-xs text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Detailed Cards */}
          <div className="space-y-6">
            {tokenData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className={`p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-700 transform-gpu cursor-pointer ${
                    activeIndex === index
                      ? "bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border-cyan-400/50 shadow-2xl shadow-cyan-500/25 scale-105"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-102"
                  } ${
                    visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{
                    transitionDelay: visible ? item.delay : "0ms"
                  }}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-200">{item.label}</h3>
                        <span className={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.value}
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: visible ? `${item.percentage}%` : "0%"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{item.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyan-400 mb-2">0%</div>
            <div className="text-gray-300 font-semibold">Tax</div>
            <div className="text-gray-400 text-sm mt-1">No buy/sell tax</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-400 mb-2">LP Locked</div>
            <div className="text-gray-300 font-semibold">Security</div>
            <div className="text-gray-400 text-sm mt-1">Liquidity permanently locked</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-2xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300 font-semibold">Transparent</div>
            <div className="text-gray-400 text-sm mt-1">Fully verifiable allocation</div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}