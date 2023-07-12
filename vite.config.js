import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "src/main.ts",
        brexit: "src/brexit.ts",
        "index.html": "index.html",
      },
    },
  },
});
