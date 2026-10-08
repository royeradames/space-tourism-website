"use client";
import { useEffect, useRef } from "react";
import { sections } from "@/lib/navigation";

/* The phone menu is a native disclosure, so it opens and closes without JavaScript.
   With JavaScript, Escape also closes it and returns focus to the menu button. */
export function SiteHeader({ current }: { current: string }) {
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !menu.current?.open) return;
      menu.current.open = false;
      menu.current.querySelector("summary")?.focus();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  const links = sections.map((section) => (
    <a
      key={section.href}
      href={section.href}
      aria-current={current === section.href ? "page" : undefined}
    >
      <span aria-hidden="true">{section.number}</span> {section.label}
    </a>
  ));
  return (
    <header className="site-header">
      <a href="/" className="logo" aria-label="Space Tourism home">
        <img src="/assets/shared/logo.svg" width="48" height="48" alt="" />
      </a>
      <div className="header-rule" aria-hidden="true" />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links}
      </nav>
      <details className="mobile-menu" ref={menu}>
        <summary aria-label="Menu">
          <img className="menu-open" src="/assets/shared/icon-hamburger.svg" width="24" height="21" alt="" />
          <img className="menu-close" src="/assets/shared/icon-close.svg" width="20" height="21" alt="" />
        </summary>
        <nav aria-label="Main navigation">{links}</nav>
      </details>
    </header>
  );
}
