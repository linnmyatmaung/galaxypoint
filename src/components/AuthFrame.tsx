import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";

export function AuthFrame({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md animate-in-up">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <section className="card-surface p-6 sm:p-8">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <div className="mt-6">{children}</div>
        </section>
        <p className="mt-6 text-center text-xs text-muted-foreground">Galaxy Reward · Member account</p>
      </div>
    </main>
  );
}