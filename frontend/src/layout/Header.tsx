import { cn } from "@/utils/classname";
import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

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
    <div className="flex sticky top-14 items-center justify-between">
      <div className="flex rounded-xl font-openSans text-base font-light bg-white/40 backdrop-blur-lg border border-gray-300 overflow-hidden px-4">
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
            onClick: () => setSelectedTab("Blog"),
            text: "Blog",
          },
          {
            onClick: () => setSelectedTab("Contact"),
            text: "Contact",
          },
        ].map((it) => (
          <div
            className={cn(
              "text-gray-400 font-normal relative hover:text-black dark:text-gray-400 dark:hover:text-white dark:focus:border-white px-5 py-3 cursor-pointer",
              {
                "text-black dark:text-white": selectedTab === it.text,
              }
            )}
            onClick={it.onClick}
          >
            {it.text}
            <div
              className={cn(
                "absolute bottom-0 left-1/2 right-0 h-[4px] -translate-x-1/2 bg-black/80 rounded-full w-14 dark:bg-white transition-all -z-10",
                {
                  "opacity-0": selectedTab !== it.text,
                  "opacity-100": selectedTab === it.text,
                }
              )}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="size-6 flex cursor-pointer"
          onClick={handleModeChange}
        >
          {isDarkMode ? (
            <IoSunny className="size-full text-white" />
          ) : (
            <IoMoon className="size-full text-black" />
          )}
        </button>
      </div>
    </div>
  );
}
