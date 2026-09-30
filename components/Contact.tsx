"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/lib/data";

const colors = ["#FFD23F", "#FF8FC7", "#7BE8B8", "#FF8A3D", "#F4F1FF", "#2A44F5"];

type Bit = { id: number; x: number; y: number; r: number; c: string; s: number };

export default function Contact() {
  const reduce = useReducedMotion();
  const [bits, setBits] = useState<Bit[]>([]);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);

    if (reduce) return;
    const base = Date.now();
    setBits(
      Array.from({ length: 28 }, (_, i) => {
        const a = (Math.PI * 2 * i) / 28 + Math.random() * 0.4;
        const d = 90 + Math.random() * 130;
        return {
          id: base + i,
          x: Math.cos(a) * d,
          y: Math.sin(a) * d - 40,
          r: Math.random() * 540 - 270,
          c: colors[i % colors.length],
          s: 6 + Math.random() * 8,
        };
      }),
    );
    setTimeout(() => setBits([]), 1000);
  }

  return (
    <footer id="contact" className="on-dark overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
          Have a product to ship or a process to automate?{" "}
          <motion.span
            aria-hidden
            className="inline-block origin-[70%_70%]"
            animate={reduce ? undefined : { rotate: [0, 18, -8, 18, -4, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.4 }}
          >
            👋
          </motion.span>
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="break-all text-2xl font-bold underline decoration-sun decoration-4 underline-offset-8 hover:decoration-bubblegum md:text-4xl"
          >
            {profile.email}
          </a>

          <div className="relative">
            <motion.button
              type="button"
              onClick={copy}
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.88 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="rounded-full border-2 border-paper bg-sun px-6 py-3 text-sm font-bold text-ink"
            >
              Copy email
            </motion.button>
            {bits.map((b) => (
              <motion.span
                key={b.id}
                aria-hidden
                initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                animate={{ x: b.x, y: b.y, opacity: 0, rotate: b.r, scale: 0.6 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                style={{ width: b.s, height: b.s, background: b.c }}
                className="pointer-events-none absolute left-1/2 top-1/2 rounded-sm"
              />
            ))}
            <AnimatePresence>
              {copied && (
                <motion.span
                  role="status"
                  initial={{ opacity: 0, y: 6, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-mint px-3 py-1 text-sm font-bold text-ink"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <ul className="mt-16 flex flex-wrap gap-3">
          {profile.socials.map((s, i) => (
            <li key={s.label}>
              <motion.a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, rotate: i % 2 ? 3 : -3 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 14 }}
                className="inline-block rounded-full border-2 border-paper/60 px-5 py-2 text-sm font-bold transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                {s.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 pt-6 text-sm text-paper/80">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
          <a href="#top" className="font-semibold hover:text-paper">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
