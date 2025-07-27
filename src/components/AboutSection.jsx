import { Calendar, MapPin } from "lucide-react";

const AboutSection = ({ id }) => {
  const skills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Firebase", level: 80 },
    { name: "React Native", level: 78 },
    { name: "Electron", level: 70 },
    { name: "Html", level: 95 },
    { name: "Figma", level: 95 },
  ];

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Passionate Frontend Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a creative frontend developer with 2+ years of experience
              building modern, responsive web applications. I specialize in
              React, Tailwindcss, and creating seamless user experiences with
              attention to detail and performance optimization.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Paris, FR
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Available for hire
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Skills & Technologies
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
