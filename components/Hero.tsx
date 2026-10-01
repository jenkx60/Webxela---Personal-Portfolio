"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { profile, experience, navLinks } from "@/lib/data";

/** Each letter bounces in, then jumps away from your cursor. */
function BouncyWord({ text, base }: { text: string; base: number }) {
  const reduce = useReducedMotion();
  return (
    <span aria-hidden className="block whitespace-nowrap">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-default"
          initial={reduce ? false : { y: 180, rotate: 14, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 11, delay: base + i * 0.06 }}
          whileHover={
            reduce
              ? undefined
              : {
                  y: -18,
                  rotate: i % 2 ? 7 : -7,
                  color: "#FFD23F",
                  transition: { type: "spring", stiffness: 500, damping: 12 },
                }
          }
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function LagosClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Africa/Lagos",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span suppressHydrationWarning className="tabular-nums">
      {time || "--:--:--"}
    </span>
  );
}

function Drift({
  x,
  y,
  depth,
  className,
  children,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  depth: number;
  className?: string;
  children: ReactNode;
}) {
  const tx = useTransform(x, (v) => v * depth);
  const ty = useTransform(y, (v) => v * depth);
  return (
    <motion.div aria-hidden style={{ x: tx, y: ty }} className={className}>
      {children}
    </motion.div>
  );
}

function SpinBadge() {
  return (
    <div className="relative h-28 w-28 md:h-44 md:w-44">
      <svg viewBox="0 0 200 200" className="h-full w-full motion-safe:animate-spin-slow">
        <circle cx="100" cy="100" r="98" fill="#FFD23F" stroke="#0F1B2D" strokeWidth="3" />
        <path id="badge-path" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" fill="none" />
        <text fontSize="17" fontWeight="700" fill="#0F1B2D" textLength="430" lengthAdjust="spacing">
          <textPath href="#badge-path">available for hire ✦ available for hire ✦ </textPath>
        </text>
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 md:h-14 md:w-14"
      >
        <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" fill="#2A44F5" />
      </svg>
    </div>
  );
}

const spring = { type: "spring", stiffness: 400, damping: 14 } as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const now = experience.filter((r) => r.current);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 14 });
  const sy = useSpring(my, { stiffness: 80, damping: 14 });
  const k = reduce ? 0 : 1;

  function onMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <header
      id="top"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="on-dark relative overflow-hidden bg-cobalt text-paper"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6 text-sm font-semibold"
        >
          <a href="#top" className="text-base font-bold">
            {profile.name}
          </a>
          <ul className="hidden md:flex flex-wrap gap-x-2 gap-y-2">
            {navLinks.map((n) => (
              <li key={n.href}>
                <motion.a
                  href={n.href}
                  whileHover={{ y: -2, rotate: -3 }}
                  transition={spring}
                  className="inline-block rounded-full px-3 py-1 transition-colors hover:bg-paper hover:text-cobalt"
                >
                  {n.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Floating stickers that drift against the cursor */}
        <Drift x={sx} y={sy} depth={-50 * k} className="absolute right-3 top-36 md:right-10 md:top-28">
          <SpinBadge />
        </Drift>
        <Drift x={sx} y={sy} depth={40 * k} className="absolute left-[46%] top-24 hidden md:block">
          <svg viewBox="0 0 120 30" className="h-8 w-28 motion-safe:animate-float" fill="none">
            <path
              d="M4 15 Q 15 0 26 15 T 48 15 T 70 15 T 92 15 T 116 15"
              stroke="#FF8FC7"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </Drift>
        <Drift x={sx} y={sy} depth={70 * k} className="absolute right-[38%] top-[19rem] hidden md:block">
          <div className="h-10 w-10 rounded-full border-2 border-ink bg-mint motion-safe:animate-float" />
        </Drift>

        <div className="relative pb-20 pt-10 md:pb-28 md:pt-16">
          <p className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full bg-mint motion-safe:animate-pulse"
              />
              Available for hire
            </span>
            <motion.span
              whileHover={{ rotate: 3, scale: 1.06 }}
              transition={spring}
              className="inline-flex -rotate-2 items-center gap-2 rounded-full border-2 border-ink bg-paper px-3 py-1 text-ink shadow-pop"
            >
              Lagos, <LagosClock />
            </motion.span>
          </p>

          <h1
            aria-label={profile.name}
            className="text-[clamp(3.5rem,14vw,11.5rem)] font-extrabold leading-[0.95] tracking-tighter"
          >
            <span className="sr-only">Jenkins Uwagbai, Software Developer in Lagos, Nigeria</span>
            <BouncyWord text="Jenkins" base={0.1} />
            <BouncyWord text="Uwagbai" base={0.55} />
          </h1>

          <div className="mt-14 grid gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="max-w-xl font-serif text-2xl leading-snug md:text-3xl">
                I build production frontends and the automation behind them, so teams spend less
                time on manual work.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.07, rotate: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={spring}
                  className="rounded-full border-2 border-ink bg-sun px-6 py-3 text-sm font-bold text-ink shadow-pop"
                >
                  See my work
                </motion.a>
                <motion.a
                  href={profile.cv}
                  whileHover={{ scale: 1.07, rotate: 2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={spring}
                  className="rounded-full border-2 border-ink bg-paper px-6 py-3 text-sm font-bold text-ink shadow-pop"
                >
                  Download CV
                </motion.a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-paper/90">Working with right now</h2>
              <ul className="mt-4 space-y-3">
                {now.map((r, i) => (
                  <motion.li
                    key={r.company}
                    initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: i ? 6 : -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: i ? 1.5 : -1.5 }}
                    whileHover={{ rotate: 0, y: -4 }}
                    transition={{ type: "spring", stiffness: 220, damping: 12, delay: 1.1 + i * 0.15 }}
                    className="flex items-baseline justify-between gap-4 rounded-2xl border-2 border-ink bg-white px-5 py-4 text-ink shadow-pop"
                  >
                    <span className="font-bold">{r.company}</span>
                    <span className="text-sm text-slate">{r.title}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
