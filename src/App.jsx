import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import CRUDSection from "./components/CrudSection";
import ServicesSection from "./components/Services";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import { Construction } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";
import QRcode from "./components/ResumeQRCode";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="overflow-hidden">
          <HeroSection id="home" />
          <AboutSection id="about" />
          <ProjectsSection id="project" />
          <CRUDSection id="demo" />
          <ServicesSection id="services" />
          <ContactSection id="contact" />
          <QRcode />
          {/* <div className="relative">
            <div className="blur-sm">
              
            </div>
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-30 pointer-events-none">
              <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-4 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-lg flex items-center justify-center border-4 border-yellow-600">
                    <Construction size={64} className="text-yellow-800" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Désolé!
                </h3>
                <p className="text-gray-600">
                  Sorry for the construction work! 🚧
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
