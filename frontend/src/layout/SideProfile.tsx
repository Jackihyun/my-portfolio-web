import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/FaceProfile.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

type Props = {
  className?: string;
};

const SideProfile: React.FC<Props> = ({ className }) => {
  return (
    <div className="fixed top-0 left-0 w-[400px] h-full p-14 pr-0 z-50">
      <div
        className={cn(
          "bg-white/50 border border-gray-300 backdrop-blur size-full rounded-[32px] flex flex-col items-start p-8",
          className
        )}
      >
        <p className="font-orbitronMedium xl:text-4xl text-3xl text-[#7AD154]">
          Jackihyun
        </p>
        <p className="font-orbitronRegular text-black/50 dark:text-gray-100 text-[14px] font-medium">
          Frontend Developer
        </p>
        <div className="w-full h-48 p-5 mt-4 border border-black/10 rounded-[30px]">
          <img src={profileSrc} className="size-full object-contain  " />
        </div>
        <div className="flex flex-col flex-1 text-left font-orbitronRegular w-full mt-5 gap-4">
          <div>
            <p className="text-[#7AD154] dark:text-gray-300 text-xs font-light">
              Name
            </p>
            <p className="text-black dark:text-gray-100 text- font-medium">
              Kihyun Park
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-[#7AD154] dark:text-gray-300 font-light text-sm">
              Studied in,
            </span>
            <div className="flex flex-col">
              <span className="text-black dark:text-gray-100 text-lg font-medium">
                Computer Eng.
              </span>
              <span className="text-black dark:text-gray-100 text-lg font-medium">
                MyongJi Univ.
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] dark:text-gray-300 text-sm font-light">
              Main Tech
            </p>
            <p className="text-black dark:text-gray-100 text-lg font-medium">
              React, TypeScript, Next.js(learning...)
            </p>
          </div>
          <div>
            <p className="text-[#7AD154] dark:text-gray-300 text-sm font-light">
              Based in,
            </p>
            <p className="text-black dark:text-gray-100 text-lg font-medium">
              Seoul, Korea
            </p>
          </div>
        </div>
        <div className="flex w-full justify-start gap-7">
          {[
            <FaGithub className="size-full" />,
            <FaInstagram className="size-full" />,
            <BiLogoGmail className="size-full" />,
          ].map((it) => (
            <div className="size-10 flex justify-center items-center p-1.5 bg-white border border-[#7AD154] dark:border-zinc-800 dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all cursor-pointer active:scale-90">
              {it}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
