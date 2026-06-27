import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  label: string;
  title: string;
  description?: string;
}

export function Section({
  id,
  children,
  className,
  label,
  title,
  description,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="mb-12 space-y-4 sm:mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
        <h2
          id={id ? `${id}-title` : undefined}
          className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
