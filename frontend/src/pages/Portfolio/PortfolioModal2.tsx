import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Card from "./Card";
import imageMapping from "@/utils/imageMapping";
import useEmblaCarousel from "embla-carousel-react";
import baro1 from "@/assets/imgs/바로.png";
import baro2 from "@/assets/imgs/바로잡2.png";
import baro3 from "@/assets/imgs/바로잡3.png";
import baro4 from "@/assets/imgs/바로잡4.png";
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

const PortfolioModal2: React.FC<PortfolioModalProps> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const projectImages = [
    { title: "로그인 페이지", src: baro1 },
    { title: "지도 기능", src: baro2 },
    { title: "구인 공고 기능", src: baro3 },
    { title: "리뷰 기능 및 매칭내역", src: baro4 },
  ];

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
        className="p-5 lg:p-10 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[85vh] lg:max-h-[90vh] flex flex-col bg-white dark:bg-[#0F0F0F]"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl dark:text-[#618DFF]"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            <p>창업 프로젝트 Inteuk WebApp</p>
            <p>2025/01 ~ in progress</p>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto md:overflow-hidden mt-4 lg:mt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-12 h-full">
            {/* 왼쪽: 설명 및 버튼 */}
            <div className="flex flex-col w-full md:w-[280px] lg:w-[350px] flex-shrink-0 order-2 md:order-1 md:pt-4">
              <div className="hidden md:block">
                <InteractiveHoverButton
                  onClick={() =>
                    window.open(
                      "https://www.inteuk.com/",
                      "_blank"
                    )
                  }
                  transitionClassName="group-hover:translate-x-0"
                  dotBgClassName="bg-[#618DFF] size-1.5"
                  className="flex justify-center items-center w-fit text-xs lg:text-[13px] bg-[#618DFF]/20 text-[#618DFF] border border-[#618DFF] text-nowrap tracking-widest font-orbitron-regular"
                >
                  
                  랜딩 페이지
                </InteractiveHoverButton>
              </div>
              
              <div className="mt-6 lg:mt-8 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#618DFF] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#618DFF] font-medium">
                    Role / Contribution
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9]">
                  Frontend Development / 70%
                </span>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#618DFF] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#618DFF] font-medium">
                    Tech Stack
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9]">
                  TypeScript, React.js, TailwindCSS, Kakao Map API, Capacitor
                </span>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#618DFF] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#618DFF] font-medium">
                    Overview
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] whitespace-normal leading-relaxed text-pretty">
                  <p>
                    기존의 오프라인 인력사무소의 불편함을 해결하는 솔루션을 제안하는 창업 아이디어 기획 프로젝트의 프론트엔드 개발자로 참여하였습니다.
                    <br /><br />
                    &#183; 회원가입 프로세스 (인증번호, 사진 등록 등) 구현
                    <br />
                    &#183; 메인페이지 개발 및 지도 API 연동
                  </p>
                </div>
              </div>

              <p className="mt-6 font-pretendard text-[11px] lg:text-xs text-[#919191] dark:text-[#B5B5B5] pl-4">
                {data.period}
              </p>
            </div>

            {/* 오른쪽: 캐로우셀 기반 이미지 슬라이더 */}
            <div className="flex flex-col items-center w-full flex-grow order-1 md:order-2 h-full justify-center">
              <div className="w-full max-w-[280px] md:max-w-[450px] lg:max-w-[500px] relative overflow-hidden bg-transparent" ref={emblaRef}>
                <div className="flex">
                  {projectImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 flex flex-col items-center px-2">
                      <div className="w-full flex justify-between items-center mb-3 px-1">
                        <p className="font-orbitron-medium text-[9px] text-[#618DFF] opacity-60">0{index + 1}</p>
                        <p className="font-pretendard font-semibold text-xs lg:text-sm text-[#618DFF]">
                          {image.title}
                        </p>
                      </div>
                      
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                        {!imagesLoaded[index] && (
                          <ImageSkeleton className="w-full h-full" aspectRatio="video" />
                        )}
                        <img
                          src={image.src}
                          alt={image.title}
                          className={cn(
                            "w-full h-full object-contain transition-opacity duration-500",
                            imagesLoaded[index] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleImageLoad(index)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 캐로우셀 네비게이션 점(Dots) */}
              <div className="flex gap-2 mt-4 lg:mt-6">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`size-1.5 lg:size-2 rounded-full transition-all duration-300 ${
                      selectedIndex === index 
                        ? "bg-[#618DFF] w-4 lg:w-5" 
                        : "bg-[#618DFF]/20"
                    }`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal2;
