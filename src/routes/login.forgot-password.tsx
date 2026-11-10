import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthFrame } from "@/components/AuthFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login/forgot-password")({
  head: () => ({ meta: [{ title: "Reset password — Galaxy Reward" }] }),
  component: ForgotPassword,
});

function ForgotPassword() {
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
    <AuthFrame
      title={complete ? "Password reset" : "Forgot your password?"}
      description={complete ? "Your demo reset was accepted. No password is stored by this prototype." : "Enter your account email or phone and choose a new password."}
    >
      {complete ? (
        <Button asChild className="w-full"><Link to="/login">Return to sign in</Link></Button>
      ) : (
        <form className="space-y-4" onSubmit={submit}>
          <label className="block space-y-1.5 text-sm font-medium">
            Email or phone
            <Input name="identifier" autoComplete="username" required />
          </label>
          <label className="block space-y-1.5 text-sm font-medium">
            New password
            <Input name="password" type="password" autoComplete="new-password" minLength={8} required />
          </label>
          <label className="block space-y-1.5 text-sm font-medium">
            Confirm new password
            <Input name="confirmPassword" type="password" autoComplete="new-password" minLength={8} required />
          </label>
          {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
          <Button className="w-full" type="submit">Reset password</Button>
        </form>
      )}
      <p className="mt-5 text-center text-sm text-muted-foreground">
        <Link to="/login" className="font-medium text-primary hover:underline">Back to sign in</Link>
      </p>
    </AuthFrame>
  );
}