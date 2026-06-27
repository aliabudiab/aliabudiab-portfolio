import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/content/site";
import { useMotionConfig } from "@/hooks/useMotionConfig";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function HeroSection() {
  const { fadeUp, staggerContainer, prefersReducedMotion } = useMotionConfig();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(siteConfig.typewriterRoles[0]);
      return;
    }

    const currentRole = siteConfig.typewriterRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(0, displayText.length + 1);
          setDisplayText(nextText);

          if (nextText === currentRole) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          const nextText = currentRole.slice(0, displayText.length - 1);
          setDisplayText(nextText);

          if (nextText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % siteConfig.typewriterRoles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, prefersReducedMotion, roleIndex]);

  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-center py-16 sm:py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                {siteConfig.location}
              </p>
              <span className="hidden h-1 w-1 rounded-full bg-muted sm:inline-block" aria-hidden="true" />
              <p className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted sm:block">
                Open to senior roles
              </p>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-gradient">{siteConfig.name}</span>
              <span className="mt-2 block text-2xl font-normal text-muted sm:text-3xl">
                {siteConfig.title}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="min-h-[2.5rem]">
            <p className="font-mono text-sm text-muted sm:text-base">
              <span className="text-accent">&gt;</span>{" "}
              <span className="text-foreground">{displayText}</span>
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-accent align-middle" />
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" size="lg">
              View selected work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in touch
            </Button>
            <Button
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
            >
              Download resume
            </Button>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <HeroVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}
