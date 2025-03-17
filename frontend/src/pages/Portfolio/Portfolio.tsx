import { cn } from "@/utils/classname";
import React from "react";
import Card from "./Card";
import portfoliodata from "./Portfolio.json";
import imageMapping from "../../utils/imageMapping";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

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
            <DialogContent closeIconStyle={{ color: project.closeIconColor }}>
              <DialogHeader className="flex flex-col">
                <div
                  className="font-orbitron-medium text-3xl"
                  style={{ color: project.modalColor }}
                >
                  Project
                </div>
                <DialogTitle className="font-orbitron-medium text-2xl text-[#303030]">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: project.modalTitle || "",
                    }}
                  />
                </DialogTitle>
                <DialogDescription className="flex flex-col">
                  <div className="mb-5">
                    <p className="font-pretendard text text-[#919191] text-lg">
                      {project.modalText}
                    </p>
                    <p className="font-pretendard text-[#919191] text-[15px]">
                      {project.modalPeriod}
                    </p>
                  </div>

                  <InteractiveHoverButton
                    style={{
                      color: project.modalColor,
                      opacity: 0.8,
                    }}
                    className="w-50"
                  >
                    www.khucnt.kr
                  </InteractiveHoverButton>
                  <div>
                    <p>⦁ 프로젝트 역할 / 기여도 </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div>
                {/* 예시: 기술 스택, 링크 등 */}
                <img></img>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
