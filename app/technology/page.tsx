import { notFound } from "next/navigation";
import { technologies } from "@/lib/content";
import { TechnologyPage } from "@/components/technology-page";
export const metadata = { title: "Technology", alternates: { canonical: "/technology" } };
export default function Page() {
  const item = technologies.find((item) => item.slug === "launch-vehicle");
  if (!item) notFound();
  return <TechnologyPage technology={item} />;
}
