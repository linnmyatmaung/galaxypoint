import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, CalendarClock, ChevronRight, Gift, History, QrCode, UserRoundPen } from "lucide-react";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";
import { PointsCard } from "@/components/PointsCard";
import { PromoCarousel } from "@/components/PromoCarousel";
import { MemberAvatar, SectionTitle, TxRow } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mockExpiry } from "@/data/mock";
import { fmt, profileCompletion } from "@/lib/points";
import { useMemberStore } from "@/store/member";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Galaxy Reward" },
      { name: "description", content: "Your Galaxy points balance, promotions and recent activity." },
      { property: "og:title", content: "Home — Galaxy Reward" },
      { property: "og:description", content: "Your Galaxy points balance, promotions and recent activity." },
    ],
  }),
  component: Home,
});

const quick = [
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/card", label: "Member Card", icon: QrCode },
  { to: "/history", label: "History", icon: History },
  { to: "/expiry", label: "Expiry", icon: CalendarClock },
] as const;

function Home() {
  const { member, transactions } = useMemberStore();
  const next = mockExpiry[0];
  const { percent } = profileCompletion(member);
  const first = member.fullName.split(" ")[0];

  return (
    <div className="space-y-6 animate-in-up">
      <header className="flex items-center gap-3">
        <Logo compact className="lg:hidden" />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground">Welcome back</p>
          <p className="text-lg font-bold">Hello, {first}</p>
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative" onClick={() => toast("No new notifications")}>
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-destructive" />
        </Button>
        <Link to="/profile" aria-label="Profile">
          <MemberAvatar member={member} size="sm" />
        </Link>
      </header>

      <PointsCard />

      <div className="grid grid-cols-4 gap-2">
        {quick.map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to} className="flex flex-col items-center gap-2 rounded-2xl p-2 text-center transition-colors hover:bg-card">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-card text-primary shadow-soft">
              <Icon className="size-5" />
            </span>
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>

      {next && (
        <Link to="/expiry" className="flex items-center gap-3 rounded-2xl border border-warning/30 bg-warning-soft p-4">
          <CalendarClock className="size-5 shrink-0 text-warning" />
          <div className="flex-1 text-sm">
            <p className="font-semibold">{fmt(next.points)} points expiring soon</p>
            <p className="text-xs text-muted-foreground">
              On {new Date(next.expiresAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </Link>
      )}

      <section>
        <SectionTitle title="Promotions" />
        <PromoCarousel />
      </section>

      {percent < 100 && (
        <div className="card-surface flex items-center gap-4 p-4">
          <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
            <UserRoundPen className="size-5" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold">Your profile is {percent}% complete</p>
            <Progress value={percent} className="mt-2 h-1.5" />
          </div>
          <Button size="sm" asChild>
            <Link to="/profile">Complete</Link>
          </Button>
        </div>
      )}

      <section className="card-surface px-4 pt-4">
        <SectionTitle title="Recent activity" to="/history" />
        <div className="divide-y divide-border">
          {transactions.slice(0, 4).map((t) => (
            <TxRow key={t.id} tx={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
