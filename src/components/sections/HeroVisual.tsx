import { motion } from "framer-motion";

import { siteConfig } from "@/content/site";
import { useMotionConfig } from "@/hooks/useMotionConfig";

const orbitLabels = ["React", "Angular", "Vue", "TypeScript", "Next.js"];

export function HeroVisual() {
  const { prefersReducedMotion } = useMotionConfig();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-sky-400/10 blur-3xl" />

      <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-6 shadow-glow backdrop-blur-xl sm:min-h-[420px] sm:p-8">
        <div className="absolute inset-0 surface-grid opacity-30" />

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.12),transparent_55%)]"
          animate={prefersReducedMotion ? undefined : { opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative flex h-[220px] w-[220px] items-center justify-center sm:h-[260px] sm:w-[260px]">
          <motion.div
            className="absolute inset-0 rounded-full border border-dashed border-accent/30"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {orbitLabels.map((label, index) => (
              <div
                key={label}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: `rotate(${(360 / orbitLabels.length) * index}deg) translateY(-110px)` }}
              >
                <div style={{ transform: `rotate(${-(360 / orbitLabels.length) * index}deg)` }}>
                  <span className="whitespace-nowrap rounded-full border border-border bg-surface-elevated/95 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-muted backdrop-blur-sm sm:text-[10px]">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="absolute inset-6 rounded-full border border-border bg-accent-muted/30 backdrop-blur-sm sm:inset-8"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-3xl border border-border-hover bg-background/85 shadow-glow-sm backdrop-blur-md sm:h-28 sm:w-28">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
              Role
            </p>
            <p className="mt-1 text-center text-sm font-semibold leading-tight text-foreground">
              Senior Engineer
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute bottom-5 left-5 right-5 grid gap-2 sm:grid-cols-3 sm:gap-3"
        >
          {siteConfig.heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-background/75 px-3 py-2.5 backdrop-blur-md"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                {stat.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-foreground">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="absolute left-5 top-5 hidden rounded-xl border border-border bg-background/70 px-3 py-2 font-mono text-[10px] leading-relaxed text-muted backdrop-blur-md sm:block"
          animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-accent">const</span> engineer = {"{"}
          <br />
          &nbsp;&nbsp;impact: <span className="text-foreground">&quot;high&quot;</span>,
          <br />
          &nbsp;&nbsp;craft: <span className="text-foreground">&quot;precise&quot;</span>
          <br />
          {"}"};
        </motion.div>
      </div>
    </div>
  );
}
