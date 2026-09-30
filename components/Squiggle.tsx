"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Squiggle({
  className = "",
  color = "#FF8FC7",
}: {
  className?: string;
  color?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 200 14" fill="none" className={className} aria-hidden>
      <motion.path
        d="M2 7 Q 14 -2 26 7 T 50 7 T 74 7 T 98 7 T 122 7 T 146 7 T 170 7 T 198 7"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </svg>
  );
}
