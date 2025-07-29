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

const PortfolioModal5: React.FC<PortfolioModalProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="mb-5"
          title={
            <span>
              <span className="font-sarina text-2xl lg:text-[35px]">
                Memoria
              </span>
              <br />
              <span dangerouslySetInnerHTML={{ __html: data.title }} />
            </span>
          }
          imgSrc={imageMapping[data.imgSrc]}
          period={data.period}
          style={{
            color: data.textColor,
            backgroundColor: data.bgColor,
          }}
        />
      </DialogTrigger>
      <DialogContent
        closeIconStyle="text-[#39A580] dark:text-[#6EE7B7] p-2"
        className="p-5 lg:p-10 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[80vh] lg:max-h-[90vh] flex flex-col"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl dark:text-[#6EE7B7]"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            <p>AI Diary Service Memoria</p>
          </DialogTitle>
        </DialogHeader>

        {/* 스크롤 가능한 영역 */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden mt-0 lg:mt-4">
          <DialogDescription className="">
            {/* 왼쪽: 설명 및 버튼 */}
            <div className="w-full md:w-1/2 whitespace-nowrap">
              <p className="font-pretendard text-sm lg:text-lg text-[#919191] dark:text-[#B5B5B5]">
                AI 일기 서비스 메모리아
              </p>
              <p className="font-pretendard text-xs lg:text-[15px] text-[#919191] dark:text-[#B5B5B5]">
                {data.period} (4개월)
              </p>
            </div>
          </DialogDescription>
          <div className="w-full mt-4 lg:mt-0">
            <div className="md:flex">
              <div className="flex flex-col whitespace-nowrap w-fit">
                <InteractiveHoverButton
                  // onClick={() =>
                  //   window.open(
                  //     "https:/",
                  //     "_blank"
                  //   )
                  // }
                  transitionClassName="group-hover:translate-x-0"
                  dotBgClassName="bg-[#39A580] dark:bg-[#6EE7B7] size-1.5"
                  className="flex mt-0 lg:mt-4 justify-center items-center w-fit text-xs lg:text-[13px] bg-[#39A580]/20 dark:bg-[#6EE7B7]/20 text-[#39A580] dark:text-[#6EE7B7] border border-[#39A580] dark:border-[#6EE7B7] text-nowrap tracking-widest font-orbitron-regular"
                >
                  memoria
                </InteractiveHoverButton>
                <div className="mt-5 lg:mt-10">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#39A580] dark:bg-[#6EE7B7] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#39A580] dark:text-[#6EE7B7]">
                      프로젝트 역할 / 기여도
                    </p>
                  </div>
                  <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    프론트엔드 개발 / 60%
                  </span>
                </div>
                <div className="mt-2 lg:mt-5">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#2D8A66] dark:bg-[#34D399] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#2D8A66] dark:text-[#34D399]">
                      스택
                    </p>
                  </div>
                  <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    TypeScript, React.js, TailwindCSS,
                  </span>
                </div>
                <div className="mt-2 lg:mt-5">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#2D8A66] dark:bg-[#34D399] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#2D8A66] dark:text-[#34D399]">
                      프로젝트 개요
                    </p>
                  </div>
                  <div className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    <p>
                      AI 기반 일기 작성 도우미 서비스 Memoria의 웹 인터페이스
                      <br />
                      프론트엔드 개발을 담당하며, 사용자 친화적인 UI/UX를
                      구현했습니다.
                      <br />
                      AI가 일기 작성을 도와주고, 나만의 캐릭터가 답장을 해주는
                      서비스 입니다.
                      <br />
                      &#183; 반응형 웹 디자인으로 모든 디바이스 지원 (모바일
                      최적화)
                      <br />
                      &#183; 직관적인 일기 작성 인터페이스 구현
                      <br />
                      &#183; AI 분석 결과 시각화 대시보드 제작
                    </p>
                  </div>
                </div>
              </div>
              {/* 오른쪽: 이미지 + 영상 오버레이 */}
              <div className="flex items-center justify-start md:justify-end w-full min-w-[600px] mt-10 md:mt-0 flex-1">
                <div className="w-[300px] md:min-w-[600px] md:w-[600px] relative">
                  {/* 비디오 프레임 이미지 스켈레톤 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal5;
