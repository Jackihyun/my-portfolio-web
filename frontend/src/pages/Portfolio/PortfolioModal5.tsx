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

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

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
            <span className="inline-block max-w-[72%] sm:max-w-[80%] lg:max-w-none">
              <span className="font-sarina text-[clamp(1.05rem,4.8vw,2.15rem)] leading-none">
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
        className="p-4 sm:p-6 lg:p-8 md:!rounded-[30px] rounded-xl overflow-hidden h-[88vh] lg:h-[90vh] max-h-[92vh] flex flex-col bg-white dark:bg-[#0F0F0F]"
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

        <div className="mt-3 lg:mt-5 flex-1 min-h-0 overflow-y-auto pr-1">
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] xl:gap-8">
            <div className="order-2 xl:order-1 flex flex-col">
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

              <div className="mt-5 lg:mt-7 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#39A580] dark:bg-[#6EE7B7] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#39A580] dark:text-[#6EE7B7] font-medium">
                    프로젝트 소개
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <p>
                    AI 기반 일기 작성 도우미 서비스 Memoria의 웹 인터페이스를 담당했습니다.
                    AI 분석 결과 시각화 대시보드와 직관적인 일기 작성 UI를 구현했습니다.
                  </p>
                  <p className="mt-2">200명의 사용자를 대상으로 서비스를 제공하고, 피드백을 받았습니다.</p>
                  <p className="mt-2">결과적으로, 캡스톤 디자인 프로젝트 금상을 수상했습니다.</p>
                </div>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#2D8A66] dark:bg-[#34D399] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#2D8A66] dark:text-[#34D399] font-medium">
                    내가 기여한 부분
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <p>Frontend Development / 60%</p>
                  <p className="mt-1">- AI 결과 시각화 대시보드 및 일기 작성 UI 설계/구현</p>
                  <p>- 캐릭터/편지/음악 생성 플로우를 연결한 사용자 여정 구성</p>
                  <p>- 사용자 피드백 기반 인터랙션/가독성 개선</p>
                </div>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#2D8A66] dark:bg-[#34D399] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#2D8A66] dark:text-[#34D399] font-medium">
                    사용 기술
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <p>TypeScript, React.js, TailwindCSS, Tanstack Query</p>
                  <p>LLM API, Stable Diffusion API, Yue AI</p>
                </div>
              </div>

            </div>

            <div className="order-1 xl:order-2 flex flex-col items-center justify-center w-full">
              <p className="mb-2 text-[11px] lg:text-xs font-pretendard text-[#6A6A6A] dark:text-[#B8B8B8]">
                Swipe or use arrows to explore
              </p>
              <div
                className="w-full max-w-[clamp(210px,38vw,300px)] relative overflow-hidden bg-transparent"
                ref={emblaRef}
              >
                <div className="flex bg-transparent">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 flex flex-col items-center bg-transparent"
                    >
                      <div className="w-full flex justify-between items-center mb-3 px-1">
                        <p className="font-orbitron-medium text-[9px] text-[#39A580] opacity-60">
                          0{index + 1}
                        </p>
                        <p className="font-pretendard font-semibold text-xs lg:text-sm text-[#39A580] dark:text-[#6EE7B7]">
                          {video.title}
                        </p>
                      </div>

                      <div className="relative w-full aspect-[9/19.2] border-[#121212] bg-[#121212] border-[10px] lg:border-[12px] rounded-[2.2rem] lg:rounded-[2.8rem] overflow-visible">
                        <div className="w-[35%] h-[16px] lg:h-[20px] bg-[#121212] top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                        <div className="h-[35px] lg:h-[45px] w-[2px] bg-[#121212] absolute -left-[12px] lg:-left-[14px] top-[100px] rounded-l-md"></div>
                        <div className="h-[50px] lg:h-[65px] w-[2px] bg-[#121212] absolute -right-[12px] lg:-right-[14px] top-[120px] rounded-r-md"></div>

                        <div className="rounded-[1.6rem] lg:rounded-[2.2rem] overflow-hidden w-full h-full bg-black">
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={video.src}
                            loop
                            muted
                            preload="metadata"
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

              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  className="h-10 px-3 rounded-full border border-[#39A580]/50 text-[#39A580] dark:text-[#6EE7B7] text-xs font-orbitron-regular hover:bg-[#39A580]/10 transition-colors"
                >
                  Prev
                </button>
                <div className="flex gap-2 px-2">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={`size-2 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? "bg-[#39A580] w-5"
                          : "bg-[#39A580]/20"
                      }`}
                      onClick={() => scrollTo(index)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={scrollNext}
                  className="h-10 px-3 rounded-full border border-[#39A580]/50 text-[#39A580] dark:text-[#6EE7B7] text-xs font-orbitron-regular hover:bg-[#39A580]/10 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal5;
