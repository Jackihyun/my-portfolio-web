import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/utils/classname";
import { motion } from "motion/react";
import React, { Suspense, lazy, useEffect, useState } from "react";
import portfolioData from "./Portfolio.json";

const PortfolioModal1 = lazy(() => import("./PortfolioModal1"));
const PortfolioModal2 = lazy(() => import("./PortfolioModal2"));
const PortfolioModal3 = lazy(() => import("./PortfolioModal3"));
const PortfolioModal5 = lazy(() => import("./PortfolioModal5"));
const PortfolioModal6 = lazy(() => import("./PortfolioModal6"));
const PortfolioModal7 = lazy(() => import("./PortfolioModal7"));

type Props = {
  className?: string;
};

const portfolioItems = [
  { Component: PortfolioModal7, dataIndex: 0 },
  { Component: PortfolioModal6, dataIndex: 1 },
  { Component: PortfolioModal5, dataIndex: 2 },
  { Component: PortfolioModal3, dataIndex: 3 },
  { Component: PortfolioModal2, dataIndex: 4 },
  { Component: PortfolioModal1, dataIndex: 5 },
];

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
      <div className="text-left gap-3 flex flex-col text-[#303030] dark:text-[#FAFAFC]">
        <TypingAnimation
          startOnView={true}
          duration={100}
          delay={300}
          className="text-lg lg:text-3xl font-orbitron-regular font-normal"
        >
          Selected Projects
        </TypingAnimation>
        <p className="max-w-[760px] font-pretendard text-sm leading-7 text-[#5C5C5C] dark:text-[#CACACA] lg:text-base">
          각 프로젝트를 문제 상황, 맡은 역할, 기술 선택, 검증 결과가 이어지는
          케이스 스터디처럼 읽히도록 정리했습니다.
        </p>
        <div className="mt-2 flex flex-wrap gap-2 font-pretendard text-xs text-[#303030] dark:text-[#FAFAFC]">
          {["문제 정의", "성능 개선", "사용자 흐름", "검증 결과"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white/50 px-3 py-1.5 dark:border-white/10 dark:bg-white/5"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      <Suspense
        fallback={
          <div className="w-full h-20 animate-pulse bg-gray-100 dark:bg-gray-800 rounded-xl mt-6" />
        }
      >
        <div className="lg:hidden mt-6 space-y-6">
          {portfolioItems.map(({ Component, dataIndex }) => (
            <Component key={dataIndex} data={portfolioData[dataIndex]} />
          ))}
        </div>

        <motion.div
          layout
          transition={{ duration: 0.35, ease: "easeInOut" }}
          data-width={viewportWidth}
          className="hidden lg:grid mt-10 gap-6 w-full lg:grid-cols-2 2xl:grid-cols-3"
        >
          {portfolioItems.map(({ Component, dataIndex }) => (
            <motion.div
              key={dataIndex}
              layout
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Component data={portfolioData[dataIndex]} />
            </motion.div>
          ))}
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Portfolio;
