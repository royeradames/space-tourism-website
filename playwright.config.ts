import { defineConfig } from "@playwright/test";

const port = Number(process.env.PORT ?? 4391);
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 2,
  retries: 0,
  reporter: [
    ["list"],
    ["json", { outputFile: ".test-state/browser-results.json" }],
  ],
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    channel: "chrome",
    trace: "off",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: `npx next start --hostname 127.0.0.1 --port ${port}`,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: false,
    timeout: 30000,
  },
});
