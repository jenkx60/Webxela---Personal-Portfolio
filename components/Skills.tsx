"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { skills } from "@/lib/data";
import { useFinePointer } from "@/lib/useFinePointer";
import Squiggle from "./Squiggle";

const hoverTones = ["hover:bg-bubblegum", "hover:bg-mint", "hover:bg-lilac", "hover:bg-tangerine"];

function Chip({ label, index, drag }: { label: string; index: number; drag: boolean }) {
  const reduce = useReducedMotion();
  const [held, setHeld] = useState(false);
  return (
    <motion.li
      initial={reduce ? false : { scale: 0, rotate: -14 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 500, damping: 15, delay: (index % 8) * 0.04 }}
      whileHover={reduce ? undefined : { scale: 1.12, rotate: index % 2 ? 4 : -4 }}
      whileTap={{ scale: 0.95 }}
      drag={drag && !reduce}
      dragSnapToOrigin
      dragElastic={0.7}
      onDragStart={() => setHeld(true)}
      onDragEnd={() => setHeld(false)}
      style={{ position: "relative", zIndex: held ? 30 : 0 }}
      className={`select-none rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold shadow-pop transition-colors ${
        drag ? "cursor-grab active:cursor-grabbing" : ""
      } ${hoverTones[index % hoverTones.length]}`}
    >
      {label}
    </motion.li>
  );
}

export default function Skills() {
  const fine = useFinePointer();
  let n = 0;

  return (
    <section id="skills" className="bg-sun px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">Skills</h2>
        <Squiggle className="mt-3 h-4 w-48" color="#0F1B2D" />
        {fine && (
          <p className="mt-6 font-serif text-xl">Psst, you can pick these up and throw them around.</p>
        )}

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="mb-5 flex items-center gap-3 text-2xl font-extrabold tracking-tight">
                <span aria-hidden className="h-4 w-4 rotate-45 border-2 border-ink bg-cobalt" />
                {s.group}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {s.items.map((item) => (
                  <Chip key={item} label={item} index={n++} drag={fine} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
