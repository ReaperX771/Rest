// src/components/Community.jsx
import { useEffect, useRef, useState } from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Community() {
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

  const socials = [
    { 
      icon: <FaDiscord />, 
      label: "Discord", 
      color: "text-indigo-400",
      link: "https://discord.gg/HBdpy6YyG" // Replace with actual Discord link
    },
    { 
      icon: <FaTelegramPlane />, 
      label: "Telegram", 
      color: "text-cyan-400",
      link: "https://t.me/realtoken" // Replace with actual Telegram link
    },
    { 
      icon: <FaTwitter />, 
      label: "Twitter", 
      color: "text-blue-400",
      link: "https://x.com/RealRest01?t=ZoUPnikhC2Tnzpts8mh0rA&s=09" // Replace with actual Twitter link
    },
  ];

  return (
    <section
      id="community"
      ref={ref}
      className="relative py-24 px-6 text-center text-white overflow-hidden"
    >
      <div
        className={`max-w-4xl mx-auto transition-all duration-[1200ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Join the REST Community
        </h2>

        <p className="text-gray-300 text-lg mb-12">
          Chill, laugh, and grow with dreamers across the globe.
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          {socials.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-[1000ms] ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: visible ? `${i * 200}ms` : "0ms"
              }}
            >
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.color} hover:text-white hover:scale-110 transition-all duration-500 block p-3`}
                title={`Join our ${s.label}`}
              >
                {s.icon}
              </a>
              <p className="text-cyan-300 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}