import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { KeyRound, LogOut } from "lucide-react";
import { MemberAvatar, PageHeader } from "@/components/common";
import { Button } from "@/components/ui/button";
import { fmt } from "@/lib/points";
import { useAuthStore } from "@/store/auth";
import { useMemberStore } from "@/store/member";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Galaxy Reward" },
      { name: "description", content: "Your Galaxy Reward member profile." },
      { property: "og:title", content: "Profile — Galaxy Reward" },
      { property: "og:description", content: "Your Galaxy Reward member profile." },
    ],
  }),
  component: Profile,
});

function Profile() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return path.replace(/\/$/, "") === "/profile" ? <ProfilePage /> : <Outlet />;
}

function ProfilePage() {
  const navigate = useNavigate();
  const signOut = useAuthStore((s) => s.signOut);
  const { member, points } = useMemberStore();
  const rows: [string, string][] = [
    ["Phone", member.phone], ["Email", member.email], ["Date of birth", member.dateOfBirth],
    ["Gender", member.gender || "—"], ["Address", member.address || "Not provided"], ["Member ID", member.id],
  ];
  return (
    <div className="space-y-5 animate-in-up">
      <PageHeader title="Profile" />
      <div className="card-surface flex items-center gap-4 p-5">
        <MemberAvatar member={member} />
        <div>
          <p className="text-lg font-bold">{member.fullName}</p>
          <p className="text-xs text-muted-foreground">{member.membershipType} · {fmt(points)} pts</p>
        </div>
      </div>
      <div className="card-surface divide-y divide-border px-4">
        {rows.map(([l, v]) => (
          <div key={l} className="flex justify-between gap-4 py-3 text-sm">
            <span className="text-muted-foreground">{l}</span>
            <span className="text-right font-medium capitalize">{v}</span>
          </div>
        ))}
      </div>
      <section className="card-surface space-y-3 p-4">
        <h2 className="text-sm font-semibold">Account security</h2>
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link to="/profile/reset-password"><KeyRound />Reset password</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start text-destructive hover:text-destructive"
          onClick={() => {
            signOut();
            void navigate({ to: "/login" });
          }}
        >
          <LogOut />Sign out
        </Button>
      </section>
    </div>
  );
}
