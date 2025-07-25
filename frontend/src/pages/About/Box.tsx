import { cn } from "@/utils/classname";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Box: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mt-5 text-[#202020] dark:text-[#FAFAFC] bg-white/60 dark:bg-black/60 dark:border-black/60 border border-white/60 drop-shadow-sm rounded-t-[20px] rounded-br-[20px] py-4 lg:py-7 px-6 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
