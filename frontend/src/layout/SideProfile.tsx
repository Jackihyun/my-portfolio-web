import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/FaceProfile.png";
import { FaCss3Alt, FaHtml5, FaInstagram, FaReact } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiSvelteFill, RiTailwindCssFill } from "react-icons/ri";
import { FiCamera } from "react-icons/fi";

type Props = {
  className?: string;
};

const SideProfile: React.FC<Props> = ({ className }) => {
  const socialLinks = [
    {
      icon: <LuGithub className="size-full" />,
      url: "https://github.com/Jackihyun",
    },
    {
      icon: <FaInstagram className="size-full" />,
      url: "https://instagram.com/ki_hyunida",
    },
    {
      icon: <BiLogoGmail className="size-full" />,
      url: "mailto:pkhjack2325@gmail.com",
    },
    {
      icon: <FiCamera className="size-full" />,
      url: "https://instagram.com/by_kihyun_",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-[400px] h-full p-14 pr-0 z-50">
      <div
        className={cn(
          "bg-white/50 dark:bg-[#1A1A2380] border border-gray-300 dark:border-[#1A1A2380] backdrop-blur size-full rounded-[32px] flex flex-col items-start p-8",
          className
        )}
      >
        <p className="font-orbitronMedium xl:text-4xl text-3xl text-[#7AD154]">
          Jackihyun
        </p>
        <p className="font-orbitronRegular text-black/50 dark:text-[#FAFAFC] text-[14px] font-medium">
          Frontend Developer
        </p>
        <div className="w-full h-48 px-5 pt-5 mt-4 border border-black/10 rounded-[30px]">
          <img src={profileSrc} className="size-full object-contain" />
        </div>
        <div className="flex flex-col flex-1 text-left font-orbitronRegular w-full mt-5 gap-4">
          <div>
            <p className="text-[#7AD154] text-xs font-light">Name</p>
            <p className="text-black dark:text-[#FAFAFC] text-lg font-medium">
              Kihyun Park
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-[#7AD154] font-light text-sm">
              Studied in,
            </span>
            <div className="flex flex-col">
              <span className="text-black dark:text-[#FAFAFC] text-lg font-medium">
                Computer Eng.
              </span>
              <span className="text-black dark:text-[#FAFAFC] text-lg font-medium">
                MyongJi Univ.
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] text-sm font-light">Tech</p>
            <div className="flex mt-1 gap-2 text-black dark:text-[#FAFAFC] text-lg font-medium">
              <FaHtml5 className="size-5" />
              <FaCss3Alt className="size-5" />
              <IoLogoJavascript className="size-5" />
              <RiTailwindCssFill className="size-5" />
            </div>
            <div className="flex mt-1 gap-2 text-black dark:text-[#FAFAFC] text-lg font-medium">
              <RiSvelteFill className="size-5" />
              <FaReact className="size-5" />
              <SiTypescript className="size-5" />
              <RiNextjsFill className="size-5" />
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] text-sm font-light">Based in,</p>
            <p className="text-black dark:text-[#FAFAFC] text-lg font-medium">
              Seoul, Korea
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 flex justify-center items-center p-1.5 bg-white border border-[#7AD154] dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all cursor-pointer active:scale-90 dark:text-[#FAFAFC]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
