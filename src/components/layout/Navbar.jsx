import React, { useEffect, useState } from "react";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

const navLinks = [
  { name: "About", href: "#about", tag: "/01" },
  { name: "Stack", href: "#stack", tag: "/02" },
  { name: "Work", href: "#projects", tag: "/03" },
  { name: "Experience", href: "#experience", tag: "/04" },
  { name: "Education", href: "#education", tag: "/05" },
  { name: "Contact", href: "#contact", tag: "/06" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 320);

      // Determine active section
      const sections = ["hero", "about", "stack", "projects", "experience", "education", "contact"];
      const scrollPos = winScroll + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Scroll Progress Bar (shown when scrolled) */}
      <div className={`fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-[#1B2022] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div
          className="h-full bg-[#B8FF45] shadow-[0_0_10px_#B8FF45] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar Bar (Slides down after scrolling past hero) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${isScrolled
            ? "py-3 bg-[#101315]/90 backdrop-blur-xl border-b border-[#D9E0DF]/10 shadow-2xl shadow-black/60 translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Brand Logo & Protocol 08 Meta */}
          <a
            href="#hero"
            className="flex items-center gap-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF45] rounded-md px-1"
          >
            <div className="w-2 h-2 rounded-full bg-[#B8FF45] shadow-[0_0_8px_#B8FF45] group-hover:scale-125 transition-transform" />
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#F4F6F2] group-hover:text-[#B8FF45] transition-colors">
                PRAVEEN P
              </span>
            </div>
            <span className="hidden md:inline-block w-px h-3 bg-[#D9E0DF]/20 ml-1" />
            <span className="hidden md:inline text-[11px] font-mono uppercase tracking-wider text-[#8D9996]">
              Cloud & Full Stack
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href.replace("#", "") === activeSection;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-all duration-200 ${isActive
                      ? "text-[#B8FF45] font-semibold"
                      : "text-[#8D9996] hover:text-[#F4F6F2]"
                    }`}
                >
                  <span className="text-[10px] text-[#8D9996]/60 group-hover:text-[#B8FF45] transition-colors">
                    {link.tag}
                  </span>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#B8FF45] ml-0.5" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Résumé CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider text-[#F4F6F2] border border-[#D9E0DF]/25 bg-[#1B2022]/80 hover:bg-[#1B2022] hover:border-[#B8FF45] hover:text-[#B8FF45] transition-all duration-200 shadow-sm"
              data-cursor="RESUME"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RÉSUMÉ</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#D9E0DF]/15 text-[#F4F6F2] hover:border-[#B8FF45] transition-colors"
            aria-label={isMobileOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {isMobileOpen ? <X className="w-5 h-5 text-[#B8FF45]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 bg-[#101315]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between px-6 pt-20 pb-8 overflow-y-auto ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9E0DF]/10">
            <p className="text-[11px] font-mono tracking-widest text-[#8D9996] uppercase">
              // Navigation Architecture
            </p>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-xs font-mono px-3 py-1 rounded-full border border-[#D9E0DF]/20 text-[#F4F6F2] hover:border-[#B8FF45] hover:text-[#B8FF45] transition-colors"
            >
              CLOSE ✕
            </button>
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center justify-between text-xl sm:text-2xl font-bold tracking-tight text-[#F4F6F2] hover:text-[#B8FF45] transition-colors py-2.5 border-b border-[#D9E0DF]/10"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#8D9996]">{link.tag}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#D9E0DF]/10 space-y-3.5">
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs tracking-wider uppercase bg-[#B8FF45] text-[#101315] shadow-[0_0_20px_rgba(184,255,69,0.3)]"
          >
            <FileDown className="w-4 h-4" />
            <span>DOWNLOAD RÉSUMÉ</span>
          </a>
          <div className="flex items-center justify-between text-xs font-mono text-[#8D9996]">
            <span>Bengaluru, India</span>
            <span>PORTFOLIO / 2026</span>
          </div>
        </div>
      </div>
    </>
  );
};
