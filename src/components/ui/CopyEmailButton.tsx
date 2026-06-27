import { useState } from "react";

import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied" : `Copy ${email} to clipboard`}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-3 text-sm font-medium text-muted transition-all hover:border-border-hover hover:text-foreground",
        className,
      )}
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
