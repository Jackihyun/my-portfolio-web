import ModeToggle from "@/components/ModeToggle";
import { Link, scrollSpy } from "react-scroll";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 scrollSpy 업데이트
    scrollSpy.update();
  }, []);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const tabs = [
    { text: "Home" },
    { text: "Portfolio" },
    { text: "About" },
    { text: "Contact" },
  ];

  return (
    <div className="flex sticky z-[120] top-14 items-center justify-between">
      <div className="flex justify-between w-full pr-24 font-orbitronRegular text-xl overflow-hidden">
        {tabs.map((tab) => (
          <Link
            key={tab.text}
            activeClass="!text-green-1 !font-bold dark:!text-green-1"
            to={tab.text}
            spy={true}
            smooth={true}
            offset={tab.text === "Home" ? 70 : -10} // Home은 스크롤 맨위이므로 offset 0 적용
            duration={500}
            className="text-[#202020] backdrop-blur-3xl bg-white/10 dark:bg-[#293036C2]/5 rounded-xl px-4 py-1 hover:text-green-1 dark:hover:text-green-1 dark:text-[#FAFAFC] cursor-pointer"
          >
            {tab.text}
          </Link>
        ))}
      </div>
      <div className="flex justify-end">
        <ModeToggle isDarkMode={isDarkMode} onClick={handleModeChange} />
      </div>
    </div>
  );
}
