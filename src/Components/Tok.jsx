import { useEffect, useRef, useState } from "react";
import { FaUsers, FaCoins, FaLock, FaCode } from "react-icons/fa";

export default function Tokenomics() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const data = [
    {
      label: "Community / Ecosystem",
      value: "97.9%",
      color: "text-cyan-400",
      icon: FaUsers,
      desc: "The backbone of REST ecosystem - community driven growth and development.",
    },
    {
      label: "Liquidity",
      value: "Permanently Locked",
      color: "text-blue-400",
      icon: FaCoins,
      desc: "Liquidity sealed forever ensuring trust and long-term stability.",
    },
    {
      label: "Dev Wallet",
      value: "2.81%",
      color: "text-purple-400",
      icon: FaLock,
      desc: "Acquired with $200 for development, partnerships, and ecosystem expansion.",
    },
    {
      label: "Governance",
      value: "Community Driven",
      color: "text-pink-400",
      icon: FaCode,
      desc: "All major growth decisions voted by holders through community governance.",
    },
  ];

  return (
    <section
      id="tokenomics"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          🔐 Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`p-6 rounded-xl border border-cyan-500/30 backdrop-blur-sm transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:border-cyan-400/60 hover:scale-105 transform-gpu cursor-pointer`}
                style={{
                  transitionDelay: visible ? `${i * 150}ms` : "0ms"
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/20">
                    <Icon className="text-cyan-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-cyan-200">{item.label}</h3>
                    <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
                  </div>
                </div>
                <p className="text-cyan-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Simple metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 rounded-lg border border-cyan-500/30">
            <div className="text-cyan-400 font-bold text-lg">0% Tax</div>
            <div className="text-cyan-300 text-sm">0% buy / 0% sell</div>
          </div>
          <div className="text-center p-4 rounded-lg border border-blue-500/30">
            <div className="text-blue-400 font-bold text-lg">500M Supply</div>
            <div className="text-blue-300 text-sm">Total Tokens</div>
          </div>
          <div className="text-center p-4 rounded-lg border border-purple-500/30">
            <div className="text-purple-400 font-bold text-lg">Fair Launch</div>
            <div className="text-purple-300 text-sm">No pre-sale</div>
          </div>
          <div className="text-center p-4 rounded-lg border border-pink-500/30">
            <div className="text-pink-400 font-bold text-lg">Solana</div>
            <div className="text-pink-300 text-sm">SPL Standard</div>
          </div>
        </div>

        {/* Additional Tokenomics Info */}
        <div className="mt-12 text-center">
          <div className="border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Transparency & Security</h3>
            <p className="text-cyan-200">
              Contract Address Renounced • Full audit and public wallet disclosures before official app integration • 
              Website Launch October 7th, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}