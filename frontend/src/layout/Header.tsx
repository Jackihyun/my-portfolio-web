import ModeToggle from "@/components/ModeToggle";
import { cn } from "@/utils/classname";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [selectedTab, setSelectedTab] = useState("Home");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex sticky top-14 items-center justify-between backdrop-blur-3xl">
      <div className="grid grid-cols-4 w-full rounded-xl font-orbitronRegular text-xl  overflow-hidden">
        {[
          {
            onClick: () => setSelectedTab("Home"),
            text: "Home",
          },
          {
            onClick: () => setSelectedTab("About"),
            text: "About",
          },
          {
            onClick: () => setSelectedTab("Portfolio"),
            text: "Portfolio",
          },
          {
            onClick: () => setSelectedTab("Contact"),
            text: "Contact",
          },
        ].map((it) => (
          <div
            className={cn(
              "text-[#202020] hover:text-[#7AD154] dark:text-gray-400  dark:hover:text-white cursor-pointer ",
              {
                "text-[#7AD154] font-orbitronExtrabold text-2xl dark:text-white":
                  selectedTab === it.text,
              }
            )}
            onClick={it.onClick}
          >
            {it.text}
          </div>
        ))}
      </div>
      <div>
        <ModeToggle onClick={handleModeChange} />
      </div>
    </div>
  );
}
