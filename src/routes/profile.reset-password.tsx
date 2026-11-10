import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/profile/reset-password")({
  head: () => ({ meta: [{ title: "Reset password — Galaxy Reward" }] }),
  component: ResetPassword,
});

function ResetPassword() {
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("password") !== form.get("confirmPassword")) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setComplete(true);
  }

  return (
    <div className="space-y-5 animate-in-up">
      <PageHeader title="Reset password" />
      <section className="card-surface space-y-4 p-5">
        {complete ? (
          <>
            <p className="text-sm text-muted-foreground">Your demo password update is complete.</p>
            <Button asChild className="w-full"><Link to="/profile">Back to profile</Link></Button>
          </>
        ) : (
          <form className="space-y-4" onSubmit={submit}>
            <label className="block space-y-1.5 text-sm font-medium">
              New password
              <Input name="password" type="password" autoComplete="new-password" minLength={8} required />
            </label>
            <label className="block space-y-1.5 text-sm font-medium">
              Confirm new password
              <Input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required />
            </label>
            {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
            <p className="text-xs text-muted-foreground">Password changes are not saved by this demo.</p>
            <Button className="w-full" type="submit">Update password</Button>
          </form>
        )}
        <p className="text-center text-sm text-muted-foreground">
          <Link to="/profile" className="font-medium text-primary hover:underline">Back to profile</Link>
        </p>
      </section>
    </div>
  );
}