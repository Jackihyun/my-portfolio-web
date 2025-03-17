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
        closeIconStyle="text-[#FFA24A] dark:text-[#87EA5C] p-2"
        className="p-10 !rounded-none md:!rounded-[30px]"
      >
        <DialogHeader className="flex flex-col">
          <div
            className="font-orbitron-medium text-3xl dark:text-[#87EA5C]"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-xl text-[#303030] dark:text-white">
            <p>
              KyungHee University
              <br />
              Graduation Fashion Show Website
            </p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-2">
          {/* 왼쪽: 설명 및 버튼 */}
          <div className="w-full md:w-1/2 whitespace-nowrap">
            <p className="font-pretendard text-lg text-[#919191] dark:text-[#B5B5B5]">
              경희대학교 의상학과 졸업작품 패션쇼 웹사이트
            </p>
            <p className="font-pretendard text-[15px] text-[#919191] dark:text-[#B5B5B5]">
              {data.period} (5개월)
            </p>
          </div>
        </DialogDescription>
        <div className="w-full overflow-hidden">
          <div className="md:flex overflow-x-scroll">
            <div className="flex flex-col whitespace-nowrap w-fit">
              <InteractiveHoverButton
                onClick={() => window.open("https://www.khucnt.kr")}
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#FFA24A] dark:bg-[#87EA5C] size-1.5"
                className="flex mt-4 justify-center items-center w-fit text-[13px] bg-[#FFA24A]/20 text-[#FFA24A] border border-[#FFA24A] dark:border-[#87EA5C] text-nowrap tracking-widest font-orbitron-regular"
              >
                www.khucnt.kr
              </InteractiveHoverButton>
              <div className="mt-10">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#FFA24A] dark:bg-[#87EA5C] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#FFA24A] dark:text-[#87EA5C]">
                    프로젝트 역할 / 기여도
                  </p>
                </div>
                <span className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  프론트엔드 개발 / 90%
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#FFA24A] dark:bg-[#87EA5C] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#FFA24A] dark:text-[#87EA5C]">
                    스택
                  </p>
                </div>
                <span className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  HTML, CSS, JavaScript, React.js, TailwindCSS
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#FFA24A] dark:bg-[#87EA5C] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#FFA24A] dark:text-[#87EA5C]">
                    프로젝트 개요
                  </p>
                </div>
                <div className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  <p>
                    제44회 경희대학교 의상학과 졸업작품 패션쇼의 공식 웹사이트
                    <br />
                    프론트엔드 개발을 담당했습니다. 패션쇼의 주요 정보를
                    제공하고,
                    <br />
                    졸업 작품을 온라인 아카이브로 보존하는 역할을 합니다.
                    <br />
                    &#183; 다양한 디바이스(PC, 태블릿, 모바일)에서 최적화
                    <br />
                    &#183; 인터랙티브한 갤러리 제작
                  </p>
                </div>
              </div>
            </div>
            {/* 오른쪽: 이미지 + 영상 오버레이 */}
            <div className="flex items-center justify-start md:justify-end w-full min-w-[600px] mt-10 md:mt-0 flex-1">
              <div className="w-[300px] md:min-w-[600px] md:w-[600px] relative">
                <img src={data.modalImgSrc} alt="Monitor" className="" />
                <video
                  src="/src/assets/videos/khuVideo.mov"
                  autoPlay
                  loop
                  muted
                  className="absolute object-cover w-[220px] h-[125px] md:w-[440px] md:h-[245px] top-[4%] left-[15%]"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal1;
