import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mockPromotions } from "@/data/mock";
import { cn } from "@/lib/utils";

export function PromoCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const promos = mockPromotions;

  const go = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const n = (i + promos.length) % promos.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const t = setInterval(() => go(idx + 1), 5000);
    return () => clearInterval(t);
  });

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={(e) => setIdx(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto rounded-2xl"
      >
        {promos.map((p, i) => (
          <article key={p.id} className="relative aspect-[16/8] w-full shrink-0 snap-center">
            <img src={p.image} alt={p.title} className="absolute inset-0 size-full object-cover" loading={i ? "lazy" : undefined} width={1200} height={640} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
              <p className="text-base font-bold">{p.title}</p>
              <p className="line-clamp-1 text-xs text-primary-foreground/85">{p.description}</p>
              <p className="mt-1 text-[11px] text-primary-foreground/70">
                Until {new Date(p.expiresAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>
          </article>
        ))}
      </div>
      <button aria-label="Previous" onClick={() => go(idx - 1)} className="absolute left-2 top-1/3 flex size-8 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur">
        <ChevronLeft className="size-4" />
      </button>
      <button aria-label="Next" onClick={() => go(idx + 1)} className="absolute right-2 top-1/3 flex size-8 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur">
        <ChevronRight className="size-4" />
      </button>
      <div className="mt-3 flex justify-center gap-1.5">
        {promos.map((p, i) => (
          <button key={p.id} aria-label={`Go to ${p.title}`} onClick={() => go(i)} className={cn("h-1.5 rounded-full transition-all", i === idx ? "w-5 bg-primary" : "w-1.5 bg-border")} />
        ))}
      </div>
    </div>
  );
}
