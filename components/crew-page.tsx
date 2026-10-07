import { crew, type CrewMember } from "@/lib/content";
import { PageShell, SectionTitle } from "./page-shell";
export function CrewPage({ member }: { member: CrewMember }) {
  return (
    <PageShell section="crew">
      <article className="crew content-width">
        <SectionTitle number="02">Meet your crew</SectionTitle>
        <div className="crew-image">
          <img
            src={member.image}
            alt={member.name}
            width={member.width}
            height={member.height}
            fetchPriority="high"
          />
        </div>
        <nav className="crew-nav" aria-label="Crew members">
          {crew.map((item) => (
            <a
              key={item.slug}
              href={item.href}
              aria-label={item.name}
              aria-current={item.slug === member.slug ? "page" : undefined}
            >
              <span aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="crew-copy">
          <p className="crew-role">{member.role}</p>
          <h2>{member.name}</h2>
          <p className="body-copy">{member.bio}</p>
        </div>
      </article>
    </PageShell>
  );
}
