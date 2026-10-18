import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ARCHITECTURAL RUNTIME...");
  const [isExiting, setIsExiting] = useState(false);
  const isReadyRef = useRef(false);

  useEffect(() => {
    // 1. Lock scroll on both desktop and mobile
    document.body.style.overflow = "hidden";

    // 2. Track real browser asset and font readiness
    let windowLoaded = document.readyState === "complete";
    let fontsLoaded = false;
    let threeCompiled = false;

    const checkAllLoaded = () => {
      if (windowLoaded && fontsLoaded && threeCompiled) {
        isReadyRef.current = true;
      }
    };

    if (!windowLoaded) {
      const handleLoad = () => {
        windowLoaded = true;
        checkAllLoaded();
      };
      window.addEventListener("load", handleLoad, { once: true });
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready
        .then(() => {
          fontsLoaded = true;
          checkAllLoaded();
        })
        .catch(() => {
          fontsLoaded = true;
          checkAllLoaded();
        });
    } else {
      fontsLoaded = true;
    }

    // Three.js readiness event
    const handleThreeReady = () => {
      threeCompiled = true;
      checkAllLoaded();
    };
    window.addEventListener("threejs-scene-ready", handleThreeReady, { once: true });

    // Safety timeout: Never leave user stuck on slow 3G
    const maxSafetyTimeout = setTimeout(() => {
      isReadyRef.current = true;
    }, 3800);

    const statusMap = [
      { at: 15, text: "CALIBRATING DEVICE & VIEWPORT..." },
      { at: 40, text: "COMPILING THREE.JS WEBGL SHADERS..." },
      { at: 65, text: "PARSING ASSET STREAMS & DOM TREES..." },
      { at: 85, text: "SYNCHRONIZING GPU BUFFER & FRAME CACHE..." },
      { at: 100, text: "SYSTEM VERIFIED · ACCESS GRANTED" },
    ];

    let current = 0;
    const interval = setInterval(() => {
      // If real assets are not yet ready, hold smooth progress at 85%
      if (!isReadyRef.current && current >= 85) {
        setStatusText("FINISHING SHADER COMPILATION & ASSET BUFFERS...");
        return;
      }

      // Dynamic pacing: rapid once ready, steady before
      const increment = isReadyRef.current
        ? (current < 90 ? 4 : 2)
        : (current < 45 ? 3 : current < 75 ? 2 : 1);

      current = Math.min(100, current + increment);
      setProgress(current);

      for (let i = statusMap.length - 1; i >= 0; i--) {
        if (current >= statusMap[i].at) {
          setStatusText(statusMap[i].text);
          break;
        }
      }

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          // Reveal the background page right as the curtain rises
          if (onComplete) onComplete();
          setTimeout(() => {
            document.body.style.overflow = "";
          }, 800);
        }, 280);
      }
    }, 24);

    return () => {
      clearInterval(interval);
      clearTimeout(maxSafetyTimeout);
      document.body.style.overflow = "";
      window.removeEventListener("threejs-scene-ready", handleThreeReady);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 bg-[#0c0f10] text-[#F4F6F2] select-none cursor-wait overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Ambient luminous glow spots */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#B8FF45]/10 rounded-full blur-[150px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[130px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Top metadata strip */}
          <div className="flex items-center justify-between w-full text-xs font-mono text-white/50 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8FF45] animate-pulse" />
              <span className="tracking-widest uppercase text-white/80">PRAVEEN P · PROTOCOL 08</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-white/40">
              <span>CLOUD &amp; FULL STACK ARCHITECTURE</span>
              <span>•</span>
              <span>BENGALURU, IN</span>
            </div>
          </div>

          {/* Center Brand Monogram & High-Tech Dial */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            {/* Luminous Emblem */}
            <div className="relative mb-8 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl liquid-glass border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(184,255,69,0.2)] relative overflow-hidden group">
                {/* Rotating rim light */}
                <div
                  className="absolute inset-0 opacity-50 bg-[conic-gradient(from_0deg,_transparent,_#B8FF45,_transparent)] animate-spin-slow pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-1 rounded-[22px] bg-[#0c0f10]/95 backdrop-blur-md flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                    P
                  </span>
                </div>
              </div>

              {/* Sparkle badge */}
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#B8FF45] text-black flex items-center justify-center shadow-[0_0_15px_#B8FF45]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Giant Smooth Progress Counter */}
            <div className="flex items-baseline gap-1 font-serif text-6xl sm:text-8xl md:text-9xl text-white font-medium tracking-tight mb-4">
              <span>{progress}</span>
              <span className="text-2xl sm:text-4xl text-[#B8FF45] font-mono font-light">%</span>
            </div>

            {/* Precision Micro-Track Bar */}
            <div className="w-full max-w-xs sm:max-w-md h-[4px] bg-white/10 rounded-full overflow-hidden relative mb-4">
              <div
                className="h-full bg-gradient-to-r from-white via-[#B8FF45] to-[#B8FF45] transition-all duration-100 ease-out shadow-[0_0_14px_#B8FF45]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Real-time Status Readout */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-white/70 tracking-wider">
              {progress >= 100 ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
              ) : (
                <Terminal className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
              )}
              <span className="animate-pulse">{statusText}</span>
            </div>
          </div>

          {/* Bottom Diagnostics Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 text-[10px] sm:text-xs font-mono text-white/40 w-full">
            <div className="flex items-center gap-3">
              <span>MERN · SPRING BOOT · AWS LAMBDA</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>GPU HARDWARE ACCELERATED RENDER PIPELINE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
