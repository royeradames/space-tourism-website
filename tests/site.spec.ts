import { test, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const views = [
  ["/destination", "Moon", "image-moon.webp"],
  ["/destination/mars", "Mars", "image-mars.webp"],
  ["/destination/europa", "Europa", "image-europa.webp"],
  ["/destination/titan", "Titan", "image-titan.webp"],
  ["/crew", "Douglas Hurley", "image-douglas-hurley.webp"],
  [
    "/crew/mark-shuttleworth",
    "Mark Shuttleworth",
    "image-mark-shuttleworth.webp",
  ],
  ["/crew/victor-glover", "Victor Glover", "image-victor-glover.webp"],
  ["/crew/anousheh-ansari", "Anousheh Ansari", "image-anousheh-ansari.webp"],
  ["/technology", "Launch vehicle", "image-launch-vehicle-landscape.jpg"],
  ["/technology/spaceport", "Spaceport", "image-spaceport-landscape.jpg"],
  [
    "/technology/space-capsule",
    "Space capsule",
    "image-space-capsule-landscape.jpg",
  ],
];

test("all eleven supplied views have direct initial HTML and correct images", async ({
  page,
  request,
}) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const [path, name, image] of views) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(await response.text()).toContain(name);
    await page.goto(path);
    await expect(
      page.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    const illustration = page.getByRole("img", { name, exact: true });
    await expect(illustration).toBeVisible();
    await expect(illustration).toHaveJSProperty("complete", true);
    expect(
      await illustration.evaluate(
        (element) =>
          element instanceof HTMLImageElement && element.naturalWidth > 0,
      ),
    ).toBe(true);
    expect(
      await illustration.evaluate(
        (element) => element instanceof HTMLImageElement && element.currentSrc,
      ),
    ).toContain(image);
    expect(await page.locator('main a[aria-current="page"]').count()).toBe(1);
  }
  expect(errors).toEqual([]);
});

test("native selection links retain identity across reload, back and forward", async ({
  page,
}) => {
  await page.goto("/destination");
  await page
    .getByRole("navigation", { name: "Destinations" })
    .getByRole("link", { name: "Mars", exact: true })
    .click();
  await expect(page).toHaveURL(/\/destination\/mars$/);
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Mars", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Destinations" })
    .getByRole("link", { name: "Titan", exact: true })
    .click();
  await page.goBack();
  await expect(
    page.getByRole("heading", { name: "Mars", exact: true }),
  ).toBeVisible();
  await page.goForward();
  await expect(
    page.getByRole("heading", { name: "Titan", exact: true }),
  ).toBeVisible();
  for (const [path, name] of views.slice(4)) {
    const group = path.startsWith("/crew") ? "/crew" : "/technology";
    await page.goto(group);
    const link = page
      .locator("main nav")
      .getByRole("link", { name: new RegExp(name) });
    await link.click();
    await expect(
      page.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
  }
});

test("unknown slugs return404 and aliases retain parent defaults", async ({
  request,
}) => {
  for (const path of [
    "/destination/pluto",
    "/crew/unknown",
    "/technology/unknown",
    "/unknown",
  ])
    expect((await request.get(path)).status()).toBe(404);
  for (const [path, target] of [
    ["/destination/moon", "/destination"],
    ["/crew/douglas-hurley", "/crew"],
    ["/technology/launch-vehicle", "/technology"],
  ]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(target);
  }
});

