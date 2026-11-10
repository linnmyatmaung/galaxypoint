import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Coins, Info, XCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { mockRewards } from "@/data/mock";
import { fmt } from "@/lib/points";
import { cn } from "@/lib/utils";
import { useMemberStore } from "@/store/member";
import type { Reward, RewardCategory } from "@/types";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "Rewards — Galaxy Reward" },
      { name: "description", content: "Discover and redeem rewards with your Galaxy points." },
      { property: "og:title", content: "Rewards — Galaxy Reward" },
      { property: "og:description", content: "Discover and redeem rewards with your Galaxy points." },
    ],
  }),
  component: Rewards,
});

const cats: ("All" | RewardCategory)[] = ["All", "Vouchers", "Dining", "Entertainment", "Lifestyle"];
type Step = "detail" | "confirm" | "success" | "insufficient";

function Rewards() {
  const { points, redeem } = useMemberStore();
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [stock, setStock] = useState<Record<string, number>>(() => Object.fromEntries(mockRewards.map((r) => [r.id, r.stock])));
  const [sel, setSel] = useState<Reward | null>(null);
  const [step, setStep] = useState<Step>("detail");

  const list = mockRewards.filter((r) => cat === "All" || r.category === cat).map((r) => ({ ...r, stock: stock[r.id] ?? 0 }));
  const featured = list.filter((r) => r.featured);

  const open = (r: Reward) => {
    setSel(r);
    setStep("detail");
  };

  const confirm = () => {
    if (!sel) return;
    const res = redeem(sel);
    if (res.ok) {
      setStock((s) => ({ ...s, [sel.id]: (s[sel.id] ?? 0) - 1 }));
      setStep("success");
      toast.success(`Redeemed ${sel.name}`);
    } else if (res.reason === "insufficient") setStep("insufficient");
    else toast.error("This reward is out of stock");
  };

  return (
    <div className="space-y-5 animate-in-up">
      <PageHeader title="Rewards" />

      <div className="card-surface flex items-center gap-3 p-4">
        <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
          <Coins className="size-5" />
        </span>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Available points</p>
          <p className="text-xl font-extrabold">{fmt(points)}</p>
        </div>
        <div className="text-right text-[11px] leading-relaxed text-muted-foreground">
          <p>200 MMK = 1 pt</p>
          <p>1 pt = 1 MMK</p>
        </div>
      </div>

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              c === cat ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <section>
          <h2 className="mb-3 text-base font-bold">Featured</h2>
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
            {featured.map((r) => (
              <button key={r.id} onClick={() => open(r)} className="card-surface w-64 shrink-0 overflow-hidden text-left">
                <img src={r.image} alt={r.name} loading="lazy" width={944} height={704} className="aspect-[16/10] w-full object-cover" />
                <div className="p-3">
                  <p className="truncate text-sm font-semibold">{r.name}</p>
                  <p className="mt-1 text-sm font-bold text-primary">{fmt(r.points)} pts</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-3 text-base font-bold">All rewards</h2>
        <div className="grid grid-cols-2 gap-3">
          {list.map((r) => {
            const out = r.stock <= 0;
            const short = points < r.points;
            return (
              <div key={r.id} className="card-surface flex flex-col overflow-hidden">
                <button onClick={() => open(r)} className="text-left">
                  <img src={r.image} alt={r.name} loading="lazy" width={944} height={704} className={cn("aspect-square w-full object-cover", out && "opacity-50 grayscale")} />
                </button>
                <div className="flex flex-1 flex-col p-3">
                  <p className="line-clamp-2 text-sm font-semibold">{r.name}</p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{r.description}</p>
                  <p className="mt-2 text-sm font-bold text-primary">{fmt(r.points)} pts</p>
                  <p className={cn("text-[11px]", out ? "text-destructive" : r.stock < 10 ? "text-warning" : "text-success")}>
                    {out ? "Out of stock" : r.stock < 10 ? `Only ${r.stock} left` : "Available"}
                  </p>
                  <Button size="sm" className="mt-3" variant={short || out ? "soft" : "default"} disabled={out} onClick={() => open(r)}>
                    {out ? "Unavailable" : "Redeem"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Dialog open={!!sel} onOpenChange={(o) => !o && setSel(null)}>
        <DialogContent className="max-w-md rounded-3xl">
          {sel && step === "detail" && (
            <>
              <img src={sel.image} alt={sel.name} className="-mx-6 -mt-6 aspect-[16/9] w-[calc(100%+3rem)] max-w-none rounded-t-3xl object-cover" />
              <DialogHeader className="text-left">
                <span className="text-xs font-semibold text-primary">{sel.category}</span>
                <DialogTitle>{sel.name}</DialogTitle>
                <DialogDescription>{sel.description}</DialogDescription>
              </DialogHeader>
              <div className="flex gap-2 rounded-xl bg-secondary p-3 text-xs text-muted-foreground">
                <Info className="size-4 shrink-0 text-primary" />
                {sel.terms}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Required</span>
                <span className="text-lg font-extrabold text-primary">{fmt(sel.points)} pts</span>
              </div>
              <DialogFooter>
                <Button
                  className="w-full"
                  disabled={(stock[sel.id] ?? 0) <= 0}
                  onClick={() => setStep(points < sel.points ? "insufficient" : "confirm")}
                >
                  {(stock[sel.id] ?? 0) <= 0 ? "Out of stock" : "Redeem reward"}
                </Button>
              </DialogFooter>
            </>
          )}
          {sel && step === "confirm" && (
            <>
              <DialogHeader className="text-left">
                <DialogTitle>Confirm redemption</DialogTitle>
                <DialogDescription>
                  Redeem <b>{sel.name}</b> for <b>{fmt(sel.points)} points</b>?
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 rounded-xl bg-secondary p-4 text-sm">
                <Row l="Current balance" r={fmt(points)} />
                <Row l="Reward" r={`−${fmt(sel.points)}`} />
                <Row l="Balance after" r={fmt(points - sel.points)} bold />
              </div>
              <DialogFooter className="flex-row gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setStep("detail")}>
                  Cancel
                </Button>
                <Button className="flex-1" onClick={confirm}>
                  Confirm
                </Button>
              </DialogFooter>
            </>
          )}
          {sel && step === "success" && (
            <Result icon={<CheckCircle2 className="size-8" />} tone="success" title="Reward redeemed!" text={`${sel.name} has been added. Show your Member Card at the counter to collect it.`} onClose={() => setSel(null)} />
          )}
          {sel && step === "insufficient" && (
            <Result icon={<XCircle className="size-8" />} tone="danger" title="Not enough points" text={`You need ${fmt(sel.points - points)} more points for this reward. Keep shopping to earn 1 point per 200 MMK.`} onClose={() => setSel(null)} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Row({ l, r, bold }: { l: string; r: string; bold?: boolean }) {
  return (
    <div className={cn("flex justify-between", bold && "border-t border-border pt-2 font-bold")}>
      <span className={bold ? "" : "text-muted-foreground"}>{l}</span>
      <span>{r}</span>
    </div>
  );
}

function Result({ icon, tone, title, text, onClose }: { icon: React.ReactNode; tone: "success" | "danger"; title: string; text: string; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center py-4 text-center">
      <div className={cn("mb-4 flex size-16 items-center justify-center rounded-full", tone === "success" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive")}>{icon}</div>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription className="mt-2">{text}</DialogDescription>
      <Button className="mt-6 w-full" onClick={onClose}>
        Done
      </Button>
    </div>
  );
}
