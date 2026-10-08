import { pageOpenGraph } from "@/app/site";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/content";
import { DestinationPage } from "@/components/destination-page";
export const metadata = {
  title: "Destination",
  description: "Pick your destination: the Moon, Mars, Europa or Titan, with distance and travel time.",
  alternates: { canonical: "/destination" },
  openGraph: pageOpenGraph("Destination", "Pick your destination: the Moon, Mars, Europa or Titan, with distance and travel time."),
};
export default function Page() {
  const item = destinations.find((item) => item.slug === "moon");
  if (!item) notFound();
  return <DestinationPage destination={item} />;
}
