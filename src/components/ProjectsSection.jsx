import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the impactful and hands-on projects I’ve built,
          ranging from healthcare systems to real-time content platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
