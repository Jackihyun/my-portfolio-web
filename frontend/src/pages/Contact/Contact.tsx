import { cn } from "@/utils/classname";
import React from "react";
import { GoArrowUpLeft } from "react-icons/go";

type Props = {
  className?: string;
};

const Contact: React.FC<Props> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <p className="font-orbitronRegular tracking-wider mb-14 text-3xl dark:text-[#FAFAFC] text-[#303030]">
        Thank you for visiting!
        <br />
        Feel free to reach me out 👋
      </p>
      <div className="flex flex-col relative justify-end bg-[#87EA5C] h-[500px] drop-shadow-sm rounded-[40px] px-10 pt-10 pb-5">
        <GoArrowUpLeft
          onClick={scrollToTop}
          className="absolute top-10 left-10 text-white size-11 mb-20 stroke-white cursor-pointer"
        />
        <div className="flex flex-col cursor-pointer gap-3 mb-10 font-orbitronRegular tracking-widest text-xl">
          <a href="mailto:pkhjack2325@gmail.com" target="_blank">
            📨 pkhjack2325@gmail.com
          </a>
          <a href="https://instagram.com/ki_hyunida" target="_blank">
            📸 IG. @ki_hyunida
          </a>
          <a href="https://github.com/Jackihyun" target="_blank">
            💻 Github
          </a>
        </div>
        <div className="w-full border border-[#083400]"></div>
        <p className="font-orbitronRegular mt-2 text-right text-sm tracking-wider">
          Copyright ⓒ 2025. Jackihyun. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
