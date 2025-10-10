// src/components/Tok.jsx
import { useEffect, useRef, useState } from "react";

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
      desc: "Power to the RESTers — the backbone of the ecosystem.",
      slide: "translate-x-16",
    },
    {
      label: "Liquidity",
      value: "25%",
      color: "text-blue-400",
      desc: "Solid liquidity ensures smooth trading and long-term confidence.",
      slide: "-translate-x-16",
    },
    {
      label: "Marketing",
      value: "15%",
      color: "text-purple-400",
      desc: "Meme campaigns, collabs, and influencer pushes for viral growth.",
      slide: "translate-x-16",
    },
    {
      label: "Development",
      value: "10%",
      color: "text-pink-400",
      desc: "Building RESTverse tools and staking systems for future expansion.",
      slide: "-translate-x-16",
    },
  ];

  return (
    <section
      id="tokenomics"
      ref={ref}
      className="relative py-24 px-6 text-center text-white overflow-hidden"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Tokenomics
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div
            key={item.label}
            className={`p-6 rounded-2xl bg-black/40 border border-blue-900/40 shadow-lg shadow-blue-950/30 transition-all duration-[1200ms] ease-out ${
              visible ? "opacity-100 translate-x-0" : `opacity-0 ${item.slide}`
            }`}
          >
            <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
            <p className="text-gray-200 font-semibold mt-2">{item.label}</p>
            <p className="text-gray-400 text-sm mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
