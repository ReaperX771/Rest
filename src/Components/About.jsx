import { FaShieldAlt, FaEye, FaUnlock, FaUsers } from "react-icons/fa";

export default function About() {
  const principles = [
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "REST is built on transparent values that prioritize honesty over hype.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30"
    },
    {
      icon: FaEye,
      title: "Transparency",
      description: "From contract to liquidity, every component is open and verifiable.",
      color: "text-blue-400",
      borderColor: "border-blue-400/30"
    },
    {
      icon: FaUnlock,
      title: "Freedom",
      description: "Empowering users, communities, and merchants to transact without barriers or middlemen.",
      color: "text-purple-400",
      borderColor: "border-purple-400/30"
    },
    {
      icon: FaUsers,
      title: "Community Governance",
      description: "The people decide the pace, growth, and direction of REST.",
      color: "text-pink-400",
      borderColor: "border-pink-400/30"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          ⚙️ Core Principles
        </h2>

        {/* Overview Section */}
        <div className="mb-16 text-center">
          <div className="border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">🌍 Overview</h3>
            <p className="text-lg text-cyan-200 leading-relaxed">
              REST is a utility-driven token built on the Solana blockchain, designed to power everyday payments through a trusted community-driven ecosystem CTDG. 
              It serves as the financial engine within CONNECT THE DOT GLOBAL - a visionary platform redefining blockchain utility in Africa and beyond, 
              connecting payments across Agriculture, Real Estate, Automobile, Utilities, Education, Governance, and Entrepreneurship.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className={`p-6 rounded-xl border ${principle.borderColor} backdrop-blur-sm`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl bg-cyan-500/20 mb-4 ${principle.color}`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${principle.color}`}>
                    {principle.title}
                  </h3>
                  <p className="text-cyan-300 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Notes */}
        <div className="mt-16 text-center">
          <div className="border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">📅 Final Notes</h3>
            <p className="text-lg text-purple-200 leading-relaxed italic">
              "REST is not a sprint: It is a marathon of vision, purpose, and innovation. 
              Every locked wallet, transparent process, and community vote builds the foundation for a decentralized economy 
              where trust and freedom meet real-world functionality."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}