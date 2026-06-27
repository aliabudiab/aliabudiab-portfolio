import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/LogoMark";
import { MailtoLink } from "@/components/ui/MailtoLink";
import { SocialIcon } from "@/components/ui/Icons";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <Container as="nav" aria-label="Primary navigation">
        <div
          className={cn(
            "mt-4 flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5",
            isScrolled
              ? "border-border bg-background/80 shadow-glow-sm backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-2xl focus-visible:outline-none"
            aria-label={`${siteConfig.name} — Home`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-hover bg-surface-elevated shadow-glow-sm ring-1 ring-foreground/10 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-glow-sm">
              <LogoMark size={28} />
            </div>
            <div className="hidden sm:block">
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Portfolio
              </span>
              <span className="block text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-foreground">
                {siteConfig.name}
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {siteConfig.socialLinks.map((link) => {
              const isEmail = link.platform === "email";

              if (isEmail) {
                return (
                  <motion.div
                    key={link.platform}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <MailtoLink
                      email={siteConfig.email}
                      subject="Portfolio Inquiry"
                      aria-label={`Send email to ${siteConfig.email}`}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-hover hover:text-foreground"
                    >
                      <SocialIcon platform={link.platform} />
                    </MailtoLink>
                  </motion.div>
                );
              }

              return (
                <motion.a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-hover hover:text-foreground"
                >
                  <SocialIcon platform={link.platform} />
                </motion.a>
              );
            })}

            <Button
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Resume
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
