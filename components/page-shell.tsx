import { SiteHeader } from "./site-header";
export function PageShell({
  section,
  children,
}: {
  section: "home" | "destination" | "crew" | "technology";
  children: React.ReactNode;
}) {
  return (
    <div className={`page page-${section}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader current={section === "home" ? "/" : `/${section}`} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
export function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className="section-title">
      <span aria-hidden="true">{number}</span> {children}
    </h1>
  );
}
