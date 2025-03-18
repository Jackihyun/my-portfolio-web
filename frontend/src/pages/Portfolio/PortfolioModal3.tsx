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
import imageMapping from "@/utils/imageMapping";

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
        className="p-10 md:!rounded-[30px] overflow-y-auto max-h-[90vh]"
      >
        <DialogHeader className="flex flex-col">
          <div
            className="font-orbitron-medium text-3xl"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-xl text-[#303030] dark:text-white">
            <p>Jack's Blog</p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="">
          {/* 왼쪽: 설명 및 버튼 */}
          <div className="w-full md:w-1/2 whitespace-nowrap">
            <p className="font-pretendard text-lg text-[#919191] dark:text-[#B5B5B5]">
              개인 블로그 웹사이트 프로젝트
            </p>
            <p className="font-pretendard text-[15px] text-[#919191] dark:text-[#B5B5B5]">
              {data.period} (진행중)
            </p>
          </div>
        </DialogDescription>
        <div className="w-full overflow-hidden">
          <div className="md:flex overflow-x-auto overflow-y-auto">
            <div className="flex flex-col whitespace-nowrap w-fit">
              <InteractiveHoverButton
                onClick={() =>
                  window.open("https://my-blog-mauve-five.vercel.app/")
                }
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#7AD154] size-1.5"
                className="flex mt-4 justify-center items-center w-fit text-[13px] bg-[#7AD154]/20 text-[#7AD154] border border-[#7AD154] text-nowrap tracking-widest font-orbitron-regular"
              >
                vercel.app
              </InteractiveHoverButton>
              <div className="mt-10">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#7AD154] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#7AD154]">
                    프로젝트 역할 / 기여도
                  </p>
                </div>
                <span className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  프론트엔드 개발 / 90%
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#7AD154] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#7AD154]">스택</p>
                </div>
                <span className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  TypeScript, Next.js, TailwindCSS
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#7AD154] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#7AD154]">프로젝트 개요</p>
                </div>
                <div className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  <p>
                    개발하면서 얻은 지식이나 몰랐던 지식들 및 CS, 알고리즘 등을
                    기록하는 개인 블로그 웹사이트입니다.
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
            {/* 오른쪽: 이미지 + 영상 오버레이 */}
            <div className="flex items-center justify-start md:justify-center mt-10 md:mt-0 flex-1">
              <div className="relative">
                <img src={data.modalImgSrc} alt="blog" className="w-[300px]" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal1;
