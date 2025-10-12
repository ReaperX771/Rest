// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import { FaLeaf, FaLock, FaChartLine, FaUsers, FaRocket, FaRegClock } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const features = [
    {
      icon: <FaLeaf />,
      title: "Stress-Free Trading",
      description: "Experience a calmer approach to crypto trading with our unique reward system."
    },
    {
      icon: <FaLock />,
      title: "Enhanced Security",
      description: "Built with advanced security measures to protect your investments and peace of mind."
    },
    {
      icon: <FaChartLine />,
      title: "Sustainable Growth",
      description: "Focus on long-term value creation rather than short-term volatility."
    },
    {
      icon: <FaUsers />,
      title: "Community First",
      description: "A supportive community that grows and prospers together."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Pioneering new ways to make crypto trading more accessible and enjoyable."
    },
    {
      icon: <FaRegClock />,
      title: "Time-Tested",
      description: "Proven track record of stability and consistent performance."
    }
  ];

  const tokenomics = {
    totalSupply: "1,000,000,000",
    initialBurn: "50%",
    liquidityLock: "2 Years",
    tradingFee: "2%"
  };

  useEffect(() => {
    const section = ref.current;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 text-white overflow-hidden"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-[1200ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* Main About Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About REST
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            <span className="text-cyan-400 font-semibold">REST</span> is revolutionizing the crypto space 
            by introducing a unique approach to trading. We reward patience and strategic thinking, 
            making crypto trading more accessible and less stressful for everyone.
          </p>
          <p className="mt-4 sm:mt-6 text-gray-400 text-lg sm:text-xl font-medium italic">
            "Because even markets need a nap."
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="mb-16 sm:mb-20 text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                To create a more balanced and sustainable crypto trading environment where 
                calm, strategic decisions are rewarded over impulsive actions.
              </p>
            </div>
            <div className="p-6 sm:p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                A crypto ecosystem where traders can thrive without the constant stress 
                and FOMO that often accompanies digital asset trading.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 sm:mb-20 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose REST?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 
                  transition-all duration-[800ms] ease-out transform hover:border-gray-600 group hover:scale-[1.02]
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-2xl sm:text-3xl text-cyan-400 mb-4 transform transition-transform group-hover:scale-110 flex justify-center sm:justify-start">
                  {feature.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 text-center sm:text-left">{feature.title}</h4>
                <p className="text-gray-300 text-base sm:text-lg text-center sm:text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics Preview */}
       
      </div>
    </section>
  );
}