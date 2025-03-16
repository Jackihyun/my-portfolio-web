import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), paths(), tailwindcss()],
});
