import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/FaceProfile.png";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  RiArticleLine,
  RiNextjsFill,
  RiSvelteFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import backgroundSrc from "../assets/imgs/BackGround.jpg";
type Props = {
  className?: string;
};

const SideProfile: React.FC<Props> = ({ className }) => {
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="size-6" /> },
    { name: "CSS3", icon: <FaCss3Alt className="size-6" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="size-6" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="size-6" /> },
    { name: "Svelte", icon: <RiSvelteFill className="size-6" /> },
    { name: "React", icon: <FaReact className="size-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="size-6" /> },
    { name: "Next.js", icon: <RiNextjsFill className="size-6" /> },
  ];

  return (
    <div className="w-full h-full z-50 lg:hidden" data-cursor-exclude="true">
      <div
        className={cn(
          "relative overflow-hidden bg-white/45 dark:bg-black/50 border border-white/55 dark:border-white/10 backdrop-blur-2xl size-full rounded-[20px] flex flex-col items-start px-6 py-4 shadow-[0_20px_70px_rgba(0,0,0,0.12)]",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4),transparent_40%,rgba(122,209,84,0.08))]" />
        <div
          className="relative z-10 mt-4 h-[20vh] min-h-[160px] max-h-[190px] w-full shrink-0 overflow-hidden rounded-[20px] border border-white/40 bg-white/30 transition-all duration-500 group dark:bg-[#1A1A2380]/40"
          style={{
            boxShadow:
              "0 0 0 1px rgba(122, 209, 84, 0.3), 0 0 20px rgba(122, 209, 84, 0.15)",
          }}
        >
          <img
            src={backgroundSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-80 dark:opacity-40"
          />
          <img
            src={profileSrc}
            alt="Jackihyun profile"
            className="absolute inset-x-5 bottom-0 z-10 mx-auto block h-[94%] w-auto max-w-[84%] object-contain"
          />
        </div>
        <div className="relative z-10 flex flex-col flex-1 text-left font-orbitron-regular w-full mt-5 gap-4">
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
            <div className="mt-2 flex flex-wrap gap-2 text-black dark:text-[#FAFAFC] text-lg font-medium">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  aria-label={tech.name}
                  className="group relative flex size-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 transition-all duration-200 active:scale-95 dark:border-white/10 dark:bg-white/5"
                >
                  {tech.icon}
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border border-[#7AD154]/40 bg-[#111111] px-2.5 py-1 text-[10px] tracking-wide text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 dark:bg-[#7AD154] dark:text-[#111111]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] text-sm font-light">Based in,</p>
            <p className="text-black dark:text-[#FAFAFC] font-medium">
              Seoul, Korea
            </p>
          </div>
        </div>
        <a
          href="https://blog.jackihyun.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#7AD154] bg-white px-4 py-3 font-orbitron-regular text-xs tracking-[0.2em] text-[#111111] transition-all duration-200 active:scale-[0.98] dark:bg-zinc-800 dark:text-[#FAFAFC]"
        >
          <RiArticleLine className="size-4" />
          BLOG
        </a>
      </div>
    </div>
  );
};

export default SideProfile;
