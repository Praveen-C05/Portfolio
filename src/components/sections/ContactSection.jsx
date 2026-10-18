import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Check, ArrowRight, Copy, Github, Linkedin, Sparkles, ChevronDown } from 'lucide-react';

// Lazy load the Spline component for optimal loading
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const ContactSection = ({
  id = 'contact',
  onBookCallClick,
  onOurWorkClick,
}) => {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Forward pointermove directly to the Spline canvas so 3D cubes react to mouse hover,
    // while keeping pointer-events: none on the canvas so Spline never hijacks wheel/touch scroll.
    let canvas = null;
    const findCanvas = () => {
      canvas = section.querySelector('canvas');
    };
    findCanvas();

    const onPointerMove = (e) => {
      if (!canvas) {
        findCanvas();
        if (!canvas) return;
      }
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const synthetic = new PointerEvent('pointermove', {
          clientX: e.clientX,
          clientY: e.clientY,
          screenX: e.screenX,
          screenY: e.screenY,
          bubbles: true,
          cancelable: true,
          pointerType: 'mouse',
          isPrimary: true,
        });
        canvas.dispatchEvent(synthetic);
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

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

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-end bg-[#101315] overflow-hidden border-t border-white/10 cursor-default"
    >
      {/* 
        Spline 3D Background:
        Configured with pointer-events-none so it renders full-fidelity WebGL 
        without intercepting mouse wheel events or hijacking page scroll.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        <Suspense fallback={<div className="absolute inset-0 bg-[#101315]" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full pointer-events-none"
          />
        </Suspense>
      </div>

      {/* Dark ambient overlay with pointer-events-none */}
      <div
        className="absolute inset-0 bg-black/45 z-[1] pointer-events-none"
        aria-hidden="true"
      />

      {/* 
        Content container:
        pointer-events-none allows cursor movement across empty space to pass directly through.
        Child interactive controls have pointer-events-auto for full clickability and button hover.
      */}
      <div className="relative z-10 pointer-events-none w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pb-14 pt-32 text-left">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF45]/10 border border-[#B8FF45]/30 text-[#B8FF45] text-xs font-mono uppercase tracking-widest mb-4 pointer-events-auto shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>/07 — GET IN TOUCH · LET'S COLLABORATE</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-[clamp(2.75rem,7.5vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#F4F6F2] mb-3 md:mb-4 uppercase font-mono">
          LET'S BUILD <span className="text-[#B8FF45]">TOGETHER.</span>
        </h2>

        {/* Subheading */}
        <p className="text-[#D9E0DF]/90 text-[clamp(1.125rem,2.2vw,1.75rem)] font-light mb-3 md:mb-5 font-serif italic">
          I engineer scalable applications and cloud-powered systems.
        </p>

        {/* Description */}
        <p className="text-[#8D9996] text-[clamp(0.875rem,1.3vw,1.1rem)] font-light mb-6 md:mb-8 max-w-2xl leading-relaxed">
          Full Stack Developer with hands-on experience in scalable web applications, RESTful APIs,
          serverless architecture, and cloud technologies. Currently open to full-time engineering roles,
          internships, and technical collaborations.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-3.5 mb-8 pointer-events-auto">
          <button
            type="button"
            onClick={handleBookCall}
            className="bg-[#B8FF45] text-[#101315] font-bold font-mono px-6 py-3.5 md:px-8 md:py-4 text-xs sm:text-sm tracking-wider uppercase rounded-xl cursor-pointer hover:bg-[#caff5c] hover:shadow-[0_0_30px_rgba(184,255,69,0.35)] transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            data-cursor="CONTACT"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={copyEmail}
            className="liquid-glass text-[#F4F6F2] px-5 py-3.5 text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-[#1B2022] hover:border-[#B8FF45]/50 active:scale-[0.98] transition-all duration-300 flex items-center gap-2 border border-white/20 font-mono shadow-md"
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
                <span>mr5praveen55@gmail.com</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={scrollToProjects}
            className="bg-[#1B2022]/80 text-[#F4F6F2] px-5 py-3.5 text-xs sm:text-sm rounded-xl cursor-pointer hover:bg-[#1B2022] hover:border-[#B8FF45]/40 hover:text-[#B8FF45] active:scale-[0.98] transition-all duration-300 border border-white/20 font-mono"
            data-cursor="PROJECTS"
          >
            View Projects
          </button>

          <button
            type="button"
            onClick={scrollToFooter}
            className="bg-[#101315]/80 hover:bg-[#101315] hover:text-[#B8FF45] border border-white/10 px-4 py-3.5 text-xs sm:text-sm rounded-xl cursor-pointer active:scale-[0.98] transition-all duration-300 font-mono flex items-center gap-1.5 text-white/70"
            data-cursor="FOOTER"
          >
            <span>Footer</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Direct Contact & Details Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/70 font-mono pointer-events-auto">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
            <span>Bengaluru, Karnataka, India</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
            <a
              href="mailto:mr5praveen55@gmail.com"
              className="hover:text-[#B8FF45] transition-colors cursor-pointer"
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

          <div className="flex items-center gap-3">
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
