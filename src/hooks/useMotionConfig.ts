import { type Variants } from "framer-motion";

import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useMotionConfig() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const fadeIn: Variants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      };

  const staggerContainer: Variants = prefersReducedMotion
    ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
      };

  return {
    prefersReducedMotion,
    fadeUp,
    fadeIn,
    staggerContainer,
    viewport: { once: true, margin: "-80px" as const },
  };
}
