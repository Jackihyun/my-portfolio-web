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
    <div className="flex sticky top-14 items-center justify-between ">
      <div className="flex justify-between w-full pr-24 font-orbitronRegular text-xl overflow-hidden">
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
              "text-[#202020] backdrop-blur-3xl bg-white/10 dark:bg-[#293036C2]/5 rounded-xl px-4 py-1 hover:text-[#7AD154] dark:hover:text-[#7AD154] dark:text-[#FAFAFC] cursor-pointer ",
              {
                "text-[#7AD154] dark:text-[#7AD154] font-orbitronExtrabold text-2xl":
                  selectedTab === it.text,
              }
            )}
            onClick={it.onClick}
          >
            {it.text}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <ModeToggle onClick={handleModeChange} />
      </div>
    </div>
  );
}
