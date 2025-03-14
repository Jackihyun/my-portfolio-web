import ModeToggle from "@/components/ModeToggle";
import { Link, scrollSpy } from "react-scroll";
import { useState, useEffect, useMemo } from "react";

// Tab 이름 타입 정의
type TabName = "Home" | "Portfolio" | "About" | "Contact";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // 페이지 마운트 시 scrollSpy 업데이트
  useEffect(() => {
    scrollSpy.update();
  }, []);

  const HEADER_HEIGHT = 56;
  const EXTRA = 56;

  // tabs 배열을 useMemo로 정의하고, 텍스트의 타입을 TabName으로 지정
  const tabs = useMemo(
    (): { text: TabName }[] => [
      { text: "Home" },
      { text: "Portfolio" },
      { text: "About" },
      { text: "Contact" },
    ],
    []
  );

  // 디자인 값에 따른 offset 계산 (vh를 사용)
  const offsets = useMemo((): Record<TabName, number> => {
    const vh = window.innerHeight;
    return {
      Home: -(vh * 0.4 + HEADER_HEIGHT + EXTRA),
      Portfolio: -(vh * 0.05 + HEADER_HEIGHT + EXTRA),
      About: -(vh * 0.05 + HEADER_HEIGHT + EXTRA),
      Contact: -(vh * 0.09 + HEADER_HEIGHT + EXTRA),
    };
  }, [HEADER_HEIGHT, EXTRA]);

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex sticky z-[120] top-14 items-center justify-between">
      <div className="flex justify-between w-full pr-24 font-orbitronRegular tracking-widest text-xl overflow-hidden">
        {tabs.map((tab) => (
          <Link
            key={tab.text}
            activeClass="!text-green-1 !font-orbitronMedium dark:!text-green-1"
            to={tab.text}
            spy={true}
            smooth={true}
            offset={offsets[tab.text]}
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
