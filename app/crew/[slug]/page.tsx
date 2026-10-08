import { notFound, permanentRedirect } from "next/navigation";
import { crew } from "@/lib/content";
import { CrewPage } from "@/components/crew-page";
export const dynamicParams = false;
export function generateStaticParams() {
  return crew.map((item) => ({ slug: item.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = crew.find((item) => item.slug === slug);
  return {
    title: item?.name ?? "Not found",
    alternates: item ? { canonical: item.href } : undefined,
    description: item ? item.bio : undefined,
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = crew.find((item) => item.slug === slug);
  if (!item) notFound();
  if (item.href === "/crew") permanentRedirect(item.href);
  return <CrewPage member={item} />;
}
