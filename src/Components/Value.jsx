import { useEffect, useRef, useState } from "react";
import { FaRocket, FaShieldAlt, FaGlobe, FaLock } from "react-icons/fa";

export default function Value() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const values = [
    {
      icon: FaRocket,
      title: "0% Fees, High Speed",
      description: "Leveraging Solana's fast and cost-efficient transactions",
      fullDescription: "Experience lightning-fast transactions with zero fees. Solana's high-throughput blockchain ensures instant settlements perfect for everyday payments across Africa.",
      color: "text-green-400",
      borderColor: "border-green-400/30",
      gradient: "from-green-500 to-emerald-500",
      stats: "50,000+ TPS"
    },
    {
      icon: FaShieldAlt,
      title: "True Ownership",
      description: "No central authority - the community decides",
      fullDescription: "Take control of your financial future. REST is governed by its community, ensuring democratic decision-making and true decentralization for all users.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      gradient: "from-blue-500 to-cyan-500",
      stats: "Community Driven"
    },
    {
      icon: FaGlobe,
      title: "Real-world Utility",
      description: "REST is functional, scalable, and adoption ready",
      fullDescription: "Built for real-world use cases across multiple sectors including agriculture, education, and utilities. REST is ready for mass adoption today.",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      gradient: "from-purple-500 to-violet-500",
      stats: "7+ Sectors"
    },
    {
      icon: FaLock,
      title: "Locked Trust",
      description: "Liquidity and contract sealed for transparency and longevity",
      fullDescription: "Sleep easy knowing REST's liquidity is permanently locked and contracts are renounced. Complete transparency ensures long-term project sustainability.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      gradient: "from-cyan-500 to-sky-500",
      stats: "100% Locked"
    }
  ];

  const toggleValue = (index) => {
    setActiveValue(activeValue === index ? null : index);
  };

  return (
    <section
      id="value"
      ref={ref}
      className="relative py-12 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          💡 Value Proposition
        </h2>

        {/* Overview */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            REST delivers tangible benefits that make everyday payments faster, cheaper, and more accessible 
            for millions across Africa and beyond.
          </p>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className={`border rounded-xl backdrop-blur-sm transition-all duration-500 ${
                    activeValue === i ? 'border-cyan-400/60 bg-cyan-500/5' : value.borderColor
                  } ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visible ? `${i * 100}ms` : "0ms"
                  }}
                >
                  {/* Value Header */}
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleValue(i)}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-3 rounded-lg bg-${value.gradient.split(' ')[1]}/20`}>
                        <Icon className={`text-xl ${value.color}`} />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className={`font-bold text-lg ${value.color}`}>
                          {value.title}
                        </h3>
                        <p className="text-cyan-200 text-sm">
                          {value.description}
                        </p>
                        <div className="mt-2">
                          <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                            {value.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${
                      activeValue === i ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {activeValue === i && (
                    <div className="px-4 pb-4 border-t border-cyan-500/20 pt-4">
                      <p className="text-cyan-200 text-sm leading-relaxed">
                        {value.fullDescription}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-xl border ${value.borderColor} backdrop-blur-sm transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:scale-105 transform-gpu cursor-pointer group`}
                style={{
                  transitionDelay: visible ? `${i * 150}ms` : "0ms"
                }}
                onMouseEnter={() => setActiveValue(i)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl bg-${value.gradient.split(' ')[1]}/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon className={`text-2xl ${value.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-xl font-bold ${value.color}`}>
                        {value.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                        {value.stats}
                      </span>
                    </div>
                    <p className="text-cyan-300 text-sm mb-3">
                      {value.description}
                    </p>
                    {(activeValue === i || window.innerWidth < 768) && (
                      <div className="mt-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                        <p className="text-cyan-200 text-sm leading-relaxed">
                          {value.fullDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Instructions */}
        <div className="block md:hidden text-center mt-8">
          <p className="text-cyan-300 text-sm mb-4">
            Tap on each value to learn more
          </p>
        </div>

        {/* Additional Benefits */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center p-4 border border-green-500/30 rounded-xl">
            <div className="text-green-400 font-bold text-lg">500M</div>
            <div className="text-green-300 text-sm">Total Supply</div>
          </div>
          <div className="text-center p-4 border border-blue-500/30 rounded-xl">
            <div className="text-blue-400 font-bold text-lg">0%</div>
            <div className="text-blue-300 text-sm">Buy/Sell Tax</div>
          </div>
          <div className="text-center p-4 border border-purple-500/30 rounded-xl">
            <div className="text-purple-400 font-bold text-lg">97.9%</div>
            <div className="text-purple-300 text-sm">Community Owned</div>
          </div>
          <div className="text-center p-4 border border-cyan-500/30 rounded-xl">
            <div className="text-cyan-400 font-bold text-lg">Solana</div>
            <div className="text-cyan-300 text-sm">Blockchain</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-cyan-200 text-lg mb-6">
            Ready to experience the future of payments?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-sm hover:scale-105 transition-transform">
              Get Started with REST
            </button>
            <button className="px-6 py-3 border border-cyan-400 text-cyan-300 rounded-xl font-bold text-sm hover:bg-cyan-400/10 transition-all">
              Read Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}