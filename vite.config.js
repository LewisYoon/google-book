import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/google-book/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./config/test-setup.js",
  },
});
