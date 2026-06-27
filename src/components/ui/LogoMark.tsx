import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: number;
  variant?: "default" | "inverse";
}

export function LogoMark({
  className,
  size = 36,
  variant = "default",
}: LogoMarkProps) {
  const stroke =
    variant === "default"
      ? "hsl(var(--foreground))"
      : "hsl(var(--background))";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="logo-accent" x1="8" y1="8" x2="40" y2="40">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(217 91% 75%)" />
        </linearGradient>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1.5"
            floodColor="hsl(var(--accent))"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="14"
        className="fill-surface stroke-border"
        strokeWidth="1"
      />

      <g filter="url(#logo-glow)">
        <path
          d="M14 34 L22 14 L26 14 L34 34"
          stroke="url(#logo-accent)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M17.5 26 H30.5"
          stroke={stroke}
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M26 14 V34 C26 34 36 34 36 24 C36 14 26 14 26 14"
          stroke={stroke}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
