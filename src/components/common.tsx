import { Link, useRouter } from "@tanstack/react-router";
import { AlertCircle, ArrowDownLeft, ArrowUpRight, ChevronLeft, Inbox } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fmt } from "@/lib/points";
import { cn } from "@/lib/utils";
import type { Member, Transaction } from "@/types";

export function PageHeader({ title, back, action }: { title: string; back?: boolean; action?: ReactNode }) {
  const router = useRouter();
  return (
    <header className="mb-5 flex items-center gap-2">
      {back && (
        <Button variant="ghost" size="icon" aria-label="Back" onClick={() => router.history.back()}>
          <ChevronLeft className="size-5" />
        </Button>
      )}
      <h1 className="flex-1 text-xl font-bold tracking-tight">{title}</h1>
      {action}
    </header>
  );
}

export function MemberAvatar({ member, size = "md" }: { member: Member; size?: "sm" | "md" | "lg" }) {
  const initials = member.fullName.split(" ").map((p) => p[0]).slice(0, 2).join("");
  const s = { sm: "size-10 text-sm", md: "size-14 text-lg", lg: "size-24 text-3xl" }[size];
  return member.avatarUrl ? (
    <img src={member.avatarUrl} alt={member.fullName} className={cn(s, "rounded-full object-cover")} />
  ) : (
    <div className={cn(s, "flex items-center justify-center rounded-full bg-secondary font-bold text-primary")}>{initials}</div>
  );
}

export function SectionTitle({ title, to, label = "View all" }: { title: string; to?: "/history" | "/rewards" | "/expiry"; label?: string }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-base font-bold">{title}</h2>
      {to && (
        <Link to={to} className="text-sm font-semibold text-primary">
          {label}
        </Link>
      )}
    </div>
  );
}

export function TxRow({ tx, detailed }: { tx: Transaction; detailed?: boolean }) {
  const earned = tx.type === "earned";
  const d = new Date(tx.date);
  return (
    <div className="flex items-center gap-3 py-3">
      <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", earned ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive")}>
        {earned ? <ArrowDownLeft className="size-5" /> : <ArrowUpRight className="size-5" />}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{tx.description}</p>
        <p className="truncate text-xs text-muted-foreground">
          {tx.branch} · {d.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
          {detailed && ` · ${d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`}
        </p>
        {detailed && <p className="text-[11px] text-muted-foreground">{tx.reference}</p>}
      </div>
      <div className="text-right">
        <p className={cn("text-sm font-bold", earned ? "text-success" : "text-destructive")}>
          {earned ? "+" : "−"}
          {fmt(tx.points)}
        </p>
        {detailed && tx.balanceAfter !== undefined ? (
          <p className="text-[11px] text-muted-foreground">Bal {fmt(tx.balanceAfter)}</p>
        ) : (
          <p className="text-[11px] capitalize text-muted-foreground">{tx.type}</p>
        )}
      </div>
    </div>
  );
}

export function ListSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-4 py-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
        <Inbox className="size-6" />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="mt-1 max-w-xs text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="size-6" />
      </div>
      <p className="font-semibold">Couldn't load data</p>
      <p className="mt-1 text-sm text-muted-foreground">Please check your connection and try again.</p>
      <Button variant="soft" className="mt-4" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}
