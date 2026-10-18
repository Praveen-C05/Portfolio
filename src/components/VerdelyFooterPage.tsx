"use client";

import React, { useEffect, useRef, useState } from "react";

export default function VerdelyFooterPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      setCoords({ x: normX, y: normY });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("pointermove", handlePointerMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("pointermove", handlePointerMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="verdely-page"
      style={
        {
          "--mouse-x": coords.x,
          "--mouse-y": coords.y,
        } as React.CSSProperties
      }
    >
      <style>{styles}</style>

      {/* UPPER LANDSCAPE WRAPPER */}
      <div className="verdely-landscape-wrapper">
        {/* Soft Glowing Sky */}
        <div className="verdely-sky-glow" />

        {/* Remote Sun Glow */}
        <div className="verdely-sun-glow" />

        {/* Mist Bands */}
        <div className="verdely-mist mist-left" />
        <div className="verdely-mist mist-right" />

        {/* Flying Birds Group */}
        <svg
          className="verdely-birds-svg"
          viewBox="0 0 160 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bird 1 */}
          <path
            className="bird-path bird-1"
            d="M8 24 Q18 12 28 22 Q38 12 48 24"
            stroke="#3d1f35"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bird 2 */}
          <path
            className="bird-path bird-2"
            d="M68 38 Q78 28 88 36 Q98 28 108 38"
            stroke="#3d1f35"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bird 3 */}
          <path
            className="bird-path bird-3"
            d="M118 16 Q128 8 138 15 Q148 8 158 16"
            stroke="#3d1f35"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Landscape Image with Custom Filters & Breathing Animation */}
        <img
          src="https://cdn.pixabay.com/photo/2026/04/28/22/56/22-56-09-389_1280.png"
          alt="Environmental mountain landscape"
          className="verdely-landscape-img"
          draggable={false}
        />

        {/* Dual Color Overlays for Soft Coral/Warm Atmosphere */}
        <div className="verdely-landscape-overlay vertical-overlay" />
        <div className="verdely-landscape-overlay horizontal-overlay" />
      </div>

      {/* FOREGROUND HILL LAYERS */}
      <div className="verdely-hill hill-back" />
      <div className="verdely-hill hill-middle" />
      <div className="verdely-hill hill-front" />

      {/* FLOATING LEAVES */}
      <div className="verdely-leaves-container" aria-hidden="true">
        <span className="verdely-leaf leaf-1" />
        <span className="verdely-leaf leaf-2" />
        <span className="verdely-leaf leaf-3" />
        <span className="verdely-leaf leaf-4" />
        <span className="verdely-leaf leaf-5" />
        <span className="verdely-leaf leaf-6" />
      </div>

      {/* MAIN HEADLINE AREA */}
      <header className="verdely-headline-area">
        <div className="verdely-eyebrow">
          <span className="verdely-eyebrow-line" />
          <span className="verdely-eyebrow-text">Built for tomorrow</span>
        </div>
        <h1 className="verdely-heading">
          <span className="heading-line">Small ideas can</span>
          <span className="heading-line">grow into something</span>
          <span className="heading-line">extraordinary.</span>
        </h1>
      </header>

      {/* FOOTER CONTENT */}
      <footer className="verdely-footer">
        <div className="verdely-footer-grid">
          {/* Section 1: Brand & Copyright */}
          <div className="verdely-brand-block">
            <a href="#brand" className="verdely-brand">
              <svg
                className="verdely-logo-svg"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="40"
                  height="40"
                  rx="9"
                  stroke="#c7e99d"
                  strokeWidth="2.5"
                />
                {/* Vertical Stem */}
                <path
                  d="M22 34V10"
                  stroke="#c7e99d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Upper-left leaf */}
                <path
                  d="M22 17C15 17 12 12 12 12C12 12 17 22 22 22"
                  stroke="#c7e99d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Lower-right leaf */}
                <path
                  d="M22 25C29 25 32 20 32 20C32 20 27 30 22 30"
                  stroke="#c7e99d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="verdely-brand-name">verdely</span>
            </a>

            <div className="verdely-copyright">
              <p className="copyright-main">Copyright © 2026</p>
              <p className="copyright-sub">Make space for better ideas.</p>
            </div>
          </div>

          {/* Section 2: Three Navigation Columns */}
          <nav className="verdely-nav-section" aria-label="Footer Navigation">
            <div className="verdely-nav-group">
              <a href="#overview" className="verdely-nav-link">
                <span className="nav-line" />
                <span className="nav-text">Overview</span>
              </a>
              <a href="#approach" className="verdely-nav-link">
                <span className="nav-line" />
                <span className="nav-text">Our approach</span>
              </a>
            </div>

            <div className="verdely-nav-group">
              <a href="#field-journal" className="verdely-nav-link">
                <span className="nav-line" />
                <span className="nav-text">Field journal</span>
              </a>
              <a href="#privacy" className="verdely-nav-link">
                <span className="nav-line" />
                <span className="nav-text">Privacy</span>
              </a>
            </div>

            <div className="verdely-nav-group group-three">
              <a href="#community" className="verdely-nav-link">
                <span className="nav-line" />
                <span className="nav-text">Community</span>
              </a>
              <a href="#resources" className="verdely-nav-link">
                <span className="nav-line" />
                <span className="nav-text">Resources</span>
              </a>
            </div>
          </nav>

          {/* Section 3: Contact Button */}
          <div className="verdely-contact-wrap">
            <a href="#contact" className="verdely-contact-btn">
              <span className="btn-bg-shimmer" />
              <span className="btn-label">START A PROJECT</span>
              <span className="btn-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* BOTTOM DIVIDER AND SOCIAL LINKS */}
        <div className="verdely-bottom-row">
          <div className="verdely-divider-track">
            <div className="verdely-divider-line" />
            <div className="verdely-divider-glow" />
          </div>

          <div className="verdely-social-links">
            <a href="#x" className="verdely-social-item" aria-label="X">
              X
            </a>
            <a
              href="#instagram"
              className="verdely-social-item social-svg-wrap"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#linkedin" className="verdely-social-item" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap');

