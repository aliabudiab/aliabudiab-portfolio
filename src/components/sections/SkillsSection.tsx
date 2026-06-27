import { motion } from "framer-motion";

import { skillCategories } from "@/content/skills";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function SkillsSection() {
  const { fadeUp, staggerContainer, viewport } = useMotionConfig();

  return (
    <Section
      id="skills"
      label="Skills"
      title="A toolkit shaped by production realities."
      description="Technologies and practices I reach for when building resilient, user-centered software."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid gap-5 sm:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-hover hover:bg-surface-elevated sm:p-7"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {category.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
