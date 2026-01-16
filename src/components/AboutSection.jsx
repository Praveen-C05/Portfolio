import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Backend Developer • Cloud Enthusiast • BCA Student
            </h3>

            <p className="text-muted-foreground">
              I’m Praveen P — a BCA Cloud Computing student at CMR University.
              I build scalable backend systems and cloud-integrated web
              applications using JavaScript, Node.js, Express, React, MongoDB
              and AWS. My focus is on clean APIs, reliable data models, and
              practical cloud deployments.
            </p>

            <p className="text-muted-foreground">
              I currently intern as a Backend Developer at Pytheos Health Systems
              Pvt. Ltd., contributing to health-tech platforms using DynamoDB,
              AWS Lambda, and RESTful services. I hold certifications in
              Cybersecurity, Web Development and Cloud Computing from recognized
              programs including IBM and NPTEL.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={`${import.meta.env.BASE_URL}PraveenP_resume.pdf`}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
              <a
                href={`${import.meta.env.BASE_URL}PraveenP_resume.zip`}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV (ZIP)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">🛠️ Tools & Technologies</h4>
                  <p className="text-muted-foreground">
                    Languages: JavaScript, Java, PHP, C++, SQL. Frameworks:
                    React, Express, Mongoose. Databases: MongoDB, MySQL,
                    DynamoDB. Dev tools: Git, GitHub, Appwrite, VS Code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">📂 Projects & Contributions</h4>
                  <p className="text-muted-foreground">
                    <b>CmrVibeWaves</b> – Live broadcasting portal (HTML, JS,
                    PHP, MySQL).<br />
                    <b>Railway Reservation DB</b> – Normalized schema and
                    optimized SQL queries (MySQL).<br />
                    <b>LUNA Project</b> – Backend services (Express, AWS)
                    for a health-tech platform.<br />
                    <b>Capstone:</b> Monarc — full-stack 6th-semester project
                    (see Projects). I contributed front-end work and enhanced
                    the UI to improve navigation, responsiveness and
                    accessibility for the institutional ERP workflows. The
                    project uses MongoDB for data storage; a live demo is
                    available at <a href="https://6th-monarc.vercel.app/" target="_blank">6th-monarc.vercel.app</a>.<br />
                    <b>GitHub</b>: <a href="https://github.com/Praveen-C05" target="_blank">github.com/Praveen-C05</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Professional Goals</h4>
                  <p className="text-muted-foreground">
                    As an aspiring Backend Developer and Cloud Architect, my goal is to design scalable, 
                    secure and cloud-native applications that solve real-world problems. 
                    I aim to deepen my expertise in serverless architecture, microservices and DevOps practices,
                     while contributing to impactful tech teams and open-source communities.
                      I believe in continuous learning and strive to stay updated with modern frameworks and industry trends.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
