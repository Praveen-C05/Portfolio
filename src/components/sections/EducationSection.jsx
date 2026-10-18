import React from "react";
import { GraduationCap, Award, BookOpen, FileDown, ArrowUpRight, Trophy } from "lucide-react";
import { educationData, personalInfo } from "@/lib/portfolio-data";

export const EducationSection = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 z-10 w-full">
      <div className="w-full space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B8FF45] uppercase">
            <span>/05 — BACKGROUND</span>
            <span className="w-8 h-px bg-[#B8FF45]/40" />
            <span className="text-[#8D9996]">ACADEMIC & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F6F2] max-w-4xl leading-tight">
            Education & verified achievements.
          </h2>
        </div>

        {/* Grid: Degree Card + Achievements & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Main Degree Card */}
          <div className="lg:col-span-6 p-8 rounded-2xl border border-[#D9E0DF]/10 bg-[#1B2022]/60 backdrop-blur-md space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9E0DF]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#101315] border border-[#B8FF45]/30">
                    <GraduationCap className="w-6 h-6 text-[#B8FF45]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#8D9996] uppercase">DEGREE PROGRAM</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F6F2] font-mono">
                      {educationData.degree}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono px-3 py-1 rounded bg-[#B8FF45]/15 text-[#B8FF45] border border-[#B8FF45]/30 font-bold">
                    {educationData.cgpa}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#101315] text-[#D9E0DF] border border-[#D9E0DF]/10">
                    {educationData.period}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-base font-semibold text-[#D9E0DF]">
                  {educationData.institution} — {educationData.location}
                </div>
                <p className="text-sm text-[#8D9996] leading-relaxed">
                  Rigorous computer applications curriculum focused on cloud architecture, distributed systems, backend engineering, virtualization, and database management.
                </p>
              </div>

              {/* Achievements Showcase */}
              <div className="space-y-3 pt-3 border-t border-[#D9E0DF]/10">
                <span className="text-[11px] font-mono uppercase text-[#B8FF45] tracking-wider flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#B8FF45]" />
                  <span>COMPETITIVE ACADEMIC ACHIEVEMENTS</span>
                </span>
                
                <div className="space-y-2.5">
                  {educationData.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#101315] border border-[#D9E0DF]/10 space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="text-[#F4F6F2]">{item.title}</span>
                        <span className="text-[#B8FF45]">{item.badge}</span>
                      </div>
                      <p className="text-xs text-[#8D9996]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E0DF]/10">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#B8FF45] hover:underline"
              >
                <span>VERIFY ACADEMIC CERTIFICATES VIA OFFICIAL RÉSUMÉ</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Certifications & Résumé Action */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Certifications Box */}
            <div className="p-8 rounded-2xl border border-[#D9E0DF]/10 bg-[#1B2022]/60 backdrop-blur-md space-y-6 shadow-xl flex-1">
              <div className="flex items-center gap-3 border-b border-[#D9E0DF]/10 pb-4">
                <div className="p-2.5 rounded-xl bg-[#101315] border border-[#D9E0DF]/15">
                  <Award className="w-5 h-5 text-[#B8FF45]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#F4F6F2] font-mono">
                    Professional Certifications
                  </h4>
                  <span className="text-[11px] font-mono text-[#8D9996]">VERIFIED CREDENTIALS</span>
                </div>
              </div>

              <div className="space-y-4">
                {educationData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#101315] border border-[#D9E0DF]/10 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold font-mono text-[#F4F6F2]">
                        {cert.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B8FF45]/10 text-[#B8FF45] border border-[#B8FF45]/30">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#D9E0DF]/70">
                      {cert.type}
                    </div>
                    <p className="text-xs text-[#8D9996] leading-relaxed">
                      {cert.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recruiter Action Box */}
            <div className="p-6 rounded-2xl border border-[#B8FF45]/30 bg-[#1B2022]/80 backdrop-blur-md space-y-3 shadow-xl">
              <div className="text-xs font-mono font-bold text-[#F4F6F2] uppercase">
                RECRUITER ASSET // VERIFIED RÉSUMÉ PDF
              </div>
              <p className="text-xs text-[#8D9996]">
                Direct access to comprehensive academic marks, internship achievements, and contact details.
              </p>
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs font-mono tracking-wider uppercase bg-[#B8FF45] text-[#101315] hover:bg-[#caff5c] transition-colors shadow-[0_0_15px_rgba(184,255,69,0.25)] cursor-pointer"
                data-cursor="DOWNLOAD"
              >
                <FileDown className="w-4 h-4" />
                <span>OPEN OFFICIAL RÉSUMÉ (PDF)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