:root {
  --dark-teal: #075458;
  --deep-teal: #06494d;
  --cream: #f6f1dd;
  --green: #76cf6a;
  --coral: #ff907d;
  --mouse-x: 0;
  --mouse-y: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.verdely-page {
  --dark-teal: #075458;
  --deep-teal: #06494d;
  --cream: #f6f1dd;
  --green: #76cf6a;
  --coral: #ff907d;
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  isolation: isolate;
  background-color: #fbe6db;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--cream, #f6f1dd);
  user-select: none;
  display: block;
}

/* ---------------------------------------------------
   UPPER LANDSCAPE
--------------------------------------------------- */
.verdely-landscape-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66%;
  overflow: hidden;
  z-index: 1;
  transition: transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translate(calc(var(--mouse-x, 0) * -10px), calc(var(--mouse-y, 0) * -6px));
}

.verdely-sky-glow {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 50% 31%, rgba(255, 245, 175, 0.9) 0%, rgba(255, 225, 170, 0.45) 40%, transparent 72%),
    linear-gradient(180deg, #fffaf5 0%, #ffe8dc 45%, #f9a695 78%, #e88775 100%);
  z-index: 1;
}

.verdely-sun-glow {
  position: absolute;
  top: 24%;
  left: 50%;
  width: max(34vw, 470px);
  height: max(34vw, 470px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 252, 215, 0.75) 0%, rgba(255, 238, 170, 0.35) 45%, transparent 70%);
  filter: blur(28px);
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
  animation: sunPulse 6s ease-in-out infinite alternate;
}

.verdely-landscape-img {
  position: absolute;
  top: -6%;
  left: -3%;
  width: 106%;
  height: 112%;
  object-fit: cover;
  object-position: center 55%;
  pointer-events: none;
  filter: hue-rotate(318deg) saturate(0.72) brightness(1.14) contrast(0.88);
  z-index: 3;
  animation: landscapeBreathing 18s ease-in-out infinite alternate;
}

