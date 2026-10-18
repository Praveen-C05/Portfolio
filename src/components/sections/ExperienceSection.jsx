import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { experienceData } from "@/lib/portfolio-data";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 z-10 w-full">
      <div className="w-full space-y-10 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B8FF45] uppercase">
            <span>/04 — EXPERIENCE</span>
            <span className="w-8 h-px bg-[#B8FF45]/40" />
            <span className="text-[#8D9996]">ENGINEERING TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F6F2] max-w-4xl leading-tight">
            Learning by building.
          </h2>
          <p className="text-sm sm:text-base text-[#8D9996] max-w-2xl">
            Practical software engineering experience across serverless cloud environments and modern full-stack web platforms.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#D9E0DF]/15 ml-2.5 sm:ml-8 md:ml-12 pl-4 sm:pl-10 space-y-10 sm:space-y-16 text-left">
          
          {experienceData.map((exp, index) => (
            <div key={exp.company} className="relative group">
              
              {/* Timeline Technical Node Marker */}
              <div className="absolute -left-[27px] sm:-left-[51px] top-1.5 w-5 h-5 rounded-full bg-[#101315] border-2 border-[#B8FF45] flex items-center justify-center shadow-[0_0_12px_#B8FF45]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8FF45]" />
              </div>

              {/* Timeline Card */}
              <div className="p-4 sm:p-8 rounded-2xl border border-[#D9E0DF]/10 bg-[#1B2022]/60 hover:bg-[#1B2022]/90 hover:border-[#B8FF45]/40 transition-all duration-300 backdrop-blur-md shadow-xl space-y-4 sm:space-y-5">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-[#D9E0DF]/10 pb-3 sm:pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#B8FF45] uppercase">
                      {exp.role}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-extrabold text-[#F4F6F2] font-mono">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#8D9996]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D9E0DF]" />
                      <span>{exp.period}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D9E0DF]" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-[#B8FF45]/10 text-[#B8FF45] border border-[#B8FF45]/30 font-semibold">
                      {exp.status}
                    </span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-[#8D9996] leading-relaxed">
                  {exp.overview}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 sm:space-y-2.5">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase text-[#8D9996] tracking-wider">
                    // KEY DELIVERABLES & IMPACT
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
                    {exp.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#F4F6F2]/85">
                        <ChevronRight className="w-4 h-4 text-[#B8FF45] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-2 border-t border-[#D9E0DF]/10 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#8D9996] mr-1 sm:mr-2">TECH //</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#101315] text-[#D9E0DF] border border-[#D9E0DF]/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
