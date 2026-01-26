import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Card from "./Card";
import imageMapping from "@/utils/imageMapping";
import useEmblaCarousel from "embla-carousel-react";
import diaryVideo from "@/assets/videos/일기장 생성.mp4";
import aiCharacterVideo from "@/assets/videos/AI 캐릭터 생성 + 일기 작성 + 캐릭터 편지 + 댓글 영상.mp4";
import aiLetterVideo from "@/assets/videos/AI편지, 음악.mp4";

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
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // 활성화된 슬라이드의 영상만 재생하고 나머지는 정지/초기화
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === selectedIndex) {
        video.play().catch(() => {
          // 브라우저 정책으로 인해 자동 재생이 차단될 수 있음
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [selectedIndex]);

  const videos = [
    { title: "일기장 생성", src: diaryVideo },
    { title: "AI 캐릭터 생성", src: aiCharacterVideo },
    { title: "AI 편지", src: aiLetterVideo },
  ];

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
        className="p-5 lg:p-10 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[85vh] lg:max-h-[90vh] flex flex-col bg-white dark:bg-[#0F0F0F]"
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

        {/* 메인 콘텐츠 영역 (스크롤 최소화) */}
        <div className="flex-1 overflow-y-auto md:overflow-hidden mt-4 lg:mt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-12 h-full">
            {/* 왼쪽: 설명 및 버튼 */}
            <div className="flex flex-col w-full md:w-[280px] lg:w-[350px] flex-shrink-0 order-2 md:order-1 md:pt-4">
              <div className="hidden md:block">
                <InteractiveHoverButton
                onClick={() =>
                  window.open(
                    "https://github.com/Capstone-Memoria/Memoria-Front",
                    "_blank"
                  )
                }
                  transitionClassName="group-hover:translate-x-0"
                  dotBgClassName="bg-[#39A580] dark:bg-[#6EE7B7] size-1.5"
                  className="flex justify-center items-center w-fit text-xs lg:text-[13px] bg-[#39A580]/20 dark:bg-[#6EE7B7]/20 text-[#39A580] dark:text-[#6EE7B7] border border-[#39A580] dark:border-[#6EE7B7] text-nowrap tracking-widest font-orbitron-regular"
                >
                  memoria
                </InteractiveHoverButton>
              </div>
              
              <div className="mt-6 lg:mt-8 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#39A580] dark:bg-[#6EE7B7] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#39A580] dark:text-[#6EE7B7] font-medium">
                    Role / Contribution
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9]">
                  Frontend Development / 60%
                </span>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#2D8A66] dark:bg-[#34D399] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#2D8A66] dark:text-[#34D399] font-medium">
                    Tech Stack
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] whitespace-pre-line leading-relaxed">
                  TypeScript, React.js, TailwindCSS, Tanstack Query
                </span>
                <br />
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] whitespace-pre-line leading-relaxed">LLM API, Stable Diffusion API, Yue AI</span>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#2D8A66] dark:bg-[#34D399] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#2D8A66] dark:text-[#34D399] font-medium">
                    Overview
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] whitespace-normal leading-relaxed">
                  <p>
                    AI 기반 일기 작성 도우미 서비스 Memoria의 웹 인터페이스를 담당했습니다.
                    AI 분석 결과 시각화 대시보드와 직관적인 일기 작성 UI를 구현했습니다.
                  </p>
                  <br/>
                  <p>200명의 사용자를 대상으로 서비스를 제공하고, 피드백을 받았습니다.</p>
                  <br/>
                  <p>결과적으로, 캡스톤 디자인 프로젝트 금상을 수상했습니다.</p>
                </div>
              </div>

              <p className="mt-6 font-pretendard text-[11px] lg:text-xs text-[#919191] dark:text-[#B5B5B5] pl-4">
                {data.period}
              </p>
            </div>

            {/* 오른쪽: 캐로우셀 기반 모바일 프레임 + 영상 */}
            <div className="flex flex-col items-center w-full flex-grow order-1 md:order-2 h-full justify-center bg-transparent">
              <div className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[300px] relative overflow-hidden bg-transparent" ref={emblaRef}>
                <div className="flex bg-transparent">
                  {videos.map((video, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 flex flex-col items-center bg-transparent">
                      <div className="w-full flex justify-between items-center mb-3 px-1">
                        <p className="font-orbitron-medium text-[9px] text-[#39A580] opacity-60">0{index + 1}</p>
                        <p className="font-pretendard font-semibold text-xs lg:text-sm text-[#39A580] dark:text-[#6EE7B7]">
                          {video.title}
                        </p>
                      </div>
                      
                      {/* CSS 기반 모바일(아이폰) 프레임 - 잔상을 유발하는 shadow와 ring 제거 */}
                      <div className="relative w-full aspect-[9/19.2] border-[#121212] bg-[#121212] border-[10px] lg:border-[12px] rounded-[2.2rem] lg:rounded-[2.8rem] overflow-visible">
                        {/* Notch */}
                        <div className="w-[35%] h-[16px] lg:h-[20px] bg-[#121212] top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                        {/* Buttons - 더 어둡게 처리 */}
                        <div className="h-[35px] lg:h-[45px] w-[2px] bg-[#121212] absolute -left-[12px] lg:-left-[14px] top-[100px] rounded-l-md"></div>
                        <div className="h-[50px] lg:h-[65px] w-[2px] bg-[#121212] absolute -right-[12px] lg:-right-[14px] top-[120px] rounded-r-md"></div>
                        
                        {/* Screen Content */}
                        <div className="rounded-[1.6rem] lg:rounded-[2.2rem] overflow-hidden w-full h-full bg-black">
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={video.src}
                            loop
                            muted
                            controls={isMobile}
                            playsInline
                            className="w-full h-full object-contain bg-black"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 캐로우셀 네비게이션 점(Dots) */}
              <div className="flex gap-2 mt-4 lg:mt-6 bg-transparent">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`size-1.5 lg:size-2 rounded-full transition-all duration-300 ${
                      selectedIndex === index 
                        ? "bg-[#39A580] w-4 lg:w-5" 
                        : "bg-[#39A580]/20"
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

export default PortfolioModal5;
