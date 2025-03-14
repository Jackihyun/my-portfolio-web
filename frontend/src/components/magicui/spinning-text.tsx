"use client";
import { cn } from "@/lib/utils";
import { motion, Transition, Variants } from "motion/react";
import React, { CSSProperties, useEffect, useRef, useState } from "react";

type SpinningTextProps = {
  children: string | string[];
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false, // 기존 reverse prop은 초기값으로 사용하지만, 이후 스크롤 이벤트에 의해 덮어집니다.
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }

  if (Array.isArray(children)) {
    // 배열의 모든 요소가 문자열인지 검증
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }

  const letters = children.split("");
  letters.push(" ");

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  };

  // 스크롤 방향 상태: 1은 스크롤 다운, -1은 스크롤 업
  const [scrollDir, setScrollDir] = useState(1);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        // 스크롤 다운
        setScrollDir(1);
      } else if (currentScrollY < prevScrollY.current) {
        // 스크롤 업
        setScrollDir(-1);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤 방향에 따라 회전 방향을 결정합니다.
  const containerVariants: Variants = {
    visible: { rotate: scrollDir === -1 ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants: Variants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={{
        ...style,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block"
          style={
            {
              "--index": index,
              "--total": letters.length,
              "--radius": radius,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: "center",
            } as React.CSSProperties
          }
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
}
