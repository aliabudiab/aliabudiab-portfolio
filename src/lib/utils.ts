import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { HighlightSegment } from "@/types";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function parseHighlightedText(text: string): HighlightSegment[] {
  const segments: HighlightSegment[] = [];
  const pattern = /\[([^\]]+)\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      segments.push({
        text: text.slice(lastIndex, matchIndex),
        highlighted: false,
      });
    }

    segments.push({
      text: match[1],
      highlighted: true,
    });

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({
      text: text.slice(lastIndex),
      highlighted: false,
    });
  }

  return segments.length > 0 ? segments : [{ text, highlighted: false }];
}

export function getMailtoHref(email: string): string {
  return `mailto:${email.trim()}`;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
