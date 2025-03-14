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

  // 각 탭의 스크롤 위치를 직접 지정합니다.
  const tabs = [
    { text: "Home", scrollTop: 0 },
    { text: "Portfolio", scrollTop: 800 },
    { text: "About", scrollTop: 1600 },
    { text: "Contact", scrollTop: 2400 },
  ];

  const scrollToSection = (scrollTop: number) => {
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  return (
    <div className="flex sticky top-14 items-center justify-between">
      <div className="flex justify-between w-full pr-24 font-orbitronRegular text-xl overflow-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.text}
            className={cn(
              "text-[#202020] backdrop-blur-3xl bg-white/10 dark:bg-[#293036C2]/5 rounded-xl px-4 py-1 hover:text-[#7AD154] dark:hover:text-[#7AD154] dark:text-[#FAFAFC] cursor-pointer",
              {
                "text-[#7AD154] dark:text-[#7AD154] font-orbitronExtrabold text-2xl":
                  selectedTab === tab.text,
              }
            )}
            onClick={() => {
              setSelectedTab(tab.text);
              scrollToSection(tab.scrollTop);
            }}
          >
            {tab.text}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <ModeToggle isDarkMode={isDarkMode} onClick={handleModeChange} />
      </div>
    </div>
  );
}
