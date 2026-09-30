"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = { name: string; image?: string; stages?: string[] };

/** For private work: a tiny pipeline that keeps moving a job through each stage. */
function Pipeline({ stages }: { stages: string[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 1300);
    return () => clearInterval(id);
  }, [reduce, stages.length]);

  return (
    <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border-2 border-ink bg-ink p-6 shadow-pop">
      <ol className="flex w-full flex-wrap items-center justify-center gap-3 text-sm font-bold">
        {stages.map((s, i) => {
          const on = reduce ? false : i === active;
          return (
            <li key={s} className="flex items-center gap-3">
              <motion.span
                animate={{ scale: on ? 1.15 : 1, rotate: on ? -3 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className={`rounded-full border-2 px-4 py-2 transition-colors duration-300 ${
                  on ? "border-sun bg-sun text-ink" : "border-paper/40 text-paper"
                }`}
              >
                {s}
              </motion.span>
              {i < stages.length - 1 && (
                <span aria-hidden className="text-sun">
                  ➜
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function ProjectShot({ name, image, stages }: Props) {
  const [failed, setFailed] = useState(false);

  if (stages) return <Pipeline stages={stages} />;

  if (!image || failed) {
    return (
      <div
        role="img"
        aria-label={`${name} preview`}
        className="flex aspect-[16/10] items-center justify-center rounded-2xl border-2 border-ink bg-cobalt text-7xl font-extrabold text-paper shadow-pop"
      >
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ rotate: -1.5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 16 }}
      className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-pop"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`${name} screenshot`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </motion.div>
  );
}
