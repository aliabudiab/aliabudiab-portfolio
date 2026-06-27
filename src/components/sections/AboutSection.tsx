import { motion } from "framer-motion";

import { siteConfig } from "@/content/site";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Section } from "@/components/ui/Section";
import { HighlightedText } from "@/components/ui/HighlightedText";

export function AboutSection() {
  const { fadeUp, staggerContainer, viewport } = useMotionConfig();

  return (
    <Section
      id="about"
      label="About"
      title="Building platforms that transform how organizations operate."
      description="From entertainment booking ecosystems to government digitization — I focus on measurable impact, team elevation, and engineering excellence."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <HighlightedText text={siteConfig.bio} />

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Location
              </p>
              <p className="mt-2 text-sm text-foreground">{siteConfig.location}</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                Education
              </p>
              <p className="mt-2 text-sm text-foreground">{siteConfig.education}</p>
            </div>
          </div>
        </motion.div>

        <motion.ul variants={fadeUp} className="space-y-4">
          {siteConfig.bioHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-hover hover:bg-surface-elevated"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-muted sm:text-base">
                {highlight}
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  );
}
