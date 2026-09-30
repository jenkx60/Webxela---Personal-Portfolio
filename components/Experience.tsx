"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import { experience, type Role } from "@/lib/data";
import Squiggle from "./Squiggle";

const tones = ["bg-sun", "bg-bubblegum", "bg-mint", "bg-lilac", "bg-tangerine"];
const soft = { type: "spring", stiffness: 300, damping: 18 } as const;

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 7l6 6 6-6" />
    </svg>
  );
}

function RoleCard({
  role,
  tone,
  open,
  onToggle,
  id,
}: {
  role: Role;
  tone: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={soft}
      className="rounded-2xl border-2 border-ink bg-white shadow-pop transition-shadow hover:shadow-pop-lg"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center gap-4 p-5 text-left md:p-6"
      >
        <motion.span
          whileHover={{ rotate: [0, -14, 14, -8, 0] }}
          transition={{ duration: 0.5 }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink text-xl font-extrabold ${tone}`}
        >
          {role.company.charAt(0)}
        </motion.span>
        <span className="min-w-0 flex-1">
          <span className="block text-xl font-bold tracking-tight md:text-2xl">{role.company}</span>
          <span className="block text-slate">{role.title}</span>
        </span>
        <span className="hidden text-right text-sm sm:block">
          <span className="block font-semibold">{role.period}</span>
          <span className="text-slate">{role.mode}</span>
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={soft}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper"
        >
          <Chevron />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 md:px-6">
              <p className="mb-3 text-sm text-slate sm:hidden">
                {role.period}, {role.mode}
              </p>
              <ul className="max-w-2xl space-y-3 leading-relaxed">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span
                      aria-hidden
                      className={`mt-[0.55em] h-2.5 w-2.5 shrink-0 rotate-45 border-2 border-ink ${tone}`}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  const [open, setOpen] = useState<Set<string>>(
    () => new Set(experience.filter((r) => r.current).map((r) => r.company)),
  );
  const allOpen = open.size === experience.length;

  const toggle = (company: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(company)) next.delete(company);
      else next.add(company);
      return next;
    });

  return (
    <section id="experience" className="bg-paper px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">Experience</h2>
            <Squiggle className="mt-3 h-4 w-48" />
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.06, rotate: 2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            onClick={() =>
              setOpen(allOpen ? new Set() : new Set(experience.map((r) => r.company)))
            }
            className="rounded-full border-2 border-ink bg-white px-5 py-2 text-sm font-bold shadow-pop"
          >
            {allOpen ? "Close all roles" : "Open all roles"}
          </motion.button>
        </div>
        <p className="mt-6 max-w-xl font-serif text-xl text-slate">
          Four remote and hybrid engineering teams since 2025, after six years keeping a
          manufacturing company's IT running. Tap a role to open it.
        </p>

        <div ref={trackRef} className="relative mt-16 pl-10 md:pl-16">
          <div aria-hidden className="absolute left-3 top-0 h-full w-1 rounded bg-ink/15 md:left-5" />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute left-3 top-0 h-full w-1 origin-top rounded bg-cobalt md:left-5"
          />
          <ol className="space-y-8">
            {experience.map((role, i) => (
              <li key={role.company + role.period} className="relative">
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 420, damping: 9 }}
                  className={`absolute -left-10 top-7 h-7 w-7 rounded-full border-2 border-ink md:-left-14 ${tones[i % tones.length]}`}
                >
                  {role.current && (
                    <span className="absolute inset-0 rounded-full bg-cobalt/40 motion-safe:animate-ping" />
                  )}
                </motion.span>
                <RoleCard
                  role={role}
                  tone={tones[i % tones.length]}
                  open={open.has(role.company)}
                  onToggle={() => toggle(role.company)}
                  id={`role-${i}`}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
