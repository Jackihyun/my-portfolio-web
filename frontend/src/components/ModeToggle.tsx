import { IoSunny, IoMoon } from "react-icons/io5";

type Props = {
  className?: string;
  onClick?: () => void;
  isDarkMode: boolean;
};

const ModeToggle: React.FC<Props> = ({ className, onClick, isDarkMode }) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center w-[64px] lg:w-[88px] h-8 lg:h-10 p-1 rounded-full cursor-pointer transition-colors z-0
      ${isDarkMode ? "bg-green-1" : "bg-white"} ${className}`}
    >
      {/* 햇빛 아이콘 */}
      <IoSunny
        className={`absolute size-4 lg:size-6 left-2 z-10 text-white transition-opacity ${
          isDarkMode ? "opacity-30" : "opacity-100"
        }`}
      />
      {/* 달 아이콘 */}
      <IoMoon
        className={`absolute size-4 lg:size-6 right-2 z-10 text-gray-400 transition-opacity ${
          isDarkMode ? "opacity-100" : "opacity-30"
        }`}
      />
      {/* 토글 버튼 */}
      <div
        className={`absolute size-6 lg:size-8 bg-[#7AD154] dark:bg-white rounded-full shadow-md transform transition-transform
        ${isDarkMode ? "translate-x-8 lg:translate-x-12" : "translate-x-0"}`}
      />
    </div>
  );
};

export default ModeToggle;
