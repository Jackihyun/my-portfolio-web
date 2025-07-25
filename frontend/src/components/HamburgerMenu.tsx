import { useEffect } from "react";
import { Link } from "react-scroll";

type TabName = "Home" | "Portfolio" | "About" | "Contact";

interface HamburgerMenuProps {
  offsets: Record<TabName, number>;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

export default function HamburgerMenu({
  offsets,
  isOpen,
  onToggle,
}: HamburgerMenuProps) {
  const tabs: { text: TabName }[] = [
    { text: "Home" },
    { text: "Portfolio" },
    { text: "About" },
    { text: "Contact" },
  ];

  // 메뉴 열림/닫힘 시 body 스크롤 제어
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    onToggle(!isOpen);
  };

  const closeMenu = () => {
    onToggle(false);
  };

  return (
    <>
      {/* 햄버거 아이콘 */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 relative z-[10000]"
      >
        <span
          className={`block w-5 h-0.5 rounded-full bg-[#202020] dark:bg-[#FAFAFC] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 rounded-full bg-[#202020] dark:bg-[#FAFAFC] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-0.5 rounded-full bg-[#202020] dark:bg-[#FAFAFC] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* 전체 화면 오버레이 메뉴 */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white dark:bg-[#1A1A23] z-[9999] flex flex-col items-center justify-center animate-in fade-in duration-300 -m-4 w-screen h-dvh">
          <div className="text-center space-y-8 animate-in slide-in-from-top duration-500">
            <div className="font-orbitron-medium text-2xl text-[#7AD154] mb-12">
              Menu
            </div>
            <nav className="space-y-6">
              {tabs.map((tab) => (
                <Link
                  key={tab.text}
                  to={tab.text}
                  spy={true}
                  smooth={true}
                  offset={offsets[tab.text]}
                  duration={500}
                  onClick={closeMenu}
                  activeClass="text-green-1 font-orbitron-medium"
                  className="block py-4 text-2xl font-orbitron-regular text-[#202020] dark:text-[#FAFAFC] hover:text-green-1 cursor-pointer transition-colors"
                >
                  {tab.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
