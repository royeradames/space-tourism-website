"use client";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { sections } from "@/lib/navigation";
import { registerShortcuts } from "@/lib/keyboard";

const preferenceKey = "space-tourism-character-shortcuts";
let temporaryPreference: boolean | undefined;
function readPreference() {
  if (temporaryPreference !== undefined) return temporaryPreference;
  try {
    return localStorage.getItem(preferenceKey) === "on";
  } catch {
    return false;
  }
}
function subscribePreference(changed: () => void) {
  function storageChanged(event: StorageEvent) {
    if (event.key !== null && event.key !== preferenceKey) return;
    temporaryPreference = undefined;
    changed();
  }
  window.addEventListener("storage", storageChanged);
  window.addEventListener(preferenceKey, changed);
  return () => {
    window.removeEventListener("storage", storageChanged);
    window.removeEventListener(preferenceKey, changed);
  };
}
function setPreference(enabled: boolean) {
  try {
    localStorage.setItem(preferenceKey, enabled ? "on" : "off");
    temporaryPreference = undefined;
  } catch {
    temporaryPreference = enabled;
  }
  window.dispatchEvent(new Event(preferenceKey));
}
const subscribeHydration = () => () => {};

export function SiteHeader({ current }: { current: string }) {
  const shortcutsEnabled = useSyncExternalStore(
    subscribePreference,
    readPreference,
    () => false,
  );
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    () => true,
    () => false,
  );
  const menu = useRef<HTMLDetailsElement>(null);
  const help = useRef<HTMLDetailsElement>(null);
  useEffect(
    () =>
      registerShortcuts(window, {
        ...(shortcutsEnabled
          ? {
              "1": () => window.location.assign("/"),
              "2": () => window.location.assign("/destination"),
              "3": () => window.location.assign("/crew"),
              "4": () => window.location.assign("/technology"),
              "?": () => {
                if (!help.current) return;
                help.current.open = !help.current.open;
                help.current.querySelector("summary")?.focus();
              },
            }
          : {}),
        escape: () => {
          const open = help.current?.open
            ? help.current
            : menu.current?.open
              ? menu.current
              : null;
          if (!open) return;
          open.open = false;
          open.querySelector("summary")?.focus();
        },
      }),
    [shortcutsEnabled],
  );
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
          <span className="menu-open">☰</span>
          <span className="menu-close">×</span>
        </summary>
        <nav aria-label="Main navigation">{links}</nav>
      </details>
      <details className="keyboard-help" ref={help}>
        <summary>
          Keyboard help <kbd>?</kbd>
        </summary>
        <div className="help-content">
          <label className="shortcut-setting">
            <input
              type="checkbox"
              checked={shortcutsEnabled}
              disabled={!hydrated}
              onChange={(event) => setPreference(event.target.checked)}
            />{" "}
            Enable character shortcuts
          </label>
          <p>
            Off until enabled. This choice is saved on this device when storage
            is available.
          </p>
          {temporaryPreference !== undefined && (
            <p role="status">
              Storage is unavailable. This choice lasts for this page.
            </p>
          )}
          <noscript>
            <p>
              Character shortcuts need JavaScript. Every link works with Tab and
              Enter.
            </p>
          </noscript>
          <p>Go to a section</p>
          <ul>
            {sections.map((section) => (
              <li key={section.key}>
                <kbd>{section.key}</kbd> {section.label}
              </li>
            ))}
          </ul>
          <p>
            <kbd>?</kbd> Show or close help
            <br />
            <kbd>Escape</kbd> Close menu or help
          </p>
          <p>Tab and Enter work on every link.</p>
        </div>
      </details>
    </header>
  );
}
