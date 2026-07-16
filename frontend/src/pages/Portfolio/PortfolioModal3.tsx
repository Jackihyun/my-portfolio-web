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
import blogImg from "@/assets/imgs/blog2.webp";
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
    kicker?: string;
    role?: string;
    summary?: string;
    highlights?: string[];
    tags?: string[];
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
          kicker={data.kicker}
          role={data.role}
          summary={data.summary}
          highlights={data.highlights}
          tags={data.tags}
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
                Lighthouse 모바일 성능 46점 → 98점 개선
              </p>
              <p className="font-pretendard text-xs lg:text-[15px] text-[#919191] dark:text-[#B5B5B5]">
                검색 모달과 사이드바를 지연 로딩한 개인 기술 블로그
              </p>
            </div>
          </DialogDescription>
          <div className="w-full mt-4 lg:mt-0 lg:overflow-hidden">
            <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-auto">
              <div className="flex flex-col whitespace-nowrap w-full md:w-fit order-2 md:order-1 justify-center items-center md:items-start mt-5 md:mt-0">
                <InteractiveHoverButton
                  onClick={() =>
                    window.open(
                      "https://blog.jackihyun.com/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  transitionClassName="group-hover:translate-x-0"
                  dotBgClassName="bg-[#7AD154] size-1.5"
                  className="flex mt-0 lg:mt-4 justify-center items-center w-fit text-xs lg:text-[13px] bg-[#7AD154]/20 text-[#7AD154] border border-[#7AD154] text-nowrap tracking-widest font-orbitron-regular"
                >
                  Jack's Blog
                </InteractiveHoverButton>
                <div className="mt-5 lg:mt-10 self-start">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#7AD154] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#7AD154]">프로젝트 소개</p>
                  </div>
                  <div className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    <p className="whitespace-pre-line">
                      개발 기록, CS, 알고리즘 학습 내용을 운영하기 위해 만든
                      개인 기술 블로그입니다.
                      <br />
                      정적 페이지가 아니라 검색, 댓글, 인증, SEO, 배포까지
                      포함한 운영형 서비스로 구현했습니다.
                    </p>
                  </div>
                </div>
                <div className="mt-2 lg:mt-5 self-start">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#7AD154] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#7AD154]">Project Info</p>
                  </div>
                  <div className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                    <p>Team: Personal Project</p>
                    <p>Role: Full-stack / Frontend 중심</p>
                    <p>Stack: Next.js · TypeScript · Spring Boot · NextAuth</p>
                    <p>Infra: SQLite · Caddy · Cloudflare</p>
                  </div>
                </div>
                <div className="mt-2 lg:mt-5 self-start">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#7AD154] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#7AD154]">문제 해결</p>
                  </div>
                  <div className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                    <p>
                      검색 모달, 사이드바, 애니메이션 코드가 첫 진입 시 함께
                      로드되어 모바일 초기 렌더링 성능이 낮았습니다.
                    </p>
                    <p className="mt-2">
                      검색 모달과 사이드바를 dynamic import로 분리하고, 전역
                      framer-motion 의존을 CSS 애니메이션으로 대체해 Lighthouse
                      모바일 성능을 46점에서 98점으로 개선했습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-5 md:mt-0 flex-1 order-1 md:order-2">
                <div className="relative w-[280px] lg:w-[450px] aspect-[2122/1924]">
                  {!blogImageLoaded && !blogImageError && (
                    <ImageSkeleton
                      className="absolute inset-0 w-full h-full rounded-lg"
                    />
                  )}
                  {!blogImageError && (
                    <img
                      src={blogImg}
                      alt="blog"
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-300 shadow-lg rounded-lg",
                        blogImageLoaded ? "opacity-100" : "opacity-0"
                      )}
                      onLoad={handleBlogImageLoad}
                      onError={handleBlogImageError}
                    />
                  )}
                  {blogImageError && (
                    <div className="w-full aspect-video flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-md">
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
