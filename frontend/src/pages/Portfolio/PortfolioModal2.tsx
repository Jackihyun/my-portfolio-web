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

const imgs = {
  Srcs: ["src/assets/imgs/baromain.png", "src/assets/imgs/login.png"],
};

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
        closeIconStyle="text-[#618DFF] p-2"
        className="p-10 md:!rounded-[30px]"
      >
        <DialogHeader className="flex flex-col">
          <div
            className="font-orbitron-medium text-3xl dark:text-[#87EA5C]"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-xl text-[#303030] dark:text-white">
            <p>Barojob Website</p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="">
          {/* 왼쪽: 설명 및 버튼 */}
          <div className="w-full md:w-1/2 whitespace-nowrap">
            <p className="font-pretendard text-lg text-[#919191] dark:text-[#B5B5B5]">
              창업 아이디어 프로젝트 '바로잡' 웹사이트
            </p>
            <p className="font-pretendard text-[15px] text-[#919191] dark:text-[#B5B5B5]">
              {data.period} (진행중)
            </p>
          </div>
        </DialogDescription>
        <div className="w-full overflow-hidden">
          <div className="md:flex overflow-x-scroll">
            <div className="flex flex-col whitespace-nowrap w-fit">
              <InteractiveHoverButton
                // onClick={() => window.open("https://www.khucnt.kr")}
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#618DFF] size-1.5"
                className="flex mt-4 justify-center items-center w-fit text-[13px] bg-[#618DFF]/20 text-[#618DFF] border border-[#618DFF] text-nowrap tracking-widest font-orbitron-regular"
              >
                배포x
              </InteractiveHoverButton>
              <div className="mt-10">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#618DFF] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#618DFF]">
                    프로젝트 역할 / 기여도
                  </p>
                </div>
                <span className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  프론트엔드 개발 / 50%
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#618DFF] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#618DFF]">스택</p>
                </div>
                <span className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  TypeScript, React.js, TailwindCSS
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 font-pretendard">
                  <div className=" bg-[#618DFF] rounded-full size-[7px]"></div>
                  <p className="text-[19px] text-[#618DFF]">프로젝트 개요</p>
                </div>
                <div className="font-pretendard text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                  <p>
                    기존의 오프라인 인력사무소의 불편함을 해결하는 솔루션을
                    제안하는
                    <br /> 창업 아이디어 기획 프로젝트의 프론트엔드 개발자로
                    참여하였습니다.
                    <br />
                    &#183; 회원가입 창 (인증번호, 사진 등록 등) 개발
                    <br />
                    &#183; 메인페이지, 지도 api 연동 등 개발
                  </p>
                </div>
              </div>
            </div>
            {/* 오른쪽: 이미지 + 영상 오버레이 */}
            <div className="flex items-center justify-start md:justify-end w-full mt-10 md:mt-0 md:ml-10 flex-1">
              <div className="w-[350px] md:min-w-[600px] md:w-[600px] relative flex gap-2 ">
                <div className="flex flex-col items-center">
                  <p className="font-pretendard mb-1 text-xs text-[#919191]">
                    회원가입 과정
                  </p>
                  <video
                    src="/src/assets/videos/baroSignup.mov"
                    className="w-[110px] md:w-[180px] h-fit border border-[#618DFF] rounded-md p-2"
                    autoPlay
                    loop
                    muted
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-pretendard mb-1 text-xs text-[#919191]">
                    로그인 페이지
                  </p>
                  <img
                    src={imgs.Srcs[1]}
                    alt="login"
                    className="w-[110px] md:w-[180px] h-fit border border-[#618DFF] rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-pretendard mb-1 text-xs text-[#919191]">
                    메인 페이지
                  </p>
                  <img
                    src={imgs.Srcs[0]}
                    alt="main"
                    className="w-[110px] md:w-[180px] h-fit border border-[#618DFF] rounded-md p-2"
                  />
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
