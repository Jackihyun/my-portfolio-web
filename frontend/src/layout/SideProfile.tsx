import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/FaceProfile.png";
import backgroundSrc from "../assets/imgs/BackGround.jpg";
import { FaCss3Alt, FaHtml5, FaInstagram, FaReact } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  RiArticleLine,
  RiNextjsFill,
  RiSvelteFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FiCamera } from "react-icons/fi";

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
    <div
      className="hidden lg:block fixed inset-y-0 left-0 w-[390px] xl:w-[420px] 2xl:w-[450px] py-8 pl-10 pr-0 xl:py-10 xl:pl-14 xl:pr-0 2xl:py-14 2xl:pl-20 2xl:pr-0 z-50"
      data-cursor-exclude="true"
    >
      <div
        className={cn(
          "side-profile-panel relative min-h-0 overflow-y-auto overflow-x-hidden bg-white/45 dark:bg-[#1A1A2380] border border-white/55 dark:border-white/10 backdrop-blur-2xl size-full rounded-[28px] flex flex-col items-start p-4 xl:p-5 2xl:p-6 shadow-[0_24px_90px_rgba(0,0,0,0.14)]",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_34%,rgba(122,209,84,0.08)_72%,transparent)]" />
        <div className="pointer-events-none absolute inset-px z-0 rounded-[27px] border border-white/35 dark:border-white/5" />
        <p className="relative z-10 font-orbitron-medium text-2xl xl:text-[28px] 2xl:text-3xl leading-none text-[#7AD154] text-shadow-sm text-shadow-[#7AD154]/30">
          Jackihyun
        </p>
        <p className="relative z-10 mt-1 font-orbitron-regular text-black/50 dark:text-[#FAFAFC] text-xs xl:text-[13px] 2xl:text-[14px] font-medium">
          Frontend Developer
        </p>
        <div
          className="relative z-10 mt-3 h-[clamp(104px,16vh,148px)] w-full shrink-0 overflow-hidden rounded-[26px] border border-white/40 bg-white/30 transition-all duration-500 group hover:bg-[#7AD154]/10 dark:bg-[#1A1A2380]/30 dark:hover:bg-[#1A1A2380]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(122, 209, 84, 0.3), 0 0 20px rgba(122, 209, 84, 0.15)",
          }}
        >
          <img
            src={backgroundSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-50 dark:opacity-25"
          />
          <img
            src={profileSrc}
            alt="Jackihyun profile"
            className="absolute inset-x-4 bottom-0 z-10 mx-auto block h-[88%] w-auto max-w-[76%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_35%_18%,rgba(255,255,255,0.34),transparent_24%)] opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col flex-1 text-left font-orbitron-regular w-full mt-3 gap-2">
          <div>
            <p className="text-[#7AD154] text-xs font-light">Name</p>
            <p className="text-black dark:text-[#FAFAFC] text-base font-medium">
              Kihyun Park
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-[#7AD154] font-light text-sm">
              Studied in,
            </span>
            <div className="flex flex-col">
              <span className="text-black dark:text-[#FAFAFC] text-base font-medium">
                Computer Eng.
              </span>
              <span className="text-black dark:text-[#FAFAFC] text-base font-medium">
                MyongJi Univ.
              </span>
            </div>
          </div>
          <div>
            <p className="text-[#7AD154] text-sm font-light">Tech</p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-black dark:text-[#FAFAFC] text-base font-medium">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  aria-label={tech.name}
                  className="group relative flex size-8 xl:size-8 2xl:size-9 items-center justify-center rounded-xl border border-black/10 bg-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7AD154]/70 hover:bg-[#7AD154]/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-[#7AD154]/10"
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
            <p className="text-black dark:text-[#FAFAFC] text-base font-medium">
              Seoul, Korea
            </p>
          </div>
        </div>
        <a
          href="https://blog.jackihyun.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-2.5 mb-2.5 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-[#7AD154] bg-white px-4 py-2 font-orbitron-regular text-xs tracking-[0.18em] text-[#111111] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7AD154]/10 dark:bg-zinc-800 dark:text-[#FAFAFC] dark:hover:bg-zinc-700"
        >
          <RiArticleLine className="size-4" />
          BLOG
        </a>
        <div className="relative z-10 flex w-full justify-center gap-4 xl:gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="size-8 xl:size-9 flex justify-center items-center p-1.5 bg-white border border-[#7AD154] dark:bg-zinc-800 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all cursor-pointer active:scale-90 dark:text-[#FAFAFC]"
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
