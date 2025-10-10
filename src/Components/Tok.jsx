import { useEffect, useRef, useState } from "react";
import { FaUsers, FaCoins, FaBullhorn, FaCode } from "react-icons/fa";

export default function Tok() {
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
      label: "Community",
      value: "50%",
      color: "text-cyan-400",
      icon: FaUsers,
      desc: "Power to the RESTers — the backbone of the ecosystem.",
    },
    {
      label: "Liquidity",
      value: "25%",
      color: "text-blue-400",
      icon: FaCoins,
      desc: "Solid liquidity ensures smooth trading and long-term confidence.",
    },
    {
      label: "Marketing",
      value: "15%",
      color: "text-purple-400",
      icon: FaBullhorn,
      desc: "Meme campaigns, collabs, and influencer pushes for viral growth.",
    },
    {
      label: "Development",
      value: "10%",
      color: "text-pink-400",
      icon: FaCode,
      desc: "Building RESTverse tools and staking systems for future expansion.",
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
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:bg-white/10 hover:scale-105 transform-gpu cursor-pointer`}
                style={{
                  transitionDelay: visible ? `${i * 150}ms` : "0ms"
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/20">
                    <Icon className="text-cyan-400 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-200">{item.label}</h3>
                    <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Simple metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-cyan-400 font-bold text-lg">0% Tax</div>
            <div className="text-gray-400 text-sm">No fees</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-blue-400 font-bold text-lg">LP Locked</div>
            <div className="text-gray-400 text-sm">Secure</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-purple-400 font-bold text-lg">1B Supply</div>
            <div className="text-gray-400 text-sm">Total</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <div className="text-pink-400 font-bold text-lg">Sol</div>
            <div className="text-gray-400 text-sm">Network</div>
          </div>
        </div>
      </div>
    </section>
  );
}