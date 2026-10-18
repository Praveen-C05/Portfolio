import React, { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/portfolio-data";

export const NexeusFooter = () => {
  const containerRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to trigger the entrance animation when the footer enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasEntered) {
            setHasEntered(true);
            runEntranceAnimation();
          }
        });
      },
      { threshold: 0.15 }
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
          --text-heading: rgba(255, 255, 255, 0.86);
          --text-muted: rgba(255, 255, 255, 0.68);
          --text-invert: #000;

          /* Frame reference: 1600 x 780 */
          --u: min(calc(100vw / 1600), calc(100vh / 780), 1.6px);
          --fw: calc(1600 * var(--u));
          --hair: max(1px, calc(1 * var(--u)));

          background: #1d8fb8;
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          min-height: 100vh;
          height: calc(780 * var(--u));
        }

        .nexeus-viewport {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        /* Background video */
        .nexeus-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #1d8fb8;
        }

        .nexeus-bg video {
          position: absolute;
          right: 0;
          bottom: calc(-45 * var(--u));
          width: calc(1668 * var(--u));
          height: calc(1037 * var(--u));
          min-width: 100%;
          min-height: calc(100% + 45 * var(--u));
          object-fit: cover;
          object-position: right bottom;
          filter: saturate(0.86);
        }

        /* Aspect-ratio scrims */
        .nexeus-scrim {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: calc(450 * var(--u));
          background: linear-gradient(180deg, rgba(4, 20, 32, 0.48) 0%, rgba(4, 20, 32, 0.25) 50%, rgba(4, 20, 32, 0) 100%);
          pointer-events: none;
        }

        /* Stage */
        .nexeus-stage {
          position: absolute;
          left: 50%;
          top: 0;
          width: var(--fw);
          height: 100%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 2;
        }

        .nexeus-stage > * {
          pointer-events: auto;
        }

        .nexeus-abs {
          position: absolute;
        }

        /* Hero text in stage */
        .nexeus-eyebrow {
          left: calc(46.6 * var(--u));
          top: calc(128.2 * var(--u));
          font-size: calc(15.0 * var(--u));
          font-weight: var(--fw-medium);
          line-height: 1;
          letter-spacing: calc(0.2163 * var(--u));
          color: #fff;
          text-transform: uppercase;
          white-space: nowrap;
          margin: 0;
        }

        .nexeus-headline-mask {
          left: calc(46.0 * var(--u));
          top: calc(163.0 * var(--u));
          overflow: visible;
          clip-path: inset(-45% -8% -6px -3%);
        }

        .nexeus-headline {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: calc(71.2 * var(--u));
          line-height: 1;
          letter-spacing: calc(0.5696 * var(--u));
          color: #fff;
          white-space: nowrap;
          margin: 0;
        }

        .nexeus-lede {
          left: calc(46.4 * var(--u));
          top: calc(245.2 * var(--u));
          width: calc(432 * var(--u));
          font-size: calc(17.0 * var(--u));
          font-weight: var(--fw-medium);
          line-height: calc(22.9 * var(--u));
          letter-spacing: calc(-0.15232 * var(--u));
          color: #fff;
          margin: 0;
        }

        .nexeus-cta {
          left: calc(46.8 * var(--u));
          top: calc(335.0 * var(--u));
          width: calc(157.0 * var(--u));
          height: calc(40.6 * var(--u));
          border-radius: calc(4.2 * var(--u));
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .nexeus-cta:hover {
          background: #eef2f3;
          transform: translateY(calc(-1.5 * var(--u)));
          box-shadow: 0 calc(8 * var(--u)) calc(22 * var(--u)) rgba(0, 0, 0, 0.20);
        }

        .nexeus-cta span {
          font-size: calc(15.8 * var(--u));
          font-weight: 500;
          line-height: 1;
          letter-spacing: calc(0.057828 * var(--u));
          color: var(--text-invert);
          white-space: nowrap;
        }

        /* Glassmorphic Footer bar */
        .nexeus-footer-bar {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: calc(342 * var(--u));
          backdrop-filter: blur(calc(50 * var(--u))) saturate(0.85);
          -webkit-backdrop-filter: blur(calc(50 * var(--u))) saturate(0.85);
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.022) 0, rgba(255, 255, 255, 0.072) calc(20 * var(--u)), rgba(255, 255, 255, 0) calc(58 * var(--u))),
            linear-gradient(270deg, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0.05) calc(20 * var(--u)), rgba(255, 255, 255, 0) calc(58 * var(--u))),
            linear-gradient(180deg, rgba(34, 14, 0, 0.28) 0%, rgba(70, 34, 0, 0.24) 52%, rgba(160, 120, 48, 0.6) 100%);
          box-shadow:
            inset var(--hair) 0 0 rgba(255, 255, 255, 0.145),
            inset calc(-1 * var(--hair)) 0 0 rgba(255, 255, 255, 0.125),
            inset 0 calc(-1 * var(--hair)) 0 rgba(255, 255, 255, 0.17),
            inset 0 var(--hair) 0 rgba(255, 255, 255, 0.03);
          overflow: hidden;
          z-index: 3;
        }

        .nexeus-finner {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: var(--fw);
          height: 100%;
        }

        .nexeus-brandrow {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .nexeus-mark {
          left: calc(26.6 * var(--u));
          top: calc(36.2 * var(--u));
          width: calc(25.4 * var(--u));
          height: calc(25.4 * var(--u));
        }

        .nexeus-wordmark {
          left: calc(62.8 * var(--u));
          top: calc(36.0 * var(--u));
          font-size: calc(23.4 * var(--u));
          font-weight: 400;
          letter-spacing: calc(0.2808 * var(--u));
          color: #fff;
          white-space: nowrap;
        }

        .nexeus-tagline {
          left: calc(26.6 * var(--u));
          top: calc(73.0 * var(--u));
          width: calc(274 * var(--u));
          font-size: calc(13.5 * var(--u));
          font-weight: var(--fw-medium);
          line-height: calc(17.4 * var(--u));
          letter-spacing: calc(-0.18576 * var(--u));
          color: var(--text-muted);
          margin: 0;
        }

        .nexeus-nav {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .nexeus-col {
          top: calc(37.0 * var(--u));
        }

        .nexeus-col.c1 { left: calc(938.4 * var(--u)); }
        .nexeus-col.c2 { left: calc(1185.0 * var(--u)); }
        .nexeus-col.c3 { left: calc(1450.6 * var(--u)); }

        .nexeus-col h3 {
          font-size: calc(15.84 * var(--u));
          font-weight: 500;
          letter-spacing: calc(0.183744 * var(--u));
          color: var(--text-heading);
          white-space: nowrap;
          margin: 0;
        }

        .nexeus-col ul {
          position: absolute;
          top: calc(31.0 * var(--u));
          left: 0;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nexeus-col li {
          line-height: calc(25.27 * var(--u));
          white-space: nowrap;
        }

        .nexeus-col a {
          font-size: calc(15.55 * var(--u));
          font-weight: 400;
          letter-spacing: calc(-0.07775 * var(--u));
          color: #fff;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .nexeus-col a:hover {
          opacity: 0.6;
        }

        .nexeus-rule {
          left: calc(26.6 * var(--u));
          width: calc(1546.8 * var(--u));
          top: calc(207.5 * var(--u));
          height: max(1px, calc(1 * var(--u)));
          background: rgba(255, 255, 255, 0.42);
          transform-origin: left center;
        }

        .nexeus-footrow {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .nexeus-legal {
          left: calc(26.6 * var(--u));
          top: calc(271.2 * var(--u));
          font-size: calc(14.0 * var(--u));
          font-weight: var(--fw-medium);
          letter-spacing: calc(-0.30422 * var(--u));
          color: var(--text-muted);
          white-space: nowrap;
          margin: 0;
        }

        .nexeus-socials {
          left: calc(1375.8 * var(--u));
          top: calc(264.4 * var(--u));
          display: flex;
          gap: calc(47.1 * var(--u));
          align-items: center;
        }

        .nexeus-socials a {
          width: calc(30 * var(--u));
          height: calc(30 * var(--u));
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
          text-decoration: none;
        }

        .nexeus-socials a:hover {
          opacity: 0.68;
        }

        .nexeus-socials svg {
          width: 100%;
          height: 100%;
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

        /* Responsive: Narrow and Mobile (max-aspect-ratio: 5/4) */
        @media (max-aspect-ratio: 5/4) {
          .nexeus-root {
            --u: calc(100vw / 780);
            --pad: clamp(20px, 5.6vw, 56px);
            height: auto !important;
            min-height: 100vh;
          }

          .nexeus-viewport {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow: visible;
          }

          .nexeus-bg {
            position: absolute;
            inset: 0;
          }

          .nexeus-bg video {
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 106%;
            min-width: 100%;
            min-height: 106%;
            object-fit: cover;
            object-position: 80% bottom;
          }

          .nexeus-scrim {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: min(56vh, calc(560 * var(--u)));
            background: linear-gradient(180deg, rgba(6, 22, 34, 0.42) 0%, rgba(6, 22, 34, 0.26) 50%, rgba(6, 22, 34, 0) 100%);
            z-index: 1;
          }

          .nexeus-stage {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            padding-left: var(--pad);
            padding-right: var(--pad);
            pointer-events: auto;
            z-index: 2;
          }

          .nexeus-abs {
            position: static;
          }

          .nexeus-eyebrow {
            margin-top: clamp(28px, 7vh, 72px);
            font-size: clamp(10.5px, 2.9vw, 15px);
            letter-spacing: 0.09em;
            white-space: normal;
          }

          .nexeus-headline-mask {
            margin-top: clamp(10px, 1.4vh, 18px);
          }

          .nexeus-headline {
            font-size: clamp(34px, 9.4vw, 72px);
            line-height: 1.04;
            white-space: normal;
            text-wrap: balance;
          }

          .nexeus-lede {
            width: 100%;
            max-width: 38ch;
            font-size: clamp(14.5px, 3.9vw, 18px);
            line-height: 1.42;
            margin-top: clamp(14px, 2vh, 22px);
            letter-spacing: normal;
          }

          .nexeus-cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: auto;
            min-width: clamp(140px, 40vw, 190px);
            height: clamp(42px, 6vh, 52px);
            padding: 0 clamp(20px, 6vw, 34px);
            border-radius: 4px;
            margin-top: clamp(20px, 3.2vh, 32px);
            align-self: flex-start;
          }

          .nexeus-footer-bar {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            height: auto;
            margin-top: clamp(40px, 6vh, 80px);
            padding: clamp(22px, 3.4vh, 40px) var(--pad) clamp(20px, 3vh, 34px);
            background: linear-gradient(180deg, rgba(14, 9, 4, 0.58), rgba(26, 16, 5, 0.60) 55%, rgba(52, 36, 12, 0.66));
            backdrop-filter: blur(28px) saturate(0.9);
            -webkit-backdrop-filter: blur(28px) saturate(0.9);
            box-shadow: none;
            z-index: 2;
          }

          .nexeus-finner {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
          }

          .nexeus-brandrow {
            position: static;
            display: flex;
            align-items: center;
            gap: clamp(9px, 2.6vw, 14px);
            width: auto;
            height: auto;
          }

          .nexeus-brandrow .nexeus-mark {
            position: static;
            width: clamp(22px, 5vw, 28px);
            height: clamp(22px, 5vw, 28px);
          }

          .nexeus-brandrow .nexeus-wordmark {
            position: static;
            font-size: clamp(20px, 4.5vw, 26px);
          }

          .nexeus-tagline {
            position: static;
            width: 100%;
            max-width: 44ch;
            font-size: clamp(12px, 2.8vw, 14px);
            line-height: 1.4;
            margin-top: clamp(12px, 1.8vh, 18px);
          }

          .nexeus-nav {
            position: static;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: clamp(14px, 3.4vw, 30px);
            margin-top: clamp(24px, 3vh, 36px);
            width: auto;
            height: auto;
          }

          .nexeus-col {
            position: static;
            top: auto;
            left: auto !important;
          }

          .nexeus-col h3 {
            font-size: clamp(13px, 2.6vw, 15px);
            letter-spacing: 0.12em;
            margin-bottom: clamp(10px, 1.5vh, 14px);
          }

          .nexeus-col ul {
            position: static;
          }

          .nexeus-col li {
            line-height: 1.6;
          }

          .nexeus-col a {
            font-size: clamp(13px, 2.5vw, 15px);
            display: inline-block;
          }

          .nexeus-rule {
            position: static;
            width: 100%;
            margin: clamp(22px, 3vh, 32px) 0 clamp(16px, 2.2vh, 24px);
            left: auto;
            top: auto;
          }

          .nexeus-footrow {
            position: static;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
            width: auto;
            height: auto;
          }

          .nexeus-legal {
            position: static;
            font-size: clamp(12px, 2.4vw, 14px);
            white-space: normal;
            left: auto;
            top: auto;
          }

          .nexeus-socials {
            position: static;
            display: flex;
            gap: clamp(16px, 4vw, 28px);
            left: auto;
            top: auto;
          }

          .nexeus-socials a {
            width: clamp(20px, 4vw, 26px);
            height: clamp(20px, 4vw, 26px);
          }
        }

        /* Mobile layout: max-width 648px */
        @media (max-aspect-ratio: 5/4) and (max-width: 648px) {
          .nexeus-headline {
            font-size: clamp(32px, 10.2vw, 56px);
            max-width: 15ch;
            text-wrap: balance;
          }

          .nexeus-lede {
            max-width: 34ch;
          }

          .nexeus-nav {
            grid-template-columns: repeat(2, 1fr);
          }

          .nexeus-col.c3 {
            grid-column: 1 / -1;
          }

          .nexeus-col.c3 ul {
            columns: 2;
          }

          .nexeus-col a {
            display: inline-block;
            padding-block: clamp(9px, 1.1vh, 11px);
          }

          .nexeus-footrow {
            flex-wrap: nowrap;
          }

          .nexeus-legal {
            white-space: nowrap;
          }

          .nexeus-socials {
            flex: none;
          }
        }
      `}</style>

      <div className="nexeus-viewport">
        {/* Background Alpine Video */}
        <div className="nexeus-bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/nexeus-footer-poster.webp"
            aria-label="Painted alpine panorama: a lone hiker with a pink backpack faces a snow-capped peak above a sea of clouds"
          >
            <source src="/nexeus-footer-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient Scrim */}
        <div className="nexeus-scrim" />

        {/* Stage Content */}
        <div className="nexeus-stage">
          <p className="nexeus-eyebrow nexeus-abs">Ready when you are</p>
          <div className="nexeus-headline-mask nexeus-abs">
            <h2 className="nexeus-headline">Build your future now</h2>
          </div>
          <p className="nexeus-lede nexeus-abs">
            From scalable cloud architectures and modern web apps to serverless backend systems, everything you need to move forward starts right here.
          </p>
          <a
            href="#contact"
            onClick={handleCtaClick}
            className="nexeus-cta nexeus-abs"
          >
            <span>Take Control</span>
          </a>
        </div>

        {/* Glassmorphic Footer Bar */}
        <footer className="nexeus-footer-bar">
          <div className="nexeus-finner">
            {/* Brand Logo & Wordmark */}
            <div className="nexeus-brandrow nexeus-abs">
              <svg
                className="nexeus-mark nexeus-abs"
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
              <span className="nexeus-wordmark nexeus-abs">Nexeus</span>
            </div>

            <p className="nexeus-tagline nexeus-abs">
              Change your future today using high-performance engineering and modern systems. Everything you need starts here.
            </p>

            {/* Navigation Columns */}
            <nav className="nexeus-nav" aria-label="Footer Navigation">
              <div className="nexeus-col c1 nexeus-abs">
                <h3>SOLUTIONS</h3>
                <ul>
                  <li><a href="#projects">Monarc SaaS ERP</a></li>
                  <li><a href="#projects">CloudedHealth Microservices</a></li>
                  <li><a href="#projects">CMRVibeWaves Portal</a></li>
                  <li><a href="#projects">Road Safety AI Vision</a></li>
                </ul>
              </div>

              <div className="nexeus-col c2 nexeus-abs">
                <h3>CAPABILITIES</h3>
                <ul>
                  <li><a href="#stack">React.js & Node.js</a></li>
                  <li><a href="#stack">AWS Serverless & S3</a></li>
                  <li><a href="#stack">Java & Spring Boot</a></li>
                  <li><a href="#stack">MongoDB & DynamoDB</a></li>
                </ul>
              </div>

              <div className="nexeus-col c3 nexeus-abs">
                <h3>RESOURCES</h3>
                <ul>
                  <li><a href={personalInfo.resumePdf} target="_blank" rel="noopener noreferrer">Curriculum Vitae</a></li>
                  <li><a href="#experience">Internship Experience</a></li>
                  <li><a href="#education">BCA Cloud Degree (8.1 CGPA)</a></li>
                  <li><a href="#contact">Direct Inquiry</a></li>
                </ul>
              </div>
            </nav>

            <div className="nexeus-rule nexeus-abs" />

            {/* Bottom Row */}
            <div className="nexeus-footrow nexeus-abs">
              <p className="nexeus-legal nexeus-abs">
                ® 2026 Nexeus · Praveen P · Protocol 08. All rights reserved.
              </p>
              <div className="nexeus-socials nexeus-abs">
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
