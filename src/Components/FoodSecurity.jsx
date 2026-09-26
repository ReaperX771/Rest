// src/components/FoodSecurity.jsx
import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaSeedling,
  FaCoins,
  FaLink,
  FaHandHoldingHeart,
  FaTractor,
  FaWarehouse,
  FaStore,
  FaHandsHelping,
  FaTelegramPlane,
} from "react-icons/fa";

export default function FoodSecurity() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const journey = [
    {
      icon: FaSeedling,
      title: "Farmers Grow",
      description: "Smallholder farmers and cooperatives list their harvest.",
    },
    {
      icon: FaCoins,
      title: "Paid Instantly in REST",
      description: "Buyers settle directly on Solana — 0% tax, no middlemen.",
    },
    {
      icon: FaLink,
      title: "Traced On-chain",
      description: "Every payment is transparent and verifiable from farm to market.",
    },
    {
      icon: FaHandHoldingHeart,
      title: "Families Are Fed",
      description: "More value reaches communities, keeping food affordable and available.",
    },
  ];

  const pillars = [
    {
      icon: FaTractor,
      title: "Direct Farmer Payments",
      description: "Fast, low-cost payouts straight to farmers' wallets — so growers keep more of what they earn.",
      color: "text-green-400",
      borderColor: "border-green-400/30",
    },
    {
      icon: FaStore,
      title: "Transparent Supply Chains",
      description: "Open, on-chain records from harvest to market reduce waste, fraud and hidden costs.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: FaWarehouse,
      title: "Community Food Reserves",
      description: "Community-governed funds that support local storage and relief when harvests fall short.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
    },
    {
      icon: FaHandsHelping,
      title: "Agri-Empowerment",
      description: "Unlocking access to inputs, tools and micro-financing for the next generation of farmers.",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
    },
  ];

  const stats = [
    { value: "0%", label: "Tax on every payment", color: "text-green-400" },
    { value: "Instant", label: "Settlement on Solana", color: "text-cyan-400" },
    { value: "100%", label: "On-chain transparency", color: "text-blue-400" },
    { value: "Community", label: "Governed reserves", color: "text-purple-400" },
  ];

  const reveal = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section
      id="food-security"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 text-white overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-10 -left-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className={`text-center transition-all duration-700 ${reveal}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-green-300">
            <FaSeedling />
            Real-world impact
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            🌾 Food Security
          </h2>
          <p className="mt-6 text-base sm:text-lg text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Food is the most everyday payment of all. REST connects farmers, markets and families on one transparent
            payment rail — so value flows to the people who grow food and the communities who need it most.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Farm-to-table journey */}
          <div className={`lg:col-span-2 rounded-2xl border border-green-500/30 bg-gradient-to-b from-green-500/5 to-transparent p-6 sm:p-8 backdrop-blur-sm transition-all duration-700 delay-200 ${reveal}`}>
            <h3 className="text-xl font-bold text-green-400">Farm to Table, On-chain</h3>
            <p className="mt-1 text-sm text-cyan-300">How REST moves value through the food chain</p>

            <ol className="relative mt-8 space-y-8">
              <span className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-green-400 via-cyan-400 to-purple-500" aria-hidden="true"></span>
              {journey.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className={`relative flex gap-4 transition-all duration-700 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                    style={{ transitionDelay: visible ? `${300 + i * 150}ms` : "0ms" }}
                  >
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-[#05081A] text-cyan-300 shadow-lg shadow-cyan-500/20">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Step {i + 1}</p>
                      <h4 className="font-bold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm text-cyan-200 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`group p-6 rounded-xl border ${pillar.borderColor} backdrop-blur-sm transition-all duration-700 ease-out ${reveal} hover:border-green-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 transform-gpu`}
                  style={{ transitionDelay: visible ? `${300 + i * 150}ms` : "0ms" }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-cyan-500/20 mb-4 ${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${pillar.color}`}>{pillar.title}</h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${reveal}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
              <div className={`font-black text-xl sm:text-2xl ${stat.color}`}>{stat.value}</div>
              <div className="text-cyan-300 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pledge + CTA */}
        <div className={`mt-12 rounded-2xl border border-green-500/30 p-6 sm:p-8 text-center backdrop-blur-sm transition-all duration-1000 delay-700 ${reveal}`}>
          <p className="text-lg sm:text-xl text-cyan-100 italic leading-relaxed max-w-3xl mx-auto">
            "No one should go hungry because payments are slow, expensive or out of reach. Every REST transaction
            helps build a fairer food system — one farmer, one market, one family at a time."
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <AnchorLink
              href="#utility"
              offset="100"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-bold text-white text-sm hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
            >
              Explore REST Utility
            </AnchorLink>
            <a
              href="https://t.me/RealRestToken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-300 rounded-xl font-bold text-sm hover:bg-cyan-400/10 transition-all"
            >
              <FaTelegramPlane />
              Join the Movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
