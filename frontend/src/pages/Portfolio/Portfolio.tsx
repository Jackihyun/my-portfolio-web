import { cn } from "@/utils/classname";
import React from "react";
import PortfolioModal1 from "./PortfolioModal1";
import PortfolioModal2 from "./PortfolioModal2";
import PortfolioModal3 from "./PortfolioModal3";
import PortfolioModal4 from "./PortfolioModal4";
import portfolioData from "./Portfolio.json";
import { TypingAnimation } from "@/components/magicui/typing-animation";

type Props = {
  className?: string;
};

const Portfolio: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="text-left tracking-wide gap-2 flex flex-col text-[#303030] dark:text-[#FAFAFC] ">
        <TypingAnimation
          startOnView={true}
          duration={100}
          delay={300}
          className="text-lg lg:text-3xl font-orbitron-regular font-normal"
        >
          Welcome to my portfolio! 👨🏻‍💻
        </TypingAnimation>
        <TypingAnimation
          startOnView={true}
          duration={100}
          delay={2000}
          className="text-lg lg:text-3xl font-orbitron-regular font-normal"
        >
          Check out my projects
        </TypingAnimation>
      </div>

      {/* 모바일 버전 - 세로 스택 (기존 모달 그대로 사용) */}
      <div className="lg:hidden mt-6 space-y-6">
        <PortfolioModal1 data={portfolioData[0]} />
        <PortfolioModal2 data={portfolioData[1]} />
        <PortfolioModal3 data={portfolioData[2]} />
        <PortfolioModal4 data={portfolioData[3]} />
      </div>

      {/* PC 버전 - 기존 그리드 */}
      <div className="hidden lg:grid grid-cols-2 mt-10 gap-6 ">
        <PortfolioModal1 data={portfolioData[0]} />
        <PortfolioModal2 data={portfolioData[1]} />
        <PortfolioModal3 data={portfolioData[2]} />
        <PortfolioModal4 data={portfolioData[3]} />
      </div>
    </div>
  );
};

export default Portfolio;
