import React from "react";
import { SceneCanvas } from "../components/three/SceneCanvas";
import { CustomCursor } from "../components/layout/CustomCursor";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ContactSection } from "../components/sections/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#101315] text-[#F4F6F2] font-sans overflow-x-hidden selection:bg-[#B8FF45] selection:text-[#101315]">
      
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Persistent 3D WebGL Three.js Scene */}
      <SceneCanvas />

      {/* Global Fixed Navbar with Scroll Progress */}
      <Navbar />

      {/* Main Narrative Chapters */}
      <main className="relative z-10 flex flex-col items-stretch w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>

    </div>
  );
};

export default Home;
