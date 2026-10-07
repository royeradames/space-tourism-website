import { destinations, type Destination } from "@/lib/content";
import { PageShell, SectionTitle } from "./page-shell";
export function DestinationPage({ destination }: { destination: Destination }) {
  return (
    <PageShell section="destination">
      <article className="destination content-width">
        <SectionTitle number="01">Pick your destination</SectionTitle>
        <img
          className="planet"
          src={destination.image}
          width="445"
          height="445"
          alt={destination.name}
          fetchPriority="high"
        />
        <div className="destination-copy">
          <nav className="destination-nav" aria-label="Destinations">
            {destinations.map((item) => (
              <a
                key={item.slug}
                href={item.href}
                aria-current={
                  item.slug === destination.slug ? "page" : undefined
                }
              >
                {item.name}
              </a>
            ))}
          </nav>
          <h2 className="destination-name">{destination.name}</h2>
          <p className="body-copy">{destination.description}</p>
          <dl className="destination-stats">
            <div>
              <dt>Avg. distance</dt>
              <dd>{destination.distance}</dd>
            </div>
            <div>
              <dt>Est. travel time</dt>
              <dd>{destination.travel}</dd>
            </div>
          </dl>
        </div>
      </article>
    </PageShell>
  );
}
