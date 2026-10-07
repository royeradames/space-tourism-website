import { notFound, permanentRedirect } from "next/navigation";
import { technologies } from "@/lib/content";
import { TechnologyPage } from "@/components/technology-page";
export const dynamicParams = false;
export function generateStaticParams() {
  return technologies.map((item) => ({ slug: item.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = technologies.find((item) => item.slug === slug);
  return {
    title: item?.name ?? "Not found",
    description: item ? item.description : undefined,
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = technologies.find((item) => item.slug === slug);
  if (!item) notFound();
  if (item.href === "/technology") permanentRedirect(item.href);
  return <TechnologyPage technology={item} />;
}
