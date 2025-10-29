import { useState, useEffect } from "react";
import { Download, Smartphone, Eye, Copy, CheckCircle } from "lucide-react";

const ResumeQRCode = ({ id }) => {
  const [qrCode, setQrCode] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  // resume URL
  const resumeUrl = "https://chyassirresume.vercel.app/";
  // resume file path (PDF or image)
  const resumeFilePath = "/CV_Yassir_Chouika_DeveloppeurWebMobile_2025.pdf";

  useEffect(() => {
    // Generate QR code using QR Server API 
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
      resumeUrl
    )}&bgcolor=ffffff&color=000000&format=svg&ecc=M&margin=10`;

    // Fetch the QR code SVG
    fetch(qrApiUrl)
      .then((response) => response.text())
      .then((svgText) => {
        setQrCode(svgText);
      })
      .catch((error) => {
        console.error("Error generating QR code:", error);
        // Fallback to a simple placeholder
        setQrCode(`
          <svg width="250" height="250" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="250" height="250" fill="#f3f4f6" stroke="#d1d5db" stroke-width="2"/>
            <text x="125" y="125" text-anchor="middle" font-family="Arial" font-size="16" fill="#6b7280">
              QR Code
            </text>
          </svg>
        `);
      });
  }, [resumeUrl]);

  const handleDownload = () => {
    // Create a download link for resume file
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "CV_Yassir_Chouika_DeveloppeurWebMobile_2025.pdf"; 
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(resumeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = resumeUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id={id}
      className="py-20 bg-white bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Access My Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Scan the QR code or copy the link to view my complete professional
            profile
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl shadow-xl dark:shadow-gray-900/50 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Content */}
            <div className="p-8 md:p-12 flex-1 text-white dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-6">
                Quick Access to My Profile
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant Access</h4>
                    <p className="text-sm opacity-90">
                      View my complete resume and portfolio
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                    <Smartphone className="w-6 h-6 text-cyan-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile Optimized</h4>
                    <p className="text-sm opacity-90">
                      Perfect viewing experience on any device
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={handleDownload}
                  className="flex items-center px-6 py-3 bg-white text-cyan-700 dark:text-amber-50 rounded-lg bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400 transition-all cursor-pointer duration-300 hover:scale-105 shadow-lg font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </button>

                <button
                  onClick={handleCopyLink}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all cursor-pointer duration-300 hover:scale-105 shadow-lg font-semibold ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-white bg-opacity-20 text-cyan-700 dark:text-amber-50 bg-gradient-to-r dark:from-cyan-400 dark:to-purple-400 hover:bg-opacity-30"
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 mr-2 " />
                      Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right side - QR Code */}
            <div className="p-8 md:p-12 flex items-center justify-center bg-white bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-opacity-10">
              <div
                className={`transition-all duration-500 ${
                  isHovered ? "scale-105" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="bg-white p-6 rounded-2xl shadow-2xl w-72 h-72 flex items-center justify-center">
                  {qrCode ? (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: qrCode }}
                    />
                  ) : (
                    <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="animate-spin w-8 h-8 border-2 border-gray-300 border-t-cyan-500 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm">Loading QR Code...</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-6 text-center text-gray-500 dark:text-amber-50">
                  <p className="font-semibold">Scan with your phone</p>
                  <p className="text-sm opacity-90 mt-1">
                    or copy the link above for easy sharing
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

export default ResumeQRCode;
