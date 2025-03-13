import { cn } from "@/utils/classname";
import React from "react";

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
      <button className="font-orbitronMedium text-2xl px-14 py-3 text-green-1 border border-green-1 rounded-3xl mt-10">
        Check out my works! 💻
      </button>
    </div>
  );
};

export default Home;
