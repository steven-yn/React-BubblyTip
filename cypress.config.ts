import { defineConfig } from "cypress";
import { devServer } from "@cypress/vite-dev-server";

export default defineConfig({
  video: false,
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  nodeVersion: "system",
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        viteConfig: require("./vite.config.ts"),
      });
    },
  },
});
