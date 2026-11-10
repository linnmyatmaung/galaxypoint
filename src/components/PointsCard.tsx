import { Link } from "@tanstack/react-router";
import { ChevronRight, QrCode } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { fmt, pointsToMmk } from "@/lib/points";
import { useMemberStore } from "@/store/member";

export function PointsCard() {
  const { member, points } = useMemberStore();
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-card p-5 text-primary-foreground shadow-card">
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border-[28px] border-primary-foreground/10" />
      <div className="pointer-events-none absolute -bottom-20 right-10 size-40 rounded-full bg-primary-foreground/5" />
      <div className="relative flex items-center justify-between">
        <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">{member.membershipType}</span>
        <Logo compact />
      </div>
      <p className="relative mt-5 text-sm text-primary-foreground/75">Available points</p>
      <p className="relative text-4xl font-extrabold tracking-tight">{fmt(points)}</p>
      <p className="relative text-sm text-primary-foreground/80">≈ {fmt(pointsToMmk(points))} MMK value</p>
      <div className="relative mt-5 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-primary-foreground/60">Member ID</p>
          <p className="font-mono text-sm font-semibold tracking-wide">{member.id}</p>
        </div>
        <Button variant="onCard" size="sm" asChild>
          <Link to="/card">
            <QrCode /> Member Card <ChevronRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
