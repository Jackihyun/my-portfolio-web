import React, { useCallback, useEffect, useState } from "react";
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
import { ImageSkeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils/classname";
import useEmblaCarousel from "embla-carousel-react";
import finvibeMain from "@/assets/imgs/finvibeMain.webp";
import finvibeChart from "@/assets/imgs/finvibeChart.webp";
import finvibeChallenge from "@/assets/imgs/finvibeChallenge.webp";
import finvibeAI from "@/assets/imgs/finvibeAI.webp";

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

const projectImages = [
  { title: "메인 대시보드", src: finvibeMain },
  { title: "자산 차트", src: finvibeChart },
  { title: "챌린지", src: finvibeChallenge },
  { title: "AI 학습", src: finvibeAI },
];

const PortfolioModal6: React.FC<PortfolioModalProps> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
  const [imagesError, setImagesError] = useState<{ [key: number]: boolean }>({});

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setImagesError((prev) => ({ ...prev, [index]: true }));
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
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
        closeIconStyle="text-[#17346B] p-2"
        className="p-4 sm:p-6 lg:p-8 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[90vh] flex flex-col bg-white dark:bg-[#0F0F0F]"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            Finvibe
          </DialogTitle>
        </DialogHeader>

        <div className="mt-3 lg:mt-5 overflow-y-auto pr-1">
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(250px,340px)_minmax(0,1fr)] xl:gap-8">
            <div className="order-2 xl:order-1 flex flex-col">
              <InteractiveHoverButton
                onClick={() =>
                  window.open("https://github.com/DEPth-FinVibe/FinVibe-fe", "_blank")
                }
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-current size-1.5"
                className="flex justify-center items-center w-fit text-xs lg:text-[13px] text-nowrap tracking-widest font-orbitron-regular"
                style={{
                  backgroundColor: `${data.modalColor}20`,
                  color: data.modalColor,
                  border: `1px solid ${data.modalColor}`,
                }}
              >
                GitHub
              </InteractiveHoverButton>

              <div className="mt-5 lg:mt-7 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="rounded-full size-[5px]" style={{ backgroundColor: data.modalColor }}></div>
                  <p className="text-sm lg:text-[17px] font-medium" style={{ color: data.modalColor }}>
                    프로젝트 소개
                  </p>
                </div>
                <ul className="font-pretendard text-xs lg:text-[13px] pl-4 mt-1 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <li>- 가상 자산 기반 투자 시뮬레이션 서비스</li>
                  <li>- 투자 수준/이해도 기반 개인화 학습 콘텐츠 제공</li>
                  <li>- 성과+과정 중심 챌린지로 투자 습관 형성 유도</li>
                  <li>- 실시간 경제 뉴스 요약과 토론 기능으로 판단 역량 강화</li>
                </ul>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="rounded-full size-[5px]" style={{ backgroundColor: data.modalColor }}></div>
                  <p className="text-sm lg:text-[17px] font-medium" style={{ color: data.modalColor }}>
                    내가 기여한 부분
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] leading-relaxed space-y-3 mt-1">
                  <p>
                    1) 자산 조회 UI/UX 구조 설계 및 렌더링 체감 개선: 상태 분리
                    설계, 전환 시 깜빡임 최소화, 차트 중심 정보 구조 최적화
                  </p>
                  <p>
                    2) 클라이언트 데이터 아키텍처 및 상태 관리 고도화: React
                    Query 표준화, Zustand 기반 전역 상태 경량화, axios API 계층
                    일원화
                  </p>
                  <p>
                    3) 협업 생산성과 품질 관리 체계 구축: Storybook 기반 컴포넌트
                    개발 문화 정착, ESLint + TypeScript 규칙으로 코드 품질 유지
                  </p>
                </div>
              </div>

              <div className="mt-4 lg:mt-6 self-start">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="rounded-full size-[5px]" style={{ backgroundColor: data.modalColor }}></div>
                  <p className="text-sm lg:text-[17px] font-medium" style={{ color: data.modalColor }}>
                    사용 기술
                  </p>
                </div>
                <ul className="font-pretendard text-xs lg:text-[13px] pl-4 mt-1 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <li>- TypeScript, React 19</li>
                  <li>- TanStack React Query, Zustand</li>
                  <li>- Storybook, lightweight-charts</li>
                </ul>
              </div>

            </div>

            <div className="order-1 xl:order-2 flex flex-col items-center w-full justify-start">
              <p className="mb-2 text-[11px] lg:text-xs font-pretendard text-[#6A6A6A] dark:text-[#B8B8B8]">
                Swipe or use arrows to explore
              </p>
              <div
                className="w-full max-w-[320px] md:max-w-[560px] xl:max-w-[620px] overflow-hidden"
                ref={emblaRef}
              >
                <div className="flex">
                  {projectImages.map((image, index) => (
                    <div
                      key={image.title}
                      className="flex-[0_0_100%] min-w-0 flex flex-col items-center px-2"
                    >
                      <div className="w-full flex justify-between items-center mb-3 px-1">
                        <p className="font-orbitron-medium text-[9px] opacity-80" style={{ color: data.modalColor }}>
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="font-pretendard font-semibold text-xs lg:text-sm min-h-5" style={{ color: data.modalColor }}>
                          {image.title}
                        </p>
                      </div>

                      <div className="relative w-full aspect-[16/10] min-h-[190px] md:min-h-[240px] rounded-xl overflow-hidden bg-gray-50 dark:bg-black/20" style={{ border: `1px solid ${data.modalColor}33` }}>
                        {!imagesLoaded[index] && !imagesError[index] && (
                          <ImageSkeleton className="w-full h-full" aspectRatio="video" />
                        )}
                        {!imagesError[index] && (
                          <img
                            src={image.src}
                            alt={image.title}
                            className={cn(
                              "w-full h-full object-contain transition-opacity duration-500",
                              imagesLoaded[index] ? "opacity-100" : "opacity-0"
                            )}
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                          />
                        )}
                        {imagesError[index] && (
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                            이미지를 불러올 수 없습니다
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  className="h-10 px-3 rounded-full text-xs font-orbitron-regular transition-colors"
                  style={{ border: `1px solid ${data.modalColor}`, color: data.modalColor }}
                >
                  Prev
                </button>

                <div className="flex gap-2 px-1">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={`size-2 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? "w-5"
                          : ""
                      }`}
                      style={{ backgroundColor: selectedIndex === index ? data.modalColor : `${data.modalColor}55` }}
                      onClick={() => scrollTo(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={scrollNext}
                  className="h-10 px-3 rounded-full text-xs font-orbitron-regular transition-colors"
                  style={{ border: `1px solid ${data.modalColor}`, color: data.modalColor }}
                >
                  Next
                </button>
              </div>

              <p className="mt-2 font-pretendard text-[11px] lg:text-xs text-[#919191] dark:text-[#B5B5B5]">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(projectImages.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal6;
