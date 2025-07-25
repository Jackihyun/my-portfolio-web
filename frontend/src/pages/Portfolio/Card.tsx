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
          "flex flex-col cursor-pointer hover:scale-105 duration-150 w-full h-[20vh] lg:size-[30vw] relative rounded-3xl shadow-md overflow-hidden",
          className
        )}
      >
        <p className="absolute top-5 left-7 font-orbitron-regular text-sm lg:text-xl mb-2 tracking-widest z-10">
          {title}
        </p>

        {/* 이미지 컨테이너 */}
        <div className="relative w-full h-full lg:p-22 flex items-center justify-center">
          {!imageLoaded && !imageError && (
            <ImageSkeleton
              className="w-[20vw] lg:w-full m-auto"
              aspectRatio="card"
            />
          )}

          {!imageError && (
            <img
              src={imgSrc}
              alt="project"
              className={cn(
                "w-28 lg:w-full ml-auto mr-5 my-auto p-2 rounded-xl lg:p-0 lg:m-auto lg:h-fit object-cover transition-opacity duration-300",
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
