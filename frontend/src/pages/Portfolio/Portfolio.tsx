import { cn } from "@/utils/classname";
import React from "react";
import Card from "./Card";
import portfoliodata from "./Portfolio.json";
import imageMapping from "../../utils/imageMapping";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  className?: string;
};

const Portfolio: React.FC<Props> = ({ className }) => {
  // 선택한 프로젝트의 데이터를 저장합니다.

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className="text-left tracking-wide gap-2 flex flex-col text-[#303030] dark:text-[#FAFAFC] font-orbitron-regular text-3xl">
        <p>Welcome to my portfolio! 👨🏻‍💻</p>
        <p>Check out my projects</p>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-6">
        {portfoliodata.map((project, index) => (
          <Dialog>
            <DialogTrigger asChild>
              <Card
                key={index}
                className="mb-5"
                title={
                  <span dangerouslySetInnerHTML={{ __html: project.title }} />
                }
                imgSrc={imageMapping[project.imgSrc]}
                period={project.period}
                style={{
                  color: project.textColor,
                  backgroundColor: project.bgColor,
                }}
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Hi</DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      {/* 선택한 프로젝트가 있으면 모달 표시 */}
    </div>
  );
};

export default Portfolio;
