import { useEffect, useRef, useState } from "react";
import bc from '../assets/images/bc.jpg';

export default function Book() {
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

  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/pdfs/rest.pdf'; // Path to your PDF file
    link.download = 'Crypto-360-REST.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-12 px-4 sm:px-6 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          📚 Free eBook
        </h2>

        {/* Book Description */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-cyan-200 mb-4">
            Rest giveaway book from Connect The Dot Global, for all Rest holders
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold border-4 w-fit m-auto active:bg-teal-600 px-3 rounded-lg text-cyan-400 mb-2">
            Crypto 360
          </h3>
          <p className="text-cyan-300 text-sm max-w-2xl mx-auto">
            Your comprehensive guide to understanding cryptocurrency and blockchain technology
          </p>
        </div>

        {/* Book Cover */}
        <div className={`mb-6 transition-all duration-700 delay-400 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div 
            className="inline-block cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={handleDownload}
          >
            <div className="border-4 border-cyan-400/50 rounded-2xl py-7 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
              <img 
                src={bc} 
                alt="Crypto 360 Book Cover"
                className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-lg object-contain mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Download Instruction */}
        <div className={`transition-all duration-700 delay-600 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-cyan-300 text-sm italic">
            Clicking the cover will download the PDF
          </p>
        </div>

        {/* Additional Info */}
        <div className={`mt-8 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm max-w-2xl mx-auto transition-all duration-700 delay-800 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-cyan-200 text-sm">
            This exclusive eBook is available for all REST token holders. 
            Learn about blockchain fundamentals, cryptocurrency investing, 
            and the future of decentralized finance.
          </p>
        </div>
      </div>
    </section>
  );
}