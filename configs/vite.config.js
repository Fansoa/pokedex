import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "../") }],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./configs/vitest/setup.js",
    coverage: {
      reporter: ["text"],
      reportsDirectory: "./configs/vitest/coverage/",
    },
  },
});
