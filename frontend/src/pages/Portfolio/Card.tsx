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
  kicker?: string;
  role?: string;
  summary?: string;
  highlights?: string[];
  tags?: string[];
};

const Card = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      title,
      style,
      onClick,
      imgSrc,
      period,
      kicker,
      role,
      summary,
      highlights = [],
      tags = [],
    },
    ref
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [tilt, setTilt] = useState({ x: 50, y: 50, rotateX: 0, rotateY: 0 });

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
      setImageLoaded(true);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType !== "mouse") return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setTilt({
        x,
        y,
        rotateX: -(y - 50) / 14,
        rotateY: (x - 50) / 12,
      });
    };

    const handlePointerLeave = () => {
      setTilt({ x: 50, y: 50, rotateX: 0, rotateY: 0 });
    };

    return (
      <button
        ref={ref}
        type="button"
        style={{
          ...style,
          transform: `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(${
            tilt.rotateX || tilt.rotateY ? "-6px" : "0"
          })`,
          transformStyle: "preserve-3d",
        }}
        onClick={onClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn(
          "group flex flex-col text-left cursor-pointer transition-[transform,box-shadow,border-color] duration-300 w-full min-h-[300px] sm:min-h-[320px] lg:min-h-[360px] aspect-[4/5] relative rounded-[24px] shadow-[0_20px_70px_rgba(0,0,0,0.12)] overflow-hidden border border-white/35 bg-white/20 backdrop-blur-xl hover:border-white/60 hover:shadow-[0_26px_90px_rgba(0,0,0,0.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 motion-reduce:transform-none",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/35 opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
        <div className="absolute inset-px rounded-[23px] border border-white/25 opacity-80" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${tilt.x}% ${tilt.y}%, rgba(255,255,255,0.42), rgba(122,209,84,0.18) 24%, transparent 52%)`,
          }}
        />
        <div className="absolute -inset-24 translate-x-[-45%] rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 blur-sm transition-all duration-700 group-hover:translate-x-[70%] group-hover:opacity-70" />

        <div className="relative z-10 flex items-start justify-between gap-3 px-5 pt-5 lg:px-6 lg:pt-6">
          <div className="min-w-0">
            <p className="font-orbitron-medium text-[10px] uppercase tracking-[0.18em] opacity-75">
              {kicker}
            </p>
            <p className="mt-2 font-orbitron-regular text-lg sm:text-xl lg:text-2xl leading-tight tracking-wide">
              {title}
            </p>
          </div>
          {role && (
            <span className="shrink-0 rounded-full border border-current/30 bg-white/20 px-3 py-1 font-pretendard text-[11px] font-semibold backdrop-blur-md">
              {role}
            </span>
          )}
        </div>

        <div className="relative z-10 flex flex-1 items-center justify-center px-5 py-4 lg:px-7">
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
                "w-[64%] max-w-[210px] sm:max-w-[240px] lg:max-w-[260px] mx-auto rounded-2xl object-contain drop-shadow-2xl transition duration-500 group-hover:scale-[1.04]",
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

        <div className="relative z-10 flex flex-col gap-4 px-5 pb-5 lg:px-6 lg:pb-6">
          {summary && (
            <p className="line-clamp-2 font-pretendard text-sm leading-relaxed opacity-90 lg:text-[15px]">
              {summary}
            </p>
          )}

          {highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 font-pretendard text-xs opacity-90">
              {highlights.slice(0, 2).map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-lg border border-current/20 bg-white/15 px-2.5 py-1.5 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/25"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-end justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/15 px-2.5 py-1 font-pretendard text-[10px] font-medium backdrop-blur dark:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="shrink-0 text-right font-orbitron-regular text-[11px] lg:text-xs">
              {period}
            </p>
          </div>
        </div>
      </button>
    );
  }
);

Card.displayName = "Card";

export default Card;
