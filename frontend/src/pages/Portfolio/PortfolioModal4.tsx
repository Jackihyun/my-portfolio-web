import React, { useCallback, useEffect, useState } from "react";
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
import AO1 from "@/assets/imgs/AO1.png";
import AO2 from "@/assets/imgs/AO2.png";
import AO3 from "@/assets/imgs/AO3.png";
import AO4 from "@/assets/imgs/AO4.png";
import AO5 from "@/assets/imgs/AO5.png";
import useEmblaCarousel from "embla-carousel-react";
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

const projectImages = [
  { title: "메인 화면", src: AO1 },
  { title: "아카이브 화면", src: AO2 },
  { title: "스터디 소개", src: AO3 },
  { title: "라이트/다크 모드", src: AO4 },
  { title: "상세 인터랙션", src: AO5 },
];

const PortfolioModal4: React.FC<PortfolioModalProps> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

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
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
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
        closeIconStyle="text-[#FF4A3E] p-2"
        className="p-4 sm:p-6 lg:p-8 md:!rounded-[30px] rounded-xl overflow-hidden h-[88vh] lg:h-[90vh] max-h-[92vh] flex flex-col"
      >
        <DialogHeader className="flex flex-col flex-shrink-0">
          <div
            className="font-orbitron-medium text-2xl lg:text-3xl"
            style={{ color: data.modalColor }}
          >
            Project
          </div>
          <DialogTitle className="font-orbitron-regular text-lg lg:text-xl text-[#303030] dark:text-white">
            <p>
              FireAO
              <br />
              Study Website
            </p>
          </DialogTitle>
        </DialogHeader>

        <div className="mt-3 lg:mt-5 flex-1 min-h-0 overflow-y-auto pr-1">
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] xl:gap-8">
            <div className="order-2 xl:order-1 flex flex-col">
              <DialogDescription>
                <div>
                  <p className="font-pretendard text-sm lg:text-lg text-[#919191] dark:text-[#B5B5B5]">
                    명지대학교 컴퓨터공학과 스터디 FireAO 웹사이트
                  </p>
                  <p className="font-pretendard text-xs lg:text-[15px] text-[#919191] dark:text-[#B5B5B5]">
                    {data.period} (2개월)
                  </p>
                </div>
              </DialogDescription>

              <InteractiveHoverButton
                onClick={() =>
                  window.open("https://github.com/Jackihyun/AO-WEB", "_blank")
                }
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#FF4A3E] size-1.5"
                className="mt-4 flex justify-center items-center w-fit text-xs lg:text-[13px] bg-[#FF4A3E]/20 text-[#FF4A3E] border border-[#FF4A3E] tracking-widest font-orbitron-regular"
              >
                배포 중단 - GitHub 연결
              </InteractiveHoverButton>

              <div className="mt-5 lg:mt-7">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#FF4A3E] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#FF4A3E] font-medium">
                    Role / Contribution
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9]">
                  Frontend Development / 50%
                </span>
              </div>

              <div className="mt-4 lg:mt-6">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#FF4A3E] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#FF4A3E] font-medium">
                    Tech Stack
                  </p>
                </div>
                <span className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9]">
                  JavaScript, Svelte, TailwindCSS
                </span>
              </div>

              <div className="mt-4 lg:mt-6">
                <div className="flex items-center gap-2 font-pretendard">
                  <div className="bg-[#FF4A3E] rounded-full size-[5px]"></div>
                  <p className="text-sm lg:text-[17px] text-[#FF4A3E] font-medium">
                    Overview
                  </p>
                </div>
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <p>
                    명지대학교 컴퓨터공학과 스터디 FireAO 모바일 웹 개발 프로젝트에
                    프론트엔드 개발자로 참여했습니다.
                  </p>
                  <p className="mt-2">
                    스크롤 및 터치 이벤트에 따라 인터렉티브하게 변화하는 화면,
                    스터디 소개 및 아카이브 페이지를 구현했습니다.
                  </p>
                  <p className="mt-2">
                    추가 사항: 디자인이 바뀌어 페이지 구성이 변경되었습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-2 flex flex-col items-center w-full">
              <p className="mb-2 text-[11px] lg:text-xs font-pretendard text-[#6A6A6A] dark:text-[#B8B8B8]">
                Swipe or use arrows to explore
              </p>
              <div
                className="w-full max-w-[clamp(220px,46vw,360px)] overflow-hidden"
                ref={emblaRef}
              >
                <div className="flex">
                  {projectImages.map((image, index) => (
                    <div
                      key={image.title}
                      className="flex-[0_0_100%] min-w-0 flex flex-col items-center px-2"
                    >
                      <div className="w-full flex justify-between items-center mb-3 px-1">
                        <p className="font-orbitron-medium text-[9px] text-[#FF4A3E] opacity-60">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="font-pretendard font-semibold text-xs lg:text-sm text-[#FF4A3E]">
                          {image.title}
                        </p>
                      </div>

                      <div className="relative w-full aspect-[3/5] rounded-xl overflow-hidden border border-[#FF4A3E]/20 bg-[#FFF5F4] dark:bg-black/20">
                        {!imageLoaded[index] && !imageError[index] && (
                          <ImageSkeleton className="w-full h-full" aspectRatio="card" />
                        )}
                        {!imageError[index] && (
                          <img
                            src={image.src}
                            alt={image.title}
                            className={cn(
                              "w-full h-full object-contain transition-opacity duration-300",
                              imageLoaded[index] ? "opacity-100" : "opacity-0"
                            )}
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                          />
                        )}
                        {imageError[index] && (
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
                  className="h-10 px-3 rounded-full border border-[#FF4A3E]/50 text-[#FF4A3E] text-xs font-orbitron-regular hover:bg-[#FF4A3E]/10 transition-colors"
                >
                  Prev
                </button>

                <div className="flex gap-2 px-1">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={`size-2 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? "bg-[#FF4A3E] w-5"
                          : "bg-[#FF4A3E]/20"
                      }`}
                      onClick={() => scrollTo(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={scrollNext}
                  className="h-10 px-3 rounded-full border border-[#FF4A3E]/50 text-[#FF4A3E] text-xs font-orbitron-regular hover:bg-[#FF4A3E]/10 transition-colors"
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

export default PortfolioModal4;
