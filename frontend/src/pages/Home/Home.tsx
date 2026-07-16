import { cn } from "@/utils/classname";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { scroller } from "react-scroll";
import { BlurFade } from "@/components/magicui/blur-fade";

type Props = {
  className?: string;
};

const Home: React.FC<Props> = ({ className }) => {
  const OFFSET = -133;
  const proofPoints = [
    { value: "6+", label: "완성한 프로젝트" },
    { value: "200", label: "실사용 피드백" },
    { value: "3", label: "서비스 도메인" },
  ];
  const caseFlow = [
    "문제 정의",
    "구조 설계",
    "성능 개선",
    "검증 기록",
  ];

  const onClick = () => {
    scroller.scrollTo("Portfolio", {
      smooth: true,
      duration: 500,
      offset: OFFSET,
    });
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex max-w-[640px] flex-col gap-8 text-[#303030] dark:text-[#FAFAFC]">
        <div className="flex flex-col">
          <BlurFade delay={0.25} inView>
            <p className="font-orbitron-medium text-xs uppercase text-green-1">
              Frontend Developer Portfolio
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <h1 className="mt-5 max-w-[620px] font-pretendard text-4xl font-semibold leading-[1.22] tracking-normal sm:text-5xl lg:text-[42px] 2xl:text-[48px]">
              문제를 읽고, 흐름을 설계하고, 제품처럼 끝까지 다듬는 프론트엔드 개발자
              박기현입니다.
            </h1>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <p className="mt-6 max-w-[700px] font-pretendard text-base leading-8 text-[#555555] dark:text-[#D8D8D8] lg:text-lg">
              지도, 투자 시뮬레이션, AI 다이어리처럼 사용자의 판단과 행동이 중요한
              화면을 만들었습니다. 이 포트폴리오는 구현 목록보다 문제 해결 과정과
              검증 결과가 먼저 보이도록 정리했습니다.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.25 * 3} inView>
          <aside className="max-w-[620px] rounded-[24px] border border-black/10 bg-white/55 p-5 font-pretendard shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold text-green-1">
              Portfolio Focus
            </p>
            <p className="mt-3 text-lg font-semibold leading-7 text-[#202020] dark:text-white">
              프로젝트마다 “왜 만들었는지”와 “무엇이 좋아졌는지”를 먼저 보여줍니다.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {caseFlow.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-black/10 bg-white/65 px-3 py-2 text-xs font-semibold text-[#404040] dark:border-white/10 dark:bg-white/5 dark:text-[#E8E8E8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 4} inView>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
          <InteractiveHoverButton
            onClick={onClick}
            dotBgClassName="bg-green-1"
            transitionClassName="dark:text-white"
            className="font-orbitron-medium text-nowrap tracking-widest hover:font-orbitron-semibold text-sm lg:text-base px-6 lg:px-8 py-3 text-green-1 border hover:bg-green-1 dark:bg-green-1/20 hover:text-white border-green-1 rounded-3xl"
          >
            프로젝트 보기
          </InteractiveHoverButton>
          <a
            href="mailto:pkhjack2325@gmail.com"
            className="font-pretendard text-sm font-semibold text-[#303030]/70 underline decoration-green-1/50 underline-offset-8 transition-colors hover:text-green-1 dark:text-[#FAFAFC]/70 dark:hover:text-green-1"
          >
            연락하기
          </a>
        </div>
      </BlurFade>

      <BlurFade delay={0.25 * 5} inView>
        <div className="mt-10 grid max-w-[760px] grid-cols-3 gap-3 font-pretendard">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-2xl border border-black/10 bg-white/45 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-orbitron-medium text-2xl text-green-1 lg:text-3xl">
                {point.value}
              </p>
              <p className="mt-1 text-xs leading-5 text-[#555555] dark:text-[#CFCFCF]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
};

export default Home;