test("mobile menu works with keyboard and restores focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 400, height: 850 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const menu = page.locator(".mobile-menu summary");
  await menu.focus();
  await page.keyboard.press("Enter");
  const navigation = page
    .getByRole("navigation", { name: "Main navigation" })
    .filter({ visible: true });
  await expect(navigation).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    navigation.getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(navigation).toBeHidden();
  // Number keys are not shortcuts: typing never navigates.
  await page.keyboard.press("2");
  await expect(page).toHaveURL(/\/(?:#main)?$/);
});

test("four sections and every selection remain usable with JavaScript disabled", async ({
  browser,
}) => {
  const context = await browser.newContext({
    baseURL: `http://127.0.0.1:${process.env.PORT ?? 4391}`,
    javaScriptEnabled: false,
    viewport: { width: 400, height: 850 },
  });
  try {
    const page = await context.newPage();
    await page.goto("/");
    await page.getByRole("link", { name: "Explore", exact: true }).click();
    await expect(
      page.getByRole("heading", { name: "Moon", exact: true }),
    ).toBeVisible();
    for (const [path, name] of views) {
      await page.goto(path);
      await expect(
        page.getByRole("heading", { name, exact: true }),
      ).toBeVisible();
    }
    const menu = page.locator(".mobile-menu summary");
    await menu.focus();
    await page.keyboard.press("Space");
    const navigation = page.locator(".mobile-menu nav");
    await expect(navigation).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(
      navigation.getByRole("link", { name: "Home", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await page.keyboard.press("Space");
    await expect(navigation).toBeHidden();
    await menu.click();
    await navigation.getByRole("link", { name: "Home", exact: true }).click();
    await expect(
      page.getByRole("heading", { name: /So, you want to travel to/ }),
    ).toBeVisible();
  } finally {
    await context.close();
  }
});

test("responsive pages preserve layout, image ratios and readable text", async ({
  page,
}) => {
  await mkdir(".test-state/screenshots", { recursive: true });
  for (const width of [375, 400, 768, 1440]) {
    await page.setViewportSize({ width, height: width >= 1100 ? 900 : 1000 });
    for (const [path, name] of [
      ["/", "home"],
      ["/destination", "destination"],
      ["/crew", "crew"],
      ["/technology", "technology"],
    ]) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${path} at ${width}`,
      ).toBe(true);
      const images = await page.locator("main img").evaluateAll((elements) =>
        elements.map((element) => {
          if (!(element instanceof HTMLImageElement)) return false;
          const bounds = element.getBoundingClientRect();
          // A deliberate object-fit: cover crop (the full-bleed technology image) is not a distortion.
          return (
            element.naturalWidth > 0 &&
            (getComputedStyle(element).objectFit === "cover" ||
              Math.abs(
                bounds.width / bounds.height -
                  element.naturalWidth / element.naturalHeight,
              ) < 0.02)
          );
        }),
      );
      expect(images).not.toContain(false);
      expect(
        await page
          .locator(".body-copy")
          .evaluateAll((elements) =>
            elements.every(
              (element) => parseFloat(getComputedStyle(element).fontSize) >= 16,
            ),
          ),
      ).toBe(true);
      if (path === "/technology") {
        expect(
          await page
            .locator(".technology-image img")
            .evaluate(
              (element) =>
                element instanceof HTMLImageElement && element.currentSrc,
            ),
        ).toContain(width >= 1100 ? "portrait" : "landscape");
      }
      await page.screenshot({
        path: `.test-state/screenshots/${name}-${width}.png`,
        fullPage: true,
      });
    }
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".explore")).toHaveCSS("transition-duration", "0s");
});

test("all eleven views retain image ratios and visible text at desktop transitions", async ({
  page,
}) => {
  for (const width of [1100, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const [path, name] of views) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const image = page.getByRole("img", { name, exact: true });
      expect(
        await image.evaluate((element) => {
          if (!(element instanceof HTMLImageElement)) return false;
          const bounds = element.getBoundingClientRect();
          return (
            getComputedStyle(element).objectFit === "cover" ||
            Math.abs(
              bounds.width / bounds.height -
                element.naturalWidth / element.naturalHeight,
            ) < 0.02
          );
        }),
        `${name} portrait at ${width}`,
      ).toBe(true);
      const title = await page
        .getByRole("heading", { name, exact: true })
        .boundingBox();
      expect(title).not.toBeNull();
      if (title) expect(title.x + title.width).toBeLessThanOrEqual(width);
      expect(
        await page
          .locator("main h1, main h2, main p, main a, main dt, main dd")
          .evaluateAll((elements) =>
            elements.every((element) => {
              const box = element.getBoundingClientRect();
              return (
                box.x >= 0 &&
                box.right <= innerWidth &&
                element.scrollWidth <= element.clientWidth + 1
              );
            }),
          ),
        `${name} readable at ${width}`,
      ).toBe(true);
    }
  }
});

test("narrow pointer hover states and interactive target sizes remain visible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 400, height: 850 });
  for (const path of ["/", "/destination", "/crew", "/technology"]) {
    await page.goto(path);
    const controls = page.locator("a:visible, summary:visible");
    for (const control of await controls.all()) {
      if ((await control.getAttribute("class")) === "skip-link") continue;
      const box = await control.boundingBox();
      expect(box).not.toBeNull();
      // 44 px everywhere, except the design's crew dots (26 px apart) and 40 px phone technology pager,
      // which meet the 24 px WCAG 2.5.8 floor.
      const small = await control.evaluate((element) => Boolean(element.closest(".crew-nav, .technology-nav")));
      const floor = small ? 24 : 44;
      if (box) {
        expect(box.width, await control.innerText()).toBeGreaterThanOrEqual(floor);
        expect(box.height, await control.innerText()).toBeGreaterThanOrEqual(floor);
      }
    }
  }
  const menu = page.locator(".mobile-menu summary");
  expect((await menu.boundingBox())!.width).toBeGreaterThanOrEqual(44);
  await menu.hover();
  await expect(menu).not.toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await menu.click();
  const home = page
    .locator(".mobile-menu nav")
    .getByRole("link", { name: "Home", exact: true });
  expect((await home.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await home.hover();
  await expect(home).toHaveCSS("border-right-color", "rgba(255, 255, 255, 0.5)");
  await page.keyboard.press("Escape");
  await page.locator(".logo").hover();
  await expect(page.locator(".logo")).toHaveCSS("outline-style", "solid");
});

// Frontend Mentor score, October 10: html-validate unique-landmark. The wide-screen links
// and the phone menu are both navigation landmarks, so they need different names.
test("navigation landmarks have unique names on every page", async ({ request }) => {
  for (const path of ["/", "/destination", "/crew", "/technology"]) {
    const html = await (await request.get(path)).text();
    const names = [...html.matchAll(/<nav\b[^>]*aria-label="([^"]+)"/g)].map((match) => match[1]);
    expect(names.length, path).toBeGreaterThanOrEqual(2);
    expect(new Set(names).size, `${path}: ${names.join(", ")}`).toBe(names.length);
  }
});
