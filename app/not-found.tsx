import { PageShell } from "@/components/page-shell";
export default function NotFound() {
  return (
    <PageShell section="home">
      <div className="not-found content-width">
        <h1>Destination not found</h1>
        <p>That page is not part of this journey.</p>
        <a href="/">Return home</a>
      </div>
    </PageShell>
  );
}
