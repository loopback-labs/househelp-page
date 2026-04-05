import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base =
  process.env.GITHUB_ACTIONS === "true" && repo
    ? repo.endsWith(".github.io")
      ? "/"
      : `/${repo}/`
    : "/";

export default defineConfig(() => ({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