.verdely-landscape-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: color;
  z-index: 4;
}

.vertical-overlay {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 144, 125, 0.42) 38%,
    rgba(118, 207, 106, 0.22) 74%,
    var(--deep-teal, #06494d) 100%
  );
}

.horizontal-overlay {
  background: linear-gradient(
    90deg,
    rgba(255, 192, 203, 0.52) 0%,
    rgba(255, 229, 210, 0.45) 50%,
    rgba(118, 207, 106, 0.42) 100%
  );
}

/* ---------------------------------------------------
   MIST BANDS
--------------------------------------------------- */
.verdely-mist {
  position: absolute;
  height: 64px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.45);
  pointer-events: none;
  z-index: 5;
}

.mist-left {
  top: 18%;
  left: 3%;
  width: 42%;
  filter: blur(34px);
  animation: mistMove 22s ease-in-out infinite alternate;
}

.mist-right {
  top: 26%;
  right: 3%;
  width: 37%;
  filter: blur(30px);
  animation: mistMoveReverse 26s ease-in-out infinite alternate;
}

/* ---------------------------------------------------
   FLYING BIRDS
--------------------------------------------------- */
.verdely-birds-svg {
  position: absolute;
  top: 17%;
  left: 38%;
  width: clamp(100px, 11vw, 190px);
  height: auto;
  z-index: 6;
  pointer-events: none;
  animation: birdsTravel 12s ease-in-out infinite alternate;
}

.bird-1 {
  transform-origin: 28px 20px;
  animation: birdFlap 2.1s ease-in-out infinite alternate;
}

.bird-2 {
  transform-origin: 88px 34px;
  animation: birdFlap 2.6s ease-in-out infinite alternate;
}

.bird-3 {
  transform-origin: 138px 14px;
  animation: birdFlap 2.3s ease-in-out infinite alternate;
}

/* ---------------------------------------------------
   FOREGROUND HILL LAYERS
--------------------------------------------------- */
.verdely-hill {
  position: absolute;
  width: 106%;
  left: -3%;
  pointer-events: none;
  transition: transform 920ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hill-back {
  top: 42%;
  height: 30%;
  background: rgba(92, 175, 82, 0.92);
  -webkit-clip-path: polygon(
    0% 72%, 9% 56%, 19% 64%, 28% 44%, 39% 58%, 51% 37%, 
    63% 54%, 74% 34%, 86% 49%, 94% 40%, 100% 52%, 100% 100%, 0% 100%
  );
  clip-path: polygon(
    0% 72%, 9% 56%, 19% 64%, 28% 44%, 39% 58%, 51% 37%, 
    63% 54%, 74% 34%, 86% 49%, 94% 40%, 100% 52%, 100% 100%, 0% 100%
  );
  z-index: 7;
  transform: translate(calc(var(--mouse-x, 0) * 14px), calc(var(--mouse-y, 0) * 8px));
}

.hill-middle {
  top: 47%;
  height: 29%;
  background: #196340;
  -webkit-clip-path: polygon(
    0% 55%, 12% 41%, 23% 52%, 35% 33%, 47% 48%, 59% 29%, 
    71% 45%, 83% 26%, 92% 41%, 100% 31%, 100% 100%, 0% 100%
  );
  clip-path: polygon(
    0% 55%, 12% 41%, 23% 52%, 35% 33%, 47% 48%, 59% 29%, 
    71% 45%, 83% 26%, 92% 41%, 100% 31%, 100% 100%, 0% 100%
  );
  z-index: 8;
  transform: translate(calc(var(--mouse-x, 0) * -12px), calc(var(--mouse-y, 0) * -6px));
}

.hill-front {
  top: 48%;
  bottom: 0;
  height: 52%;
  min-height: 52%;
  background: 
    radial-gradient(ellipse at 50% 16%, rgba(118, 207, 106, 0.16) 0%, transparent 62%),
    #075458;
  -webkit-clip-path: polygon(
    0% 23%, 15% 15%, 32% 21%, 50% 11%, 69% 17%, 87% 8%, 100% 14%, 100% 100%, 0% 100%
  );
  clip-path: polygon(
    0% 23%, 15% 15%, 32% 21%, 50% 11%, 69% 17%, 87% 8%, 100% 14%, 100% 100%, 0% 100%
  );
  z-index: 10;
}

/* ---------------------------------------------------
   FLOATING LEAVES
--------------------------------------------------- */
.verdely-leaves-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 12;
  overflow: hidden;
}

