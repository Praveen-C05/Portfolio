import React, { useState } from "react";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiAmazonwebservices, SiGit, SiGithub, SiJira } from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";
import { Terminal, CheckCircle2, Layers, Cpu, Database, ShieldCheck, Wrench, Code2 } from "lucide-react";
import { skillsCategories } from "@/lib/portfolio-data";

export const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsCategories[0].items[0]);
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].category);

  // Helper for matching icons
  const getIcon = (name) => {
    switch (name) {
      case "Java 8+":
        return <FaJava className="text-[#ED8B00]" />;
      case "JavaScript (ES6+)":
        return <SiJavascript className="text-[#F7DF1E]" />;
      case "C":
        return <Code2 className="text-[#A8B9CC]" />;
      case "PHP":
        return <Terminal className="text-[#777BB4]" />;
      case "SQL":
        return <Database className="text-[#00758F]" />;
      case "React.js 18+":
        return <SiReact className="text-[#61DAFB]" />;
      case "Node.js":
        return <SiNodedotjs className="text-[#68A063]" />;
      case "Express.js":
        return <SiExpress className="text-[#D9E0DF]" />;
      case "Spring Boot":
      case "Spring MVC":
        return <Terminal className="text-[#6DB33F]" />;
      case "REST APIs":
        return <Layers className="text-[#B8FF45]" />;
      case "HTML5 & CSS3":
        return <SiHtml5 className="text-[#E34F26]" />;
      case "AWS Lambda":
        return <SiAmazonwebservices className="text-[#FF9900]" />;
      case "Amazon S3":
        return <FaAws className="text-[#569A31]" />;
      case "Amazon API Gateway":
        return <FaAws className="text-[#FF4F8B]" />;
      case "AWS EC2":
        return <FaAws className="text-[#FF9900]" />;
      case "MongoDB":
        return <SiMongodb className="text-[#47A248]" />;
      case "MySQL":
        return <SiMysql className="text-[#4479A1]" />;
      case "Amazon DynamoDB":
        return <FaAws className="text-[#4053D6]" />;
      case "Git & GitHub":
        return <SiGithub className="text-[#F4F6F2]" />;
      case "Jira":
        return <SiJira className="text-[#0052CC]" />;
      case "Eclipse / VS Code":
        return <Wrench className="text-[#D9E0DF]" />;
      case "Authentication & RBAC":
        return <ShieldCheck className="text-[#B8FF45]" />;
      default:
        return <Cpu className="text-[#B8FF45]" />;
    }
  };

  return (
    <section id="stack" className="relative py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 z-10 w-full">
      <div className="w-full space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B8FF45] uppercase">
            <span>/02 — STACK</span>
            <span className="w-8 h-px bg-[#B8FF45]/40" />
            <span className="text-[#8D9996]">SYSTEM ARCHITECTURE TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F4F6F2] max-w-4xl leading-tight">
            Tools are components. Systems are the result.
          </h2>
          <p className="text-base text-[#8D9996] max-w-2xl">
            Organized across programming languages, backend frameworks, cloud infrastructure, databases, and core concepts. Click any component for practical production context.
          </p>
        </div>

        {/* Main Stack Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Columns: Categories and Skills Grid */}
          <div className="lg:col-span-8 space-y-8">
            {skillsCategories.map((category) => (
              <div
                key={category.category}
                className="p-6 rounded-2xl border border-[#D9E0DF]/10 bg-[#1B2022]/40 backdrop-blur-md space-y-4 text-left"
              >
                <div className="flex items-baseline justify-between border-b border-[#D9E0DF]/10 pb-3">
                  <h3 className="text-base font-bold text-[#F4F6F2] font-mono tracking-wide">
                    {category.category}
                  </h3>
                  <span className="text-[11px] font-mono text-[#8D9996] hidden sm:inline">
                    {category.description}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.items.map((skill) => {
                    const isSelected = selectedSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => {
                          setSelectedSkill(skill);
                          setActiveCategory(category.category);
                        }}
                        className={`group p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#1B2022] border-[#B8FF45] shadow-[0_0_15px_rgba(184,255,69,0.2)]"
                            : "bg-[#101315]/80 border-[#D9E0DF]/10 hover:border-[#D9E0DF]/30 hover:bg-[#1B2022]/80"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className="text-lg shrink-0">
                            {getIcon(skill.name)}
                          </span>
                          <span className="text-xs font-semibold text-[#F4F6F2] truncate font-mono">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded border shrink-0 ${
                            isSelected
                              ? "bg-[#B8FF45] text-[#101315] border-[#B8FF45] font-bold"
                              : "border-[#D9E0DF]/10 text-[#8D9996]"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Compact Context Explanation Panel */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="p-6 rounded-2xl border border-[#B8FF45]/30 bg-[#1B2022]/90 backdrop-blur-xl shadow-2xl text-left space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#D9E0DF]/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#101315] border border-[#D9E0DF]/15 text-2xl">
                    {getIcon(selectedSkill.name)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F4F6F2] font-mono">
                      {selectedSkill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-[#B8FF45]">
                      {activeCategory}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#B8FF45]/10 text-[#B8FF45] border border-[#B8FF45]/30">
                  {selectedSkill.level}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#8D9996] uppercase tracking-wider">
                  // PRACTICAL ARCHITECTURAL ROLE
                </span>
                <p className="text-xs sm:text-sm text-[#F4F6F2]/90 leading-relaxed font-sans">
                  {selectedSkill.use}
                </p>
              </div>

              <div className="pt-2 border-t border-[#D9E0DF]/10 text-[11px] font-mono text-[#8D9996] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF45]" />
                <span>Integrated in verified production deliverables</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
