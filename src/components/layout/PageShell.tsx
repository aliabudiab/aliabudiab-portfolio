import { Container } from "@/components/ui/Container";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 surface-grid opacity-40" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 noise-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow"
      />
      <Container as="main" className="relative pb-8">
        {children}
      </Container>
    </div>
  );
}
