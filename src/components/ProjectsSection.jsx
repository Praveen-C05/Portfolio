import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "LUNA Health System",
    description:
      "Backend APIs built using Node.js, Express, DynamoDB and AWS for a digital healthcare application.",
    image: "/projects/luna.png",
    tags: ["Node.js", "Express", "AWS", "DynamoDB"],
    demoUrl: "#",
    // githubUrl: "#", // No public repo? Keep as "#" or Bitbucket link
  },
  {
    id: 2,
    title: "CmrVibeWaves Broadcasting Portal",
    description:
      "A dynamic broadcasting platform developed using HTML, CSS, JavaScript, PHP and MySQL.",
    image: "/projects/cmrwave.png",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    demoUrl: "https://github.com/Praveen-C05/Dynamic-webPage",
    githubUrl: "https://github.com/Praveen-C05/Dynamic-webPage",
  },
  {
    id: 3,
    title: "React Movie App",
    description:
      "A movie discovery app using TMDB API, React, Appwrite backend and environment-secure configurations.",
    image: "/projects/react-movie.png",
    tags: ["React", "Appwrite", "TMDB", "Axios"],
    demoUrl: "https://github.com/Praveen-C05/react",
    githubUrl: "https://github.com/Praveen-C05/react",
  },
  {
    id: 4,
    title: "Railway Reservation System",
    description:
      "Relational database system for managing train reservations built using MySQL with ER design and normalization.",
    image: "/projects/railway_er_diagram.png",
    tags: ["MySQL", "Database Design", "SQL"],
    demoUrl: "https://github.com/Praveen-C05/railway-reservation-DBMS.git",
    githubUrl: "https://github.com/Praveen-C05/railway-reservation-DBMS.git",
  },
  {
    id: 5,
    title: "GitHub Profile & Portfolio",
    description:
      `Hi 👋, I'm Praveen P
🚀 Full Stack Developer | ☁️ Cloud Enthusiast
Currently interning at Pytheos Health Systems Pvt. Ltd. building modern UIs and learning cloud-native development.`,
    image: "/projects/github.png",
    tags: ["GitHub", "Portfolio", "React", "Tailwind CSS", "Full Stack"],
    demoUrl: "https://github.com/Praveen-C05",
    githubUrl: "https://github.com/Praveen-C05",
  }
  ,
  {
    id: 6,
    title: "Capstone Project — Monarc (6th SEM Project)",
    description:
      "A capstone web application built as a 6th-semester project. Monarc focuses on real-world features, full-stack integration, and deployment practices. Backend uses MongoDB for data storage while frontend emphasizes responsive UI for institutional workflows.",
    image: "/projects/monarc.svg",
    tags: ["Full Stack", "Node.js", "Express", "React", "MongoDB"],
    demoUrl: "https://6th-monarc.vercel.app/",
    githubUrl: "https://github.com/Praveen-C05/6sem_project",
  }
];

export const ProjectsSection = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openModal = (project) => setActive(project);
  const closeModal = () => setActive(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected projects showcasing real-world problem solving, full-stack
          integrations, and cloud-enabled deployments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="project-overlay absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <p className="text-sm text-white/95 mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    <a href={project.demoUrl} target="_blank" className="px-3 py-2 bg-white/10 text-white rounded-md border border-white/10 hover:bg-white/20 transition flex items-center gap-2">
                      <ExternalLink size={14} /> <span>Demo</span>
                    </a>
                    <a href={project.githubUrl} target="_blank" className="px-3 py-2 bg-white/10 text-white rounded-md border border-white/10 hover:bg-white/20 transition flex items-center gap-2">
                      <Github size={14} /> <span>Code</span>
                    </a>
                  </div>
                  <button onClick={() => openModal(project)} className="px-3 py-2 bg-primary text-primary-foreground rounded-md font-medium">More details</button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {active && (
          <div className="project-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={closeModal} aria-label="Close">
                <X size={18} />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img src={active.image} alt={active.title} className="w-full h-56 object-cover rounded-md shadow-sm" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-2">{active.title}</h3>
                  <p className="text-muted-foreground mb-4">{active.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {active.tags.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={active.demoUrl} target="_blank" className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2"><ExternalLink size={16}/> Live Demo</a>
                    <a href={active.githubUrl} target="_blank" className="px-4 py-2 border rounded-md flex items-center gap-2"><Github size={16}/> View Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Praveen-C05"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
