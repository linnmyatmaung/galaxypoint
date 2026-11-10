import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { AuthFrame } from "@/components/AuthFrame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Galaxy Reward" }] }),
  component: Login,
});

function Login() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return path.replace(/\/$/, "") === "/login" ? <LoginForm /> : <Outlet />;
}

function LoginForm() {
  const navigate = useNavigate();
  const signIn = useAuthStore((s) => s.signIn);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn();
    void navigate({ to: "/" });
  }

  return (
    <AuthFrame title="Welcome back" description="Sign in to your Galaxy Reward account.">
      <form className="space-y-4" onSubmit={submit}>
        <label className="block space-y-1.5 text-sm font-medium">
          Email or phone
          <Input name="identifier" autoComplete="username" placeholder="you@example.com" required />
        </label>
        <label className="block space-y-1.5 text-sm font-medium">
          Password
          <Input name="password" type="password" autoComplete="current-password" required />
        </label>
        <p className="-mt-2 text-xs text-muted-foreground">Demo mode: any password will sign in.</p>
        <Button className="w-full" type="submit">Sign in</Button>
      </form>
      <div className="mt-5 flex justify-between text-sm">
        <Link to="/login/forgot-password" className="font-medium text-primary hover:underline">Forgot password?</Link>
        <Link to="/login/create-account" className="font-medium text-primary hover:underline">Create account</Link>
      </div>
    </AuthFrame>
  );
}