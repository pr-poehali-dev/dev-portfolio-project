import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Fullstack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-hack-black via-dark-gray to-hack-black opacity-90"></div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-8">
          <div className="text-terminal-green text-sm mb-4 font-code">
            <span className="opacity-60">user@hackstation:~$</span> whoami
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 terminal-green-glow">
            <span className="glitch-text" data-text={displayText}>
              {displayText}
            </span>
            <span className="terminal-cursor animate-blink"></span>
          </h1>
        </div>

        <div className="text-xl md:text-2xl mb-8 text-matrix-green/80">
          <div className="font-code">
            <span className="text-terminal-green">[</span>
            <span className="text-white">Frontend</span>
            <span className="text-terminal-green">]</span>
            <span className="mx-4 text-terminal-green">+</span>
            <span className="text-terminal-green">[</span>
            <span className="text-white">Backend</span>
            <span className="text-terminal-green">]</span>
            <span className="mx-4 text-terminal-green">+</span>
            <span className="text-terminal-green">[</span>
            <span className="text-white">DevOps</span>
            <span className="text-terminal-green">]</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <button className="border border-matrix-green px-6 py-3 hover:bg-matrix-green hover:text-hack-black transition-all duration-300 font-code">
            <Icon name="Code" className="inline mr-2" size={20} />
            Проекты
          </button>
          <button className="border border-terminal-green px-6 py-3 hover:bg-terminal-green hover:text-hack-black transition-all duration-300 font-code">
            <Icon name="Download" className="inline mr-2" size={20} />
            Резюме
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-matrix-green" size={32} />
      </div>
    </section>
  );
};

export default Hero;
