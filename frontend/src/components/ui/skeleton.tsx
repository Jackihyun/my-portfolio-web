import { cn } from "@/utils/classname";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    />
  );
}

// 이미지 스켈레톤 컴포넌트
interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "card";
}

function ImageSkeleton({
  className,
  aspectRatio = "card",
}: ImageSkeletonProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    card: "aspect-[4/3]",
  };

  return (
    <Skeleton
      className={cn("w-full", aspectRatioClasses[aspectRatio], className)}
    />
  );
}

export { Skeleton, ImageSkeleton };
