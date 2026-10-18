import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/portfolio-data";

export const NexeusFooter = () => {
  const containerRef = useRef(null);
  const footerVideoRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to trigger the entrance animation and manage video playback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasEntered) {
              setHasEntered(true);
              runEntranceAnimation();
            }
            if (footerVideoRef.current) {
              footerVideoRef.current.play().catch(() => {});
            }
          } else {
            if (footerVideoRef.current) {
              footerVideoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasEntered]);

  const runEntranceAnimation = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isNarrow = window.matchMedia("(max-width: 648px)").matches;
    const d = isNarrow ? 0.62 : 1;
    const t = isNarrow ? 0.85 : 1;

    const EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
    const SOFT = "cubic-bezier(0.22, 0.65, 0.28, 1)";
    const SETTLE = "cubic-bezier(0.33, 1, 0.68, 1)";

    const container = containerRef.current;
    if (!container) return;

    const animate = (selector, keyframes, timing) => {
      const target = container.querySelector(selector);
      if (!target) return null;
      return target.animate(keyframes, timing);
    };

    const animateAll = (selector, getTimeline) => {
      const targets = container.querySelectorAll(selector);
      targets.forEach((target, i) => {
        const { keyframes, timing } = getTimeline(target, i);
        target.animate(keyframes, timing);
      });
    };

    // Eyebrow
    animate(
      ".nexeus-eyebrow",
      [
        { opacity: 0, transform: `translate3d(0, ${12 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 560, delay: 60 * t, easing: SOFT, fill: "forwards" }
    );

    // Headline
    animate(
      ".nexeus-headline",
      [
        { transform: "translate3d(0, 118%, 0)" },
        { transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 950, delay: 170 * t, easing: EXPO, fill: "forwards" }
    );

    // Lede
    animate(
      ".nexeus-lede",
      [
        { opacity: 0, transform: `translate3d(0, ${14 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 660, delay: 430 * t, easing: SOFT, fill: "forwards" }
    );

    // CTA
    animate(
      ".nexeus-cta",
      [
        { opacity: 0, transform: `translate3d(0, ${12 * d}px, 0) scale(0.985)` },
        { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
      ],
      { duration: 580, delay: 620 * t, easing: SETTLE, fill: "forwards" }
    );

    // Mark & Wordmark
    animate(
      ".nexeus-mark",
      [
        { opacity: 0, transform: `translate3d(0, ${10 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 540, delay: 600 * t, easing: SOFT, fill: "forwards" }
    );

    animate(
      ".nexeus-wordmark",
      [
        { opacity: 0, transform: `translate3d(0, ${10 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 540, delay: 600 * t, easing: SOFT, fill: "forwards" }
    );

    // Tagline
    animate(
      ".nexeus-tagline",
      [
        { opacity: 0, transform: `translate3d(0, ${10 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 540, delay: 670 * t, easing: SOFT, fill: "forwards" }
    );

    // Nav Columns
    animateAll(".nexeus-col", (el, i) => ({
      keyframes: [
        { opacity: 0, transform: `translate3d(0, ${14 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      timing: { duration: 580, delay: (720 + i * 70) * t, easing: SOFT, fill: "forwards" },
    }));

    // Horizontal Rule
    animate(
      ".nexeus-rule",
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: 720, delay: 980 * t, easing: EXPO, fill: "forwards" }
    );

    // Legal
    animate(
      ".nexeus-legal",
      [
        { opacity: 0, transform: `translate3d(0, ${8 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      { duration: 500, delay: 1120 * t, easing: SOFT, fill: "forwards" }
    );

    // Social Links
    animateAll(".nexeus-socials a", (el, i) => ({
      keyframes: [
        { opacity: 0, transform: `translate3d(0, ${8 * d}px, 0)` },
        { opacity: 1, transform: "translate3d(0, 0, 0)" },
      ],
      timing: { duration: 500, delay: (1170 + i * 60) * t, easing: SOFT, fill: "forwards" },
    }));
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `mailto:${personalInfo.email}?subject=Project%20Collaboration`;
    }
  };

  return (
    <div
      id="footer"
      ref={containerRef}
      className={`nexeus-root relative w-full overflow-hidden select-none text-white ${
        !hasEntered ? "nexeus-pre-enter" : ""
      }`}
    >
      <style>{`
        .nexeus-root {
          --font-display: 'Instrument Serif', Georgia, serif;
          --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
          --fw-regular: 400;
          --fw-medium: 500;
          --text-primary: #fff;
          --text-heading: rgba(255, 255, 255, 0.88);
          --text-muted: rgba(255, 255, 255, 0.68);
          --text-invert: #000;

          background: #1d8fb8;
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: 100vh;
          min-height: 100dvh;
        }

        .nexeus-viewport {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        /* Alpine Panoramic Video Background */
        .nexeus-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #1d8fb8;
          pointer-events: none;
          z-index: 0;
        }

        .nexeus-bg video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          object-position: 85% bottom;
          filter: saturate(0.88);
        }

        @media (max-width: 768px) {
          .nexeus-bg video {
            object-position: 65% bottom;
          }
        }

        /* Aspect-ratio scrims */
        .nexeus-scrim {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: clamp(240px, 45vh, 480px);
          background: linear-gradient(180deg, rgba(4, 20, 32, 0.52) 0%, rgba(4, 20, 32, 0.28) 50%, rgba(4, 20, 32, 0) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* Shared Container for symmetric margins */
        .nexeus-container {
          width: 100%;
          max-width: 1480px;
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(16px, 4vw, 64px);
          padding-right: clamp(16px, 4vw, 64px);
          box-sizing: border-box;
        }

        /* Hero Stage */
        .nexeus-stage {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-top: clamp(60px, 10vh, 140px);
          padding-bottom: clamp(32px, 5vh, 60px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          pointer-events: none;
        }

        .nexeus-stage > * {
          pointer-events: auto;
        }

        /* Eyebrow */
        .nexeus-eyebrow {
          font-size: clamp(11px, 0.95vw, 15px);
          font-weight: 600;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.92);
          text-transform: uppercase;
          margin: 0 0 12px 0;
          white-space: normal;
        }

        /* Headline Mask & Headline */
        .nexeus-headline-mask {
          overflow: hidden;
          margin: 0 0 14px 0;
          max-width: 100%;
        }

        .nexeus-headline {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(32px, 5.2vw, 78px);
          line-height: 1.08;
          letter-spacing: 0.01em;
          color: #fff;
          margin: 0;
          white-space: normal;
          word-break: break-word;
        }

        /* Lede Description */
        .nexeus-lede {
          max-width: 480px;
          font-size: clamp(13.5px, 1.1vw, 17px);
          font-weight: var(--fw-medium);
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.88);
          margin: 0 0 24px 0;
        }

        /* Take Control CTA Button */
        .nexeus-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 clamp(20px, 2vw, 32px);
          border-radius: 6px;
          background: #fff;
          color: var(--text-invert);
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .nexeus-cta:hover {
          background: #f0f4f8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.26);
        }

        .nexeus-cta:active {
          transform: scale(0.98);
        }

        .nexeus-cta span {
          font-size: clamp(13.5px, 0.98vw, 15.8px);
          font-weight: 600;
          line-height: 1;
          color: #000;
          white-space: nowrap;
        }

        /* Glassmorphic Footer Bar */
        .nexeus-footer-bar {
          position: relative;
          width: 100%;
          margin-top: auto;
          backdrop-filter: blur(44px) saturate(0.9);
          -webkit-backdrop-filter: blur(44px) saturate(0.9);
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0.06) 40px, rgba(255, 255, 255, 0) 120px),
            linear-gradient(270deg, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0.05) 40px, rgba(255, 255, 255, 0) 120px),
            linear-gradient(180deg, rgba(22, 10, 4, 0.35) 0%, rgba(52, 26, 8, 0.42) 50%, rgba(145, 100, 38, 0.58) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.22),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1);
          z-index: 3;
        }

        .nexeus-finner {
          padding-top: clamp(24px, 3.5vh, 44px);
          padding-bottom: clamp(20px, 3vh, 34px);
          display: flex;
          flex-direction: column;
        }

        /* Top Section: Brand on Left, Nav on Right */
        .nexeus-top-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(28px, 4vw, 72px);
          width: 100%;
        }

        /* Brand Block */
        .nexeus-brand-block {
          max-width: 360px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .nexeus-brandrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .nexeus-mark {
          width: clamp(24px, 1.8vw, 27px);
          height: clamp(24px, 1.8vw, 27px);
          flex-shrink: 0;
        }

        .nexeus-wordmark {
          font-size: clamp(20px, 1.6vw, 24px);
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #fff;
          white-space: nowrap;
        }

        .nexeus-tagline {
          font-size: clamp(12.5px, 0.9vw, 13.8px);
          font-weight: var(--fw-medium);
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: var(--text-muted);
          margin: 0;
        }

        /* Navigation Columns */
        .nexeus-nav {
          display: flex;
          gap: clamp(24px, 5vw, 90px);
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .nexeus-col {
          display: flex;
          flex-direction: column;
          min-width: 100px;
        }

        .nexeus-col h3 {
          font-size: clamp(12px, 0.95vw, 14.5px);
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--text-heading);
          white-space: normal;
          margin: 0 0 12px 0;
          text-transform: uppercase;
        }

        .nexeus-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nexeus-col li {
          white-space: normal;
          word-break: break-word;
        }

        .nexeus-col a {
          font-size: clamp(13px, 0.95vw, 15px);
          font-weight: 400;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          display: inline-block;
          padding: 2px 0;
          transition: color 0.2s ease, opacity 0.2s ease;
        }

        .nexeus-col a:hover {
          color: #fff;
          opacity: 0.75;
        }

        /* Horizontal Rule */
        .nexeus-rule {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.24);
          margin: clamp(22px, 3vh, 34px) 0 clamp(18px, 2.5vh, 26px);
          transform-origin: left center;
        }

        /* Bottom Row */
        .nexeus-footrow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          width: 100%;
        }

        .nexeus-legal {
          font-size: clamp(12px, 0.88vw, 13.5px);
          font-weight: var(--fw-medium);
          letter-spacing: -0.01em;
          color: var(--text-muted);
          white-space: normal;
          margin: 0;
        }

        .nexeus-socials {
          display: flex;
          gap: clamp(12px, 2vw, 24px);
          align-items: center;
        }

        .nexeus-socials a {
          min-width: 40px;
          min-height: 40px;
          padding: 8px;
          color: rgba(255, 255, 255, 0.88);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease, background 0.2s ease;
          text-decoration: none;
          touch-action: manipulation;
        }

        .nexeus-socials a:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          opacity: 1;
        }

        .nexeus-socials a:active {
          transform: scale(0.95);
        }

        .nexeus-socials svg {
          width: 18px;
          height: 18px;
        }

        /* Initial pre-entrance state */
        .nexeus-pre-enter .nexeus-eyebrow,
        .nexeus-pre-enter .nexeus-lede,
        .nexeus-pre-enter .nexeus-cta,
        .nexeus-pre-enter .nexeus-mark,
        .nexeus-pre-enter .nexeus-wordmark,
        .nexeus-pre-enter .nexeus-tagline,
        .nexeus-pre-enter .nexeus-col,
        .nexeus-pre-enter .nexeus-legal,
        .nexeus-pre-enter .nexeus-socials a {
          opacity: 0;
        }

        .nexeus-pre-enter .nexeus-headline {
          transform: translate3d(0, 118%, 0);
        }

        .nexeus-pre-enter .nexeus-rule {
          transform: scaleX(0);
        }

        /* Responsive Breakpoints */
        @media (max-width: 990px) {
          .nexeus-top-section {
            flex-direction: column;
            gap: 28px;
          }

          .nexeus-brand-block {
            max-width: 100%;
          }

          .nexeus-nav {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 680px) {
          .nexeus-headline {
            font-size: clamp(30px, 8.5vw, 48px);
            max-width: 16ch;
          }

          .nexeus-nav {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .nexeus-col.c3 {
            grid-column: 1 / -1;
          }

          .nexeus-footrow {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .nexeus-nav {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .nexeus-col.c3 {
            grid-column: auto;
          }

          .nexeus-cta {
            width: 100%;
          }

          .nexeus-socials {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="nexeus-viewport">
        {/* Background Alpine Video */}
        <div className="nexeus-bg">
          <video
            ref={footerVideoRef}
            muted
            loop
            playsInline
            preload="none"
            poster="/nexeus-footer-poster.webp"
            aria-label="Painted alpine panorama: a lone hiker with a pink backpack faces a snow-capped peak above a sea of clouds"
          >
            <source src="/nexeus-footer-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient Scrim */}
        <div className="nexeus-scrim" />

        {/* Stage Content */}
        <div className="nexeus-stage nexeus-container">
          <p className="nexeus-eyebrow">Ready when you are</p>
          <div className="nexeus-headline-mask">
            <h2 className="nexeus-headline">Build your future now</h2>
          </div>
          <p className="nexeus-lede">
            From scalable cloud architectures and modern web apps to serverless backend systems, everything you need to move forward starts right here.
          </p>
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="nexeus-cta"
          >
            <span>Take Control</span>
          </a>
        </div>

        {/* Glassmorphic Footer Bar */}
        <footer className="nexeus-footer-bar">
          <div className="nexeus-finner nexeus-container">
            {/* Top Row: Brand & Navigation */}
            <div className="nexeus-top-section">
              {/* Brand Block */}
              <div className="nexeus-brand-block">
                <div className="nexeus-brandrow">
                  <svg
                    className="nexeus-mark"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M 45.13 1.28 L 54.87 1.28 L 54.87 42.42 L 45.13 38.09 Z" fill="#fff" />
                    <path d="M 79.47 12.10 L 87.90 20.53 L 58.80 49.62 L 53.45 38.13 Z" fill="#fff" />
                    <path d="M 98.72 45.13 L 98.72 54.87 L 57.58 54.87 L 61.91 45.13 Z" fill="#fff" />
                    <path d="M 87.90 79.47 L 79.47 87.90 L 50.38 58.80 L 61.87 53.45 Z" fill="#fff" />
                    <path d="M 54.87 98.72 L 45.13 98.72 L 45.13 57.58 L 54.87 61.91 Z" fill="#fff" />
                    <path d="M 20.53 87.90 L 12.10 79.47 L 41.20 50.38 L 46.55 61.87 Z" fill="#fff" />
                    <path d="M 1.28 54.87 L 1.28 45.13 L 42.42 45.13 L 38.09 54.87 Z" fill="#fff" />
                    <path d="M 12.10 20.53 L 20.53 12.10 L 49.62 41.20 L 38.13 46.55 Z" fill="#fff" />
                  </svg>
                  <span className="nexeus-wordmark">Nexeus</span>
                </div>
                <p className="nexeus-tagline">
                  Change your future today using high-performance engineering and modern systems. Everything you need starts here.
                </p>
              </div>

              {/* Navigation Columns */}
              <nav className="nexeus-nav" aria-label="Footer Navigation">
                <div className="nexeus-col c1">
                  <h3>SOLUTIONS</h3>
                  <ul>
                    <li><a href="#projects">Monarc SaaS ERP</a></li>
                    <li><a href="#projects">CloudedHealth Microservices</a></li>
                    <li><a href="#projects">CMRVibeWaves Portal</a></li>
                    <li><a href="#projects">Road Safety AI Vision</a></li>
                  </ul>
                </div>

                <div className="nexeus-col c2">
                  <h3>CAPABILITIES</h3>
                  <ul>
                    <li><a href="#skills">React.js & Node.js</a></li>
                    <li><a href="#skills">AWS Serverless & S3</a></li>
                    <li><a href="#skills">Java & Spring Boot</a></li>
                    <li><a href="#skills">MongoDB & DynamoDB</a></li>
                  </ul>
                </div>

                <div className="nexeus-col c3">
                  <h3>RESOURCES</h3>
                  <ul>
                    <li><a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></li>
                    <li><a href="#experience">Internship Experience</a></li>
                    <li><a href="#education">BCA Cloud Degree (8.1 CGPA)</a></li>
                    <li><a href="#contact">Direct Inquiry</a></li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Full-width Divider Rule */}
            <div className="nexeus-rule" />

            {/* Bottom Row */}
            <div className="nexeus-footrow">
              <p className="nexeus-legal">
                ®· Praveen P . All rights reserved.
              </p>
              <div className="nexeus-socials">
                <a
                  href={personalInfo.socials.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" aria-hidden="true">
                    <path d="M24 0H6C2.7 0 0 2.7 0 6v18c0 3.3 2.7 6 6 6h18c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6zM9 24.6H5V11.8h4v12.8zM7 9.8c-1.3 0-2.3-1-2.3-2.3S5.7 5.2 7 5.2s2.3 1 2.3 2.3-1 2.3-2.3 2.3zm18 14.8h-4v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.4h-4V11.8h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4.1 0 4.8 2.7 4.8 6.2v7z" />
                  </svg>
                </a>
                <a
                  href={personalInfo.socials.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NexeusFooter;
