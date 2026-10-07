import { notFound } from "next/navigation";
import { crew } from "@/lib/content";
import { CrewPage } from "@/components/crew-page";
export const metadata = { title: "Crew" };
export default function Page() {
  const item = crew.find((item) => item.slug === "douglas-hurley");
  if (!item) notFound();
  return <CrewPage member={item} />;
}
