import React, { useEffect, useState } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  text: string;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function useActiveHeading(items: TocItem[]): string | null {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  return active;
}

function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
  history.replaceState(null, "", `#${id}`);
}

export function TocDesktop({ items }: { items: TocItem[] }) {
  const active = useActiveHeading(items);
  if (items.length < 2) return null;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
          On this page
        </p>
        <nav>
          <ul className="space-y-2 border-l border-border">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={cn(
                    "block pl-4 -ml-px py-1 text-sm leading-snug border-l transition-colors duration-200 hover:text-foreground",
                    active === item.id
                      ? "border-primary text-primary font-medium"
                      : "border-transparent text-muted-foreground"
                  )}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export function TocMobile({ items }: { items: TocItem[] }) {
  if (items.length < 2) return null;

  return (
    <details className="lg:hidden mb-8 border border-border rounded-lg bg-muted/20 group">
      <summary className="flex items-center gap-2 cursor-pointer list-none p-4 text-sm font-semibold text-foreground select-none">
        <List className="h-4 w-4 text-primary" />
        On this page
        <span className="ml-auto text-xs text-muted-foreground group-open:hidden">Show</span>
        <span className="ml-auto text-xs text-muted-foreground hidden group-open:inline">Hide</span>
      </summary>
      <nav className="px-4 pb-4">
        <ul className="space-y-2 border-l border-border">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="block pl-4 -ml-px py-1 text-sm leading-snug border-l border-transparent text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
