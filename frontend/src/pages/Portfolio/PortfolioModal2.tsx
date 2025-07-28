import React, { useState, useEffect } from "react";
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
import login from "@/assets/imgs/login.png";
import baromain from "@/assets/imgs/baromain.png";
import baroVideo from "@/assets/videos/baroSignup.mov";
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
  Srcs: [login, baromain],
};

const PortfolioModal1: React.FC<PortfolioModalProps> = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint (768px)
    };

    // 초기 체크
    checkIsMobile();

    // 윈도우 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", checkIsMobile);

    // 클린업
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
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
        closeIconStyle="text-[#618DFF] p-2"
        className="p-5 lg:p-10 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[80vh] lg:max-h-[90vh] flex flex-col"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl dark:text-[#87EA5C]"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            <p>Barojob Website</p>
          </DialogTitle>
        </DialogHeader>

        {/* 스크롤 가능한 영역 */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <DialogDescription className="">
            {/* 왼쪽: 설명 및 버튼 */}
            <div className="w-full md:w-1/2 whitespace-nowrap">
              <p className="font-pretendard  text-sm lg:text-lg text-[#919191] dark:text-[#B5B5B5]">
                창업 아이디어 프로젝트 '바로잡' 웹사이트
              </p>
              <p className="font-pretendard text-xs lg:text-[15px] text-[#919191] dark:text-[#B5B5B5]">
                {data.period} (진행중)
              </p>
            </div>
          </DialogDescription>
          <div className="w-full mt-4 lg:mt-0 lg:overflow-hidden">
            <div className="md:flex overflow-x-auto">
              <div className="flex flex-col whitespace-nowrap w-fit">
                <InteractiveHoverButton
                  // onClick={() => window.open("바로잡")}
                  transitionClassName="group-hover:translate-x-0"
                  dotBgClassName="bg-[#618DFF] size-1.5"
                  className="flex mt-0 lg:mt-4 justify-center items-center w-fit text-xs lg:text-[13px] bg-[#618DFF]/20 text-[#618DFF] border border-[#618DFF] text-nowrap tracking-widest font-orbitron-regular"
                >
                  배포x
                </InteractiveHoverButton>
                <div className="mt-5 lg:mt-10">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#618DFF] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#618DFF]">
                      프로젝트 역할 / 기여도
                    </p>
                  </div>
                  <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    프론트엔드 개발 / 50%
                  </span>
                </div>
                <div className="mt-2 lg:mt-5">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#618DFF] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#618DFF]">
                      스택
                    </p>
                  </div>
                  <span className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
                    TypeScript, React.js, TailwindCSS
                  </span>
                </div>
                <div className="mt-2 lg:mt-5">
                  <div className="flex items-center gap-3 font-pretendard">
                    <div className=" bg-[#618DFF] rounded-full size-[5px] lg:size-[7px]"></div>
                    <p className="text-sm lg:text-[19px] text-[#618DFF]">
                      프로젝트 개요
                    </p>
                  </div>
                  <div className="font-pretendard text-xs lg:text-[13px] pl-5 text-[#303030] dark:text-[#D9D9D9]">
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
                    <p className="font-pretendard mb-1 text-xs lg:text-[15px] text-[#919191]">
                      회원가입 과정
                    </p>
                    <div className="relative w-[110px] md:w-[180px]">
                      {!videoLoaded && (
                        <ImageSkeleton
                          className="w-[110px] md:w-[180px] h-40 md:h-60 border border-[#618DFF] rounded-md"
                          aspectRatio="video"
                        />
                      )}
                      <video
                        src={baroVideo}
                        className={cn(
                          "w-[110px] md:w-[180px] lg:h-fit object-cover border border-[#618DFF] rounded-md p-2 transition-opacity duration-300",
                          videoLoaded ? "opacity-100" : "opacity-0"
                        )}
                        autoPlay={!isMobile}
                        loop
                        muted
                        controls={isMobile}
                        playsInline
                        onLoadedData={handleVideoLoad}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-pretendard mb-1 text-xs lg:text-[15px] text-[#919191]">
                      로그인 페이지
                    </p>
                    <div className="relative w-[110px] md:w-[180px]">
                      {!imageLoaded[1] && !imageError[1] && (
                        <ImageSkeleton
                          className="w-[110px] h-40 md:h-60 md:w-[180px] border border-[#618DFF] rounded-md"
                          aspectRatio="card"
                        />
                      )}
                      {!imageError[1] && (
                        <img
                          src={imgs.Srcs[1]}
                          alt="login"
                          className={cn(
                            "w-[110px] md:w-[180px] lg:h-fit object-cover border border-[#618DFF] rounded-md p-2 transition-opacity duration-300",
                            imageLoaded[1] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleImageLoad(1)}
                          onError={() => handleImageError(1)}
                        />
                      )}
                      {imageError[1] && (
                        <div className="w-[110px] md:w-[180px] h-32 border border-[#618DFF] rounded-md p-2 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                          <span className="text-xs text-gray-500">
                            이미지 오류
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-pretendard mb-1 text-xs lg:text-[15px] text-[#919191]">
                      메인 페이지
                    </p>
                    <div className="relative w-[110px] md:w-[180px]">
                      {!imageLoaded[0] && !imageError[0] && (
                        <ImageSkeleton
                          className="w-[110px] h-40 md:h-60 md:w-[180px] border border-[#618DFF] rounded-md"
                          aspectRatio="card"
                        />
                      )}
                      {!imageError[0] && (
                        <img
                          src={imgs.Srcs[0]}
                          alt="main"
                          className={cn(
                            "w-[110px] md:w-[180px] lg:h-fit object-cover border border-[#618DFF] rounded-md p-2 transition-opacity duration-300",
                            imageLoaded[0] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleImageLoad(0)}
                          onError={() => handleImageError(0)}
                        />
                      )}
                      {imageError[0] && (
                        <div className="w-[110px] md:w-[180px] h-32 border border-[#618DFF] rounded-md p-2 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                          <span className="text-xs text-gray-500">
                            이미지 오류
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
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
