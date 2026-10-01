"use client";

import { motion, useReducedMotion } from "framer-motion";
import { featured, more } from "@/lib/data";
import ProjectShot from "./ProjectShot";
import Squiggle from "./Squiggle";

const tones = ["bg-sun", "bg-bubblegum", "bg-mint", "bg-lilac", "bg-tangerine"];

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="overflow-x-clip border-y-2 border-ink bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="text-5xl font-extrabold tracking-tight md:text-6xl">Projects</h2>
        <Squiggle className="mt-3 h-4 w-48" color="#2A44F5" />
        <p className="mt-6 max-w-xl font-serif text-xl text-slate">
          Work I shipped for teams, and products I built on my own. Live links open the real thing.
        </p>

        <div className="mt-20 space-y-16">
          {featured.map((p, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.article
                key={p.name}
                initial={reduce ? false : { opacity: 0, x: fromLeft ? -90 : 90, rotate: fromLeft ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: fromLeft ? -1 : 1 }}
                whileHover={{ rotate: 0, y: -6 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 110, damping: 14 }}
                className={`relative grid items-center gap-8 rounded-3xl border-2 border-ink p-6 shadow-pop-lg md:grid-cols-2 md:gap-12 md:p-10 ${tones[i % tones.length]}`}
              >
                <motion.span
                  initial={reduce ? false : { scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 6 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 350, damping: 9, delay: 0.35 }}
                  className="absolute -top-4 right-6 z-10 flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 text-sm font-bold shadow-pop"
                >
                  <span
                    aria-hidden
                    className={`h-2.5 w-2.5 rounded-full ${p.href ? "bg-emerald-500 motion-safe:animate-pulse" : "bg-ink"}`}
                  />
                  {p.href ? "Live" : "Private"}
                </motion.span>

                <div>
                  <p className="inline-block rounded-full border-2 border-ink bg-white px-3 py-1 text-sm font-semibold">
                    {p.kind}
                  </p>
                  <h3 className="mt-4 text-4xl font-extrabold tracking-tight">{p.name}</h3>
                  <p className="mt-4 max-w-md leading-relaxed">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-bold"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    {p.href ? (
                      <motion.a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.07, rotate: -2 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 14 }}
                        className="inline-block rounded-full border-2 border-ink bg-ink px-6 py-3 text-sm font-bold text-paper shadow-pop"
                      >
                        {p.hrefLabel}
                      </motion.a>
                    ) : (
                      <p className="text-sm font-semibold">{p.note}</p>
                    )}
                  </div>
                </div>

                <ProjectShot name={p.name} image={p.image} stages={p.stages} />
              </motion.article>
            );
          })}
        </div>

        <h3 className="mt-28 text-3xl font-extrabold tracking-tight">More builds</h3>
        <ul className="mt-6 border-t-2 border-ink">
          {more.map((p, i) => (
            <li key={p.name} className="group relative overflow-hidden border-b-2 border-ink">
              <span
                aria-hidden
                className={`absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 motion-reduce:transition-none ${tones[i % tones.length]}`}
              />
              <div className="relative grid gap-2 px-3 py-5 md:grid-cols-[220px_1fr_auto] md:items-baseline md:gap-8">
                <span className="text-lg font-bold transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none">
                  {p.name}
                </span>
                <span>
                  {p.description} <span className="text-sm text-slate group-hover:text-ink">({p.stack.join(", ")})</span>
                </span>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit rounded-full border-2 border-ink bg-white px-4 py-1 text-sm font-bold transition-transform hover:-rotate-3 hover:scale-105"
                  >
                    {p.hrefLabel}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
