import { technologies, type Technology } from "@/lib/content";
import { PageShell, SectionTitle } from "./page-shell";
export function TechnologyPage({ technology }: { technology: Technology }) {
  return (
    <PageShell section="technology" navCurrent={technology.href === "/technology" ? "page" : "true"}>
      <article className="technology">
        <SectionTitle number="03">Space launch 101</SectionTitle>
        <picture className="technology-image">
          <source
            media="(min-width: 1100px)"
            srcSet={technology.portrait}
            width="515"
            height="527"
          />
          <img
            src={technology.landscape}
            width="768"
            height="310"
            alt={technology.name}
            fetchPriority="high"
          />
        </picture>
        <nav className="technology-nav" aria-label="Technologies">
          {technologies.map((item, index) => (
            <a
              key={item.slug}
              href={item.href}
              aria-label={`${index + 1}. ${item.name}`}
              aria-current={item.slug === technology.slug ? "page" : undefined}
            >
              {index + 1}
            </a>
          ))}
        </nav>
        <div className="technology-copy">
          <p className="eyebrow">The terminology…</p>
          <h2>{technology.name}</h2>
          <p className="body-copy">{technology.description}</p>
        </div>
      </article>
    </PageShell>
  );
}
