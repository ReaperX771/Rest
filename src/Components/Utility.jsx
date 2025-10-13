import { useEffect, useRef, useState } from "react";
import { FaLeaf, FaCar, FaHome, FaBolt, FaGraduationCap, FaUserTie, FaHandshake } from "react-icons/fa";

export default function Utility() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  const sectors = [
    {
      icon: FaLeaf,
      name: "Agriculture",
      description: "Seamless payments to farmers and cooperatives",
      color: "text-green-400",
      borderColor: "border-green-400/30",
    },
    {
      icon: FaCar,
      name: "Automobile",
      description: "Vehicle purchase and service transactions",
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
    },
    {
      icon: FaHome,
      name: "Real Estate",
      description: "Tokenized property payments and verification",
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
    },
    {
      icon: FaBolt,
      name: "Utilities",
      description: "Payment of bills (electricity, water, airtime, data, etc.)",
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
    },
    {
      icon: FaGraduationCap,
      name: "Education",
      description: "Tuition and scholarship disbursement",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: FaUserTie,
      name: "Governance",
      description: "Community and NGO-based fund accountability",
      color: "text-indigo-400",
      borderColor: "border-indigo-400/30",
    },
    {
      icon: FaHandshake,
      name: "Entrepreneurship",
      description: "Peer-to-peer business payments and collaborations",
      color: "text-pink-400",
      borderColor: "border-pink-400/30",
    }
  ];

  const toggleSector = (index) => {
    setSelectedSector(selectedSector === index ? null : index);
  };

  return (
    <section
      id="utility"
      ref={ref}
      className="relative py-12 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          🧩 Utility and Use Cases
        </h2>

        {/* Overview Section - EXACTLY from documentation */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-lg text-cyan-200 leading-relaxed">
              REST is designed to simplify and secure payments across key life sectors through the upcoming ConnectGlobal94 App 
              where REST will feature as one of its primary tokens for payments and cross-border transactions.
            </p>
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div
                  key={i}
                  className={`border rounded-xl backdrop-blur-sm transition-all duration-500 ${
                    selectedSector === i ? 'border-cyan-400/60 bg-cyan-500/5' : sector.borderColor
                  } ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visible ? `${i * 100}ms` : "0ms"
                  }}
                >
                  {/* Sector Header */}
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSector(i)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-cyan-500/20">
                        <Icon className={`text-xl ${sector.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className={`font-bold text-lg ${sector.color}`}>
                          {sector.name}
                        </h3>
                        <p className="text-cyan-200 text-sm">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-xl border ${sector.borderColor} backdrop-blur-sm transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } hover:scale-105 transform-gpu cursor-pointer`}
                style={{
                  transitionDelay: visible ? `${i * 100}ms` : "0ms"
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-2xl bg-cyan-500/20 mb-4">
                    <Icon className={`text-2xl ${sector.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${sector.color}`}>
                    {sector.name}
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Instructions */}
        <div className="block md:hidden text-center mt-8">
          <p className="text-cyan-300 text-sm">
            Tap on each sector to learn more
          </p>
        </div>
      </div>
    </section>
  );
}