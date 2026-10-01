"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion, Variants, motion, AnimatePresence } from "framer-motion" 
import { navLinks, profile } from '@/lib/data'

const tones = ["bg-white", "bg-bubblegum", "bg-mint", "bg-lilac"];
const spring = { type: "spring", stiffness: 400, damping: 14 } as const;

const MobileNav = () => {
    const reduce = useReducedMotion();
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLElement>(null);

    const close = useCallback(() => {
        setIsOpen(false);
        buttonRef.current?.focus();
    }, []);

    // Lock page scroll, close on Escape, keep Tab inside the menu.
    useEffect(() => {
        if (!isOpen) return;
        const prev = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";

        const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
        firstLink?.focus();

        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") return close();
            if (e.key !== "Tab" || !panelRef.current) return;
            const items =[
                ...panelRef.current.querySelectorAll<HTMLElement>("a[href], button"),
                ...(buttonRef.current ? [buttonRef.current] : []),
            ];
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                first.focus();
            }
        }

        const mq = window.matchMedia("(min-width: 768px)");
        const onResize = () => mq.matches && setIsOpen(false);
        mq.addEventListener("change", onResize);
        document.addEventListener("keydown", onKey);

        return () => {
            document.documentElement.style.overflow = prev;
            document.removeEventListener("keydown", onKey);
            mq.removeEventListener("change", onResize);
        }
    }, [isOpen, close]);

    const list: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.18 }},
    };
    const item: Variants = {
        hidden: reduce ? { opacity: 0 } : { opacity: 0, x: 70, rotate: 8 },
        show: (i: number) => ({
            opacity: 1,
            x: 0,
            rotate: reduce ? 0 : i % 2 ? 1.5 : -1.5,
            transition: reduce ? { duration: 0.15 } : { type: "spring", stiffness: 400, damping: 14 },
        }),
    };

  return (
    <div className='md:hidden'>
        {/* Hamburger menu: always visible on mobile */}
        <motion.button
            ref={buttonRef}
            type='button'
            aria-label={isOpen ? "Close Menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
            onClick={() => (isOpen ? close() : setIsOpen(true))}
            initial={reduce ? false : { scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            whileTap={{ scale: 0.82 }}
            transition={{ type: "spring", stiffness: 350, damping: 12, delay: 0.6 }}
            className='fixed right-4 top-4 z-[60] flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-full border-2 broder-ink bg-sun shadow-pop focus-visible:outline-ink'
        >
            <motion.span
                aria-hidden
                animate={isOpen ? { y: 8, rotate: 45 } : { y:0, rotate: 0 }}
                transition={spring}
                className='block h-[3px] w-6 rounded-full bg-ink'
            />
            <motion.span
                aria-hidden
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className='block h-[3px] w-6 rounded-full bg-ink'
            />
            <motion.span
                aria-hidden
                animate={isOpen ? { y: -8, rotate: -45 } : { y:0, rotate: 0 }}
                transition={spring}
                className='block h-[3px] w-6 rounded-full bg-ink'
            />
        </motion.button>

        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        key="overlay"
                        aria-hidden
                        onClick={close}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className='fixed inset-0 z-[45] bg-ink/60 backdrop-blur-[2px]'
                    />

                    {/* Panel overshoots on arrival, so it's extended past the screen edge */}
                    <motion.aside
                        key="panel"
                        ref={panelRef}
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={
                            reduce ? { duration: 0.15 } : { type: "spring", stiffness: 240, damping: 20 }
                        }
                        style={{
                            width: "calc(min(88vw, 24rem) + 4rerm)",
                            right: "-4rem",
                            paddingRight: "4rem", 
                        }}
                        className='fixed bottom-0 top-0 z-50 flex flex-col overflow-y-auto border-l-2 border-ink bg-sun px-6 pb-8 pt-24 showdow-pop-lg'
                    >
                        <svg
                            aria-hidden
                            viewBox="0 0 24 24"
                            className="absolute left-5 top-5 h-12 w-12 motion-safe:animate-spin-slow"
                        >
                            <path
                            d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"
                            fill="#2A44F5"
                            stroke="#0F1B2D"
                            strokeWidth="1"
                            />
                        </svg>

                        <nav aria-label="Mobile">
                            <motion.ul variants={list} initial="hidden" animate="show" className="space-y-4">
                            {navLinks.map((l, i) => (
                                <motion.li key={l.href} custom={i} variants={item}>
                                <motion.a
                                    href={l.href}
                                    onClick={close}
                                    whileHover={{ scale: 1.04, rotate: 0 }}
                                    whileTap={{ scale: 0.94 }}
                                    transition={spring}
                                    className={`flex items-center justify-between rounded-2xl border-2 border-ink px-5 py-4 text-3xl font-extrabold tracking-tight shadow-pop ${tones[i % tones.length]}`}
                                >
                                    {l.label}
                                    <span aria-hidden className="text-base font-bold text-ink">
                                    0{i + 1}
                                    </span>
                                </motion.a>
                                </motion.li>
                            ))}
                            </motion.ul>
                        </nav>

                        <div className='mt-8'>
                            <motion.a
                                href={profile.cv}
                                whileTap={{ scale: 0.94 }}
                                whileHover={{ scale: 1.04, rotate: -2 }}
                                transition={spring}
                                className='block rounded-full border-2 border-ink bg-ink px-6 py-3 text-center font-bold text-papre shadow-pop'
                            >
                                Download CV
                            </motion.a>

                            <ul className='mt-6 flex flex-wrap gap-2'>
                                {profile.socials.map((s) => (
                                    <li key={s.label}>
                                        <a
                                            href={s.href}
                                            target= "_blank" 
                                            rel="noreferrer"
                                            className='inline-block rounded-full border-2 border-ink bg-paper px-4 py-1.5 text-sm font-bold transition-transform active:scale-95'
                                        >
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <p className='mt-8 flex items-center gap-2 text-sm font-semibold'>
                                <span aria-hidden className='h-2.5 w-2.5 rounded-full bg-cobalt motion-safe:animate-pulse'/>
                                Available for hire
                            </p>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    </div>
  )
}

export default MobileNav