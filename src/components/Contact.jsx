import { useState } from "react";
import { Mail } from "lucide-react";

const ContactSection = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id={id}
      className="py-20 bg-gradient-to-br from-cyan-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Let's Connect
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">yassir.chouika@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full mr-4">
                  <img src="/github.svg" alt="github icon" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">GitHub</p>
                  <p className="text-gray-600">
                    https://github.com/yassir-chouika
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full mr-4">
                  <img src="/linkedin.svg" alt="linkedin icon" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">LinkedIn</p>
                  <p className="text-gray-600">
                    https://www.linkedin.com/in/yassir-chouika-b88895295/
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
