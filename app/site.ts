export const siteName = "Space Tourism";
export const siteUrl = "https://space-tourism.royeradames.com/";

/* Child routes replace the layout's openGraph object, so each one repeats the site name and type. */
export function pageOpenGraph(title: string, description: string) {
  return { type: "website" as const, siteName, title: `${title} | ${siteName}`, description };
}
