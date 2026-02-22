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
import useEmblaCarousel from "embla-carousel-react";
import baro1 from "@/assets/imgs/바로.webp";
import baro2 from "@/assets/imgs/바로잡2.webp";
import baro3 from "@/assets/imgs/바로잡3.webp";
import baro4 from "@/assets/imgs/바로잡4.webp";
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
  { title: "로그인 페이지", src: baro1 },
  { title: "지도 기능", src: baro2 },
  { title: "구인 공고 기능", src: baro3 },
  { title: "리뷰 및 매칭 내역", src: baro4 },
];

const PortfolioModal2: React.FC<PortfolioModalProps> = ({ data }) => {
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
        closeIconStyle="text-[#618DFF] p-2"
        className="p-4 sm:p-6 lg:p-8 md:!rounded-[30px] rounded-xl overflow-hidden max-h-[90vh] flex flex-col"
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
          </DialogTitle>
        </DialogHeader>

        <div className="mt-3 lg:mt-5 overflow-y-auto pr-1">
          <div className="flex flex-col gap-6 xl:grid xl:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] xl:gap-8">
            <div className="order-2 xl:order-1 flex flex-col">
              <InteractiveHoverButton
                onClick={() => window.open("https://www.inteuk.com/", "_blank")}
                transitionClassName="group-hover:translate-x-0"
                dotBgClassName="bg-[#618DFF] size-1.5"
                className="flex justify-center items-center w-fit text-xs lg:text-[13px] bg-[#618DFF]/20 text-[#618DFF] border border-[#618DFF] text-nowrap tracking-widest font-orbitron-regular"
              >
                랜딩 페이지
              </InteractiveHoverButton>

              <div className="mt-5 lg:mt-7 self-start">
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
                <div className="font-pretendard text-xs lg:text-[13px] pl-4 text-[#303030] dark:text-[#D9D9D9] leading-relaxed">
                  <p>
                    기존 오프라인 인력사무소의 불편함을 해결하기 위한 창업 아이디어
                    프로젝트에 프론트엔드 개발자로 참여했습니다.
                  </p>
                  <p className="mt-2">
                    회원가입 프로세스(인증번호, 사진 등록), 메인페이지 개발,
                    지도 API 연동을 담당했습니다.
                  </p>
                </div>
              </div>

              <p className="mt-5 font-pretendard text-[11px] lg:text-xs text-[#919191] dark:text-[#B5B5B5] pl-4">
                {data.period}
              </p>
            </div>

            <div className="order-1 xl:order-2 flex flex-col items-center w-full justify-start xl:justify-start">
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
                        <p className="font-orbitron-medium text-[9px] text-[#618DFF] opacity-60">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="font-pretendard font-semibold text-xs lg:text-sm text-[#618DFF] min-h-5">
                          {image.title}
                        </p>
                      </div>

                      <div className="relative w-full aspect-[16/10] min-h-[190px] md:min-h-[240px] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
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
                  className="h-10 px-3 rounded-full border border-[#618DFF]/50 text-[#618DFF] text-xs font-orbitron-regular hover:bg-[#618DFF]/10 transition-colors"
                >
                  Prev
                </button>

                <div className="flex gap-2 px-1">
                  {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      className={`size-2 rounded-full transition-all duration-300 ${
                        selectedIndex === index
                          ? "bg-[#618DFF] w-5"
                          : "bg-[#618DFF]/20"
                      }`}
                      onClick={() => scrollTo(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={scrollNext}
                  className="h-10 px-3 rounded-full border border-[#618DFF]/50 text-[#618DFF] text-xs font-orbitron-regular hover:bg-[#618DFF]/10 transition-colors"
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

export default PortfolioModal2;
