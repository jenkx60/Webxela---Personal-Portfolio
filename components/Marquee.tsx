const words = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL",
  "Node.js", "Go", "Vite", "Framer Motion", "Zustand", "TanStack Query", "Discord API",
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 md:h-8 md:w-8" aria-hidden>
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" fill="#2A44F5" />
    </svg>
  );
}

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8">
      {words.map((w) => (
        <li key={w} className="flex items-center gap-8 whitespace-nowrap text-2xl font-bold md:text-4xl">
          {w}
          <Star />
        </li>
      ))}
    </ul>
  );
}

/** A tilted tape of the stack, sitting across the seam between the hero and the page. */
export default function Marquee() {
  return (
    <div
      aria-hidden
      className="relative z-10 overflow-hidden bg-gradient-to-b from-cobalt from-50% to-paper to-50% py-8"
    >
      <div className="-mx-4 w-[calc(100%+2rem)] -rotate-2 border-y-2 border-ink bg-sun py-4 text-ink">
        <div className="flex w-max motion-reduce:animate-none motion-safe:animate-marquee hover:[animation-play-state:paused]">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
