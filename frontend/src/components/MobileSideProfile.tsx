import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/FaceProfile.png";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import backgroundSrc from "../assets/imgs/BackGround.jpg";
type Props = {
  className?: string;
};

const SideProfile: React.FC<Props> = ({ className }) => {
  return (
    <div className="w-full h-full z-50 lg:hidden">
      <div
        className={cn(
          "bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-black/50 backdrop-blur size-full rounded-[20px] flex flex-col items-start px-6 py-4",
          className
        )}
      >
        <div
          className="w-full h-[20vh]  px-5 pt-5 mt-4 border border-black/10 rounded-[20px] relative overflow-hidden group bg-white/30 dark:bg-[#1A1A2380]/40  transition-all duration-500"
          style={{
            boxShadow:
              "0 0 0 1px rgba(122, 209, 84, 0.3), 0 0 20px rgba(122, 209, 84, 0.15)",
          }}
        >
          <img
            src={backgroundSrc}
            className="size-full object-cover absolute top-0 left-0 z-0 opacity-80 dark:opacity-40 "
          />
          <img
            src={profileSrc}
            className="size-full object-contain relative z-10"
          />
        </div>
        <div className="flex flex-col flex-1 text-left font-orbitron-regular w-full mt-5 gap-4">
          <div>
            <p className="text-[#7AD154] text-xs font-light">Name</p>
            <p className="text-black dark:text-[#FAFAFC] font-medium">
              Kihyun Park
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-[#7AD154] font-light text-sm">
              Studied in,
            </span>
            <div className="text-black dark:text-[#FAFAFC] font-medium">
              Computer Eng. MyongJi Univ.
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] text-sm font-light">Tech</p>
            <div className="flex mt-1 gap-2 text-black dark:text-[#FAFAFC] text-lg font-medium">
              <FaHtml5 className="size-6" />
              <FaCss3Alt className="size-6" />
              <IoLogoJavascript className="size-6" />
              <RiTailwindCssFill className="size-6" />
              <RiSvelteFill className="size-6" />
              <FaReact className="size-6" />
              <SiTypescript className="size-6" />
              <RiNextjsFill className="size-6" />
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] text-sm font-light">Based in,</p>
            <p className="text-black dark:text-[#FAFAFC] font-medium">
              Seoul, Korea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
