import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Card from "./Card";

interface PortfolioModalProps {
  data: {
    title: string;
    imgSrc: string;
    period: string;
    bgColor: string;
    textColor: string;
  };
}

const PortfolioModal2: React.FC<PortfolioModalProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          title={data.title}
          imgSrc={data.imgSrc}
          period={data.period}
          style={{
            color: data.textColor,
            backgroundColor: data.bgColor,
          }}
        />
      </DialogTrigger>
      <DialogContent closeIconStyle={{ color: data.textColor }}>
        <DialogHeader className="flex flex-col">
          <div
            className="font-orbitron-medium text-3xl"
            style={{ color: data.textColor }}
          >
            Project
          </div>
          <DialogTitle
            className="font-orbitron-medium text-2xl"
            style={{ color: "#303030" }}
          >
            Barojob
          </DialogTitle>
          <DialogDescription className="flex flex-col">
            <div className="flex">
              {/* 왼쪽: 설명 및 버튼 */}
              <div className="w-1/2 p-4">
                <p
                  className="font-pretendard text-lg"
                  style={{ color: "#919191" }}
                >
                  Barojob 프로젝트에 대한 설명이 들어갑니다.
                </p>
                <p
                  className="font-pretendard text-[15px]"
                  style={{ color: "#919191" }}
                >
                  Duration: {data.period}
                </p>
                <InteractiveHoverButton
                  style={{
                    background: data.bgColor,
                    color: data.textColor,
                    borderColor: data.textColor,
                  }}
                  dotBgClassName={data.textColor}
                  className="w-50 text-nowrap tracking-widest font-orbitron-regular px-2 hover:bg-opacity-80 hover:text-white"
                >
                  www.barojob.com
                </InteractiveHoverButton>
              </div>
              {/* 오른쪽: 2개의 이미지 */}
              <div className="w-1/2 p-4 grid grid-cols-2 gap-2">
                <img
                  src={data.imgSrc}
                  alt="Project 2 image 1"
                  className="w-full h-auto"
                />
                <img
                  src="/path/to/project2-img2.jpg"
                  alt="Project 2 image 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal2;
