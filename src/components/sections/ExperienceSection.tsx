import { motion } from "framer-motion";

import { experience } from "@/content/experience";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function ExperienceSection() {
  const { fadeUp, staggerContainer, viewport } = useMotionConfig();

  return (
    <Section
      id="experience"
      label="Experience"
      title="5+ years of impact across banking, retail, and public sector."
      description="Progression from full-stack delivery to senior frontend engineering and technical leadership — with a consistent focus on quality and team growth."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative space-y-8 before:absolute before:bottom-0 before:left-[11px] before:top-2 before:w-px before:bg-border sm:before:left-[15px]"
      >
        {experience.map((item, index) => (
          <motion.article
            key={item.id}
            variants={fadeUp}
            className="relative pl-10 sm:pl-12"
          >
            <div
              className="absolute left-0 top-3 h-[22px] w-[22px] rounded-full border border-border bg-background sm:h-[30px] sm:w-[30px]"
              aria-hidden="true"
            >
              <div className="absolute inset-1 rounded-full bg-accent/80" />
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-hover hover:bg-surface-elevated hover:shadow-glow-sm sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{item.company}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {item.location}
                  </p>
                </div>
                <time className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {item.period}
                </time>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>

              <ul className="mt-5 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-muted">
                    <span className="text-accent" aria-hidden="true">
                      —
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            {index < experience.length - 1 ? (
              <span className="sr-only">Next experience item</span>
            ) : null}
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
