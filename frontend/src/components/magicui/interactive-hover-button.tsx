import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dotBgClassName?: string;
  transitionClassName?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    { children, className, dotBgClassName, transitionClassName, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "size-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
              dotBgClassName
            )}
          ></div>
          <span
            className={cn(
              "inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0"
            )}
          >
            {children}
          </span>
        </div>
        <div
          className={cn(
            "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
            transitionClassName
          )}
        >
          <span>{children}</span>
          <ArrowRight />
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
