// Verified portfolio data for Praveen P — Cloud & Full Stack Engineer

export const personalInfo = {
  name: "Praveen P",
  title: "Cloud & Full Stack Engineer",
  headline: "I build scalable applications and cloud-powered systems.",
  tagline: "Full Stack Developer with hands-on experience in scalable web applications, RESTful APIs, serverless architecture, secure authentication, and modern cloud technologies.",
  location: "Bengaluru, Karnataka, India",
  statusLine: "REACT.JS · NODE.JS · JAVA · AWS · MONGODB",
  email: "mr5praveen55@gmail.com",
  phone: "+91 63628 27581",
  resumePdf: "/PraveenP_resume.pdf",
  socials: {
    github: "https://github.com/Praveen-C05",
    linkedin: "https://linkedin.com/in/mr5praveen",
    portfolio: "https://praveen-p.vercel.app",
    researchGate: "https://www.researchgate.net", // Configured URL
  },
};

export const skillsCategories = [
  {
    category: "Programming Languages",
    description: "Core languages used for enterprise software, backend services, and systems.",
    items: [
      { name: "Java 8+", level: "Proficient", use: "Object-oriented design patterns, enterprise backend architectures, and data structures." },
      { name: "JavaScript (ES6+)", level: "Core", use: "Modern asynchronous workflows, closures, promises, DOM manipulation, and full-stack integration." },
      { name: "C", level: "Academic", use: "Low-level memory management, pointers, algorithm benchmarking, and foundational systems programming." },
      { name: "PHP", level: "Practical", use: "Server-side web scripting, dynamic templating, session handling, and MySQL database connectors." },
      { name: "SQL", level: "Proficient", use: "Complex queries, joins, indexes, subqueries, ACID transactions, and relational schema normalization." },
    ],
  },
  {
    category: "Frameworks & Backend",
    description: "Server-side frameworks, microservices, and client interfaces.",
    items: [
      { name: "React.js 18+", level: "Core", use: "Component state lifecycles, hooks, responsive viewports, and high-performance client rendering." },
      { name: "Node.js", level: "Core", use: "Asynchronous runtime for high-throughput APIs, streaming, and serverless compute microservices." },
      { name: "Express.js", level: "Core", use: "REST API route orchestration, middleware pipelines, JWT verification, and payload validation." },
      { name: "Spring Boot", level: "Working", use: "Enterprise dependency injection, REST controllers, and microservice boilerplate architecture." },
      { name: "Spring MVC", level: "Working", use: "Model-View-Controller enterprise architecture, routing, and backend request dispatching." },
      { name: "REST APIs", level: "Core", use: "HTTP idempotent endpoint design, status code standards, CORS management, and JSON contracts." },
      { name: "HTML5 & CSS3", level: "Proficient", use: "Accessible semantic structure, Tailwind CSS, flexbox/grid layouts, and fluid responsive UI." },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    description: "Serverless cloud execution, managed storage, and security gateways.",
    items: [
      { name: "AWS Lambda", level: "Core", use: "Event-driven serverless functions delivering sub-100ms API endpoints without server maintenance." },
      { name: "Amazon S3", level: "Core", use: "Encrypted static asset hosting, pre-signed upload URLs, and scalable object storage." },
      { name: "Amazon API Gateway", level: "Core", use: "Route management, custom authorizers, rate limiting, and serverless API integration." },
      { name: "AWS EC2", level: "Proficient", use: "Linux virtual server provisioning, security groups, SSH key pairs, and production web deployment." },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Document stores, relational databases, and serverless NoSQL engines.",
    items: [
      { name: "MongoDB", level: "Core", use: "Mongoose schema design, document aggregation pipelines, indexing, and multi-tenant persistence." },
      { name: "MySQL", level: "Proficient", use: "3NF relational schema design, foreign key constraints, indexing, and transaction management." },
      { name: "Amazon DynamoDB", level: "Core", use: "Single-table design patterns, partition keys, GSIs, and sub-10ms key-value queries at scale." },
    ],
  },
  {
    category: "Tools & Concepts",
    description: "Development tooling, project tracking, and architectural paradigms.",
    items: [
      { name: "Git & GitHub", level: "Core", use: "Version control, branching strategies, pull request workflows, and repository management." },
      { name: "Jira", level: "Proficient", use: "Agile sprint tracking, task estimations, backlog grooming, and issue reporting." },
      { name: "Eclipse / VS Code", level: "Core", use: "Integrated development environments, debugging, extensions, and code profiling." },
      { name: "SaaS Architecture", level: "Core", use: "Multi-tenant tenant isolation, scalable database models, and subscription service design." },
      { name: "Authentication & RBAC", level: "Core", use: "Stateless JWT token issuance, password hashing, and role-based route guards." },
      { name: "Data Structures & Algos", level: "Proficient", use: "Arrays, linked lists, trees, graphs, sorting, searching, and complexity optimization." },
    ],
  },
];

export const featuredProjects = [
  {
    id: "monarc-erp",
    title: "Capstone Project — Monarc (6th SEM Project)",
    category: "FULL STACK · SAAS CAPSTONE",
    badge: "Featured Capstone",
    headline: "Multi-tenant institutional ERP engineered with the MERN stack and AWS cloud hosting.",
    description:
      "A capstone web application built as a 6th-semester project. Monarc focuses on real-world features, full-stack integration, and deployment practices. Backend uses MongoDB for data storage while frontend emphasizes responsive UI for institutional workflows.",
    contribution:
      "Architected the multi-tenant data schemas, implemented secure role-based access control (RBAC), built responsive administrative dashboards in React, and configured cloud deployment pipelines on AWS EC2 and Amazon S3.",
    technicalApproach:
      "Separated tenant contexts using MongoDB collections with scoped query middleware. Implemented stateless JWT session tokens verified against role permission tables. Deployed the backend on an AWS EC2 instance backed by an S3 bucket for document storage.",
    tags: ["Full Stack", "Node.js", "Express", "React", "MongoDB", "AWS EC2", "Amazon S3"],
    image: "/projects/monarc.svg",
    demoUrl: "https://6th-monarc.vercel.app/",
    githubUrl: "https://github.com/Praveen-C05/6sem_project",
    metrics: [
      "1,000+ concurrent user design capacity",
      "Multi-tenant institutional workflows",
      "MongoDB aggregation pipelines",
      "AWS EC2 & S3 production deployment",
    ],
  },
  {
    id: "luna-health",
    title: "LUNA Health System",
    category: "BACKEND · HEALTHCARE CLOUD",
    badge: "Cloud & APIs",
    headline: "Cloud-native backend healthcare REST APIs with DynamoDB and AWS serverless architecture.",
    description:
      "Backend APIs built using Node.js, Express, DynamoDB and AWS for a digital healthcare application.",
    contribution:
      "Built and deployed high-throughput RESTful endpoints using AWS Lambda and API Gateway, implemented sub-10ms DynamoDB single-table queries, and configured secure patient record storage on Amazon S3.",
    technicalApproach:
      "Implemented single-table DynamoDB data models with composite partition/sort keys, integrated AWS S3 pre-signed upload URLs for medical records, and enforced strict JWT + RBAC security policies.",
    tags: ["Node.js", "Express", "AWS", "DynamoDB", "AWS Lambda", "Amazon S3"],
    image: "/projects/luna.png",
    demoUrl: "https://praveen-p.vercel.app/#",
    githubUrl: "https://github.com/Praveen-C05",
    metrics: [
      "15+ production REST APIs deployed",
      "Sub-10ms DynamoDB query latency",
      "S3 pre-signed secure medical doc transfers",
      "Stateless JWT + RBAC authorization",
    ],
  },
  {
    id: "cmrvibewaves",
    title: "CmrVibeWaves Broadcasting Portal",
    category: "WEB APPLICATION · DATABASE",
    badge: "Media Portal",
    headline: "Dynamic broadcasting platform developed using HTML, CSS, JavaScript, PHP and MySQL.",
    description:
      "A dynamic broadcasting platform developed using HTML, CSS, JavaScript, PHP and MySQL.",
    contribution:
      "Built database tables with optimized indexes for fast multi-field schedule queries, implemented dynamic schedule filters with vanilla JavaScript, and created administrative CRUD forms for broadcast lineup management.",
    technicalApproach:
      "Created indexed relational tables in MySQL to handle rapid search queries across programs, hosts, and timestamps. Built a browser-inspired interface with responsive media playback controls and minimal layout shift.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "SQL Optimization", "Relational DB"],
    image: "/projects/cmrwave.png",
    demoUrl: "https://github.com/Praveen-C05/Dynamic-webPage",
    githubUrl: "https://github.com/Praveen-C05/Dynamic-webPage",
    metrics: [
      "Optimized search across large datasets",
      "Normalized MySQL relational schema",
      "Low-latency streaming playback UI",
      "Active campus community usage",
    ],
  },
  {
    id: "react-movie-app",
    title: "React Movie App",
    category: "FRONTEND · APPWRITE BACKEND",
    badge: "React App",
    headline: "Movie discovery platform with TMDB API search debouncing and Appwrite backend sync.",
    description:
      "A movie discovery app using TMDB API, React, Appwrite backend and environment-secure configurations.",
    contribution:
      "Built reactive search interfaces with debounced asynchronous API fetches, integrated Appwrite cloud database for real-time trending tracking, and configured secure client-side environment secrets.",
    technicalApproach:
      "Integrated TMDB REST endpoints using Axios with search input debouncing. Leveraged Appwrite BaaS for storing dynamic user search counts and metrics, rendered via modular Tailwind-styled React components.",
    tags: ["React", "Appwrite", "TMDB", "Axios", "Tailwind CSS", "REST API"],
    image: "/projects/react-movie.png",
    demoUrl: "https://github.com/Praveen-C05/react",
    githubUrl: "https://github.com/Praveen-C05/react",
    metrics: [
      "Debounced asynchronous TMDB API engine",
      "Appwrite cloud database trending metrics",
      "Environment-secure API token management",
      "Responsive card grid with rating telemetry",
    ],
  },
  {
    id: "railway-reservation",
    title: "Railway Reservation System",
    category: "DATABASE DESIGN · SQL ENGINE",
    badge: "Database Architecture",
    headline: "Relational database system for managing train reservations built using MySQL with ER design and normalization.",
    description:
      "Relational database system for managing train reservations built using MySQL with ER design and normalization.",
    contribution:
      "Constructed comprehensive Entity-Relationship (ER) models, applied rigorous 3NF normalization to eliminate data redundancies, and wrote complex SQL queries with stored procedures and transactions.",
    technicalApproach:
      "Engineered foreign key integrity constraints and transactional isolation locks for concurrent seat reservations. Designed optimized indexes for passenger lookups, schedule matching, and ticket status retrieval.",
    tags: ["MySQL", "Database Design", "SQL", "Relational Modeling", "3NF Normalization"],
    image: "/projects/railway_er_diagram.png",
    demoUrl: "https://github.com/Praveen-C05/railway-reservation-DBMS.git",
    githubUrl: "https://github.com/Praveen-C05/railway-reservation-DBMS.git",
    metrics: [
      "Comprehensive 3NF normalized schema",
      "ACID transaction integrity for bookings",
      "Complex multi-table SQL JOIN queries",
      "Detailed ER entity-relationship design",
    ],
  },
  {
    id: "github-profile-portfolio",
    title: "GitHub Profile & Portfolio",
    category: "PORTFOLIO · CLOUD SHOWCASE",
    badge: "Developer Hub",
    headline: "Hi 👋, I'm Praveen P 🚀 Full Stack Developer | ☁️ Cloud Enthusiast Currently interning at Pytheos Health Systems Pvt. Ltd. building modern UIs and learning cloud-native development.",
    description:
      "Hi 👋, I'm Praveen P 🚀 Full Stack Developer | ☁️ Cloud Enthusiast Currently interning at Pytheos Health Systems Pvt. Ltd. building modern UIs and learning cloud-native development.",
    contribution:
      "Designed and engineered an ultra-modern portfolio experience integrating Three.js WebGL interactive 3D elements, high-performance responsive UI components, and continuous deployment.",
    technicalApproach:
      "Built with Vite, React, and Tailwind CSS with custom WebGL canvas shaders, hardware-accelerated 60 FPS animations, and dark cyberpunk-inspired aesthetic with accessible color contrast.",
    tags: ["GitHub", "Portfolio", "React", "Tailwind CSS", "Full Stack", "Three.js"],
    image: "/projects/github.png",
    demoUrl: "https://github.com/Praveen-C05",
    githubUrl: "https://github.com/Praveen-C05",
    metrics: [
      "Interactive Three.js 3D WebGL background",
      "Sub-second load times on Vercel Edge",
      "Zero-dependency high-contrast design system",
      "Curated GitHub repositories & telemetry",
    ],
  },
];

export const experienceData = [
  {
    company: "Shrestha Cloud Solutions",
    role: "Full Stack Developer Intern",
    period: "June 2026 – Present",
    status: "Completed",
    location: "Bengaluru, Karnataka, India",
    overview:
      "Engineered full-stack applications across the company portfolio, including the Shrestha Cloud Solutions company website and the Incrito Learning Management System (LMS).",
    deliverables: [
      "Developed responsive user interfaces and client-side modules utilizing React.js and modern CSS.",
      "Engineered backend RESTful APIs, data schemas, and custom publishing workflows using Node.js, Payload CMS, and MongoDB.",
      "Built seamless frontend–backend integrations, form handlers, and administrative content management interfaces.",
      "Participated in code reviews, bug fixes, and performance optimization for production web deliverables.",
    ],
    technologies: ["React.js", "Node.js", "Payload CMS", "MongoDB", "REST APIs", "JavaScript"],
  },
  {
    company: "Pytheos Health Systems",
    role: "Backend Developer Intern",
    period: "June 2025 – August 2025",
    status: "Completed",
    location: "Bengaluru, Karnataka, India",
    overview:
      "Engineered serverless backend architectures, RESTful APIs, and secure cloud storage workflows for healthcare technology platforms.",
    deliverables: [
      "Built and deployed 15+ RESTful APIs utilizing AWS Lambda serverless functions and Amazon API Gateway.",
      "Optimized query execution and secondary index lookups across Amazon DynamoDB and MongoDB collections.",
      "Implemented stateless JSON Web Token (JWT) authentication and Role-Based Access Control (RBAC) security boundaries.",
      "Integrated Amazon S3 workflows with pre-signed URLs for secure document upload and retrieval.",
    ],
    technologies: ["Node.js", "Express.js", "AWS Lambda", "Amazon API Gateway", "DynamoDB", "Amazon S3", "JWT", "RBAC"],
  },
];

export const educationData = {
  degree: "Bachelor of Computer Applications (BCA) — Cloud Computing",
  institution: "CMR University",
  location: "Bengaluru, Karnataka, India",
  period: "June 2023 – May 2026",
  cgpa: "8.1 CGPA",
  achievements: [
    {
      title: "1st Place — Inter-College Fest",
      organization: "CMR University",
      badge: "1st Place",
      detail: "Awarded top honor for technical excellence and competitive software project implementation.",
    },
    {
      title: "3rd Place — Technology Fusion Exhibition",
      organization: "CMR University",
      badge: "3rd Place",
      detail: "Recognized for presenting innovative cloud-enabled and hardware-integrated project prototypes.",
    },
  ],
  certifications: [
    {
      title: "Cloud Computing — Elite",
      issuer: "NPTEL",
      type: "Elite Grade Certification",
      detail: "Rigorous certification covering cloud virtualization, distributed architectures, and resource scheduling.",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      type: "Professional Certification",
      detail: "Comprehensive coursework in network security, threat mitigation, encryption protocols, and defensive design.",
    },
  ],
};
