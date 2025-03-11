import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/profile.png";

type Props = {
  className?: string;
};

const SideProfile: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-full h-full gap-10 border border-gray-200 text-black dark:text-white dark:border-gray-600 rounded-3xl p-10",
        className
      )}
    >
      <p className="font-orbitronRegular text-3xl">Jackihyun</p>
      <img src={profileSrc} className="size-38 rounded-3xl" />
      <div>
        <p>Frontend Developer</p>
        <p>Seoul, Korea</p>
      </div>
      <div className="flex gap-1">
        <div>git</div>
        <div>git</div>
        <div>git</div>
        <div>git</div>
      </div>
    </div>
  );
};

export default SideProfile;
