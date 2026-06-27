import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:border-border-hover hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
