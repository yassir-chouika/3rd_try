import { Code2, Palette, Database, Star } from "lucide-react";

const ServicesSection = ({ id }) => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive web applications using modern frameworks and best practices.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Performance Optimization",
        "Mobile-First Design",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces with focus on user experience and visual appeal.",
      features: [
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "User Research",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end web application development with modern backend technologies.",
      features: [
        "RESTful APIs",
        "Database Design",
        "Authentication",
        "Cloud Deployment",
      ],
    },
  ];

  return (
    <section id={id} className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
            with cutting-edge technology and modern design principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <Star className="w-4 h-4 mr-2 text-cyan-400 fill-current" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
