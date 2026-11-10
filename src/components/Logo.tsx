import logo from "@/assets/galaxy-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ compact, light, className }: { compact?: boolean; light?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img src={logo} alt="Galaxy Reward" width={36} height={36} className="size-9 rounded-xl" />
      {!compact && (
        <span className={cn("text-base font-extrabold tracking-tight", light ? "text-primary-foreground" : "text-foreground")}>
          Galaxy <span className={light ? "" : "text-primary"}>Reward</span>
        </span>
      )}
    </div>
  );
}
