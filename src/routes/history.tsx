import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { RefreshCw } from "lucide-react";
import { useMemo, useState } from "react";
import { EmptyState, ErrorState, ListSkeleton, PageHeader, TxRow } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fmt } from "@/lib/points";
import { cn } from "@/lib/utils";
import { fetchTransactions } from "@/services/api";
import { useMemberStore } from "@/store/member";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Point History — Galaxy Reward" },
      { name: "description", content: "Every point you have earned and redeemed." },
      { property: "og:title", content: "Point History — Galaxy Reward" },
      { property: "og:description", content: "Every point you have earned and redeemed." },
    ],
  }),
  component: HistoryPage,
});

const ranges = { all: "All time", "30": "Last 30 days", "90": "Last 90 days", "180": "Last 6 months" } as const;

function HistoryPage() {
  const points = useMemberStore((s) => s.points);
  const storeTx = useMemberStore((s) => s.transactions);
  const q = useQuery({ queryKey: ["transactions", storeTx.length], queryFn: fetchTransactions });
  const [type, setType] = useState<"all" | "earned" | "redeemed">("all");
  const [range, setRange] = useState<keyof typeof ranges>("all");

  const data = q.data ?? [];
  const earned = data.filter((t) => t.type === "earned").reduce((a, t) => a + t.points, 0);
  const redeemed = data.filter((t) => t.type === "redeemed").reduce((a, t) => a + t.points, 0);

  const filtered = useMemo(() => {
    const cutoff = range === "all" ? 0 : Date.now() - Number(range) * 86_400_000;
    return data.filter((t) => (type === "all" || t.type === type) && new Date(t.date).getTime() >= cutoff);
  }, [data, type, range]);

  return (
    <div className="space-y-5 animate-in-up">
      <PageHeader
        title="Point History"
        action={
          <Button variant="soft" size="icon" aria-label="Refresh" onClick={() => q.refetch()}>
            <RefreshCw className={cn(q.isFetching && "animate-spin")} />
          </Button>
        }
      />

      <div className="grid grid-cols-3 gap-2">
        <Stat label="Balance" value={fmt(points)} />
        <Stat label="Earned" value={`+${fmt(earned)}`} tone="text-success" />
        <Stat label="Redeemed" value={`−${fmt(redeemed)}`} tone="text-destructive" />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-1 rounded-xl bg-secondary p-1">
          {(["all", "earned", "redeemed"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={cn("flex-1 rounded-lg py-2 text-xs font-semibold capitalize transition-colors", type === t ? "bg-card text-primary shadow-soft" : "text-muted-foreground")}
            >
              {t}
            </button>
          ))}
        </div>
        <Select value={range} onValueChange={(v) => setRange(v as keyof typeof ranges)}>
          <SelectTrigger className="h-auto w-36 rounded-xl bg-card text-xs" aria-label="Date range">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(ranges).map(([k, v]) => (
              <SelectItem key={k} value={k}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <section className="card-surface px-4">
        {q.isPending ? (
          <ListSkeleton />
        ) : q.isError ? (
          <ErrorState onRetry={() => q.refetch()} />
        ) : filtered.length === 0 ? (
          <EmptyState title="No transactions" text="Nothing matches these filters. Try a different date range or type." />
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((t) => (
              <TxRow key={t.id} tx={t} detailed />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="card-surface p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className={cn("text-base font-extrabold", tone)}>{value}</p>
    </div>
  );
}
