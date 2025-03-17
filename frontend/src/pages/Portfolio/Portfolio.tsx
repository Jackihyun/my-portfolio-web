import { cn } from "@/utils/classname";
import React from "react";
import PortfolioModal1 from "./PortfolioModal1";
import PortfolioModal2 from "./PortfolioModal2";
import PortfolioModal3 from "./PortfolioModal3";
import PortfolioModal4 from "./PortfolioModal4";
import portfolioData from "./Portfolio.json";

type Props = {
  className?: string;
};

const Portfolio: React.FC<Props> = ({ className }) => {
  // 선택한 프로젝트의 데이터를 저장합니다.

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="text-left tracking-wide gap-2 flex flex-col text-[#303030] dark:text-[#FAFAFC] font-orbitron-regular text-3xl">
        <p>Welcome to my portfolio! 👨🏻‍💻</p>
        <p>Check out my projects</p>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-6">
        <PortfolioModal1 data={portfolioData[0]} />
        <PortfolioModal2 data={portfolioData[1]} />
        <PortfolioModal3 data={portfolioData[2]} />
        <PortfolioModal4 data={portfolioData[3]} />
      </div>
    </div>
  );
};

export default Portfolio;
