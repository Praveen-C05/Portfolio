import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowDown, Check, Copy, ExternalLink, FileText, Mail, Sparkles, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

// Typewriter hook matching the AI Studio specification
function useTypewriter(
  text,
  speed = 34,
  startDelay = 400,
  enabled = true
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let timeoutId;
    let intervalId;
    let currentIndex = 0;

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayed(text.slice(0, currentIndex));
        } else {
          setDone(true);
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}

export const HeroSection = ({ isLoaded = false }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Video mouse scrubbing references
  const videoRef = useRef(null);
  const prevXRef = useRef(null);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const lastSeekTimeRef = useRef(0);

  // Typewriter hook for hero message — triggered only after preloader unmasks
  const { displayed, done } = useTypewriter(
    "Building scalable web applications, secure backend systems, and cloud-powered products.",
    34,
    450,
    isLoaded
  );

  // Buttons become visible 350ms after preloader reveals content
  useEffect(() => {
    if (!isLoaded) return;
    const timer = setTimeout(() => {
      setButtonsVisible(true);
    }, 350);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  // Lock body scroll when mobile navigation menu is active
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  // Handle video seeked event
  const handleSeeked = useCallback(() => {
    isSeekingRef.current = false;
  }, []);

  // Initialize video frame once metadata loaded
  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      targetTimeRef.current = 0;
      video.currentTime = 0.001;
    }
  }, []);

  // Scrub video on horizontal mouse movement & touch with hardware-friendly throttling
  useEffect(() => {
    let animId = null;

    const performSeek = (nextTarget) => {
      const now = performance.now();
      if (now - lastSeekTimeRef.current < 60) return; // Cap seeking at ~16fps to prevent decoder lock
      lastSeekTimeRef.current = now;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        animId = requestAnimationFrame(() => {
          const video = videoRef.current;
          if (video && !Number.isNaN(nextTarget)) {
            if (typeof video.fastSeek === "function") {
              video.fastSeek(nextTarget);
            } else {
              video.currentTime = nextTarget;
            }
          }
        });
      }
    };

    const handleMouseMove = (e) => {
      if (window.scrollY > window.innerHeight) return;

      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) {
        prevXRef.current = e.clientX;
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      const SENSITIVITY = 0.6;
      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      let nextTarget = targetTimeRef.current + timeOffset;
      nextTarget = Math.max(0, Math.min(video.duration, nextTarget));
      targetTimeRef.current = nextTarget;

      performSeek(nextTarget);
    };

    const handleTouchMove = (e) => {
      if (window.scrollY > window.innerHeight) return;
      if (e.touches.length === 0) return;
      const clientX = e.touches[0].clientX;
      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) {
        prevXRef.current = clientX;
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = clientX;
        return;
      }

      const delta = clientX - prevXRef.current;
      prevXRef.current = clientX;

      const SENSITIVITY = 0.6;
      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      let nextTarget = targetTimeRef.current + timeOffset;
      nextTarget = Math.max(0, Math.min(video.duration, nextTarget));
      targetTimeRef.current = nextTarget;

      performSeek(nextTarget);
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Copy email to clipboard
  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Stack", id: "stack" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden select-none bg-black text-black flex flex-col justify-between text-left"
      style={{
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Background Video (mouse-scrub controlled) */}
      <video
        ref={videoRef}
        src="/hero-video.mp4?v=2"
        className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none object-[80%_15%] md:object-[70%_center]"
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
      />

      {/* Gentle white gradient on mobile to ensure crisp typography without clashing with character */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none md:hidden" />

      {/* Subtle bottom gradient to blend into portfolio chapters */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101315] via-[#101315]/40 to-transparent pointer-events-none z-[2]" />

      {/* TOP HEADER / NAVBAR */}
      <header className="relative z-50 w-full px-4 sm:px-8 py-3.5 sm:py-5 flex flex-row justify-between items-center pointer-events-auto">
        {/* Brand / Logo */}
        <div className="flex flex-row items-center gap-2 sm:gap-3">
          <span
            className="text-[20px] sm:text-[26px] tracking-tight text-black cursor-pointer select-none font-bold font-serif"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Praveen P
          </span>
          <span
            className="text-[22px] sm:text-[30px] text-black select-none leading-none"
            style={{ letterSpacing: "-0.02em" }}
            aria-hidden="true"
          >
            ✳︎
          </span>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-black/10 text-black border border-black/10 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
            <span>CLOUD &amp; FULL STACK ENGINEER</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex flex-row items-center text-[18px] lg:text-[20px] text-black font-medium"
          aria-label="Main Navigation"
        >
          {navItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              <button
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="cursor-pointer hover:opacity-60 transition-opacity bg-transparent border-0 p-0 text-[18px] lg:text-[20px] text-black inline-block font-normal"
              >
                {item.label}
              </button>
              {idx < navItems.length - 1 && <span className="select-none mx-2 text-black/30">/</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-black text-white hover:bg-black/85 transition-all cursor-pointer shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 p-1.5 rounded-lg bg-black/10 border border-black/15 cursor-pointer focus:outline-none"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileNavOpen}
        >
          <span
            className={`w-5 h-[2px] bg-black transform transition-all duration-300 ${
              isMobileNavOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-black transition-opacity duration-300 ${
              isMobileNavOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-black transform transition-all duration-300 ${
              isMobileNavOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-md flex flex-col justify-between px-6 sm:px-8 pt-24 pb-10 transition-all duration-300 md:hidden ${
          isMobileNavOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!isMobileNavOpen}
      >
        <div className="flex flex-col space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-black/10">
            <span className="text-xs font-mono uppercase tracking-widest text-black/50">
              // Navigation
            </span>
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(false)}
              className="text-xs font-mono px-3 py-1 rounded-full border border-black/20 text-black hover:bg-black hover:text-white transition-colors"
            >
              CLOSE ✕
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsMobileNavOpen(false);
                  handleNavClick(item.id);
                }}
                className="text-[28px] sm:text-[32px] font-medium text-black text-left cursor-pointer hover:opacity-60 transition-opacity font-serif py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-black/40">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-black/10 space-y-3">
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileNavOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase bg-black text-white hover:bg-black/85 transition-all shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD CV / RÉSUMÉ</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setIsMobileNavOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-xs font-mono tracking-wider uppercase border border-black/25 text-black hover:bg-black/5 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>mr5praveen55@gmail.com</span>
          </a>
        </div>
      </div>

      {/* HERO MAIN INTERACTIVE CONTENT */}
      <div className="relative z-[3] w-full flex-1 flex flex-col justify-center py-6 sm:py-10 md:py-0 px-4 sm:px-8 md:px-12 overflow-hidden pointer-events-none">
        <div className="max-w-xl md:max-w-2xl relative z-10 pointer-events-auto text-left flex flex-col items-start">
          {/* 1. Identity & Role Intro */}
          <div className="mb-3 sm:mb-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-black/10 text-black border border-black/15 mb-2.5 sm:mb-3 backdrop-blur-xs max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">Full Stack Developer · Cloud Specialist</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black font-semibold tracking-tight leading-[1.08] text-left">
              Praveen P
            </h1>
          </div>

          {/* 2. Typewriter Headline */}
          <p
            className="text-black/85 mb-5 sm:mb-6 font-normal leading-relaxed text-sm sm:text-base md:text-xl text-left max-w-xl"
            style={{ minHeight: "44px" }}
          >
            {displayed}
            {!done && (
              <span
                className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink"
                aria-hidden="true"
              />
            )}
          </p>

          {/* 3. Action Pill Buttons */}
          <div
            className="flex flex-wrap gap-2 items-center justify-start text-left max-w-lg"
            style={{
              opacity: buttonsVisible ? 1 : 0,
              transform: buttonsVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-white text-black border border-black/20 rounded-full text-[12px] sm:text-[14px] font-medium px-3.5 sm:px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              Featured Projects ✦
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("experience");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-white text-black border border-black/20 rounded-full text-[12px] sm:text-[14px] font-medium px-3.5 sm:px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              Work Experience
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("stack");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-white text-black border border-black/20 rounded-full text-[12px] sm:text-[14px] font-medium px-3.5 sm:px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              Technical Stack
            </button>

            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-black border border-black/20 rounded-full text-[12px] sm:text-[14px] font-medium px-3.5 sm:px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV / Résumé</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Email Pill Button with high contrast & 1-click clipboard copy */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="relative group inline-flex items-center justify-center bg-black text-white border border-black rounded-full text-[12px] sm:text-[14px] font-mono px-3.5 sm:px-5 py-2 gap-2 hover:bg-black/85 transition-all duration-200 cursor-pointer shadow-md active:scale-95 max-w-full"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
              <span className="truncate">{personalInfo.email}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-white/70 group-hover:text-white shrink-0" />
              )}

              {/* Copied feedback badge */}
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-[#B8FF45] font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-[#B8FF45]/30 shadow-lg pointer-events-none animate-bounce">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="relative z-[3] pb-4 sm:pb-6 px-4 sm:px-8 flex items-center justify-center sm:justify-between w-full pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#D9E0DF]/60">
          <span>↔ Drag horizontally to scrub visuals</span>
        </div>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/50 hover:bg-black/75 backdrop-blur-md text-[#F4F6F2] text-[11px] sm:text-xs font-mono tracking-wider transition-all cursor-pointer shadow-lg active:scale-95"
        >
          <span>EXPLORE ARCHITECTURE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#B8FF45] group-hover:translate-y-0.5 transition-transform animate-bounce" />
        </button>
      </div>

      {/* INTERACTIVE DETAIL MODAL */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white text-black p-5 sm:p-8 rounded-2xl max-w-lg w-full shadow-2xl relative border border-black/10 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 border-b border-black/10 pb-3">
              <div className="flex items-center gap-2">
                <span
                  className="text-xl sm:text-2xl tracking-tight text-black font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {activeModal}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-black/60 hover:text-black text-2xl leading-none p-1 cursor-pointer transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="text-sm sm:text-base text-black/85 mb-6 leading-relaxed space-y-3 font-normal">
              <p>
                <strong>Praveen P</strong> is a Cloud &amp; Full Stack Engineer based in Bengaluru, Karnataka, India. Specializing in MERN stack, Spring Boot, serverless AWS Lambda architectures, and database optimization.
              </p>
              <div className="p-3.5 rounded-xl bg-black/5 border border-black/10 text-xs font-mono space-y-1">
                <div>• Capstone: MONARC SaaS ERP (Multi-Tenant, 1000+ Concurrent Users)</div>
                <div>• Production: 15+ REST APIs deployed with AWS Lambda &amp; DynamoDB</div>
                <div>• Academics: BCA Cloud Computing, CMR University (CGPA 8.1) · NPTEL Elite</div>
              </div>
              <p className="text-xs text-black/60 font-mono">
                Direct Contact: {personalInfo.email} · {personalInfo.phone}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-3 pt-3 border-t border-black/10">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-black/70 hover:text-black border border-black/20 rounded-full cursor-pointer hover:bg-black/5 transition-colors text-center"
              >
                Close
              </button>

              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider border border-black rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors text-center"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setActiveModal(null);
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider bg-black text-white rounded-full cursor-pointer hover:bg-black/85 transition-colors text-center"
              >
                <span>Explore Projects</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}?subject=Project%20Collaboration`}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs uppercase tracking-wider bg-black text-white rounded-full cursor-pointer hover:bg-black/85 transition-colors font-medium text-center"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Praveen</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
