import { motion } from "framer-motion";

import { projects } from "@/content/projects";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

export function ProjectsSection() {
  const { fadeUp, staggerContainer, viewport } = useMotionConfig();

  return (
    <Section
      id="projects"
      label="Projects"
      title="Real-world platforms with measurable impact."
      description="Selected projects spanning entertainment booking ecosystems, government systems, and enterprise service platforms."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-5 md:grid-cols-2"
      >
        {projects.map((project, index) => {
          const CardWrapper = project.href ? "a" : "article";
          const wrapperProps = project.href
            ? {
                href: project.href,
                target: "_blank" as const,
                rel: "noopener noreferrer" as const,
              }
            : {};

          return (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className={cn(project.featured && index === 0 && "md:col-span-2")}
            >
              <CardWrapper
                {...wrapperProps}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 sm:p-8",
                  project.href
                    ? "hover:-translate-y-1 hover:border-border-hover hover:bg-surface-elevated hover:shadow-glow-sm"
                    : "hover:border-border-hover hover:bg-surface-elevated",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {project.featured ? "Featured" : "Case study"}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  {project.href ? (
                    <ArrowUpRightIcon className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm text-muted">
                      <span className="text-accent" aria-hidden="true">
                        •
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </CardWrapper>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
