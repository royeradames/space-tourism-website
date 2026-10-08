import { expect, test, type Page } from "@playwright/test";

const siteName = "Space Tourism";
const siteUrl = "https://space-tourism.royeradames.com/";
const pages = ["/", "/destination", "/crew", "/technology"];

async function box(page: Page, selector: string) {
  const found = await page.locator(selector).first().boundingBox();
  if (!found) throw new Error(`${selector} has no box`);
  return found;
}

async function smallText(page: Page) {
  return page.evaluate(() => {
    const out: string[] = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || !node.textContent?.trim() || parent.closest("script,style,noscript")) continue;
      if (parent.getClientRects().length === 0 || getComputedStyle(parent).visibility === "hidden") continue;
      if (parseFloat(getComputedStyle(parent).fontSize) < 16) out.push(node.textContent.trim());
    }
    return out;
  });
}

test("declares one site name in og:site_name and WebSite JSON-LD, with canonical, Open Graph image and icons", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute("content", siteName);
  const jsonLd = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? "{}");
  expect(jsonLd).toEqual({ "@context": "https://schema.org", "@type": "WebSite", name: siteName, url: siteUrl });
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(new URL(canonical!).href).toBe(siteUrl);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /opengraph-image/);
  await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute("content", /Space Tourism/);
  await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveCount(1);
  for (const href of await page.locator('link[rel="icon"], link[rel="apple-touch-icon"]').evaluateAll((links) => links.map((link) => (link as HTMLLinkElement).href))) {
    expect((await page.request.get(href)).status(), href).toBe(200);
  }
  await page.goto("/crew/victor-glover");
  const crewCanonical = await page.locator('link[rel="canonical"]').getAttribute("href");
  expect(new URL(crewCanonical!).href).toBe(`${siteUrl}crew/victor-glover`);
});

test("only the design's controls are shown: no keyboard help panel", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Keyboard help")).toHaveCount(0);
  await expect(page.getByText("Enable character shortcuts")).toHaveCount(0);
});

test("desktop home frame: copy 540 px from x165, Explore 272 px on the right, both ending 128 px above the bottom", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.goto("/");
  const copy = await box(page, ".home-copy");
  expect(copy.x).toBeCloseTo(165, 0);
  expect(copy.width).toBeCloseTo(540, 0);
  expect(Math.abs(copy.y + copy.height - 896)).toBeLessThanOrEqual(12);
  const explore = await box(page, ".explore");
  expect([explore.width, explore.height]).toEqual([272, 272]);
  expect(explore.x + explore.width).toBeCloseTo(1275, 0);
  await expect(page.locator(".home h1 span")).toHaveCSS("font-size", "150px");
  const header = await box(page, ".site-header");
  expect(header.height).toBe(136);
  const nav = await box(page, ".desktop-nav");
  expect(nav.height).toBe(96);
  expect(nav.x + nav.width).toBe(1440);
});

test("desktop destination, crew and technology frames follow the Figma columns", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.goto("/destination");
  const title = await box(page, ".section-title");
  expect(title.x).toBeCloseTo(165, 0);
  expect(Math.abs(title.y - 184)).toBeLessThanOrEqual(4);
  await expect(page.locator(".section-title")).toHaveCSS("font-size", "28px");
  const planet = await box(page, ".planet");
  expect([planet.width, planet.height]).toEqual([480, 480]);
  expect(Math.abs(planet.x - 195)).toBeLessThanOrEqual(2);
  const tabs = await box(page, ".destination-nav");
  expect(Math.abs(tabs.x - 783)).toBeLessThanOrEqual(2);
  await expect(page.locator(".destination-name")).toHaveCSS("font-size", "100px");

  await page.goto("/crew");
  const crewImage = await box(page, ".crew-image img");
  expect(crewImage.x).toBeGreaterThanOrEqual(736 - 2);
  expect(Math.abs(crewImage.x + crewImage.width / 2 - (736 + 539 / 2))).toBeLessThanOrEqual(2);
  const dots = await box(page, ".crew-nav");
  expect(dots.x).toBeCloseTo(165, 0);
  await expect(page.locator(".crew-copy h2")).toHaveCSS("font-size", "56px");

  await page.goto("/technology");
  const pager = page.locator(".technology-nav a");
  expect((await pager.first().boundingBox())!.width).toBe(80);
  expect((await box(page, ".technology-nav")).x).toBeCloseTo(165, 0);
  const image = await box(page, ".technology-image img");
  expect(image.x + image.width).toBe(1440);
  expect(Math.abs(image.width - 608)).toBeLessThanOrEqual(2);
});

test("tablet frames: numbered navigation bar, stacked centred content, 300 px planet", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/destination");
  const header = await box(page, ".site-header");
  expect(header.height).toBe(96);
  await expect(page.locator(".desktop-nav a span").first()).toBeVisible();
  const nav = await box(page, ".desktop-nav");
  expect(nav.x + nav.width).toBe(768);
  expect((await box(page, ".planet")).width).toBe(300);
  const title = await box(page, ".section-title");
  expect(title.x).toBeCloseTo(40, 0);
  await page.goto("/technology");
  const image = await box(page, ".technology-image img");
  expect([image.x, image.width]).toEqual([0, 768]);
  expect((await page.locator(".technology-nav a").first().boundingBox())!.width).toBe(56);
});

test("mobile frames: centred title, 150 px planet, menu panel 254 px wide with blur", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/destination");
  const header = await box(page, ".site-header");
  expect(header.height).toBe(88);
  const title = await box(page, ".section-title");
  expect(Math.abs(title.x + title.width / 2 - 187.5)).toBeLessThanOrEqual(2);
  expect((await box(page, ".planet")).width).toBe(150);
  await page.locator(".mobile-menu summary").click();
  const panel = await box(page, ".mobile-menu nav");
  expect([panel.x, panel.width]).toEqual([121, 254]);
  await expect(page.locator(".mobile-menu nav")).toHaveCSS("backdrop-filter", /blur/);
  await page.goto("/technology");
  const image = await box(page, ".technology-image img");
  expect([image.x, image.width]).toEqual([0, 375]);
  expect((await page.locator(".technology-nav a").first().boundingBox())!.width).toBe(40);
});

test("hover states follow the Figma state frames", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1024 });
  await page.goto("/");
  await page.locator(".explore").hover();
  await expect(page.locator(".explore")).toHaveCSS("box-shadow", "rgba(255, 255, 255, 0.1) 0px 0px 0px 88px");
  await page.locator(".desktop-nav a").nth(1).hover();
  await expect(page.locator(".desktop-nav a").nth(1)).toHaveCSS("border-bottom-color", "rgba(255, 255, 255, 0.5)");
  await page.goto("/technology");
  await page.locator(".technology-nav a").nth(1).hover();
  await expect(page.locator(".technology-nav a").nth(1)).toHaveCSS("border-color", "rgb(255, 255, 255)");
});

for (const path of pages) {
  test(`width sweep 320 to 1600 px in 10 px steps on ${path}: no page scroll, 16 px floor`, async ({ page }) => {
    await page.goto(path);
    const failures: string[] = [];
    for (let width = 320; width <= 1600; width += 10) {
      await page.setViewportSize({ width, height: 900 });
      if (await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) failures.push(`${width}: page scroll`);
      const small = await smallText(page);
      if (small.length) failures.push(`${width}: small text ${small.slice(0, 3).join(" | ")}`);
    }
    expect(failures).toEqual([]);
  });
}
