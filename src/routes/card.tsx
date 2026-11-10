import { createFileRoute } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { RefreshCw, ShieldAlert, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";
import { PageHeader } from "@/components/common";
import { Button } from "@/components/ui/button";
import { fmt } from "@/lib/points";
import { generateDemoQrToken } from "@/services/api";
import { useMemberStore } from "@/store/member";

const QR_TTL = 60;

export const Route = createFileRoute("/card")({
  head: () => ({
    meta: [
      { title: "Member Card — Galaxy Reward" },
      { name: "description", content: "Show your Galaxy member QR code at the cashier to earn or redeem points." },
      { property: "og:title", content: "Member Card — Galaxy Reward" },
      { property: "og:description", content: "Show your Galaxy member QR code at the cashier." },
    ],
  }),
  component: MemberCard,
});

function MemberCard() {
  const { member, points } = useMemberStore();
  const [token, setToken] = useState<string | null>(null);
  const [left, setLeft] = useState(QR_TTL);

  const regenerate = useCallback(() => {
    setToken(generateDemoQrToken(member.id));
    setLeft(QR_TTL);
  }, [member.id]);

  useEffect(() => regenerate(), [regenerate]);

  useEffect(() => {
    const t = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          setToken(generateDemoQrToken(member.id));
          return QR_TTL;
        }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [member.id]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="animate-in-up">
      <PageHeader title="Member Card" />

      <div className="overflow-hidden rounded-3xl bg-card shadow-card">
        <div className="relative bg-gradient-card p-5 text-primary-foreground">
          <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full border-[24px] border-primary-foreground/10" />
          <div className="relative flex items-center justify-between">
            <Logo light />
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">{member.membershipType}</span>
          </div>
          <div className="relative mt-6 flex items-end justify-between">
            <div>
              <p className="text-lg font-bold">{member.fullName}</p>
              <p className="font-mono text-sm tracking-wider text-primary-foreground/80">{member.id}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-wider text-primary-foreground/60">Points</p>
              <p className="text-2xl font-extrabold">{fmt(points)}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-6 pb-6 pt-6">
          <div className="rounded-2xl border border-border bg-card p-4">
            {token && <QRCodeSVG value={token} size={232} level="M" marginSize={1} aria-label="Member QR code" />}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Refreshes in {mm}:{ss}
            </div>
            <Button
              variant="soft"
              size="icon"
              aria-label="Regenerate QR"
              onClick={() => {
                regenerate();
                toast.success("New QR code generated");
              }}
            >
              <RefreshCw />
            </Button>
          </div>
          <p className="mt-4 max-w-xs text-center text-sm text-muted-foreground">
            Show this QR code at the cashier to earn or redeem points.
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Sun className="size-3.5" /> Turn up screen brightness for faster scanning
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-3 rounded-2xl border border-warning/30 bg-warning-soft p-4 text-xs text-muted-foreground">
        <ShieldAlert className="size-4 shrink-0 text-warning" />
        <p>
          <span className="font-semibold text-foreground">Demo QR.</span> This code is generated in the app for preview only and is not valid at
          the cashier. Real member QR codes will be issued and verified by Galaxy Reward's servers.
        </p>
      </div>

      <div className="card-surface mt-4 grid grid-cols-2 gap-4 p-4 text-sm">
        <Info label="Member since" value={new Date(member.joinedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric" })} />
        <Info label="Phone" value={member.phone} />
        <Info label="Earn rate" value="200 MMK = 1 pt" />
        <Info label="Point value" value="1 pt = 1 MMK" />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
