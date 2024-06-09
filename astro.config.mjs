import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  image: {
    service: imageService({
      fallbackService: "sharp",
    }),
  },
  output: "server",
  adapter: cloudflare(),
});
