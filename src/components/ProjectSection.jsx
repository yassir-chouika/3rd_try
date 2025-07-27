import { ExternalLink } from "lucide-react";
const ProjectsSection = ({ id }) => {
  const projects = [
    {
      id: 1,
      title: "Code Wallet",
      description: "Desktop app that save and organize reusable code snippets.",
      image: "/Code_wallet.png",
      tech: ["React", "Node.js", "Tailwindcss", "Zustand", "Electron Store"],
      github: "https://github.com/yassir-chouika/CodeWallet",
      live: "https://github.com/yassir-chouika/CodeWallet",
    },
    {
      id: 2,
      title: "Render Bowl",
      description:
        "RenderBowl: Real-time HTML, CSS, and JavaScript rendering for web development.",
      image: "/RenderingBowl.png",
      tech: ["React", "JavasScript", "CodeMirror", "Tailwind"],
      github: "https://github.com/yassir-chouika/Rendering_Bowl",
      live: "https://rendering-bowl.vercel.app/",
    },
    {
      id: 3,
      title: "PetPalsConnect",
      description:
        "PetPalsConnect: A platform for pet lovers to connect, share, and build bonds.",
      image: "/PetPalsConnect.png",
      tech: ["WordPress", "Html", "Css", "Javascipt", "Migrate Extension"],
      github: "https://github.com/yassir-chouika/Landing_Page_Template",
      live: "#",
    },
    {
      id: 4,
      title: "Landing Page Template",
      description:
        "A visually appealing landing page template using HTML, CSS and JAVASCRIPT",
      image: "/TemplateWebsite.png",
      tech: ["Html", "Css", "Javascipt"],
      github: "https://github.com/yassir-chouika/Landing_Page_Template",
      live: "#",
    },
    {
      id: 5,
      title: "Pre Flight Checklist",
      description:
        "Weather analytics dashboard with interactive charts and location-based forecasting.",
      image: "/Checklist.png",
      tech: ["React", "Tailwind", "React router", "Axios"],
      github: "https://github.com/yassir-chouika/checklist-project",
      live: "https://checklist-project.vercel.app/",
    },
    {
      id: 6,
      title: "PawFect Match",
      description:
        "PetPalsConnect: A platform for pet lovers to connect, share, and build bonds.",
      image: "/PawFect_Match.png",
      tech: ["WordPress", "Html", "Css", "Javascipt", "Migrate Extension"],
      github: "https://github.com/yassir-chouika/PawFect_Match",
      live: "#",
    },
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div id="projectSection" className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <img src="/github_black.svg" alt="github icon" />
                  </a>
                  <a
                    href={project.live}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-800 text-xs rounded-full font-medium"
                    >
                      {tech}
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

export default ProjectsSection;
