import { cn } from "@/utils/classname";
import React from "react";

type Props = {
  className?: string;
  title: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  imgSrc: string;
  period: string;
};

const Card: React.FC<Props> = ({
  className,
  title,
  style,
  onClick,
  imgSrc,
  period,
}) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={cn(
        "flex flex-col cursor-pointer hover:scale-105 duration-150 size-[30vw] relative rounded-3xl shadow-md overflow-hidden",
        className
      )}
    >
      <p className="absolute top-5 left-7 font-orbitron-regular text-xl mb-2 tracking-widest">
        {title}
      </p>
      <img
        src={imgSrc}
        alt="project"
        className="w-full m-auto object-contain"
      />
      <div className="absolute bottom-5 right-5">
        <p className="text-right font-orbitron-regular text-[15px]">{period}</p>
      </div>
    </div>
  );
};

export default Card;
