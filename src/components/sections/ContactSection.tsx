import { motion } from "framer-motion";

import { siteConfig } from "@/content/site";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MailtoLink } from "@/components/ui/MailtoLink";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { SocialIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const { fadeUp, staggerContainer, viewport } = useMotionConfig();

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something exceptional."
      description="Open to senior engineering roles, staff-level opportunities, and ambitious product collaborations."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="overflow-hidden rounded-[2rem] border border-border bg-surface"
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div variants={fadeUp} className="p-8 sm:p-10 lg:p-12">
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Whether you are scaling a design system, rebuilding a core product
              surface, or looking for an engineer who cares deeply about craft —
              I would love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MailtoLink
                email={siteConfig.email}
                subject="Portfolio Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-6 py-3 text-sm font-medium tracking-tight text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-accent/20 hover:shadow-glow-sm sm:text-base"
              >
                {siteConfig.email}
              </MailtoLink>
              <CopyEmailButton email={siteConfig.email} />
              <Button
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                View resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-t border-border bg-surface-elevated p-8 sm:p-10 lg:border-l lg:border-t-0"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Connect
            </p>
            <ul className="mt-6 space-y-3">
              {siteConfig.socialLinks.map((link) => {
                const isEmail = link.platform === "email";

                if (isEmail) {
                  return (
                    <li key={link.platform}>
                      <MailtoLink
                        email={siteConfig.email}
                        subject="Portfolio Inquiry"
                        className="group flex cursor-pointer items-center justify-between rounded-xl border border-border bg-background px-4 py-3 transition-all hover:border-border-hover hover:bg-surface"
                      >
                        <span className="flex items-center gap-3 text-sm text-foreground">
                          <SocialIcon
                            platform={link.platform}
                            className="text-muted transition-colors group-hover:text-accent"
                          />
                          {link.label}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:text-accent">
                          Email
                        </span>
                      </MailtoLink>
                    </li>
                  );
                }

                return (
                  <li key={link.platform}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex cursor-pointer items-center justify-between rounded-xl border border-border bg-background px-4 py-3 transition-all hover:border-border-hover hover:bg-surface"
                    >
                      <span className="flex items-center gap-3 text-sm text-foreground">
                        <SocialIcon
                          platform={link.platform}
                          className="text-muted transition-colors group-hover:text-accent"
                        />
                        {link.label}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:text-accent">
                        Open
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
