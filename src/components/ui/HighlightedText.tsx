import { cn, parseHighlightedText } from "@/lib/utils";

interface HighlightedTextProps {
  text: string;
  className?: string;
}

export function HighlightedText({ text, className }: HighlightedTextProps) {
  const segments = parseHighlightedText(text);

  return (
    <p className={cn("text-base leading-relaxed text-muted sm:text-lg", className)}>
      {segments.map((segment, index) =>
        segment.highlighted ? (
          <span key={index} className="font-medium text-foreground">
            {segment.text}
          </span>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </p>
  );
}
