import { notFound } from "next/navigation";
import { destinations } from "@/lib/content";
import { DestinationPage } from "@/components/destination-page";
export const metadata = { title: "Destination", alternates: { canonical: "/destination" } };
export default function Page() {
  const item = destinations.find((item) => item.slug === "moon");
  if (!item) notFound();
  return <DestinationPage destination={item} />;
}
