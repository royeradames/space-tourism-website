import { pageOpenGraph } from "@/app/site";
import { notFound } from "next/navigation";
import { crew } from "@/lib/content";
import { CrewPage } from "@/components/crew-page";
export const metadata = {
  title: "Crew",
  description: "Meet your crew: the commander, mission specialist, pilot and flight engineer.",
  alternates: { canonical: "/crew" },
  openGraph: pageOpenGraph("Crew", "Meet your crew: the commander, mission specialist, pilot and flight engineer."),
};
export default function Page() {
  const item = crew.find((item) => item.slug === "douglas-hurley");
  if (!item) notFound();
  return <CrewPage member={item} />;
}
