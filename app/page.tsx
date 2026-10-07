import { PageShell } from "@/components/page-shell";
export default function Home() {
  return (
    <PageShell section="home">
      <article className="home content-width">
        <div className="home-copy">
          <h1>
            So, you want to travel to <span>Space</span>
          </h1>
          <p className="body-copy">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <a className="explore" href="/destination">
          Explore
        </a>
      </article>
    </PageShell>
  );
}
