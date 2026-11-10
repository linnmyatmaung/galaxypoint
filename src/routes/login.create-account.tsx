import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Camera, Check, ChevronDown, Mail, Phone, UserRound } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { format } from "date-fns";
import { AuthFrame } from "@/components/AuthFrame";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useAuthStore } from "@/store/auth";
import { useMemberStore } from "@/store/member";
import type { Gender } from "@/types";

export const Route = createFileRoute("/login/create-account")({
  head: () => ({ meta: [{ title: "Create account — Galaxy Reward" }] }),
  component: CreateAccount,
});

const steps = ["Contact", "Verify", "Password", "Profile"];

function CreateAccount() {
  const navigate = useNavigate();
  const signIn = useAuthStore((s) => s.signIn);
  const updateMember = useMemberStore((s) => s.updateMember);
  const [step, setStep] = useState(1);
  const [contactMethod, setContactMethod] = useState<"phone" | "email">("phone");
  const [contact, setContact] = useState("");
  const [code, setCode] = useState("000000");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState<Gender>("");
  const [address, setAddress] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [dobOpen, setDobOpen] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (step === 2 && code !== "000000") {
      setError("That verification code is not correct.");
      return;
    }
    if (step === 3 && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (step < 4) {
      setStep((current) => current + 1);
      return;
    }

    updateMember({
      fullName: fullName.trim(),
      email: contactMethod === "email" ? contact : "",
      phone: contactMethod === "phone" ? contact : "",
      dateOfBirth,
      gender,
      address: address.trim(),
      avatarUrl,
    });
    signIn();
    void navigate({ to: "/" });
  }

  function chooseAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image file.");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setError("Choose an image smaller than 4 MB.");
      return;
    }
    setError("");
    setAvatarUrl(URL.createObjectURL(file));
  }

  const title = ["Choose your contact", "Verify your contact", "Create a password", "Personal details"][step - 1];
  const description = [
    "Choose where to receive your verification code.",
    `Enter the six-digit code sent to ${contact}.`,
    "Create a password with at least 8 characters.",
    "Add a few details to complete your member profile.",
  ][step - 1];

  return (
    <AuthFrame title="Create your account" description={description}>
      <ol aria-label="Account creation progress" className="mb-6 grid grid-cols-4 gap-1">
        {steps.map((label, index) => {
          const number = index + 1;
          const complete = number < step;
          const active = number === step;
          return (
            <li key={label} className="min-w-0">
              <button
                type="button"
                aria-current={active ? "step" : undefined}
                aria-label={`Step ${number}: ${label}`}
                disabled={number >= step}
                onClick={() => {
                  setError("");
                  setStep(number);
                }}
                className="flex w-full flex-col items-center gap-1.5 disabled:cursor-default"
              >
                <span className={`flex size-8 items-center justify-center rounded-full text-xs font-bold ${complete || active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {complete ? <Check className="size-4" /> : number}
                </span>
                <span className={`max-w-full truncate text-[10px] font-medium ${active ? "text-primary" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <form className="space-y-4" onSubmit={submit}>
        {step === 1 && (
          <>
            <div className="grid grid-cols-2 gap-2" role="group" aria-label="Contact method">
              <Button
                type="button"
                variant={contactMethod === "phone" ? "default" : "outline"}
                aria-pressed={contactMethod === "phone"}
                onClick={() => { setContactMethod("phone"); setContact(""); }}
              >
                <Phone />Phone
              </Button>
              <Button
                type="button"
                variant={contactMethod === "email" ? "default" : "outline"}
                aria-pressed={contactMethod === "email"}
                onClick={() => { setContactMethod("email"); setContact(""); }}
              >
                <Mail />Email
              </Button>
            </div>
            <label className="block space-y-1.5 text-sm font-medium">
              {contactMethod === "phone" ? "Phone number" : "Email address"}
              <Input
                autoComplete={contactMethod === "phone" ? "tel" : "email"}
                type={contactMethod === "phone" ? "tel" : "email"}
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder={contactMethod === "phone" ? "+95 9 123 456 789" : "you@example.com"}
                required
              />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-secondary/60 px-3 py-2 text-sm">
              {contactMethod === "phone" ? <Phone className="size-4 text-primary" /> : <Mail className="size-4 text-primary" />}
              <span className="truncate font-medium">{contact}</span>
            </div>
            <div className="space-y-3">
              <p className="text-center text-sm font-medium">Enter verification code</p>
              <InputOTP
                aria-label="Six-digit verification code"
                maxLength={6}
                value={code}
                onChange={setCode}
                containerClassName="w-full justify-center"
              >
                <InputOTPGroup className="gap-1">
                  {Array.from({ length: 6 }, (_, index) => (
                    <InputOTPSlot key={index} index={index} className="mx-0.5 size-10 rounded-md border text-base font-semibold sm:size-11" />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              <p className="text-center text-xs text-muted-foreground">Demo code: 000000</p>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label className="block space-y-1.5 text-sm font-medium">
              Password
              <Input
                autoComplete="new-password"
                type="password"
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <label className="block space-y-1.5 text-sm font-medium">
              Confirm password
              <Input
                autoComplete="new-password"
                type="password"
                minLength={8}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </label>
          </>
        )}

        {step === 4 && (
          <>
            <div className="flex justify-center pb-1">
              <label
                title="Upload profile image"
                className="group relative block size-24 cursor-pointer rounded-full focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile preview" className="size-24 rounded-full object-cover" />
                ) : (
                  <span className="flex size-24 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-secondary/70">
                    <UserRound className="size-10" />
                  </span>
                )}
                <span className="absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground shadow-sm">
                  <Camera className="size-4" />
                </span>
                <input
                  type="file"
                  accept="image/*"
                  aria-label="Upload profile image"
                  className="sr-only"
                  onChange={chooseAvatar}
                />
              </label>
            </div>
            <label className="block space-y-1.5 text-sm font-medium">
              Full name
              <Input autoComplete="name" value={fullName} onChange={(event) => setFullName(event.target.value)} required />
            </label>
            <label className="block space-y-1.5 text-sm font-medium">
              Date of birth
              <Popover open={dobOpen} onOpenChange={setDobOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    aria-label="Select date of birth"
                    aria-required="true"
                    className={`h-12 w-full justify-start gap-3 text-left font-normal ${dateOfBirth ? "" : "text-muted-foreground"}`}
                  >
                    <CalendarDays className="size-4 text-primary" />
                    <span className="flex-1">
                      {dateOfBirth ? format(new Date(`${dateOfBirth}T00:00:00`), "MMMM d, yyyy") : "Choose your date of birth"}
                    </span>
                    <ChevronDown className="size-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    selected={dateOfBirth ? new Date(`${dateOfBirth}T00:00:00`) : undefined}
                    disabled={(date) => date > new Date()}
                    onSelect={(date) => {
                      if (date) {
                        setDateOfBirth(format(date, "yyyy-MM-dd"));
                        setDobOpen(false);
                      }
                    }}
                  />
                </PopoverContent>
              </Popover>
            </label>
            <label className="block space-y-1.5 text-sm font-medium">
              Gender
              <select
                value={gender}
                onChange={(event) => setGender(event.target.value as Gender)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="block space-y-1.5 text-sm font-medium">
              Address <span className="font-normal text-muted-foreground">(optional)</span>
              <Textarea value={address} onChange={(event) => setAddress(event.target.value)} rows={2} />
            </label>
          </>
        )}

        {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
        <div className="flex gap-2">
          {step > 1 && (
            <Button type="button" variant="outline" className="flex-1" onClick={() => { setError(""); setStep((current) => current - 1); }}>
              <ArrowLeft />Back
            </Button>
          )}
          <Button className="flex-1" type="submit">
            {step === 1 ? "Send verification code" : step === 2 ? "Verify code" : step === 3 ? "Continue" : "Create account"}
            {step < 4 && <ArrowRight />}
          </Button>
        </div>
      </form>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Already a member? <Link to="/login" className="font-medium text-primary hover:underline">Sign in</Link>
      </p>
    </AuthFrame>
  );
}