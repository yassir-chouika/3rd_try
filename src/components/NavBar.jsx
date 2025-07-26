import { useState, useRef, useEffect } from "react";

export default function ExpandableNavbar({
  tabs,
  className = "",
  activeColor = "text-blue-500",
  onChange,
}) {
  const [selected, setSelected] = useState(null);
  const navRef = useRef(null);

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
    const newSelection = selected === index ? null : index;
    setSelected(newSelection);
    onChange?.(newSelection);
  };


  return (
    <div
      ref={navRef}
      className={` left-1/2 top-3 -translate-x-1/2 sticky z-50 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1 shadow-sm ${className}`}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isSelected = selected === index;

        return (
          <button
            key={tab.title}
            onClick={() => handleSelect(index)}
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
  );
}
