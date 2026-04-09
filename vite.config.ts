import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base =
  process.env.GITHUB_ACTIONS === "true" && repo
    ? repo.endsWith(".github.io")
      ? "/"
      : `/${repo}/`
    : "/";

const gaMeasurementId = process.env.VITE_GA_MEASUREMENT_ID?.trim();

export default defineConfig(() => ({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: "inject-google-analytics",
      transformIndexHtml(html) {
        if (!gaMeasurementId) return html;
        const snippet = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "${gaMeasurementId}", { send_page_view: false });
    </script>`;
        return html.replace("</head>", `${snippet}\n  </head>`);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
