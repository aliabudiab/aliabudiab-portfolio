import { getMailtoHref, cn } from "@/lib/utils";

interface MailtoLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  email: string;
  children: React.ReactNode;
  subject?: string;
}

function buildMailtoHref(email: string, subject?: string): string {
  const base = getMailtoHref(email);
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

export function MailtoLink({
  email,
  children,
  className,
  subject,
  onClick,
  ...props
}: MailtoLinkProps) {
  const href = buildMailtoHref(email, subject);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    // Preserve modified clicks (new tab, context menu, etc.)
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;

    event.preventDefault();
    window.location.href = href;
  };

  return (
    <a
      {...props}
      href={href}
      onClick={handleClick}
      className={cn("cursor-pointer", className)}
      aria-label={props["aria-label"] ?? `Send email to ${email}`}
    >
      {children}
    </a>
  );
}
