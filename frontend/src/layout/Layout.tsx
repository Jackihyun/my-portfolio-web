import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { cn } from "../utils/classname";
import Header from "./Header";
import SideProfile from "./SideProfile";

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = ({ className }) => {
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

  const handleModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={cn("flex px-20 py-14 h-screen", className)}>
      <SideProfile className="w-96" />
      <div className="flex flex-col pl-10 w-full h-full relative">
        <Header />
        <main className="flex-1 flex-col overflow-y-auto">
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
          <p className="text-[100px]">1</p>
        </main>
      </div>
      <button
        className="cursor-pointer absolute top-20 right-10"
        onClick={handleModeChange}
      >
        {isDarkMode ? (
          <IoSunny className="size-8 text-white" />
        ) : (
          <IoMoon className="size-8 text-black" />
        )}
      </button>
    </div>
  );
};

export default Layout;
