import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [
    ["list"],
    ["json", { outputFile: ".test-state/browser-results.json" }],
  ],
  use: {
    baseURL: "http://127.0.0.1:4391",
    channel: "chrome",
    trace: "off",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:4391",
    reuseExistingServer: false,
    timeout: 30000,
  },
});
