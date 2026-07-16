import React, { useEffect, useRef, useState } from "react";

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const LiquidCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0, size: 62, opacity: 0 });
  const currentRef = useRef({ x: 0, y: 0, size: 62, opacity: 0 });
  const frameRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setEnabled(finePointer && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const render = () => {
      const cursor = cursorRef.current;
      const current = currentRef.current;
      const target = targetRef.current;

      current.x = lerp(current.x, target.x, 0.18);
      current.y = lerp(current.y, target.y, 0.18);
      current.size = lerp(current.size, target.size, 0.16);
      current.opacity = lerp(current.opacity, target.opacity, 0.22);

      if (cursor) {
        const half = current.size / 2;
        cursor.style.width = `${current.size}px`;
        cursor.style.height = `${current.size}px`;
        cursor.style.opacity = `${current.opacity}`;
        cursor.style.transform = `translate3d(${current.x - half}px, ${
          current.y - half
        }px, 0)`;
      }

      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    const handleMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const excluded = Boolean(target?.closest("[data-cursor-exclude='true']"));
      const interactive = Boolean(
        target?.closest("button, a, [role='button'], input, textarea, select")
      );

      if (excluded) {
        targetRef.current.opacity = 0;
        return;
      }

      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      targetRef.current.size = interactive ? 104 : 66;
      targetRef.current.opacity = 1;
    };

    const handleLeave = () => {
      targetRef.current.opacity = 0;
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="liquid-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden opacity-0 lg:block"
    >
      <div className="liquid-cursor__inner" />
      <div className="liquid-cursor__shine" />
      <div className="liquid-cursor__rim" />
      <div className="liquid-cursor__bubble liquid-cursor__bubble--one" />
      <div className="liquid-cursor__bubble liquid-cursor__bubble--two" />
    </div>
  );
};

export default LiquidCursor;
