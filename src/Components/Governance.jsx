import { useEffect, useRef, useState } from "react";
import { FaUsers, FaChartLine, FaFileAlt, FaHandshake } from "react-icons/fa";

export default function Governance() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const governanceFeatures = [
    {
      icon: FaUsers,
      title: "Community Treasury",
      description: "Managed through multi-sig wallets for transparency",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: FaChartLine,
      title: "Phase-by-Phase Development",
      description: "Strategic, intentional growth at every step",
      color: "text-green-400",
      borderColor: "border-green-400/30",
    },
    {
      icon: FaFileAlt,
      title: "Periodic Updates",
      description: "Monthly reports and disclosures to the community",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
    },
    {
      icon: FaHandshake,
      title: "Sustainability Anchor",
      description: "Each partnership strengthens the REST and ConnectGlobal94 ecosystem",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
    }
  ];

  return (
    <section
      id="governance"
      ref={ref}
      className="relative py-12 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          🛠 Governance and Sustainability
        </h2>

        {/* Overview Section */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-lg text-cyan-200 leading-relaxed">
              REST is built on a foundation of community-driven governance and sustainable development practices, 
              ensuring long-term growth and alignment with the needs of our global community.
            </p>
          </div>
        </div>

        {/* Mobile: Simple Grid */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {governanceFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className={`border rounded-xl backdrop-blur-sm transition-all duration-500 ${feature.borderColor} ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visible ? `${i * 100}ms` : "0ms"
                  }}
                >
                  <div className="p-4 flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-cyan-500/20">
                      <Icon className={`text-xl ${feature.color}`} />
                    </div>
                    <div className="text-left flex-1">
                      <h3 className={`font-bold text-lg ${feature.color}`}>
                        {feature.title}
                      </h3>
                      <p className="text-cyan-200 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
          {governanceFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-xl border ${feature.borderColor} backdrop-blur-sm transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 100}ms` : "0ms"
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-cyan-500/20">
                    <Icon className={`text-2xl ${feature.color}`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`text-xl font-bold mb-2 ${feature.color}`}>
                      {feature.title}
                    </h3>
                    <p className="text-cyan-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Vision */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-4">💎 Community Vision</h3>
            <p className="text-cyan-200 text-lg leading-relaxed italic">
              "REST is not a pump and dump token. It is a purpose token, symbolizing Africa's blockchain awakening 
              built on trust, transparency, and utility. Every phase will be community guided, ensuring REST grows 
              organically, sustainably, and responsibly."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}