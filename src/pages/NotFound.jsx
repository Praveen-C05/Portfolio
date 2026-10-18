import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export const NotFound = () => {
  return (
    <main
      className="relative w-full min-h-[100svh] bg-black overflow-x-hidden select-none flex flex-col justify-between"
      style={{
        minHeight: "100svh",
        backgroundColor: "#000",
        fontFamily: "var(--font-geist-mono), JetBrains Mono, monospace",
      }}
    >
      {/* Background Video */}
      <video
        src="/404-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Subtle overlay vignette */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />

      {/* Header Logo */}
      <div
        className="header-logo"
        aria-label="LGPSM / 404"
        style={{
          position: "absolute",
          left: "50%",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "233px",
          height: "40px",
        }}
      >
        {/* Geometric Pixel Mark (54px x 40px) */}
        <svg
          viewBox="0 0 54 40"
          fill="none"
          width="54"
          height="40"
          aria-hidden="true"
          className="shrink-0"
        >
          <path d="M38 0H26V12H38V0Z" fill="white" />
          <path d="M54 12H38V28H54V12Z" fill="white" />
          <path d="M38 28H26V40H38V28Z" fill="white" />
          <path d="M26 12H16V22H26V12Z" fill="white" />
          <path d="M16 22H8V30H16V22Z" fill="white" />
          <path d="M16 2H6V12H16V2Z" fill="white" />
          <path d="M6 12H0V18H6V12Z" fill="white" />
        </svg>

        {/* 14px space between mark and logotype */}
        <div style={{ width: "14px" }} className="shrink-0" />

        {/* Logotype (viewBox 0 0 164.311 100, width 165px, height 40px) */}
        <svg
          viewBox="0 0 164.311 100"
          fill="none"
          width="165"
          height="40"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M122.498 37.4573H131.321L139.533 51.6222L147.772 37.4573H156.595V56.0604H152.449V37.6433L141.739 56.0604H137.354L126.617 37.6433V56.0604H122.498V37.4573ZM95.921 48.8317C92.785 48.8317 90.261 46.307 90.261 43.1445C90.261 40.0086 92.785 37.4573 95.921 37.4573H119.972V41.6031H95.921C95.071 41.6031 94.38 42.2941 94.38 43.1445C94.38 44.0215 95.071 44.7125 95.921 44.7125H114.285C117.421 44.7125 119.972 47.2372 119.972 50.3997C119.972 53.5357 117.421 56.0604 114.285 56.0604H90.261V51.9411H114.285C115.136 51.9411 115.827 51.2501 115.827 50.3997C115.827 49.5227 115.136 48.8317 114.285 48.8317H95.921ZM80.857 37.4573C84.843 37.4573 88.086 40.6995 88.086 44.7125C88.086 48.6989 84.843 51.9411 80.857 51.9411H62.254V56.0604H58.135V37.4573H80.857ZM80.83 47.7953C82.558 47.7953 83.94 46.4133 83.94 44.7125C83.94 42.985 82.558 41.6031 80.83 41.6031H62.254V47.7953H80.83ZM35.975 41.6031C33.105 41.6031 30.7927 43.9152 30.7927 46.7588C30.7927 49.629 33.105 51.9411 35.975 51.9411H51.336V48.6989H35.576V44.5796H55.482V56.0604H35.975C30.8192 56.0604 26.6734 51.9145 26.6734 46.7588C26.6734 41.6297 30.8192 37.4573 35.975 37.4573H55.482V41.6031H35.975ZM0 56.0604V37.4573H4.1192V51.9411H24.9281V56.0604H0ZM164.311 36.4177C164.311 37.7529 163.228 38.8354 161.893 38.8354C160.558 38.8354 159.475 37.7529 159.475 36.4177C159.475 35.0824 160.558 34 161.893 34C163.228 34 164.311 35.0824 164.311 36.4177Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Centered 404 Content */}
      <div
        className="content-group"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Large 404 Heading */}
        <h1
          className="heading-404"
          style={{
            margin: 0,
            padding: 0,
            paddingBottom: "12px",
            fontFamily: "var(--font-geist-mono), JetBrains Mono, monospace",
            fontWeight: 600,
            lineHeight: 1.1,
            textAlign: "center",
            backgroundImage:
              "linear-gradient(247.3282658084845deg, rgb(255, 255, 255) 2.5334%, rgba(255, 255, 255, 0.4) 93.612%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            display: "inline-block",
            overflow: "visible",
            textShadow: "none",
          }}
        >
          404
        </h1>

        {/* Thin Horizontal Divider */}
        <div
          className="divider-line"
          style={{
            height: "1px",
            backgroundColor: "#ffffff",
            flexShrink: 0,
          }}
        />

        {/* Message */}
        <p
          className="message-text"
          style={{
            margin: 0,
            padding: 0,
            fontFamily: "var(--font-geist-mono), JetBrains Mono, monospace",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#ffffff",
            textAlign: "center",
            width: "100%",
          }}
        >
          The path may be broken, but the journey isn't. Let's get you back.
        </p>

        {/* Action Button: Return Home */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/25 bg-white/10 hover:bg-white hover:text-black backdrop-blur-md text-white text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer mt-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Return Home</span>
        </Link>
      </div>

      {/* Component-scoped responsive styling */}
      <style>{`
        /* Desktop base styles */
        .header-logo {
          top: 80px;
          transform: translateX(-50%);
          transform-origin: top center;
        }

        .content-group {
          width: 483px;
          gap: 36px;
        }

        .heading-404 {
          font-size: 295.751px;
          letter-spacing: -24.6459px;
        }

        .divider-line {
          width: 425px;
        }

        .message-text {
          font-size: 24px;
          letter-spacing: -2px;
        }

        /* Responsive Mobile Behavior @ max-width: 640px */
        @media (max-width: 640px) {
          .header-logo {
            top: 32px;
            transform: translateX(-50%) scale(0.75);
            transform-origin: top center;
          }

          .content-group {
            width: min(calc(100% - 40px), 360px);
            gap: 24px;
          }

          .heading-404 {
            font-size: clamp(140px, 52vw, 200px);
            letter-spacing: -0.09em;
            height: auto;
            min-height: 0;
            padding-bottom: 8px;
          }

          .divider-line {
            width: 100%;
          }

          .message-text {
            font-size: clamp(16px, 4.5vw, 20px);
            letter-spacing: -1.3px;
          }
        }
      `}</style>
    </main>
  );
};

export default NotFound;
