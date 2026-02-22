import { cn } from "@/utils/classname";
import React, { useState } from "react";
import { ImageSkeleton } from "@/components/ui/skeleton";

type Props = {
  className?: string;
  title: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  imgSrc: string;
  period: string;
};

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ className, title, style, onClick, imgSrc, period }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
      setImageLoaded(true);
    };

    return (
      <div
        ref={ref}
        style={style}
        onClick={onClick}
        className={cn(
          "flex flex-col cursor-pointer hover:scale-[1.02] duration-200 w-full min-h-[180px] sm:min-h-[200px] lg:min-h-[250px] aspect-[16/10] lg:aspect-square relative rounded-3xl shadow-md overflow-hidden",
          className
        )}
      >
        <p className="absolute top-4 left-4 sm:top-5 sm:left-6 lg:top-6 lg:left-7 font-orbitron-regular text-xs sm:text-sm lg:text-lg mb-2 tracking-wide z-10 leading-tight">
          {title}
        </p>

        {/* 이미지 컨테이너 */}
        <div className="relative w-full h-full px-3 pb-4 pt-12 sm:pt-14 lg:px-8 lg:pb-6 lg:pt-20 flex items-center justify-center">
          {!imageLoaded && !imageError && (
            <ImageSkeleton
              className="w-full h-full m-auto"
              aspectRatio="card"
            />
          )}

          {!imageError && (
            <img
              src={imgSrc}
              alt="project"
              className={cn(
                "w-[56%] max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:w-[64%] lg:max-w-[220px] mx-auto rounded-xl object-contain transition-opacity duration-300",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}

          {imageError && (
            <div className="w-30 lg:w-full m-auto flex items-center justify-center text-gray-400 dark:text-gray-600">
              <span className="text-sm">이미지를 불러올 수 없습니다</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-3 right-4 lg:bottom-5 lg:right-5 z-10">
          <p className="text-right font-orbitron-regular text-xs lg:text-[15px]">
            {period}
          </p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
