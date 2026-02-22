import { cn } from "@/utils/classname";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "motion/react";
import portfolioData from "./Portfolio.json";
import { TypingAnimation } from "@/components/magicui/typing-animation";

// 모달 컴포넌트들을 지연 로딩(Lazy Load)으로 변경
const PortfolioModal1 = lazy(() => import("./PortfolioModal1"));
const PortfolioModal2 = lazy(() => import("./PortfolioModal2"));
const PortfolioModal3 = lazy(() => import("./PortfolioModal3"));
const PortfolioModal4 = lazy(() => import("./PortfolioModal4"));
const PortfolioModal5 = lazy(() => import("./PortfolioModal5"));
const PortfolioModal6 = lazy(() => import("./PortfolioModal6"));

type Props = {
  className?: string;
};

const Portfolio: React.FC<Props> = ({ className }) => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    let frameId: number | null = null;

    const handleResize = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(() => {
        setViewportWidth(window.innerWidth);
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      {/* 로딩 중 표시될 Fallback (필요시 커스텀 가능) */}
      <Suspense fallback={<div className="w-full h-20 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl mt-6" />}>
        {/* 모바일 버전 - 세로 스택 */}
        <div className="lg:hidden mt-6 space-y-6">
          <PortfolioModal6 data={portfolioData[0]} />
          <PortfolioModal5 data={portfolioData[1]} />
          <PortfolioModal3 data={portfolioData[4]} />
          <PortfolioModal2 data={portfolioData[3]} />
          <PortfolioModal1 data={portfolioData[2]} />
          <PortfolioModal4 data={portfolioData[5]} />
        </div>

        {/* PC 버전 - 기존 그리드 */}
        <motion.div
          layout
          transition={{ duration: 0.35, ease: "easeInOut" }}
          data-width={viewportWidth}
          className="hidden lg:grid mt-10 gap-6 w-full lg:grid-cols-2 2xl:grid-cols-3"
        >
          <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
            <PortfolioModal6 data={portfolioData[0]} />
          </motion.div>
          <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
            <PortfolioModal5 data={portfolioData[1]} />
          </motion.div>
          <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
            <PortfolioModal3 data={portfolioData[4]} />
          </motion.div>
          <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
            <PortfolioModal2 data={portfolioData[3]} />
          </motion.div>
          <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
            <PortfolioModal1 data={portfolioData[2]} />
          </motion.div>
          <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
            <PortfolioModal4 data={portfolioData[5]} />
          </motion.div>
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Portfolio;
