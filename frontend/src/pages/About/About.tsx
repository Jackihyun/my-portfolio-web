import { cn } from "@/utils/classname";
import React from "react";

type Props = {
  className?: string;
};

const About: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      <p className="font-orbitronRegular text-[#303030] dark:text-[#FAFAFC] text-[30px]">
        Let me introduce myself 🗣️
      </p>
      <div className="mt-10 border border-white bg-white rounded-t-[30px] rounded-br-[30px] p-10">
        <p>
          Hi, I'm Jackihyun, a frontend developer based in Seoul. I'm passionate
          about building user-friendly and visually appealing websites.
        </p>
      </div>
    </div>
  );
};
export default About;
