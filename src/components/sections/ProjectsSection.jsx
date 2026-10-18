import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  Layers,
  CheckCircle2,
  Radio,
  Server,
  Film,
  Database,
  Globe,
  Activity,
  Sparkles,
} from "lucide-react";
import { featuredProjects } from "@/lib/portfolio-data";

export const ProjectsSection = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const renderProjectVisual = (project) => {
    switch (project.id) {
      case "monarc-erp":
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#101315] to-[#1B2022] p-4 border border-[#B8FF45]/20 flex flex-col justify-between relative overflow-hidden group-hover:border-[#B8FF45]/50 transition-colors">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8D9996]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B8FF45] animate-pulse" />
                <span className="text-[#F4F6F2] font-bold">MONARC ERP CORE</span>
              </div>
              <span className="text-[#B8FF45]">AWS EC2 · S3</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8D9996]">CONCURRENT CAPACITY</span>
                <span className="text-[#B8FF45] font-bold">1,000+ USERS</span>
              </div>
              <div className="w-full bg-[#101315] h-2 rounded-full overflow-hidden border border-[#D9E0DF]/10">
                <div className="bg-[#B8FF45] h-full w-[88%] rounded-full shadow-[0_0_8px_#B8FF45]" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#D9E0DF]/80 pt-1 border-t border-[#D9E0DF]/10">
              <span>MULTI-TENANT ISOLATION</span>
              <span>JWT + RBAC GUARDS</span>
            </div>
          </div>
        );

      case "luna-health":
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#101315] to-[#1B2022] p-4 border border-[#D9E0DF]/15 flex flex-col justify-between text-[10px] font-mono group-hover:border-[#B8FF45]/40 transition-colors">
            <div className="flex items-center justify-between text-[#8D9996]">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#B8FF45]" />
                <span className="text-[#F4F6F2] font-bold">LUNA HEALTH API</span>
              </div>
              <span className="text-[#4053D6]">AWS DYNAMODB</span>
            </div>
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#8D9996]">QUERY LATENCY</span>
                <span className="text-[#B8FF45] font-bold">&lt; 10MS SINGLE-TABLE</span>
              </div>
              <div className="w-full bg-[#101315] h-2 rounded-full overflow-hidden border border-[#D9E0DF]/10">
                <div className="bg-[#4053D6] h-full w-[94%] rounded-full shadow-[0_0_8px_#4053D6]" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[#8D9996] border-t border-[#D9E0DF]/10 pt-1">
              <span>S3 PRE-SIGNED UPLOADS</span>
              <span>15+ REST ENDPOINTS</span>
            </div>
          </div>
        );

      case "cmrvibewaves":
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#101315] to-[#1B2022] p-4 border border-[#D9E0DF]/15 flex flex-col justify-between text-[10px] font-mono group-hover:border-[#B8FF45]/40 transition-colors">
            <div className="flex items-center justify-between text-[#8D9996]">
              <div className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#B8FF45]" />
                <span className="text-[#F4F6F2] font-bold">CMRVIBEWAVES PORTAL</span>
              </div>
              <span className="text-[#ED8B00]">PHP &amp; MYSQL</span>
            </div>
            <div className="text-center py-2 space-y-1">
              <div className="text-sm font-bold text-[#F4F6F2] font-mono">OPTIMIZED SEARCH INDEX</div>
              <div className="text-[11px] text-[#8D9996]">LARGE DATASET QUERY ENGINE</div>
            </div>
            <div className="flex items-center justify-between text-[#8D9996] border-t border-[#D9E0DF]/10 pt-1">
              <span>LIVE BROADCAST UI</span>
              <span>CAMPUS MEDIA HUB</span>
            </div>
          </div>
        );

      case "react-movie-app":
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#101315] to-[#1B2022] p-4 border border-[#D9E0DF]/15 flex flex-col justify-between text-[10px] font-mono group-hover:border-[#B8FF45]/40 transition-colors">
            <div className="flex items-center justify-between text-[#8D9996]">
              <div className="flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#B8FF45]" />
                <span className="text-[#F4F6F2] font-bold">TMDB MOVIE DISCOVERY</span>
              </div>
              <span className="text-[#F02E65]">APPWRITE CLOUD</span>
            </div>
            <div className="text-center py-2 space-y-1">
              <div className="text-sm font-bold text-[#F4F6F2] font-mono">DEBOUNCED SEARCH ENGINE</div>
              <div className="text-[11px] text-[#B8FF45]">REAL-TIME TRENDING METRICS</div>
            </div>
            <div className="flex items-center justify-between text-[#8D9996] border-t border-[#D9E0DF]/10 pt-1">
              <span>AXIOS REST CLIENT</span>
              <span>SECURE ENV CONFIG</span>
            </div>
          </div>
        );

      case "railway-reservation":
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#101315] to-[#1B2022] p-4 border border-[#D9E0DF]/15 flex flex-col justify-between text-[10px] font-mono group-hover:border-[#B8FF45]/40 transition-colors">
            <div className="flex items-center justify-between text-[#8D9996]">
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#B8FF45]" />
                <span className="text-[#F4F6F2] font-bold">RAILWAY DBMS</span>
              </div>
              <span className="text-[#00758F]">MYSQL 3NF</span>
            </div>
            <div className="text-center py-2 space-y-1">
              <div className="text-sm font-bold text-[#F4F6F2] font-mono">ACID TRANSACTION LOCKS</div>
              <div className="text-[11px] text-[#8D9996]">RELATIONAL ER DESIGN &amp; SCHEMA</div>
            </div>
            <div className="flex items-center justify-between text-[#8D9996] border-t border-[#D9E0DF]/10 pt-1">
              <span>ZERO REDUNDANCY</span>
              <span>STORED PROCEDURES</span>
            </div>
          </div>
        );

      case "github-profile-portfolio":
      default:
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#101315] to-[#1B2022] p-4 border border-[#D9E0DF]/15 flex flex-col justify-between text-[10px] font-mono group-hover:border-[#B8FF45]/40 transition-colors">
            <div className="flex items-center justify-between text-[#8D9996]">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#B8FF45]" />
                <span className="text-[#F4F6F2] font-bold">PORTFOLIO &amp; GITHUB</span>
              </div>
              <span className="text-[#B8FF45]">THREE.JS WEBGL</span>
            </div>
            <div className="text-center py-2 space-y-1">
              <div className="text-sm font-bold text-[#F4F6F2] font-mono">60 FPS INTERACTIVE 3D</div>
              <div className="text-[11px] text-[#B8FF45]">REACT · TAILWIND · VITE</div>
            </div>
            <div className="flex items-center justify-between text-[#8D9996] border-t border-[#D9E0DF]/10 pt-1">
              <span>CLOUD REPOSITORIES</span>
              <span>VERCEL EDGE HOSTING</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 z-10 w-full">
      <div className="w-full space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B8FF45] uppercase">
            <span>/03 — FEATURED PROJECTS</span>
            <span className="w-8 h-px bg-[#B8FF45]/40" />
            <span className="text-[#8D9996]">ENGINEERING DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F6F2] max-w-4xl leading-tight">
            Featured <span className="text-[#B8FF45]">Projects</span>
          </h2>
          <p className="text-base text-[#8D9996] max-w-3xl leading-relaxed">
            Selected projects showcasing real-world problem solving, full-stack integrations, and cloud-enabled deployments.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {featuredProjects.map((project) => {
            const isCapstone = project.id === "monarc-erp";

            return (
              <div
                key={project.id}
                className={`group flex flex-col justify-between rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden shadow-xl ${
                  isCapstone
                    ? "border-[#B8FF45]/40 bg-[#1B2022]/85 shadow-[0_0_30px_rgba(184,255,69,0.12)]"
                    : "border-[#D9E0DF]/10 bg-[#1B2022]/50 hover:bg-[#1B2022]/90 hover:border-[#D9E0DF]/30"
                }`}
              >
                {/* Card Top Preview / Project Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0c0e10] border-b border-[#D9E0DF]/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      loading="lazy"
                    />
                  ) : (
                    renderProjectVisual(project)
                  )}

                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2022] via-[#1B2022]/20 to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border backdrop-blur-md shadow-lg ${
                        isCapstone
                          ? "bg-[#B8FF45] text-[#101315] border-[#B8FF45]"
                          : "bg-[#101315]/90 text-[#B8FF45] border-[#B8FF45]/30"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Bottom Metric Pill */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-2.5 right-3 z-10 pointer-events-none">
                      <span className="text-[10px] font-mono text-[#B8FF45] px-2 py-0.5 rounded bg-[#101315]/90 border border-[#B8FF45]/30 backdrop-blur-md shadow">
                        {project.metrics[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8D9996]">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F6F2] font-mono group-hover:text-[#B8FF45] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8D9996] line-clamp-3 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101315] text-[#D9E0DF]/80 border border-[#D9E0DF]/10"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-[#8D9996]">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions Bar: More details, Demo, Code */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#D9E0DF]/10">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B8FF45] hover:text-white transition-colors cursor-pointer"
                        data-cursor="DETAILS"
                      >
                        <span>More details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-[#D9E0DF] hover:text-[#B8FF45] hover:bg-[#101315] border border-[#D9E0DF]/15 transition-colors"
                            aria-label={`Open ${project.title} live demo`}
                          >
                            <span>Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-[#D9E0DF] hover:text-[#F4F6F2] hover:bg-[#101315] border border-[#D9E0DF]/15 transition-colors"
                            aria-label={`View ${project.title} source code`}
                          >
                            <span>Code</span>
                            <Github className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Check My GitHub Banner / CTA */}
        <div className="w-full rounded-2xl border border-[#B8FF45]/30 bg-gradient-to-r from-[#1B2022] via-[#101315] to-[#1B2022] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(184,255,69,0.08)]">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-xl bg-[#B8FF45]/10 border border-[#B8FF45]/30 text-[#B8FF45] shrink-0">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-mono text-[#F4F6F2]">
                Explore More Repositories
              </h3>
              <p className="text-sm text-[#8D9996] mt-0.5">
                Visit Praveen P's GitHub for source repositories, backend architectures, and open-source contributions.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Praveen-C05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-bold bg-[#B8FF45] text-[#101315] hover:bg-[#caff5c] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#B8FF45]/20 shrink-0 cursor-pointer"
          >
            <span>Check My Github</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Detailed Case Study Modal Drawer */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D9E0DF]/20 bg-[#1B2022] p-6 sm:p-8 text-left space-y-6 shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#101315] text-[#8D9996] hover:text-[#F4F6F2] border border-[#D9E0DF]/15 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#B8FF45] uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                  <span className="text-[#8D9996]">/</span>
                  <span className="text-[11px] font-mono text-[#D9E0DF]">
                    {activeModalProject.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F6F2] font-mono">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-mono text-[#B8FF45]">
                  {activeModalProject.headline}
                </p>
              </div>

              {/* Modal Project Preview Image */}
              {activeModalProject.image && (
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-[#D9E0DF]/15 bg-[#101315] shadow-2xl">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2022] via-transparent to-black/20 pointer-events-none" />
                </div>
              )}

              {/* Technical Approach & Contribution */}
              <div className="space-y-4 pt-2 border-t border-[#D9E0DF]/10">
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono tracking-wider text-[#8D9996] uppercase">
                    // PRAVEEN'S CONTRIBUTION &amp; IMPLEMENTATION
                  </h4>
                  <p className="text-sm text-[#F4F6F2]/90 leading-relaxed whitespace-pre-line">
                    {activeModalProject.contribution}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono tracking-wider text-[#8D9996] uppercase">
                    // ARCHITECTURAL DESIGN &amp; CLOUD DEPLOYMENT
                  </h4>
                  <p className="text-sm text-[#8D9996] leading-relaxed">
                    {activeModalProject.technicalApproach}
                  </p>
                </div>
              </div>

              {/* Key Metrics / Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#D9E0DF]/10">
                <h4 className="text-xs font-mono tracking-wider text-[#8D9996] uppercase">
                  // VERIFIED METRICS &amp; DELIVERABLES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#101315] border border-[#D9E0DF]/10 flex items-center gap-2 text-xs font-mono text-[#D9E0DF]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF45] shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-wider text-[#8D9996] uppercase">
                  // STACK COMPONENTS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#101315] text-[#F4F6F2] border border-[#D9E0DF]/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#D9E0DF]/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {activeModalProject.demoUrl && (
                    <a
                      href={activeModalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase bg-[#B8FF45] text-[#101315] hover:bg-[#caff5c] transition-colors"
                    >
                      <span>LAUNCH LIVE APPLICATION</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase border border-[#D9E0DF]/25 text-[#F4F6F2] hover:border-[#B8FF45] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>REPOSITORY / CODE</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs font-mono text-[#8D9996] hover:text-[#F4F6F2] cursor-pointer"
                >
                  [ CLOSE ESC ]
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