.verdely-leaf {
  position: absolute;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, #a4e58b 0%, #52b846 60%, #1e6922 100%);
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.45), 0 6px 12px rgba(6, 73, 77, 0.35);
  animation: leafFloat 15s ease-in-out infinite, leafOpacity 15s ease-in-out infinite;
}

.leaf-1 {
  left: 24%;
  top: 43%;
  width: 26px;
  height: 26px;
  animation-duration: 14s;
  animation-delay: -3s;
}

.leaf-2 {
  left: 39%;
  top: 57%;
  width: 38px;
  height: 38px;
  animation-duration: 17s;
  animation-delay: -8s;
}

.leaf-3 {
  left: 51%;
  top: 45%;
  width: 22px;
  height: 22px;
  animation-duration: 12s;
  animation-delay: -5s;
}

.leaf-4 {
  left: 64%;
  top: 56%;
  width: 34px;
  height: 34px;
  animation-duration: 15s;
  animation-delay: -11s;
}

.leaf-5 {
  left: 75%;
  top: 47%;
  width: 42px;
  height: 42px;
  animation-duration: 18s;
  animation-delay: -2s;
}

.leaf-6 {
  left: 85%;
  top: 60%;
  width: 28px;
  height: 28px;
  animation-duration: 13s;
  animation-delay: -9s;
}

/* ---------------------------------------------------
   MAIN HEADLINE AREA
--------------------------------------------------- */
.verdely-headline-area {
  position: absolute;
  left: clamp(34px, 4.6vw, 90px);
  bottom: clamp(245px, 27vh, 285px);
  max-width: 700px;
  z-index: 20;
  pointer-events: none;
  transition: transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1);
  transform: translate(calc(var(--mouse-x, 0) * 8px), calc(var(--mouse-y, 0) * 5px));
}

.verdely-eyebrow {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
}

.verdely-eyebrow-line {
  display: inline-block;
  width: 32px;
  height: 2px;
  background-color: var(--green, #76cf6a);
  margin-right: 13px;
  border-radius: 1px;
}

.verdely-eyebrow-text {
  font-size: clamp(10px, 1.1vw, 14px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--cream, #f6f1dd);
  opacity: 0.74;
}

.verdely-heading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--cream, #f6f1dd);
  font-size: clamp(42px, 3.9vw, 70px);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.057em;
}

.heading-line {
  display: block;
  white-space: nowrap;
}

/* ---------------------------------------------------
   FOOTER CONTENT
--------------------------------------------------- */
.verdely-footer {
  position: absolute;
  left: clamp(34px, 4.6vw, 90px);
  right: clamp(34px, 4.6vw, 90px);
  bottom: clamp(24px, 3vh, 38px);
  z-index: 30;
  pointer-events: auto;
}

.verdely-footer-grid {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(470px, 2fr) minmax(155px, auto);
  align-items: end;
  gap: clamp(35px, 4.5vw, 90px);
}

/* Brand */
.verdely-brand-block {
  display: flex;
  flex-direction: column;
}

.verdely-brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
  cursor: pointer;
}

.verdely-logo-svg {
  width: 39px;
  height: 39px;
  transition: transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
}

.verdely-brand:hover .verdely-logo-svg {
  transform: rotate(-7deg) scale(1.05);
}

