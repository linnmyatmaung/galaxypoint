import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock } from "lucide-react";
import { EmptyState, ErrorState, ListSkeleton, PageHeader } from "@/components/common";
import { daysUntil, fmt } from "@/lib/points";
import { cn } from "@/lib/utils";
import { fetchExpiry } from "@/services/api";
import type { ExpiryRecord } from "@/types";

export const Route = createFileRoute("/expiry")({
  head: () => ({
    meta: [
      { title: "Points Expiry — Galaxy Reward" },
      { name: "description", content: "See which Galaxy points expire and when." },
      { property: "og:title", content: "Points Expiry — Galaxy Reward" },
      { property: "og:description", content: "See which Galaxy points expire and when." },
    ],
  }),
  component: Expiry,
});

function status(days: number) {
  if (days <= 30) return { label: "Expiring soon", cls: "bg-warning-soft text-warning" };
  if (days <= 90) return { label: "Upcoming", cls: "bg-secondary text-primary" };
  return { label: "Later", cls: "bg-muted text-muted-foreground" };
}

function Expiry() {
  const q = useQuery({ queryKey: ["expiry"], queryFn: fetchExpiry });
  const data = q.data ?? [];
  const total = data.reduce((a, r) => a + r.points, 0);
  const groups = data.reduce<Record<string, ExpiryRecord[]>>((acc, r) => {
    const k = new Date(r.expiresAt).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    (acc[k] ||= []).push(r);
    return acc;
  }, {});

  return (
    <div className="space-y-5 animate-in-up">
      <PageHeader title="Points Expiry" back />

      <div className="card-surface flex items-center gap-4 p-5">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-warning-soft text-warning">
          <CalendarClock className="size-6" />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">Total points expiring</p>
          <p className="text-2xl font-extrabold">{q.isPending ? "—" : fmt(total)}</p>
          <p className="text-xs text-muted-foreground">Redeem rewards before they expire.</p>
        </div>
      </div>

      {q.isPending ? (
        <div className="card-surface px-4">
          <ListSkeleton rows={4} />
        </div>
      ) : q.isError ? (
        <ErrorState onRetry={() => q.refetch()} />
      ) : data.length === 0 ? (
        <EmptyState title="No expiring points" text="None of your points are scheduled to expire." />
      ) : (
        Object.entries(groups).map(([month, rows]) => (
          <section key={month}>
            <h2 className="mb-2 text-sm font-bold text-muted-foreground">{month}</h2>
            <div className="space-y-2">
              {rows.map((r) => {
                const d = daysUntil(r.expiresAt);
                const s = status(d);
                return (
                  <div key={r.id} className="card-surface flex items-center gap-4 p-4">
                    <div className="flex size-12 flex-col items-center justify-center rounded-xl bg-secondary">
                      <span className="text-[10px] font-semibold uppercase text-primary">
                        {new Date(r.expiresAt).toLocaleDateString("en-GB", { month: "short" })}
                      </span>
                      <span className="text-base font-extrabold leading-none">{new Date(r.expiresAt).getDate()}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">{fmt(r.points)} pts</p>
                      <p className="text-xs text-muted-foreground">{d > 0 ? `${d} days remaining` : "Expired"}</p>
                    </div>
                    <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", s.cls)}>{s.label}</span>
                  </div>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
