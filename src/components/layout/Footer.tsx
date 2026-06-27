import { siteConfig } from "@/content/site";
import { getCurrentYear } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = getCurrentYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {year} &copy; {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
