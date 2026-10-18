import { cn } from "@/lib/utils";
import { Menu, X, FileDown } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-[#101315]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand: Glowing "PRAVEEN P" alongside "Cloud & Full Stack Engineer" */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="font-extrabold tracking-wider text-base sm:text-lg text-white drop-shadow-[0_0_12px_rgba(184,255,69,0.5)] group-hover:text-[#B8FF45] transition-colors">
            PRAVEEN P
          </span>
          <span className="hidden sm:inline text-white/30 text-xs font-mono">|</span>
          <span className="hidden sm:inline text-xs font-medium text-[#F4F6F2]/65 tracking-wide">
            Cloud & Full Stack Engineer
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-[#F4F6F2]/75 hover:text-[#B8FF45] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action: Get Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/PraveenP_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase silver-button"
          >
            <FileDown className="w-3.5 h-3.5 text-[#B8FF45]" />
            <span>Get Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white z-50 rounded-lg bg-white/5 border border-white/10"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile dropdown nav */}
        <div
          className={cn(
            "fixed inset-0 bg-[#101315]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-6 text-lg transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-[#F4F6F2]/80 hover:text-[#B8FF45] transition-colors font-medium text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/PraveenP_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase spectral-button"
            onClick={() => setIsMenuOpen(false)}
          >
            <FileDown className="w-4 h-4" />
            <span>Get Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
