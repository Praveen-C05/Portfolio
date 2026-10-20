import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ isLoaded = true }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Responsive breakpoint tracking (< 768px -> Phone variant)
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll tracking for progress and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      const sections = ["hero", "about", "stack", "projects", "experience", "education", "contact"];
      const scrollPos = winScroll + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="framer-8v007w-container"
      data-framer-appear-id="8v007w"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-24px)",
        willChange: "transform",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <nav
        className={`framer-mxzXr framer-Nbf7m framer-s98ecn ${
          isMobile
            ? isMobileOpen
              ? "framer-v-e7vfwq"
              : "framer-v-1ol3sqn"
            : "framer-v-s98ecn"
        }`}
        data-framer-name={isMobile ? "Phone" : "Desktop"}
        style={{
          backgroundColor: "rgb(0, 0, 0)",
          width: isMobile ? "100%" : "auto",
          borderBottomLeftRadius: "18px",
          borderBottomRightRadius: "18px",
          transform: "none",
          transformOrigin: "50% 50% 0px",
        }}
      >
        {/* Subtle reading progress border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none rounded-b-[18px]"
          style={{ opacity: scrollProgress > 1 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#B8FF45] via-[#78d2ff] to-[#B8FF45] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Content Container */}
        <div
          className="framer-18gbe84"
          data-framer-name="Content"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
        >
          {/* Header Bar Row (Logo on Left, Menu Icon or Desktop Links on Right) */}
          <div
            className="framer-1qxc2wt"
            data-framer-name="Left"
            style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
          >
            {/* Logo Link */}
            <a
              className="framer-1hmaiy framer-1h1avxg group"
              data-framer-name="Logo"
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            >
              {/* App Icon (30x30 with 8px radius) */}
              <div
                className="framer-197y5gw group-hover:scale-105 transition-transform"
                data-framer-name="App icon"
                style={{
                  borderRadius: "8px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    inset: "0px",
                  }}
                >
                  <img
                    decoding="async"
                    width="1024"
                    height="1024"
                    sizes="30px"
                    src="/app-icon.svg"
                    alt="Praveen P"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center center",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Brand Text */}
              <div
                className="framer-1tgpjgm"
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <p
                  dir="auto"
                  className="framer-text group-hover:text-[#B8FF45] transition-colors"
                  style={{
                    fontFamily: '"Inter Display", "Inter", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px",
                    margin: 0,
                  }}
                >
                  Praveen P
                </p>
              </div>
            </a>

            {/* Mobile View: Animated 3-Bar Menu Icon */}
            {isMobile && (
              <div
                className="framer-mzn26x-container"
                data-framer-name="Menu Icon"
                name="Menu Icon"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
                role="button"
                aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileOpen}
              >
                <div
                  name="Menu Icon"
                  className={`framer-sbalG framer-mabdx8 framer-v-mabdx8 ${isMobileOpen ? "is-open" : ""}`}
                  data-framer-name={isMobileOpen ? "Close" : "Menu"}
                  data-highlight="true"
                  tabIndex={0}
                  style={{
                    height: "100%",
                    width: "100%",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  }}
                >
                  <div
                    className="framer-16op75y"
                    data-framer-name="Bottom"
                    style={{
                      backgroundColor: isMobileOpen ? "rgb(255, 255, 255)" : "rgb(150, 150, 150)",
                      borderRadius: "10px",
                      transformOrigin: "50% 50% 0px",
                      willChange: "transform",
                    }}
                  />
                  <div
                    className="framer-4ih5r9"
                    data-framer-name="Center"
                    style={{
                      backgroundColor: "rgb(150, 150, 150)",
                      borderRadius: "10px",
                      transformOrigin: "50% 50% 0px",
                    }}
                  />
                  <div
                    className="framer-9mx5jt"
                    data-framer-name="Top"
                    style={{
                      backgroundColor: isMobileOpen ? "rgb(255, 255, 255)" : "rgb(150, 150, 150)",
                      borderRadius: "10px",
                      transformOrigin: "50% 50% 0px",
                      willChange: "transform",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Nav Links: Shown horizontally on Desktop, or vertically when expanded on Mobile */}
          {(!isMobile || isMobileOpen) && (
            <div
              className={`framer-m1k0id ${isMobile ? "flex flex-col w-full animate-fade-in" : "flex items-center"}`}
              data-framer-name="Right"
              style={{ opacity: 1 }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <div
                    key={link.name}
                    className="framer-cvt8ml w-full md:w-auto"
                    data-framer-component-type="RichTextContainer"
                    style={{
                      opacity: isActive ? 1 : 0.6,
                      transform: "none",
                      transition: "opacity 0.2s ease",
                    }}
                  >
                    <p
                      dir="auto"
                      className="framer-text"
                      style={{
                        fontFamily: '"Inter Display", "Inter", sans-serif',
                        fontSize: isMobile ? "16px" : "14px",
                        fontWeight: isActive ? 600 : 500,
                        letterSpacing: "-0.02em",
                        color: "rgb(255, 255, 255)",
                        margin: 0,
                      }}
                    >
                      <a
                        className={`framer-text hover:opacity-100 transition-all flex items-center justify-between ${
                          isMobile ? "py-2 px-1 text-white/80 hover:text-white" : ""
                        }`}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        style={{
                          color: isActive ? "#B8FF45" : "inherit",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        <span>{link.name}</span>
                        {isMobile && (
                          <span className="text-xs font-mono opacity-40">→</span>
                        )}
                      </a>
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* CTA Button: Shown on Desktop, or at bottom of drawer when expanded on Mobile */}
          {(!isMobile || isMobileOpen) && (
            <div
              className={`framer-1zb5hk-container ${isMobile ? "w-full pt-1 animate-fade-in" : ""}`}
              style={{ opacity: 1 }}
            >
              <a
                className="framer-2DWFg framer-1kia4ir framer-v-oe801e framer-8s8t8s group"
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                data-framer-name="Small"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: "8px",
                  opacity: 1,
                  willChange: "auto",
                }}
              >
                <div className="framer-o08yso" style={{ opacity: 1 }}>
                  <div
                    data-framer-component-type="SVG"
                    className="framer-1pjc4qm"
                    aria-hidden="true"
                    style={{
                      imageRendering: "pixelated",
                      flexShrink: 0,
                      backgroundSize: "100% 100%",
                      backgroundImage:
                        'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 12.054 14.923%22 overflow=%22visible%22><path d=%22M 11.669 5.088 C 11.583 5.155 10.067 6.016 10.067 7.931 C 10.067 10.146 11.996 10.93 12.054 10.949 C 12.045 10.997 11.747 12.022 11.036 13.067 C 10.403 13.986 9.741 14.904 8.734 14.904 C 7.727 14.904 7.468 14.315 6.306 14.315 C 5.173 14.315 4.77 14.923 3.85 14.923 C 2.929 14.923 2.286 14.073 1.547 13.028 C 0.691 11.801 0 9.895 0 8.086 C 0 5.185 1.871 3.646 3.713 3.646 C 4.692 3.646 5.508 4.294 6.122 4.294 C 6.707 4.294 7.619 3.607 8.733 3.607 C 9.155 3.607 10.671 3.646 11.669 5.088 Z M 8.204 2.379 C 8.664 1.828 8.99 1.064 8.99 0.3 C 8.99 0.194 8.981 0.087 8.962 0 C 8.213 0.028 7.322 0.503 6.784 1.131 C 6.362 1.615 5.968 2.379 5.968 3.154 C 5.968 3.27 5.988 3.386 5.996 3.424 C 6.044 3.433 6.121 3.443 6.198 3.443 C 6.87 3.443 7.715 2.989 8.204 2.379 Z%22 fill=%22rgb(0, 0, 0)%22></path></svg>")',
                      opacity: 1,
                    }}
                  />
                </div>
                <div
                  className="framer-1sli5vh"
                  data-framer-component-type="RichTextContainer"
                  style={{ transform: "none", opacity: 1 }}
                >
                  <p
                    dir="auto"
                    className="framer-text"
                    style={{
                      fontFamily: '"Inter Display", "Inter", sans-serif',
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "1.4em",
                      margin: 0,
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Download
                  </p>
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Concave Inverted Corner Wings */}
        {/* Right Wing */}
        <div
          className="framer-1v4oh4y"
          style={{ transform: "none", transformOrigin: "50% 50% 0px", opacity: 1 }}
        >
          <div
            data-framer-component-type="SVG"
            className="framer-1ynw6wm"
            aria-hidden="true"
            style={{
              imageRendering: "pixelated",
              flexShrink: 0,
              backgroundSize: "100% 100%",
              backgroundImage:
                'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 20 20%22 overflow=%22visible%22><path d=%22M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z%22 fill=%22rgb(0, 0, 0)%22></path></svg>")',
              transform: "none",
              transformOrigin: "50% 50% 0px",
              opacity: 1,
            }}
          />
        </div>

        {/* Left Wing (Rotated 90deg) */}
        <div
          className="framer-rnb6d7"
          style={{ transform: "none", transformOrigin: "50% 50% 0px", opacity: 1 }}
        >
          <div
            data-framer-component-type="SVG"
            className="framer-226viv"
            aria-hidden="true"
            style={{
              imageRendering: "pixelated",
              flexShrink: 0,
              backgroundSize: "100% 100%",
              backgroundImage:
                'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 20 20%22 overflow=%22visible%22><path d=%22M 0 0 L 20 0 C 8.954 0 0 8.954 0 20 Z%22 fill=%22rgb(0, 0, 0)%22></path></svg>")',
              transform: "rotate(90deg)",
              transformOrigin: "50% 50% 0px",
              opacity: 1,
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
