import { pageOpenGraph } from "@/app/site";
import { notFound } from "next/navigation";
import { technologies } from "@/lib/content";
import { TechnologyPage } from "@/components/technology-page";
export const metadata = {
  title: "Technology",
  description: "Space launch 101: the launch vehicle, the spaceport and the space capsule.",
  alternates: { canonical: "/technology" },
  openGraph: pageOpenGraph("Technology", "Space launch 101: the launch vehicle, the spaceport and the space capsule."),
};
export default function Page() {
  const item = technologies.find((item) => item.slug === "launch-vehicle");
  if (!item) notFound();
  return <TechnologyPage technology={item} />;
}
