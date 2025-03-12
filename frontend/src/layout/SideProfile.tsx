import React from "react";
import { cn } from "../utils/classname";
import profileSrc from "../assets/imgs/profile.png";
import { FaGithub, FaInstagram } from "react-icons/fa";

type Props = {
  className?: string;
};

const SideProfile: React.FC<Props> = ({ className }) => {
  return (
    <div className="fixed top-0 left-0 w-[400px] h-full p-14 pr-0">
      <div
        className={cn(
          "bg-white/30 border border-gray-300 backdrop-blur size-full rounded-3xl flex flex-col items-center p-8",
          className
        )}
      >
        <img src={profileSrc} className="w-40 h-fit rounded-full" />
        <p className="font-montserrat font-semibold xl:text-3xl text-xl mt-4">
          JACKIHYUN
        </p>
        <div className="flex flex-col flex-1 text-left font-pretendard w-full mt-14 gap-2">
          <div>
            <p className="text-gray-800 dark:text-gray-300 text-sm font-light">
              Name
            </p>
            <p className="text-black dark:text-gray-100 text-xl font-medium">
              박기현
            </p>
          </div>
          <div>
            <p className="text-gray-800 dark:text-gray-300 font-light text-sm">
              Specialization
            </p>
            <p className="text-black dark:text-gray-100 text-xl font-medium">
              Frontend Developer
            </p>
          </div>
          <div>
            <p className="text-gray-800 dark:text-gray-300 font-light text-sm">
              Based in,
            </p>
            <p className="text-black dark:text-gray-100 text-xl font-medium">
              Seoul, Korea
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-[5%]">
          {[<FaGithub />, <FaInstagram />, <FaGithub />, <FaGithub />].map(
            (it) => (
              <div className="p-2 bg-gray-200 border border-gray-300 dark:border-zinc-800 dark:bg-zinc-800 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-700 transition-all cursor-pointer active:scale-90">
                {it}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
