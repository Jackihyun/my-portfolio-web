import React from "react";
import { cn } from "@/utils/classname";
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

const MobileSideProfile: React.FC<Props> = ({ className }) => {
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
    <div className={cn("lg:hidden w-full", className)}>
      <div className="bg-white/50 w-fit mx-auto dark:bg-[#1A1A2380] border border-b-0 border-gray-300 dark:border-[#1A1A2380] backdrop-blur rounded-t-full pt-6 px-10">
        {/* 프로필 이미지 */}
        <img src={profileSrc} className="w-30 object-contain" />
      </div>
      <div className="bg-white/50 dark:bg-[#1A1A2380] border border-gray-300 dark:border-[#1A1A2380] backdrop-blur rounded-2xl p-4">
        <div className="flex items-center gap-4">
          {/* 프로필 이미지 */}
          {/* <div className="w-20 h-20 border border-black/10 rounded-2xl p-2 flex-shrink-0">
            <img src={profileSrc} className="w-full h-full object-contain" />
          </div> */}

          {/* 프로필 정보 */}
          <div className="flex-1 space-y-3 font-orbitron-regular">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <p className="text-[#7AD154] text-xs font-light">Name</p>
                <p className="text-black dark:text-[#FAFAFC] text-sm font-medium font-orbitron-regular">
                  Kihyun Park
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#7AD154] text-xs font-light">Studied in,</p>
              <p className="text-black dark:text-[#FAFAFC] text-sm font-medium font-orbitron-regular">
                Computer Eng. MyongJi Univ.
              </p>
            </div>

            <div>
              <p className="text-[#7AD154] text-xs font-light">Based in,</p>
              <p className="text-black dark:text-[#FAFAFC] text-sm font-medium font-orbitron-regular">
                Seoul, Korea
              </p>
            </div>

            <div>
              <p className="text-[#7AD154] text-xs font-light mb-1">Tech</p>
              <div className="flex gap-2 text-black dark:text-[#FAFAFC]">
                <FaHtml5 className="size-4" />
                <FaCss3Alt className="size-4" />
                <IoLogoJavascript className="size-4" />
                <RiTailwindCssFill className="size-4" />
                <RiSvelteFill className="size-4" />
                <FaReact className="size-4" />
                <SiTypescript className="size-4" />
                <RiNextjsFill className="size-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 flex justify-center items-center p-1.5 bg-white border border-[#7AD154] dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all cursor-pointer active:scale-90 dark:text-[#FAFAFC]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideProfile;
