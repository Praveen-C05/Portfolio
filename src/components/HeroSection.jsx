import { useState, useEffect, useRef } from "react";
import { ArrowRight, FileDown, Layers, Compass, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiAmazonwebservices } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const techBadges = [
    {
      name: "React.js",
      icon: <SiReact className="text-[#61DAFB] text-xl" />,
      color: "#61DAFB",
      pos: "top-[-10%] left-[15%]",
      offsetMultiplier: 1.8,
      delay: "0s",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-[#68A063] text-xl" />,
      color: "#68A063",
      pos: "top-[15%] right-[-5%]",
      offsetMultiplier: -1.5,
      delay: "1s",
    },
    {
      name: "AWS",
      icon: <SiAmazonwebservices className="text-[#FF9900] text-xl" />,
      color: "#FF9900",
      pos: "bottom-[20%] right-[-10%]",
      offsetMultiplier: 2.2,
      delay: "2s",
    },
    {
      name: "Java",
      icon: <FaJava className="text-[#ED8B00] text-xl" />,
      color: "#ED8B00",
      pos: "bottom-[-5%] left-[25%]",
      offsetMultiplier: -1.9,
      delay: "0.5s",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248] text-xl" />,
      color: "#47A248",
      pos: "top-[45%] left-[-12%]",
      offsetMultiplier: 1.4,
      delay: "1.5s",
    },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-[#101315] text-[#F4F6F2] overflow-hidden flex flex-col justify-between pt-28 pb-10 px-4 md:px-8 lg:px-14 select-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 75% 45%, rgba(184, 255, 69, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 30% 60%, rgba(217, 224, 223, 0.03) 0%, transparent 60%)
        `,
      }}
    >
      {/* Topographic Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(#F4F6F2_1px,transparent_1px)] [background-size:32px_32px]" />
      
      {/* Subtle Contour SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#B8FF45" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D9E0DF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M -100 200 C 300 120, 600 450, 1100 260 S 1600 400, 2000 220"
          fill="none"
          stroke="url(#topoGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />
        <path
          d="M -100 350 C 400 280, 700 600, 1200 420 S 1700 550, 2100 380"
          fill="none"
          stroke="url(#topoGrad)"
          strokeWidth="1"
        />
        <path
          d="M -100 500 C 500 420, 800 750, 1300 580 S 1800 700, 2200 540"
          fill="none"
          stroke="url(#topoGrad)"
          strokeWidth="1.5"
          strokeDasharray="6 12"
        />
        <path
          d="M -100 650 C 600 560, 900 900, 1400 740 S 1900 850, 2300 700"
          fill="none"
          stroke="url(#topoGrad)"
          strokeWidth="1"
        />
      </svg>

      {/* Hero Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-7">
          
          {/* Section Indicator: 01 — HOME */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF45] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#F4F6F2]/70 uppercase">
              01 — HOME
            </span>
          </div>

          {/* Dominant Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.1rem] font-extrabold tracking-tight leading-[1.08] text-metallic-pearl">
              Engineering the digital.
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.1rem] font-extrabold tracking-tight leading-[1.08] text-white">
              Exploring beyond <br className="hidden sm:inline" />
              the ordinary.
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#F4F6F2]/75 max-w-xl font-normal leading-relaxed">
            Building scalable applications, thoughtful interfaces, and cloud-powered digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {/* Primary CTA: EXPLORE PROJECTS */}
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase spectral-button overflow-hidden cursor-pointer"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA: VIEW RESUME */}
            <a
              href="/PraveenP_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wider uppercase silver-button cursor-pointer"
            >
              <span>VIEW RESUME</span>
              <FileDown className="w-4 h-4 text-[#F4F6F2]/70 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Quick Stats / Tech Stack Mini Tags */}
          <div className="pt-4 flex items-center gap-6 text-xs text-[#F4F6F2]/50 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8FF45]" />
              <span>Full-Stack & Cloud Architecture</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#61DAFB]" />
              <span>BCA Cloud Computing</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Floating Chrome & Tech Constellation */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
          
          {/* Main 3D Container with Mouse Parallax */}
          <div
            className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Background Ambient Glow */}
            <div
              className="absolute w-[280px] h-[280px] rounded-full blur-[80px] opacity-25 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #B8FF45 0%, #61DAFB 40%, transparent 70%)",
                transform: "translateZ(-80px)",
              }}
            />

            {/* Orbiting Translucent Glass Ring 1 (Horizontal Inclined) */}
            <div
              className="absolute w-[360px] h-[130px] sm:w-[480px] sm:h-[180px] rounded-[50%] pointer-events-none animate-spin-slow"
              style={{
                border: "1.5px solid rgba(217, 224, 223, 0.35)",
                boxShadow: "0 0 25px rgba(217, 224, 223, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.08)",
                transform: "rotateX(72deg) rotateY(15deg) translateZ(10px)",
                background: "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              }}
            />

            {/* Orbiting Translucent Glass Ring 2 (Cross Tilt) */}
            <div
              className="absolute w-[380px] h-[140px] sm:w-[500px] sm:h-[190px] rounded-[50%] pointer-events-none animate-spin-reverse-slow"
              style={{
                border: "1px solid rgba(184, 255, 69, 0.3)",
                boxShadow: "0 0 20px rgba(184, 255, 69, 0.12)",
                transform: "rotateX(58deg) rotateY(-35deg) translateZ(30px)",
              }}
            />

            {/* Orbiting Metallic Track 3 (Steep Ellipse) */}
            <div
              className="absolute w-[400px] h-[200px] sm:w-[520px] sm:h-[240px] rounded-[50%] pointer-events-none"
              style={{
                border: "1px dashed rgba(255, 255, 255, 0.18)",
                transform: "rotateX(82deg) rotateY(40deg) translateZ(-20px)",
              }}
            />

            {/* Wireframe Geometry Prism (Abstract Developer Iconography) */}
            <div
              className="absolute top-4 right-8 w-12 h-12 border border-white/20 rotate-45 pointer-events-none opacity-40 animate-float-gentle"
              style={{
                transform: `translateZ(60px) translateX(${mousePos.x * 20}px)`,
                borderStyle: "dashed",
              }}
            />

            <div
              className="absolute bottom-12 left-6 w-14 h-14 border border-[#B8FF45]/30 rotate-12 pointer-events-none opacity-40"
              style={{
                transform: `translateZ(40px) translateX(${-mousePos.x * 15}px)`,
              }}
            />

            {/* Central 3D Chrome Liquid-Metal Sphere */}
            <div
              className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-full flex items-center justify-center cursor-pointer group"
              style={{
                background: `
                  radial-gradient(circle at 32% 28%, #FFFFFF 0%, #E6EDEC 20%, #A2B2B0 45%, #424E50 72%, #141B1C 95%)
                `,
                boxShadow: `
                  inset -18px -18px 45px rgba(0, 0, 0, 0.9),
                  inset 14px 14px 30px rgba(255, 255, 255, 0.8),
                  inset 0 0 25px rgba(184, 255, 69, 0.25),
                  0 25px 60px rgba(0, 0, 0, 0.85),
                  0 0 35px rgba(217, 224, 223, 0.2)
                `,
                transform: `translateZ(40px) translateX(${mousePos.x * 10}px) translateY(${mousePos.y * 10}px)`,
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Iridescent Rainbow Chrome Reflection Ribbon */}
              <div
                className="absolute inset-2 rounded-full opacity-60 mix-blend-overlay pointer-events-none"
                style={{
                  background: `
                    conic-gradient(
                      from 180deg at 50% 50%,
                      rgba(184, 255, 69, 0.5) 0deg,
                      rgba(97, 218, 251, 0.6) 80deg,
                      rgba(255, 255, 255, 0.8) 160deg,
                      rgba(237, 139, 0, 0.4) 240deg,
                      rgba(184, 255, 69, 0.5) 360deg
                    )
                  `,
                }}
              />

              {/* Specular White Highlight */}
              <div
                className="absolute top-5 left-8 w-14 h-9 sm:w-20 sm:h-12 rounded-[50%] bg-white/70 blur-[3px] pointer-events-none rotate-[-25deg]"
              />

              {/* Developer Workstation Hologram / Center Core Emblem */}
              <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center pointer-events-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg mb-1">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8FF45]" />
                </div>
                <span className="text-[10px] tracking-widest font-mono text-white/90 uppercase font-bold drop-shadow">
                  CORE ARCH
                </span>
              </div>
            </div>

            {/* 3D Floating Technology Orbs */}
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`absolute ${badge.pos} transition-all duration-300 ease-out`}
                style={{
                  transform: `translateZ(${50 + idx * 15}px) translateX(${mousePos.x * 22 * badge.offsetMultiplier}px) translateY(${mousePos.y * 18 * badge.offsetMultiplier}px)`,
                }}
              >
                <div
                  className="group relative flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-pill cursor-pointer shadow-xl transition-all duration-300 hover:scale-110"
                  style={{
                    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 18px ${badge.color}25`,
                    borderColor: `${badge.color}40`,
                  }}
                >
                  <div className="p-1 rounded-lg bg-black/50 border border-white/10">
                    {badge.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                    {badge.name}
                  </span>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: badge.color }}
                  />
                </div>
              </div>
            ))}

            {/* Floating Sculptural Laptop Holographic Representation */}
            <div
              className="absolute -bottom-8 right-2 sm:right-6 pointer-events-none"
              style={{
                transform: `translateZ(65px) translateX(${mousePos.x * -16}px) translateY(${mousePos.y * -14}px) rotate(-8deg)`,
              }}
            >
              <div className="relative p-2 rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-black/60 backdrop-blur-md shadow-2xl">
                <div className="w-20 h-14 sm:w-28 sm:h-18 rounded bg-[#0B0F12] border border-white/10 p-1.5 flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF45]" />
                  </div>
                  <div className="space-y-1 font-mono text-[6px] sm:text-[7px] text-[#B8FF45]/80">
                    <div>$ aws deploy --prod</div>
                    <div className="text-white/60">✓ 99.9% uptime</div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="w-24 sm:w-32 h-1.5 bg-white/20 rounded-b-md mx-auto mt-0.5" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Subtle UI Elements & Interactive Trails */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F4F6F2]/50">
        
        {/* Left: Camera Motion */}
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-4 h-4 text-[#B8FF45]" />
          <span>Camera motion / 360° dynamic view</span>
        </div>

        {/* Center: Scroll-triggered 3D Transformations */}
        <a
          href="#about"
          className="group flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-[#B8FF45]/50 transition-colors"
        >
          <div className="w-2.5 h-4 rounded-full border border-white/40 flex items-start justify-center p-0.5">
            <div className="w-1 h-1 rounded-full bg-[#B8FF45] animate-bounce" />
          </div>
          <span className="text-[#F4F6F2]/80 group-hover:text-[#B8FF45] transition-colors">
            Scroll-triggered 3D transformations
          </span>
        </a>

        {/* Right: Multi-layer Parallax Indicator */}
        <div className="flex items-center gap-2">
          <span>Multi-layer parallax</span>
          <span className="text-white/20">••••••••</span>
          <div className="flex items-center gap-1 text-[#F4F6F2]/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF45]" />
            <span>Interactive</span>
          </div>
          <ChevronRight className="w-4 h-4 text-[#B8FF45]" />
        </div>

      </div>
    </section>
  );
};