.verdely-brand-name {
  color: var(--cream, #f6f1dd);
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
}

.verdely-copyright {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.copyright-main {
  font-size: 15px;
  font-weight: 400;
  color: var(--cream, #f6f1dd);
}

.copyright-sub {
  font-size: 11px;
  font-weight: 400;
  color: var(--cream, #f6f1dd);
  opacity: 0.65;
}

/* Navigation Groups */
.verdely-nav-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.verdely-nav-group {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.verdely-nav-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-line {
  display: inline-block;
  width: 2px;
  height: 19px;
  background-color: var(--green, #76cf6a);
  margin-right: 13px;
  border-radius: 1px;
  transition: height 280ms cubic-bezier(0.16, 1, 0.3, 1), background-color 280ms ease, box-shadow 280ms ease;
}

.nav-text {
  font-size: 13px;
  font-weight: 500;
  color: var(--cream, #f6f1dd);
  transition: color 280ms ease;
}

.verdely-nav-link:hover {
  transform: translateX(4px);
}

.verdely-nav-link:hover .nav-line {
  height: 25px;
  background-color: #a2f297;
  box-shadow: 0 0 8px rgba(162, 242, 151, 0.6);
}

.verdely-nav-link:hover .nav-text {
  color: #ffffff;
}

/* Contact Button */
.verdely-contact-wrap {
  display: flex;
  justify-content: flex-end;
}

.verdely-contact-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 168px;
  height: 58px;
  padding: 0 24px;
  background-color: var(--coral, #ff907d);
  color: var(--dark-teal, #075458);
  border-radius: 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.45), 0 8px 24px rgba(6, 73, 77, 0.4);
  overflow: hidden;
  gap: 14px;
  transition: transform 380ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 380ms cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-bg-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, #fff3c9 0%, #ffe9a0 100%);
  transform: translateY(100%);
  transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.btn-label {
  position: relative;
  z-index: 2;
  transition: color 320ms ease;
}

.btn-arrow {
  position: relative;
  z-index: 2;
  font-size: 15px;
  line-height: 1;
  transition: transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
}

.verdely-contact-btn:hover {
  transform: translateY(-5px);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(6, 73, 77, 0.55);
}

.verdely-contact-btn:hover .btn-bg-shimmer {
  transform: translateY(0);
}

.verdely-contact-btn:hover .btn-arrow {
  transform: translate(3px, -4px);
}

/* Bottom Divider and Social Links */
.verdely-bottom-row {
  margin-top: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.verdely-divider-track {
  position: relative;
  flex: 1;
  height: 1px;
  margin-left: clamp(245px, 24vw, 365px);
  margin-right: 28px;
  overflow: hidden;
}

.verdely-divider-line {
  position: absolute;
  inset: 0;
  background-color: var(--cream, #f6f1dd);
  opacity: 0.65;
}

.verdely-divider-glow {
  position: absolute;
  top: 0;
  left: -120px;
  width: 120px;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, #ffffff 50%, var(--green, #76cf6a) 80%, transparent 100%);
  animation: lineGlide 5s ease-in-out infinite;
}

.verdely-social-links {
  display: flex;
  align-items: center;
  gap: 21px;
}

.verdely-social-item {
  color: #78d371;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  line-height: 1;
  transition: transform 260ms ease, color 260ms ease;
}

.social-svg-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.verdely-social-item:hover {
  transform: translateY(-4px);
  color: #c7e99d;
}

/* ---------------------------------------------------
   KEYFRAME ANIMATIONS
--------------------------------------------------- */
@keyframes landscapeBreathing {
  0% {
    transform: scale(1.045) translateY(0);
  }
  100% {
    transform: scale(1.09) translateY(-1%);
  }
}

@keyframes sunPulse {
  0% {
    transform: translate(-50%, -50%) scale(0.94);
    opacity: 0.88;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.06);
    opacity: 1;
  }
}

@keyframes birdsTravel {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(25px, -12px);
  }
  100% {
    transform: translate(50px, -6px);
  }
}

@keyframes birdFlap {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5) translateY(2px);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes mistMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(38px);
  }
}

@keyframes mistMoveReverse {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-32px);
  }
}

@keyframes leafFloat {
  0% {
    transform: translateY(0) rotate(0deg) translateX(0);
  }
  33% {
    transform: translateY(40px) rotate(45deg) translateX(15px);
  }
  66% {
    transform: translateY(90px) rotate(90deg) translateX(-15px);
  }
  100% {
    transform: translateY(140px) rotate(135deg) translateX(10px);
  }
}

@keyframes leafOpacity {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.9;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

@keyframes lineGlide {
  0% {
    left: -120px;
  }
  100% {
    left: 100%;
  }
}

/* ---------------------------------------------------
   RESPONSIVE DESIGN BREAKPOINTS
--------------------------------------------------- */
@media (max-width: 1200px) {
  .verdely-headline-area {
    bottom: clamp(260px, 30vh, 310px);
  }
  .verdely-heading {
    font-size: clamp(38px, 4.2vw, 60px);
  }
  .verdely-footer-grid {
    gap: 32px;
  }
}

@media (max-width: 940px) {
  .verdely-page {
    height: 1040px;
    min-height: 1040px;
  }
  .verdely-landscape-wrapper {
    height: 53%;
  }
  .hill-back {
    top: 36%;
  }
  .hill-middle {
    top: 40%;
  }
  .hill-front {
    top: 44%;
    height: calc(56% + 4px);
    min-height: calc(56% + 4px);
  }
  .verdely-headline-area {
    top: 48%;
    bottom: auto;
    max-width: 85%;
  }
  .heading-line {
    white-space: normal;
  }
  .verdely-heading {
    font-size: clamp(40px, 7vw, 58px);
  }
  .verdely-footer-grid {
    grid-template-columns: 1fr auto;
    gap: 36px;
  }
  .verdely-brand-block {
    grid-column: 1 / 2;
  }
  .verdely-contact-wrap {
    grid-column: 2 / 3;
    justify-content: flex-end;
  }
  .verdely-nav-section {
    grid-column: 1 / -1;
    width: 100%;
    margin-top: 10px;
  }
  .verdely-divider-track {
    margin-left: 0;
  }
}

@media (max-width: 600px) {
  .verdely-page {
    height: 1220px;
    min-height: 1220px;
  }
  .verdely-landscape-wrapper {
    height: 43%;
  }
  .verdely-landscape-img {
    object-position: 58% center;
  }
  .hill-back {
    top: 29%;
  }
  .hill-middle {
    top: 33%;
  }
  .hill-front {
    top: 37%;
    height: calc(63% + 4px);
    min-height: calc(63% + 4px);
  }
  .verdely-headline-area {
    top: 42%;
    left: 24px;
    right: 24px;
    max-width: 100%;
  }
  .verdely-heading {
    font-size: clamp(40px, 12vw, 54px);
  }
  .verdely-footer {
    left: 24px;
    right: 24px;
    bottom: 24px;
  }
  .verdely-footer-grid {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 32px;
  }
  .verdely-contact-wrap {
    width: 100%;
    order: 3;
  }
  .verdely-contact-btn {
    width: 100%;
  }
  .verdely-nav-section {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    order: 2;
  }
  .verdely-nav-group.group-three {
    grid-column: 1 / -1;
    flex-direction: row;
    gap: 32px;
  }
  .verdely-bottom-row {
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    margin-top: 22px;
  }
  .verdely-divider-track {
    width: 100%;
    margin: 0;
  }
  .leaf-5,
  .leaf-6 {
    display: none;
  }
}

@media (max-width: 390px) {
  .verdely-page {
    height: 1260px;
    min-height: 1260px;
  }
  .verdely-heading {
    font-size: 39px;
  }
  .verdely-nav-section {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .verdely-nav-group.group-three {
    grid-column: auto;
    flex-direction: column;
    gap: 18px;
  }
}

/* ---------------------------------------------------
   PREFERS REDUCED MOTION ACCESSIBILITY
--------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .verdely-landscape-img,
  .verdely-sun-glow,
  .verdely-birds-svg,
  .bird-path,
  .verdely-mist,
  .verdely-leaf,
  .verdely-divider-glow {
    animation: none !important;
  }
  .verdely-landscape-wrapper,
  .verdely-hill,
  .verdely-headline-area {
    transform: none !important;
    transition: none !important;
  }
}
`;
