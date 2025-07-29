import ModeToggle from "@/components/ModeToggle";
import { Link, scrollSpy } from "react-scroll";
import { useState, useEffect, useMemo } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";

// Tab 이름 타입 정의
type TabName = "Home" | "Portfolio" | "About" | "Contact";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="sticky z-[120] top-4 lg:top-14 mb-4 p-4 backdrop-blur-lg rounded-xl bg-white/10 dark:bg-[#293036C2]/5">
      {/* 모바일 헤더 */}
      <div className="lg:hidden flex items-center justify-between">
        <div className="lg:hidden ">
          <div className="flex flex-col">
            <div className="font-orbitron-medium text-xl text-[#7AD154]">
              Jackihyun
            </div>
            <p className="font-orbitron-regular text-sm text-black/50 dark:text-[#FAFAFC]">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!isMenuOpen && (
            <ModeToggle isDarkMode={isDarkMode} onClick={handleModeChange} />
          )}
          <HamburgerMenu
            offsets={offsets}
            isOpen={isMenuOpen}
            onToggle={setIsMenuOpen}
          />
        </div>
      </div>

      {/* PC 네비게이션 */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex justify-between w-full pr-24 font-orbitron-regular tracking-widest text-xl overflow-hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.text}
              activeClass="!text-green-1 !font-orbitron-medium dark:!text-green-1"
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
    </div>
  );
}
