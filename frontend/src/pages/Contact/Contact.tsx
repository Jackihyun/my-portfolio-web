import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/utils/classname";
import React from "react";
import { GoArrowUpLeft } from "react-icons/go";

type Props = {
  className?: string;
};

const Contact: React.FC<Props> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="text-left gap-2 flex flex-col text-[#303030] dark:text-[#FAFAFC] mb-8 lg:mb-14 ">
        <TypingAnimation
          startOnView={true}
          duration={100}
          delay={300}
          className="font-orbitron-regular font-normal text-lg lg:text-3xl dark:text-[#FAFAFC] text-[#303030]"
        >
          Let’s build something useful.
        </TypingAnimation>
        <p className="max-w-[660px] font-pretendard text-sm leading-7 text-[#5C5C5C] dark:text-[#CACACA] lg:text-base">
          프로젝트 협업, 프론트엔드 작업, 포트폴리오 피드백이 필요하다면 편하게
          연락 주세요.
        </p>
      </div>

      <div className="flex flex-col relative justify-end bg-[#87EA5C] h-[250px] lg:h-[500px] drop-shadow-sm rounded-[24px] lg:rounded-[40px] px-6 lg:px-10 pt-6 lg:pt-10 pb-4 lg:pb-5">
        <GoArrowUpLeft
          onClick={scrollToTop}
          className="absolute top-6 lg:top-10 left-6 lg:left-10 text-white size-8 lg:size-11 mb-20 stroke-white cursor-pointer"
        />
        <div className="flex flex-col cursor-pointer gap-2 lg:gap-3 mb-6 lg:mb-10 font-orbitron-regular text-sm lg:text-xl text-black">
          <a
            href="mailto:pkhjack2325@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email. pkhjack2325@gmail.com
          </a>
          <a
            href="https://github.com/Jackihyun"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github. Jackihyun
          </a>
          <a
            href="https://instagram.com/ki_hyunida"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram. @ki_hyunida
          </a>
        </div>
        <div className="w-full border border-[#083400]"></div>
        <p className="font-orbitron-regular mt-2 text-right text-xs lg:text-sm tracking-wider text-black">
          Copyright © {currentYear}. Jackihyun. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
