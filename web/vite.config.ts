import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgProps: {
          fill: "currentColor",
        },
      },
    }),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@svg",
        replacement: resolve(__dirname, "./src/assets/svg"),
      },
      {
        find: "@icons",
        replacement: resolve(__dirname, "./src/assets/svg/icons/"),
      },
    ],
  },
});
