import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, ArrowRight, Copy, Github, Linkedin, Sparkles, ChevronDown } from 'lucide-react';

export const ContactSection = ({
  id = 'contact',
  onBookCallClick,
  onOurWorkClick,
}) => {
  const [copied, setCopied] = useState(false);

  const handleBookCall = () => {
    if (onBookCallClick) {
      onBookCallClick();
    } else {
      window.location.href =
        'mailto:mr5praveen55@gmail.com?subject=Engineering%20Opportunities%20%26%20Collaboration';
    }
  };

  const scrollToProjects = () => {
    if (onOurWorkClick) {
      onOurWorkClick();
    } else {
      const target = document.querySelector('#projects') || document.querySelector('#about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('mr5praveen55@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderActionButtons = () => (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
      <button
        type="button"
        onClick={handleBookCall}
        className="w-full min-[460px]:w-auto justify-center bg-[#B8FF45] text-[#101315] font-bold font-mono px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm tracking-wider uppercase rounded-xl cursor-pointer hover:bg-[#caff5c] hover:shadow-[0_0_30px_rgba(184,255,69,0.35)] transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 text-center"
        data-cursor="CONTACT"
      >
        <span>Book a Call</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={copyEmail}
        className="w-full min-[460px]:w-auto justify-center liquid-glass text-[#F4F6F2] px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-[#1B2022] hover:border-[#B8FF45]/50 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 border border-white/20 font-mono shadow-md text-center"
        data-cursor="COPY EMAIL"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-[#B8FF45]" />
            <span className="text-[#B8FF45] font-bold">Email Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-white/70" />
            <span className="truncate">mr5praveen55@gmail.com</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={scrollToProjects}
        className="w-full min-[460px]:w-auto justify-center bg-[#1B2022]/80 text-[#F4F6F2] px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-[#1B2022] hover:border-[#B8FF45]/40 hover:text-[#B8FF45] active:scale-[0.98] transition-all duration-300 border border-white/20 font-mono text-center"
        data-cursor="PROJECTS"
      >
        View Projects
      </button>

      <button
        type="button"
        onClick={scrollToFooter}
        className="w-full min-[460px]:w-auto justify-center bg-[#101315]/80 hover:bg-[#101315] hover:text-[#B8FF45] border border-white/10 px-4 py-3 sm:py-3.5 text-xs sm:text-sm rounded-xl cursor-pointer active:scale-[0.98] transition-all duration-300 font-mono flex items-center gap-1.5 text-white/70 text-center"
        data-cursor="FOOTER"
      >
        <span>Footer</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <section
      id={id}
      className="relative w-full bg-[#101315] border-t border-white/10 overflow-hidden cursor-default"
    >
      {/* Desktop View: Full-width uncropped panoramic billboard (Aspect Ratio: 3538 / 1216) */}
      <div className="hidden lg:relative lg:flex w-full aspect-[3538/1216] max-h-[85vh] items-center overflow-hidden bg-[#101315]">
        {/* The uncropped native aspect ratio image — zero cropping, zero zoom */}
        <img
          src="/cta.png"
          alt="Praveen P"
          className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none select-none z-0"
          loading="eager"
          decoding="async"
        />

        {/* Left scrim gradient to ensure high contrast for typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101315]/90 via-[#101315]/50 via-40% to-transparent pointer-events-none z-[1]" />

        {/* Top and bottom subtle blending scrims */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#101315] to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101315] to-transparent pointer-events-none z-[1]" />

        {/* Content overlaid on the left side of the banner */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 text-left">
          <div className="max-w-xl xl:max-w-2xl">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8FF45]/10 border border-[#B8FF45]/30 text-[#B8FF45] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">/07 — GET IN TOUCH · LET'S COLLABORATE</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase font-mono tracking-tight text-[#F4F6F2] mb-2 sm:mb-3 leading-[1.08]">
              LET'S BUILD <span className="text-[#B8FF45]">TOGETHER.</span>
            </h2>

            {/* Subheading */}
            <p className="text-[#D9E0DF]/90 text-sm xl:text-base font-light mb-2 font-serif italic">
              I engineer scalable applications and cloud-powered systems.
            </p>

            {/* Description */}
            <p className="text-[#8D9996] text-xs xl:text-sm font-light mb-5 max-w-lg leading-relaxed">
              Full Stack Developer with hands-on experience in scalable web applications, RESTful APIs,
              serverless architecture, and cloud technologies. Currently open to full-time engineering roles,
              internships, and technical collaborations.
            </p>

            {/* Action Buttons Row */}
            {renderActionButtons()}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet View (< 1024px): Stacked layout with 100% uncropped image banner on top */}
      <div className="block lg:hidden w-full px-4 sm:px-8 pt-12 pb-8 space-y-6">
        {/* Banner with exact native aspect ratio — no cropping, no zooming */}
        <div className="relative w-full aspect-[3538/1216] rounded-2xl overflow-hidden border border-red-500/20 shadow-2xl bg-[#101315]">
          <img
            src="/cta.png"
            alt="Praveen P"
            className="w-full h-full object-contain object-center pointer-events-none select-none"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Content section below the banner */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8FF45]/10 border border-[#B8FF45]/30 text-[#B8FF45] text-[11px] font-mono uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">/07 — GET IN TOUCH · LET'S COLLABORATE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-mono tracking-tight text-[#F4F6F2]">
            LET'S BUILD <span className="text-[#B8FF45]">TOGETHER.</span>
          </h2>

          <p className="text-[#D9E0DF]/90 text-sm font-light font-serif italic">
            I engineer scalable applications and cloud-powered systems.
          </p>

          <p className="text-[#8D9996] text-xs font-light leading-relaxed max-w-xl pb-2">
            Full Stack Developer with hands-on experience in scalable web applications, RESTful APIs,
            serverless architecture, and cloud technologies. Currently open to full-time engineering roles,
            internships, and technical collaborations.
          </p>

          {renderActionButtons()}
        </div>
      </div>

      {/* Direct Contact Details Strip across the bottom */}
      <div className="w-full border-t border-white/10 bg-[#101315] py-5 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-6 text-xs text-white/70 font-mono">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
            <span>Bengaluru, Karnataka, India</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
            <a
              href="mailto:mr5praveen55@gmail.com"
              className="hover:text-[#B8FF45] transition-colors cursor-pointer truncate"
            >
              mr5praveen55@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
            <a
              href="tel:+916362827581"
              className="hover:text-[#B8FF45] transition-colors cursor-pointer"
            >
              +91 63628 27581
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Praveen-C05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#101315]/80 hover:bg-[#101315] hover:text-[#B8FF45] border border-white/10 transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mr5praveen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#101315]/80 hover:bg-[#101315] hover:text-[#B8FF45] border border-white/10 transition-colors cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8FF45] animate-pulse" />
            <span className="text-[#B8FF45]">Available for Full-time Roles &amp; Cloud Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
