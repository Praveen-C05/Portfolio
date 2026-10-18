import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  BookOpen,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Layers,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Server,
  Cloud,
  Database,
  ShieldCheck,
  Terminal,
  Activity,
  Cpu,
  Radio,
  X,
  ChevronRight,
  TrendingUp,
  Infinity,
  Box,
} from 'lucide-react';

// import ThreeDCardCarousel from './ThreeDCardCarousel';

// Reusable Spotlight Card wrapper
function SpotlightCard({
    children,
    className = '',
    onClick,
  }) {
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: -1000, y: -1000 });
        }}
        onClick={onClick}
        className={`relative group rounded-3xl overflow-hidden liquid-glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_35px_-10px_rgba(255,255,255,0.07)] ${onClick ? 'cursor-pointer' : ''
          } ${className}`}
      >
        {/* Specular Radial Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.09), transparent 45%)`,
          }}
          aria-hidden="true"
        />

        {/* Shimmer Border Edge */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            border: '1px solid rgba(255,255,255,0.18)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

export const AboutSection = function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [activeTab, setActiveTab] = useState('all');
  const [projectCardView, setProjectCardView] = useState('grid');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const equilibriumVideoRef = useRef(null);

  useEffect(() => {
    const video = equilibriumVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "250px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('mr5praveen55@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Shrestha Cloud Solutions',
      period: 'June 2026 – Present 2026',
      icon: Cloud,
      accent: 'from-cyan-500/20 to-blue-500/10',
      badge: 'Production Web & LMS',
      highlights: [
        'Built full-stack applications, including the official Shrestha Cloud Solutions corporate platform and Incrito LMS, leveraging React.js, Node.js, Payload CMS, and MongoDB.',
        'Developed resilient RESTful APIs, optimized backend architectures, and engineered seamless frontend-backend data flows.',
        'Implemented enterprise CMS pipelines and modular component hierarchies for scalable content distribution.',
      ],
      technologies: ['React.js', 'Node.js', 'Payload CMS', 'MongoDB', 'REST APIs', 'Express.js'],
      metrics: '2 Enterprise Apps Delivered',
    },
    {
      role: 'Backend Developer Intern',
      company: 'Pytheos Health Systems',
      period: 'June 2025 – August 2025',
      icon: Activity,
      accent: 'from-emerald-500/20 to-teal-500/10',
      badge: 'Serverless Health Tech',
      highlights: [
        'Architected and deployed 15+ serverless REST APIs using AWS Lambda and API Gateway for high-throughput health data services.',
        'Optimized DynamoDB and MongoDB query execution, reducing latency and operational overhead.',
        'Implemented rigorous JWT authentication, role-based access control (RBAC), and automated AWS S3 object storage workflows.',
      ],
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'MongoDB', 'JWT', 'RBAC', 'Amazon S3'],
      metrics: '15+ Serverless REST APIs',
    },
  ];

  const projects = [
    {
      title: 'MONARC: SaaS ERP Platform',
      tag: 'Capstone Project',
      period: 'JUN 2023 – MAY 2026',
      icon: Server,
      badge: '1000+ Concurrent Users',
      accent: 'from-indigo-500/20 to-purple-500/10',
      description:
        'A full-fledged multi-tenant SaaS Enterprise Resource Planning platform engineered with the MERN stack, architected to support 1000+ concurrent enterprise users with high reliability.',
      bullets: [
        'Constructed multi-tenant isolation with high-concurrency database connection pooling.',
        'Engineered enterprise-grade RBAC security architecture with encrypted session validation.',
        'Configured scalable cloud infrastructure deployed on AWS (EC2, S3, CloudWatch).',
      ],
      stack: ['MERN Stack', 'Multi-Tenant', 'RBAC', 'AWS EC2', 'AWS S3', 'MongoDB', 'Node.js'],
      architectureDetails:
        'Multi-tenant database schema with tenant ID segregation, JWT token generation with role permissions, AWS EC2 cluster hosting with S3 asset offloading, and automated backup hooks.',
    },
    {
      title: 'Road Safety Monitoring System',
      tag: 'IoT & Telemetry',
      period: 'Embedded Hardware',
      icon: Cpu,
      badge: 'Live Kinetic Telemetry',
      accent: 'from-amber-500/20 to-orange-500/10',
      description:
        'Embedded IoT safety diagnostic solution utilizing Arduino and ESP32 microcontrollers with real-time kinetic vibration sensing and cloud telemetry.',
      bullets: [
        'Configured dual Arduino & ESP32 telemetry nodes with calibrated accelerometer and vibration detection.',
        'Integrated live GPS spatial coordinates streaming to ThingSpeak cloud for instantaneous incident dispatch.',
      ],
      stack: ['ESP32', 'Arduino', 'ThingSpeak', 'GPS Telemetry', 'C/C++', 'Piezo Sensors'],
      architectureDetails:
        'Dual-core ESP32 reading analog accelerometer vectors, triggering emergency thresholds, and publishing live telemetry packets to ThingSpeak REST endpoints via cellular Wi-Fi bridge.',
    },
    {
      title: 'CmrVibeWaves – Broadcast Portal',
      tag: 'Web Platform',
      period: 'Broadcast Engine',
      icon: Radio,
      badge: 'High-Volume Indexing',
      accent: 'from-rose-500/20 to-pink-500/10',
      description:
        'Dynamic high-volume media broadcast and university dispatch portal engineered with PHP and MySQL, designed for rapid retrieval across large datasets.',
      bullets: [
        'Developed full-stack database schema with indexed search optimization for thousands of media dispatches.',
        'Streamlined editorial publishing pipeline with responsive client delivery.',
      ],
      stack: ['PHP', 'MySQL', 'Relational DB', 'Search Optimization', 'HTML5/CSS3'],
      architectureDetails:
        'Optimized B-tree indexing on MySQL full-text search columns, asynchronous media upload handling, and responsive editorial dashboard for multi-author dispatches.',
    },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: ['Java 8+', 'JavaScript (ES6+)', 'SQL', 'PHP', 'C'],
      color: 'text-amber-300',
    },
    {
      title: 'Frameworks & Frontend',
      icon: Code2,
      skills: ['React.js v18+', 'Spring Boot', 'Spring MVC', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'text-cyan-300',
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful API Design', 'Microservices', 'Payload CMS'],
      color: 'text-emerald-300',
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['AWS Lambda', 'Amazon S3', 'Amazon API Gateway', 'Amazon EC2', 'Serverless'],
      color: 'text-orange-300',
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Amazon DynamoDB', 'Query Optimization', 'NoSQL & Relational'],
      color: 'text-blue-300',
    },
    {
      title: 'Core Concepts & Security',
      icon: ShieldCheck,
      skills: ['Data Structures & Algorithms', 'JWT Authentication', 'RBAC Security', 'Git & GitHub', 'SaaS Architecture'],
      color: 'text-purple-300',
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full bg-black pt-16 sm:pt-24 md:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 overflow-hidden border-t border-white/10"
    >
      {/* Dynamic ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.035)_0%,_transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] sm:text-xs text-white/70 mb-3 sm:mb-4 font-mono max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">Full Stack Developer · Cloud Specialist</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] sm:leading-[0.92] font-serif break-words"
            >
              Praveen P
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/60 font-light mt-3 max-w-2xl leading-relaxed"
            >
              Designing, building, and deploying scalable MERN, Spring Boot &amp; AWS cloud architectures.
            </motion.p>
          </div>

          {/* Quick Contact & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <button
              type="button"
              onClick={handleCopyEmail}
              className="liquid-glass rounded-full px-4 sm:px-5 py-2.5 text-xs text-white flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer shadow-sm active:scale-95 min-h-[40px] max-w-full"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
              <span className="truncate">{copiedEmail ? 'Email Copied!' : 'mr5praveen55@gmail.com'}</span>
            </button>

            <a
              href="tel:+916362827581"
              className="liquid-glass rounded-full px-4 sm:px-5 py-2.5 text-xs text-white/80 hover:text-white flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5 text-white/70 shrink-0" />
              <span>+91 63628 27581</span>
            </a>
          </motion.div>
        </div>

        {/* Links & Verified Presence Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-white/10 text-xs text-white/70"
        >
          <div className="flex items-center gap-1.5 text-white/50 font-mono">
            <MapPin className="w-3.5 h-3.5 text-white/70 shrink-0" />
            <span>Bengaluru, KA, INDIA</span>
          </div>
          <span className="text-white/20">|</span>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <Linkedin className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <span className="text-white/20">·</span>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <Github className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <span className="text-white/20">·</span>

          <a
            href="#"
            className="hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <Globe className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
            <span>Portfolio</span>
          </a>
          <span className="text-white/20">·</span>

          <a
            href="https://researchgate.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors group"
          >
            <BookOpen className="w-3.5 h-3.5 text-white/60 group-hover:text-white" />
            <span>ResearchGate</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Executive Profile Card with Shimmer & Metrics */}
        <SpotlightCard className="p-5 sm:p-8 md:p-12 mb-10 sm:mb-16 relative w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest truncate">
                Executive Profile · Architecture Summary
              </span>
            </div>
            <span className="text-xs font-mono text-white/30 hidden sm:inline-block">
              CMR University · BCA Cloud Computing
            </span>
          </div>

          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-5xl">
            Full Stack Developer with hands-on experience in designing and deploying scalable web applications and
            cloud-based solutions. Proficient in MERN stack development, RESTful API design, and serverless architecture
            using AWS. Strong understanding of backend systems, database optimization, and secure authentication
            mechanisms (JWT, RBAC). Passionate about building high-performance applications with clean, maintainable
            code and modern engineering practices.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white block mb-0.5 sm:mb-1">
                8.1
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-mono block leading-tight">
                BCA CGPA (2023-26)
              </span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white block mb-0.5 sm:mb-1">
                15+
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-mono block leading-tight">
                AWS Lambda APIs
              </span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white block mb-0.5 sm:mb-1">
                1000+
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-mono block leading-tight">
                Users (MONARC)
              </span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white block mb-0.5 sm:mb-1">
                1st
              </span>
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-mono block leading-tight">
                Fest Award
              </span>
            </div>
          </div>
        </SpotlightCard>

        {/* Equilibrium: Personal Wellness & Engineering Philosophy Card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-16 border border-white/15 shadow-2xl group liquid-glass">
          {/* Looping Ambient Equilibrium Video */}
          <video
            ref={equilibriumVideoRef}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4"
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-700 pointer-events-none"
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 p-5 sm:p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 text-left w-full">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-white/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2 sm:mb-3">
                <Infinity size={16} strokeWidth={1.5} className="text-white shrink-0" />
                <span>Personal Philosophy · Equilibrium</span>
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-snug sm:leading-tight mb-3">
                Live Better, Feel Whole Every Day
              </h3>
              <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-3xl mb-5 sm:mb-6">
                Take charge of how you feel with a companion built for your journey—build routines, follow your growth,
                and unlock tailored insights for a steadier, more vibrant life each day. I approach software engineering
                with the same commitment: disciplined routines, calm clarity, and sustainable technical velocity.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="liquid-glass text-[11px] sm:text-xs text-white/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-mono">
                  Sustainable Velocity
                </span>
                <span className="liquid-glass text-[11px] sm:text-xs text-white/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-mono">
                  Disciplined Habits
                </span>
                <span className="liquid-glass text-[11px] sm:text-xs text-white/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-mono">
                  Deep Flow State
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="mailto:mr5praveen55@gmail.com"
                className="bg-white text-black font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/90 transition-colors text-center shadow-lg w-full sm:w-auto min-h-[40px] flex items-center justify-center"
              >
                Connect with Praveen
              </a>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
          {[
            { id: 'all', label: 'All Disciplines' },
            // { id: '3d-cards', label: '3D Cylinder Cards ✦' },
            { id: 'projects', label: 'Featured Projects' },
            { id: 'experience', label: 'Work Experience' },
            { id: 'skills', label: 'Technical Skills' },
            { id: 'education', label: 'Education & Honors' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 min-h-[38px] flex items-center justify-center ${activeTab === tab.id
                ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                : 'liquid-glass text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT SECTIONS */}
        <div className="space-y-20">
          {/* 1. WORK EXPERIENCE */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white">
                      Work Experience
                    </h3>
                    <p className="text-xs text-white/40 font-mono">
                      Internships in Production Engineering &amp; Serverless Architectures
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                {experiences.map((exp, idx) => {
                  const Icon = exp.icon;
                  return (
                    <SpotlightCard key={exp.company} className="p-5 sm:p-8 flex flex-col justify-between text-left">
                      <div>
                        {/* Header Badge */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 font-mono">
                                {exp.period}
                              </div>
                              <span className="text-xs text-white/60 font-medium">
                                {exp.company}
                              </span>
                            </div>
                          </div>

                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 shrink-0">
                            {exp.badge}
                          </span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">
                          {exp.role}
                        </h4>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 sm:space-y-3 mb-6 text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                          {exp.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 group/item">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0 group-hover/item:bg-white transition-colors" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer tags & metric */}
                      <div className="pt-5 sm:pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between mb-3 text-xs">
                          <span className="text-white/40 font-mono">Impact Metric:</span>
                          <span className="text-white font-mono font-medium">{exp.metrics}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. FEATURED PROJECTS */}
          {(activeTab === 'all' || activeTab === 'projects') && (
            <div id="projects-showcase">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70">
                    <Box className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white flex items-center gap-3">
                      <span>Featured Engineering Projects</span>
                    </h3>
                    <p className="text-xs text-white/40 font-mono">
                      Production SaaS platforms, IoT telemetry, and serverless architectures
                    </p>
                  </div>
                </div>
              </div>

              {/* 3D Volumetric Cylinder Carousel (Commented Out) */}
              {/* <div className="mb-12">
                <ThreeDCardCarousel />
              </div> */}

              {/* Architecture Blueprint Grid */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40">
                    Project Blueprints &amp; Architecture Specs
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-white/40">
                    Click any card for full system breakdown
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {projects.map((proj) => {
                    const Icon = proj.icon;
                    return (
                      <SpotlightCard
                        key={proj.title}
                        onClick={() => setSelectedProject(proj)}
                        className="p-5 sm:p-7 md:p-8 flex flex-col justify-between text-left group"
                      >
                        <div>
                          {/* Terminal-like top bar */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-white/20" />
                              <span className="text-[10px] uppercase font-mono tracking-wider text-white/40">
                                {proj.tag}
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-emerald-400">
                              {proj.badge}
                            </span>
                          </div>

                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>

                          <h4 className="text-lg sm:text-xl md:text-2xl font-serif text-white mb-2 group-hover:text-white transition-colors flex items-center justify-between">
                            <span>{proj.title}</span>
                            <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                          </h4>

                          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4 sm:mb-6">
                            {proj.description}
                          </p>

                          <ul className="space-y-2 mb-4 sm:mb-6 text-xs text-white/75 font-light leading-relaxed">
                            {proj.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-white/40 mt-1.5 shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {proj.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                          <span className="text-[11px] font-mono text-white/50 group-hover:text-white flex items-center gap-1 transition-colors">
                            <span>Click for Architecture Specs</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </SpotlightCard>
                    );
                  })}
                </div>
              </div>
              {/* )} */}
            </div>
          )}

          {/* 3. TECHNICAL SKILLS & PROFICIENCY */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white">
                      Technical Skills &amp; Domain Expertise
                    </h3>
                    <p className="text-xs text-white/40 font-mono">
                      Languages, Backend Frameworks, Cloud, Databases &amp; Architecture
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {skillCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <SpotlightCard key={cat.title} className="p-5 sm:p-7 text-left flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                            {cat.title}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                          {cat.skills.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/15 hover:text-white hover:border-white/20 transition-all cursor-default"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 sm:mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40">
                        <span>Production Ready</span>
                        <span className={cat.color}>Verified Competency</span>
                      </div>
                    </SpotlightCard>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. EDUCATION, CERTIFICATIONS & HONORS */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white">
                      Education, Credentials &amp; Honors
                    </h3>
                    <p className="text-xs text-white/40 font-mono">
                      BCA Cloud Specialization, Elite Certifications &amp; Exhibition Laurels
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {/* Degree Card */}
                <SpotlightCard className="p-5 sm:p-7 md:p-8 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs font-mono">
                      <span className="text-white/40">JUN 2023 – MAY 2026</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                        CGPA: 8.1
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-serif text-white mb-2">
                      Bachelor of Computer Application
                    </h4>
                    <div className="text-sm text-white/80 mb-1 font-medium">
                      Cloud Computing Specialization
                    </div>
                    <div className="text-xs text-white/50 font-light mb-5 sm:mb-6">
                      CMR University, Bengaluru
                    </div>

                    <p className="text-xs text-white/60 font-light leading-relaxed">
                      Rigorous coursework encompassing Distributed Cloud Systems, Data Structures &amp; Algorithms,
                      Advanced Database Management Systems, Virtualization, and Network Security.
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 text-xs text-white/40 font-mono">
                    Undergraduate Thesis: MONARC ERP
                  </div>
                </SpotlightCard>

                {/* Certifications Card */}
                <SpotlightCard className="p-5 sm:p-7 md:p-8 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/40 block mb-4">
                      Industry Certifications
                    </span>

                    <div className="space-y-3">
                      {/* NPTEL */}
                      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-colors">
                        <div className="flex items-center justify-between text-xs text-white mb-1">
                          <span className="font-medium">NPTEL: Cloud Computing</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Elite
                          </span>
                        </div>
                        <span className="text-[11px] text-white/50 font-light block">
                          Ministry of Education, Government of India
                        </span>
                      </div>

                      {/* IBM Cyber */}
                      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/30 transition-colors">
                        <div className="text-xs text-white font-medium mb-1">
                          IBM: Cybersecurity Fundamentals
                        </div>
                        <span className="text-[11px] text-white/50 font-light block">
                          Threat Modeling &amp; Encryption Standards
                        </span>
                      </div>

                      {/* IBM Web */}
                      <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-400/30 transition-colors">
                        <div className="text-xs text-white font-medium mb-1">
                          IBM: Web Development Fundamentals
                        </div>
                        <span className="text-[11px] text-white/50 font-light block">
                          Modern DOM Architecture &amp; Client Standards
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 text-xs text-white/40 font-mono">
                    Verified Digital Credentials
                  </div>
                </SpotlightCard>

                {/* Achievements Card */}
                <SpotlightCard className="p-5 sm:p-7 md:p-8 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-white/40">
                      <Award className="w-4 h-4 text-amber-300" />
                      <span>Academic &amp; Hackathon Honors</span>
                    </div>

                    <div className="space-y-3.5 sm:space-y-4">
                      {/* 1st Place */}
                      <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-amber-500/20 relative overflow-hidden">
                        <div className="text-xs font-mono text-amber-300 uppercase tracking-wider mb-1 flex items-center justify-between">
                          <span>1st Place Winner</span>
                          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        </div>
                        <h5 className="text-sm sm:text-base font-serif text-white mb-1">
                          Inter College Fest
                        </h5>
                        <p className="text-xs text-white/60 font-light leading-relaxed">
                          CMR University · Evaluated on technical design, algorithmic execution, and live architectural presentation.
                        </p>
                      </div>

                      {/* 3rd Place */}
                      <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-1">
                          3rd Place
                        </div>
                        <h5 className="text-sm sm:text-base font-serif text-white mb-1">
                          Technology Fusion Exhibition
                        </h5>
                        <p className="text-xs text-white/60 font-light leading-relaxed">
                          CMR University · Awarded for practical IoT hardware telemetry and live cloud integration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 pt-4 border-t border-white/10 text-xs text-white/40 font-mono">
                    Competitive Track Record
                  </div>
                </SpotlightCard>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Deep Dive Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="liquid-glass p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl max-w-2xl w-full text-left relative border border-white/20 shadow-2xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white cursor-pointer w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest mb-2 font-mono">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Architecture Deep-Dive</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 pr-10">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-emerald-400 font-mono mb-5 sm:mb-6">
                {selectedProject.badge} · {selectedProject.tag}
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-xs uppercase font-mono text-white/40 block mb-2">
                  System Architecture &amp; Implementation Details
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {selectedProject.architectureDetails}
                </p>
              </div>

              <div className="mb-5 sm:mb-6">
                <span className="text-[10px] sm:text-xs uppercase font-mono text-white/40 block mb-2">
                  Key Technical Deliverables
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-light">
                  {selectedProject.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 sm:mb-8">
                <span className="text-[10px] sm:text-xs uppercase font-mono text-white/40 block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-4 border-t border-white/10">
                <span className="text-xs text-white/50 font-mono">
                  Engineered by Praveen P
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="bg-white text-black font-medium px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-white/90 transition-colors w-full sm:w-auto text-center cursor-pointer min-h-[40px]"
                >
                  Close Specs
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
