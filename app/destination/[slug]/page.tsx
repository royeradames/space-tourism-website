import { notFound, permanentRedirect } from "next/navigation";
import { destinations } from "@/lib/content";
import { DestinationPage } from "@/components/destination-page";
export const dynamicParams = false;
export function generateStaticParams() {
  return destinations.map((item) => ({ slug: item.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = destinations.find((item) => item.slug === slug);
  return {
    title: item?.name ?? "Not found",
    description: item ? item.description : undefined,
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = destinations.find((item) => item.slug === slug);
  if (!item) notFound();
  if (item.href === "/destination") permanentRedirect(item.href);
  return <DestinationPage destination={item} />;
}
