import { Link, Navigate, useRouterState } from "@tanstack/react-router";
import { Gift, History, Home, QrCode, User } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { useAuthStore } from "@/store/auth";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/card", label: "Member Card", icon: QrCode },
  { to: "/history", label: "History", icon: History },
  { to: "/profile", label: "Profile", icon: User },
] as const;

function isActive(path: string, to: string) {
  return to === "/" ? path === "/" || path === "/expiry" : path.startsWith(to);
}

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (path.startsWith("/login")) return <>{children}</>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-border bg-sidebar p-5 lg:flex">
        <Logo />
        <nav className="mt-10 flex flex-col gap-1">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = isActive(path, to);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                )}
              >
                <Icon className="size-5" />
                {label}
              </Link>
            );
          })}
        </nav>
        <p className="mt-auto text-xs text-muted-foreground">200 MMK = 1 pt · 1 pt = 1 MMK</p>
      </aside>

      <main className="lg:pl-64">
        <div className="mx-auto w-full max-w-xl px-4 pb-28 pt-4 lg:pb-12 lg:pt-8">{children}</div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-5">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = isActive(path, to);
            const isCard = to === "/card";
            return (
              <Link key={to} to={to} className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium">
                <span
                  className={cn(
                    "flex items-center justify-center rounded-full transition-all",
                    isCard ? "-mt-6 size-12 bg-primary text-primary-foreground shadow-card" : "size-7",
                    !isCard && (active ? "text-primary" : "text-muted-foreground"),
                  )}
                >
                  <Icon className={isCard ? "size-6" : "size-5"} />
                </span>
                <span className={active ? "text-primary" : "text-muted-foreground"}>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
