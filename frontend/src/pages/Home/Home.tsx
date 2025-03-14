import { cn } from "@/utils/classname";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

type Props = {
  className?: string;
};

const Home: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col text-[#303030] dark:text-white font-orbitronMedium text-[50px] ">
        <p>Nice to meet you! 👋</p>
        <p>I'm Jackihyun,</p>
        <p>frontend developer based in Seoul</p>
      </div>
      <InteractiveHoverButton className="font-orbitronMedium tracking-widest hover:font-orbitronSemibold text-2xl px-9 py-3 text-green-1 border hover:bg-green-1 dark:bg-green-1/20 hover:text-white border-green-1 rounded-3xl mt-10">
        Check out my works!
      </InteractiveHoverButton>
    </div>
  );
};

export default Home;
