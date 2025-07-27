import { useState, useRef, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

// Expandable Navbar Component
export default function ExpandableNavbar({
  tabs,
  className = "",
  activeColor = "text-blue-500",
  onChange,
  showDarkModeToggle = false,
  isDarkMode = false,
  onDarkModeToggle,
}) {
  const [selected, setSelected] = useState(null);
  const navRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle click outside to deselect
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSelected(null);
        onChange?.(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onChange]);

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
    onChange?.(selected === index ? null : index);
  };

  const Separator = () => (
    <div className="mx-1 h-6 w-0.5 bg-gray-300 dark:bg-gray-600" />
  );
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={navRef}
      className={`fixed top-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow-sm z-50 ${className}`}
    >
      {/* Desktop and mobile header */}
      <div className="flex items-center gap-2 w-full">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center rounded-xl px-2 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop tabs */}
        <div className="hidden md:flex items-center gap-2">
          {tabs.map((tab, index) => {
            if (tab.type === "separator") {
              return <Separator key={`separator-${index}`} />;
            }

            const Icon = tab.icon;
            const isSelected = selected === index;

            return (
              <button
                key={tab.title}
                onClick={() => {
                  handleSelect(index);
                  if (tab.sectionId) scrollToSection(tab.sectionId);
                }}
                className={`
                relative flex items-center rounded-xl px-2 py-2 text-sm font-medium 
                transition-all duration-300 ease-in-out
                ${
                  isSelected
                    ? `bg-gray-100 dark:bg-gray-800 ${activeColor} gap-2 px-4`
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 gap-0"
                }
              `}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span
                  className={`
                  overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out
                  ${isSelected ? "max-w-32 opacity-100" : "max-w-0 opacity-0"}
                `}
                >
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dark mode toggle - always visible */}
        {showDarkModeToggle && (
          <>
            <div className="mx-1 h-6 w-0.5 bg-gray-300 dark:bg-gray-600" />
            <button
              onClick={onDarkModeToggle}
              className="flex items-center rounded-xl px-2 py-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
          {tabs.map((tab, index) => {
            if (tab.type === "separator") {
              return (
                <div
                  key={`separator-${index}`}
                  className="my-1 h-0.5 w-full bg-gray-200 dark:bg-gray-700"
                />
              );
            }

            const Icon = tab.icon;
            const isSelected = selected === index;

            return (
              <button
                key={tab.title}
                onClick={() => {
                  handleSelect(index);
                  setIsMobileMenuOpen(false);
                  if (tab.sectionId) scrollToSection(tab.sectionId);
                }}
                className={`
                w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium 
                transition-colors duration-300
                ${
                  isSelected
                    ? `bg-gray-100 dark:bg-gray-800 ${activeColor}`
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300"
                }
              `}
              >
                <Icon size={20} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
