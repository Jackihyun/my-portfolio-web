"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, Transition, Variants } from "motion/react";
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
  radius = 5,
  variants,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }

  if (Array.isArray(children)) {
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }

  const letters = children.split("");
  letters.push(" ");

  // useAnimation 컨트롤을 사용하여 애니메이션을 제어합니다.
  const controls = useAnimation();
  // scrollDir: 1 (스크롤 다운), -1 (스크롤 업), 0 (스크롤 멈춤)
  const [scrollDir, setScrollDir] = useState(0);
  // 현재 회전 각도
  const [angle, setAngle] = useState(0);
  const prevScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        setScrollDir(1);
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDir(-1);
      }
      prevScrollY.current = currentScrollY;

      // 스크롤 이벤트가 발생할 때마다 타이머 재설정
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setScrollDir(0);
        // 스크롤 멈춤: 현재 애니메이션을 중단하고 현재 각도에서 멈춤
        controls.stop();
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  useEffect(() => {
    if (scrollDir !== 0) {
      // 스크롤 중일 때: 현재 각도에서 시작하여 계속 회전하도록 애니메이션 시작
      controls.start({
        rotate: scrollDir === -1 ? angle - 360 : angle + 360,
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        },
      });
    } else {
      // 스크롤 멈춤 시에는 애니메이션을 중단하고 현재 각도로 고정
      controls.set({ rotate: angle });
    }
  }, [scrollDir, controls, angle, duration]);

  const containerVariants: Variants = {
    // container의 variants는 별도로 사용하지 않고, useAnimation 컨트롤로 애니메이션을 관리합니다.
    visible: {},
    ...variants?.container,
  };

  const itemVariants: Variants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={style}
      animate={controls}
      initial={{ rotate: 0 }}
      variants={containerVariants}
      // onUpdate를 통해 현재 회전 각도를 추적합니다.
      onUpdate={(latest) => {
        if (latest.rotate !== undefined) {
          if (typeof latest.rotate === "number") {
            setAngle(latest.rotate);
          }
        }
      }}
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
