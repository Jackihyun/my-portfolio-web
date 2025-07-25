import { cn } from "@/utils/classname";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { scroller } from "react-scroll";
import { BlurFade } from "@/components/magicui/blur-fade";

type Props = {
  className?: string;
};

const Home: React.FC<Props> = ({ className }) => {
  // 예: 헤더 오프셋 값 (헤더 높이와 추가 보정값의 합) – 이 값은 Header와 일치해야 합니다.
  const OFFSET = -133;

  const onClick = () => {
    scroller.scrollTo("Portfolio", {
      smooth: true,
      duration: 500,
      offset: OFFSET,
    });
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col text-nowrap text-[#303030] dark:text-[#FAFAFC] font-orbitron-regular text-lg lg:text-[45px] ">
        <BlurFade delay={0.25} inView>
          <p>Nice to meet you! 👋</p>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView>
          <p>I'm Jackihyun,</p>
        </BlurFade>
        <BlurFade delay={0.25 * 5} inView>
          <p>Frontend developer based in Seoul</p>
        </BlurFade>
      </div>
      <InteractiveHoverButton
        onClick={onClick}
        dotBgClassName="bg-green-1"
        transitionClassName="dark:text-white"
        className="font-orbitron-medium text-nowrap tracking-widest hover:font-orbitron-semibold text-sm lg:text-2xl px-6 lg:px-9 py-2 lg:py-3 text-green-1 border hover:bg-green-1 dark:bg-green-1/20 hover:text-white border-green-1 rounded-3xl mt-6 lg:mt-10"
      >
        Check out my works!
      </InteractiveHoverButton>
    </div>
  );
};

export default Home;
