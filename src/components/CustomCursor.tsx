"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DOT = 8; // px размер центральной точки
const RING = 44; // px диаметр пунктирного кольца

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);

  // пружины для плавности
  const sx = useSpring(x, { stiffness: 300, damping: 28 });
  const sy = useSpring(y, { stiffness: 300, damping: 28 });

  useEffect(() => {
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      // Используем clientX/clientY — это координаты относительно viewport
      // Вычитаем половину размеров, чтобы центр совпал с курсором
      x.set(e.clientX - DOT / 2);
      y.set(e.clientY - DOT / 2);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  // Не рисуем на сервере
  if (!mounted) return <div style={{ width: 0, height: 0 }} />;

  return createPortal(
    <>
      {/* точка */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: sx,
          y: sy,
          pointerEvents: "none",
          zIndex: 9999,
          width: DOT,
          height: DOT,
        }}
        aria-hidden
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(34,211,238,0.95)" /* cyan */,
            boxShadow: "0 0 8px rgba(34,211,238,0.35)",
          }}
        />
      </motion.div>

      {/* вращающееся пунктирное кольцо */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: sx,
          y: sy,
          pointerEvents: "none",
          zIndex: 9998,
          width: RING,
          height: RING,
          marginLeft: -(RING / 2 - DOT / 2), // центруем кольцо относительно точки
          marginTop: -(RING / 2 - DOT / 2),
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        aria-hidden
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "2px dashed rgba(34,211,238,0.5)",
            boxSizing: "border-box",
          }}
        />
      </motion.div>
    </>,
    document.body
  );
}
