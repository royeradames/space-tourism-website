import data from "./content.json";

// The committed official content is local build input, never a runtime response.
function slug(name: string) {
  return name.toLowerCase().replaceAll(" ", "-");
}
function asset(path: string) {
  return path.replace(/^\.\//, "/");
}
export const destinations = data.destinations.map((item, index) => ({
  ...item,
  slug: slug(item.name),
  href: index === 0 ? "/destination" : `/destination/${slug(item.name)}`,
  image: asset(item.images.webp),
}));
const portraitSizes: Record<string, [number, number]> = {
  "/assets/crew/image-mark-shuttleworth.webp": [433, 640],
  "/assets/crew/image-anousheh-ansari.webp": [575, 602],
  "/assets/crew/image-victor-glover.webp": [549, 645],
  "/assets/crew/image-douglas-hurley.webp": [514, 700],
};
export const crew = data.crew.map((item, index) => ({
  ...item,
  slug: slug(item.name),
  href: index === 0 ? "/crew" : `/crew/${slug(item.name)}`,
  image: asset(item.images.webp),
  width: portraitSizes[asset(item.images.webp)][0],
  height: portraitSizes[asset(item.images.webp)][1],
}));
export const technologies = data.technology.map((item, index) => ({
  ...item,
  slug: slug(item.name),
  href: index === 0 ? "/technology" : `/technology/${slug(item.name)}`,
  portrait: asset(item.images.portrait),
  landscape: asset(item.images.landscape),
}));
export type Destination = (typeof destinations)[number];
export type CrewMember = (typeof crew)[number];
export type Technology = (typeof technologies)[number];
