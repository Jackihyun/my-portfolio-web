import React, { useState } from "react";
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
import imageMapping from "@/utils/imageMapping";
import AO1 from "@/assets/imgs/AO1.png";
import AO2 from "@/assets/imgs/AO2.png";
import AO3 from "@/assets/imgs/AO3.png";
import AO4 from "@/assets/imgs/AO4.png";
import AO5 from "@/assets/imgs/AO5.png";
import { ImageSkeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/classname";

interface PortfolioModalProps {
  data: {
    title: string;
    imgSrc: string;
    period: string;
    bgColor: string;
    textColor: string;
    modalColor: string;
    modalImgSrc: string;
  };
}

const imgs = {
  Srcs: [AO1, AO2, AO3, AO4, AO5],
};

const PortfolioModal1: React.FC<PortfolioModalProps> = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="mb-5"
          title={<span dangerouslySetInnerHTML={{ __html: data.title }} />}
          imgSrc={imageMapping[data.imgSrc]}
          period={data.period}
          style={{
            color: data.textColor,
            backgroundColor: data.bgColor,
          }}
        />
      </DialogTrigger>
      <DialogContent
        closeIconStyle="text-[#FF4A3E] p-2"
        className="p-5 lg:p-10 md:!rounded-[30px] rounded-xl overflow-x-hidden overflow-y-auto  max-h-[80vh] lg:max-h-[90vh]"
      >
        {/* 모달 내부 내용 */}
        <div className="flex flex-col md:flex-row">
          {/* 왼쪽 열: 기존 내용 */}
          <div className="w-full md:w-1/2">
            <DialogHeader className="flex flex-col">
              <div
                className="font-orbitron-medium text-2xl lg:text-3xl"
                style={{ color: data.modalColor }}
              >
                Project
              </div>
              <DialogTitle className="font-orbitron-regular mb-2 text-lg lg:text-xl text-[#303030] dark:text-white">
                <p>
                  FireAO
                  <br />
                  Study Website
                </p>
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <div className="whitespace-nowrap">
                <p className="font-pretendard text-sm lg:text-lg text-[#919191] dark:text-[#B5B5B5]">
                  명지대학교 컴퓨터공학과 스터디 FireAO 웹사이트
                </p>
                <p className="font-pretendard text-xs lg:text-[15px] text-[#919191] dark:text-[#B5B5B5]">
                  {data.period} (2개월)
                </p>
              </div>
            </DialogDescription>
            <div className="mt-4">
              <InteractiveHoverButton
                onClick={() =>
                  window.open("https://github.com/Jackihyun/AO-WEB", "_blank")
                }
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#FF4A3E] size-1.5"
                className="flex justify-center items-center w-fit text-xs lg:text-[13px] bg-[#FF4A3E]/20 text-[#FF4A3E] border border-[#FF4A3E] tracking-widest font-orbitron-regular"
              >
                베포 중단 - GitHub 연결
              </InteractiveHoverButton>
              <div className="mt-5 lg:mt-10">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className="bg-[#FF4A3E] rounded-full size-[5px] lg:size-[7px]"></div>
                  <p className="text-sm lg:text-[19px] text-[#FF4A3E]">
                    프로젝트 역할 / 기여도
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  프론트엔드 개발 / 50%
                </span>
              </div>
              <div className="mt-2 lg:mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className="bg-[#FF4A3E] rounded-full size-[5px] lg:size-[7px]"></div>
                  <p className="text-sm lg:text-[19px] text-[#FF4A3E]">스택</p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  JavaScript, Svelte, TailwindCSS
                </span>
              </div>
              <div className="mt-2 lg:mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className="bg-[#FF4A3E] rounded-full size-[5px] lg:size-[7px]"></div>
                  <p className="text-sm lg:text-[19px] text-[#FF4A3E]">
                    프로젝트 개요
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] px-5 text-[#303030] dark:text-[#D9D9D9]">
                  <p>
                    명지대학교 컴퓨터공학과 스터디 Fire AO 모바일 웹 개발
                    프로젝트에 프론트엔드 개발자로 참여했습니다.
                    <br />
                    &#183; 스크롤 및 터치 이벤트에 따라 인터렉티브하게 변화하는
                    화면
                    <br />
                    &#183; 스터디 소개 및 아카이브 페이지 개발
                    <br />
                    &#183; 라이트 모드 / 다크 모드 구현
                    <br />
                    <br />
                  </p>
                </div>
                <span className="font-bold text-sm">
                  * 추가 사항: 디자인이 바뀌어 페이지 구성이 변경되었습니다.
                </span>
              </div>
            </div>
          </div>
          {/* 오른쪽 열: 이미지 그리드 */}
          <div className="w-full mt-4 md:mt-0 md:w-1/2 flex-1 flex items-start justify-start">
            <div className="overflow-y-auto">
              <div className="grid">
                {/* 첫 번째 행: 2개 이미지 */}
                <div className="grid grid-cols-2">
                  {imgs.Srcs.slice(0, 2).map((src, index) => (
                    <div key={index} className="relative flex justify-center">
                      {!imageLoaded[index] && !imageError[index] && (
                        <ImageSkeleton
                          className="w-30 h-60 md:w-[150px] md:h-[300px]"
                          aspectRatio="card"
                        />
                      )}
                      {!imageError[index] && (
                        <img
                          src={src}
                          alt={`Ao ${index + 1}`}
                          className={cn(
                            "w-30 h-60 md:w-[150px] md:h-[300px] transition-opacity duration-300",
                            imageLoaded[index] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleImageLoad(index)}
                          onError={() => handleImageError(index)}
                        />
                      )}
                      {imageError[index] && (
                        <div className="w-30 h-60 md:w-[150px] md:h-[300px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md">
                          <span className="text-xs text-gray-500">
                            이미지 오류
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* 두 번째 행: 3개 이미지 */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {imgs.Srcs.slice(2).map((src, index) => (
                    <div key={index + 2} className="relative">
                      {!imageLoaded[index + 2] && !imageError[index + 2] && (
                        <ImageSkeleton
                          className="w-30 h-60 md:w-[150px] md:h-[300px]"
                          aspectRatio="card"
                        />
                      )}
                      {!imageError[index + 2] && (
                        <img
                          src={src}
                          alt={`Ao ${index + 3}`}
                          className={cn(
                            "w-30 h-60 md:w-[150px] md:h-[300px] transition-opacity duration-300",
                            imageLoaded[index + 2] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleImageLoad(index + 2)}
                          onError={() => handleImageError(index + 2)}
                        />
                      )}
                      {imageError[index + 2] && (
                        <div className="w-30 h-60 md:w-[150px] md:h-[300px] flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md">
                          <span className="text-xs text-gray-500">
                            이미지 오류
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal1;
