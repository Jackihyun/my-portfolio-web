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
import blogImg from "@/assets/imgs/blog2.png";
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

const PortfolioModal1: React.FC<PortfolioModalProps> = ({ data }) => {
  const [blogImageLoaded, setBlogImageLoaded] = useState(false);
  const [blogImageError, setBlogImageError] = useState(false);

  const handleBlogImageLoad = () => {
    setBlogImageLoaded(true);
  };

  const handleBlogImageError = () => {
    setBlogImageError(true);
    setBlogImageLoaded(true);
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
        closeIconStyle="text-[#7AD154] p-2"
        className="p-5 lg:p-10 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[80vh] lg:max-h-[90vh] flex flex-col"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            <p>Jack's Blog</p>
          </DialogTitle>
        </DialogHeader>

        {/* 스크롤 가능한 영역 */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <DialogDescription className="">
            {/* 왼쪽: 설명 및 버튼 */}
            <div className="w-full md:w-1/2 whitespace-nowrap">
              <p className="font-pretendard text-sm lg:text-lg text-[#919191] dark:text-[#B5B5B5]">
                개인 블로그 웹사이트 프로젝트
              </p>
              <p className="font-pretendard text-xs lg:text-[15px] text-[#919191] dark:text-[#B5B5B5]">
                {data.period} (진행중)
              </p>
            </div>
          </DialogDescription>
          <div className="w-full mt-4 lg:mt-0 lg:overflow-hidden">
            <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-auto">
              <div className="flex flex-col whitespace-nowrap w-full md:w-fit order-2 md:order-1 justify-center items-center md:items-start mt-5 md:mt-0">
                <InteractiveHoverButton
                  onClick={() =>
                    window.open("https://blog.jackihyun.me/", "_blank")
                  }
                  transitionClassName="group-hover:translate-x-0"
                  dotBgClassName="bg-[#7AD154] size-1.5"
                  className="flex mt-0 lg:mt-4 justify-center items-center w-fit text-xs lg:text-[13px] bg-[#7AD154]/20 text-[#7AD154] border border-[#7AD154] text-nowrap tracking-widest font-orbitron-regular"
                >
                  vercel.app
                </InteractiveHoverButton>
                <div className="mt-5 lg:mt-10 self-start">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#7AD154] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#7AD154]">
                      프로젝트 역할 / 기여도
                    </p>
                  </div>
                  <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    프론트엔드 개발 / 90%
                  </span>
                </div>
                <div className="mt-2 lg:mt-5 self-start">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#7AD154] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#7AD154]">
                      스택
                    </p>
                  </div>
                  <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    TypeScript, Next.js, TailwindCSS
                  </span>
                </div>
                <div className="mt-2 lg:mt-5 self-start">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#7AD154] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#7AD154]">
                      프로젝트 개요
                    </p>
                  </div>
                  <div className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    <p className="whitespace-pre-line">
                      개발하면서 얻은 지식이나 몰랐던 지식들 및 CS, 알고리즘
                      등을 기록하는 개인 블로그 웹사이트입니다.
                      <br />
                      &#183; Post 목록 및 카테고리별 Post 필터링 기능 개발
                      <br />
                      &#183; 방명록 기능 개발
                      <br />
                      &#183; Next.js를 사용하여 SSR 과 SEO 최적화 적용
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-5 md:mt-0 flex-1 order-1 md:order-2">
                <div className="relative w-[200px] lg:w-[300px]">
                  {!blogImageLoaded && !blogImageError && (
                    <ImageSkeleton
                      className="w-[200px] lg:w-[300px]"
                      aspectRatio="card"
                    />
                  )}
                  {!blogImageError && (
                    <img
                      src={blogImg}
                      alt="blog"
                      className={cn(
                        "w-[200px] lg:w-[300px] transition-opacity duration-300",
                        blogImageLoaded ? "opacity-100" : "opacity-0"
                      )}
                      onLoad={handleBlogImageLoad}
                      onError={handleBlogImageError}
                    />
                  )}
                  {blogImageError && (
                    <div className="w-[200px] lg:w-[300px] h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md">
                      <span className="text-gray-400 dark:text-gray-600 text-sm">
                        이미지를 불러올 수 없습니다
                      </span>
                    </div>
                  )}
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
