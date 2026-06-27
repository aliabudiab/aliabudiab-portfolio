import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-accent/30 bg-accent-muted text-foreground hover:border-accent/50 hover:bg-accent/20 hover:shadow-glow-sm",
  secondary:
    "border border-border bg-surface text-foreground hover:border-border-hover hover:bg-surface-elevated",
  ghost: "border border-transparent text-muted hover:border-border hover:bg-surface hover:text-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm sm:text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
